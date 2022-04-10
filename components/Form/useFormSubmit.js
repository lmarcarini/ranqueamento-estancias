import { useState } from "react";
import { db } from "../../Firebase/auth";
import { storage } from "../../Firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function useFormSubmit() {
  const [submitState, setSubmitState] = useState("false");
  const [submitProgress, setSubmitProgress] = useState("stop");

  const uploadFile = async ([codigo, file], ano, municipio) => {
    const storageRef = ref(storage, `temp/${municipio}_${ano}_${codigo}`);
    const snapshot = await uploadBytes(storageRef, file);
    let url = await getDownloadURL(snapshot.ref);
    return { codigo: codigo.match(/(?<=_).*/), url: url };
  };

  const handleSend = async (authUser, dados, filesToUpload) => {
    setSubmitState("sending");
    setSubmitProgress("files");
    const resultado = await Promise.all(
      filesToUpload.map(async (file) =>
        uploadFile(file, dados.ano, dados.municipio)
      )
    );
    let dadosParaEnvio = { ...dados };
    resultado.forEach(
      ({ codigo, url }) => (dadosParaEnvio.perguntas[codigo]["url"] = url)
    );
    console.log(dadosParaEnvio);
    setSubmitProgress("database");
    await setDoc(
      doc(db, "dadosCadastrados", authUser.municipio),
      dadosParaEnvio
    );
    setSubmitProgress("done");
    setSubmitState("done");
  };

  return [handleSend, submitState, submitProgress];
}
