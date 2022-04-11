//custom hook to get data Cadastros from firebase
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  getDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Firebase/auth";

export default function useCadastros() {
  const [cadastros, setCadastros] = useState([]);

  useEffect(async () => {
    let cadastrosRef = collection(db, "dadosCadastrados");
    const querySnapshot = await getDocs(cadastrosRef);
    let municipios = querySnapshot.docs.map((doc) => doc.data());
    setCadastros(municipios);
  }, []);

  return cadastros;
}

export function useCadastro(id) {
  const [cadastro, setCadastro] = useState(null);

  useEffect(async () => {
    let cadastrosRef = collection(db, "dadosCadastrados");
    const querySnapshot = await getDocs(cadastrosRef);
    let municipios = querySnapshot.docs.map((doc) => doc.data());
    setCadastro(municipios.find((municipio) => municipio.municipio === id));
  }, [id]);

  return cadastro;
}

export function useCadastroState() {
  const [cadastroState, setCadastroState] = useState(null);

  useEffect(async () => {
    let configuracaoRef = doc(db, "configuracao", "configuracao");
    const querySnapshot = await getDoc(configuracaoRef);
    let cadastroState = querySnapshot.data();
    setCadastroState(cadastroState.cadastro);
  }, []);

  const handleChangeCadastroState = (e) => {
    let newState = e.target.checked === true ? "aberto" : "fechado";
    setCadastroState(newState);
    let configuracaoRef = doc(db, "configuracao", "configuracao");
    updateDoc(configuracaoRef, { cadastro: newState });
  };

  return [cadastroState, handleChangeCadastroState];
}
