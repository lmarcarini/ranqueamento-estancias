import { db } from "../Firebase/auth";
import { collection, getDocs, writeBatch, doc } from "firebase/firestore";
import { useState } from "react";
import pontuacao from "../scripts/pontuacao";
import perguntas from "../scripts/perguntas";

const useDivulgar = () => {
  const [divulgando, setDivulgando] = useState(false);
  //function to get all docs from a collection
  const getAllDocs = async (collectionName) => {
    const collectionRef = collection(db, collectionName);
    const docs = await getDocs(collectionRef);
    return docs.docs.map((doc) => {
      let data = doc.data();
      data.id = doc.id;
      data.pontuacao = pontuacao(data);
      return data;
    });
  };

  //transaction to read create and delete docs from a collection to another
  const transaction = async (
    originCollection,
    destinationCollection,
    array
  ) => {
    const batch = writeBatch(db);
    array.forEach((data) => {
      batch.set(
        doc(db, destinationCollection, data.municipio + "_" + data.ano),
        data
      );
    });
    array.forEach((data) => {
      batch.delete(doc(db, originCollection, data.id));
    });
    const sorted = array.sort((a, b) => {
      a.pontuacao - b.pontuacao;
    });
    const ranqueamentoArray = sorted.map((data, i) => {
      return {
        nome: data.municipio,
        ano: data.ano,
        pontuacao: data.pontuacao,
        posicao: i + 1,
      };
    });
    const ranqueamentoDoc = doc(db, "ranqueamento", perguntas.ano.toString());
    const ranqueamentoYear = { ano: perguntas.ano };
    batch.set(ranqueamentoDoc, ranqueamentoYear);
    ranqueamentoArray.forEach((data) => {
      batch.set(
        doc(
          db,
          "ranqueamento",
          data.ano.toString(),
          "municipios",
          data.municipio
        ),
        data
      );
    });
    return await batch.commit();
  };

  const divulgar = async () => {
    setDivulgando(true);
    const dados = await getAllDocs("dadosCadastrados");
    await transaction("dadosCadastrados", "cadastrosAnteriores", dados);
    setDivulgando(false);
    alert("Divulgação realizada com sucesso!");
  };

  return [divulgar, divulgando];
};

export default useDivulgar;
