//get resultados from firebase of a municipality
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/auth";
import { useState, useEffect } from "react";

export default function useResultados(id) {
  const [dadosAnteriores, setDadosAnteriores] = useState([]);
  const [anos, setAnos] = useState([]);

  useEffect(async () => {
    if (!id) return false;
    let resultadosRef = collection(db, "cadastrosAnteriores");
    let q = query(resultadosRef, where("municipio", "==", id));
    const querySnapshot = await getDocs(q);
    let resultados = querySnapshot.docs.map((doc) => doc.data());
    setDadosAnteriores(resultados);
    setAnos(resultados.map((doc) => doc.ano));
  }, [id]);

  if (!id) return { dadosAnteriores: [], anos: [] };
  return { dadosAnteriores, anos };
}
