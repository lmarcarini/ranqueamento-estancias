//custom hook to get data Municipios from firebase
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/auth";

export default function useMunicipios() {
  const [municipios, setMunicipios] = useState([]);

  useEffect(async () => {
    let municipiosRef = collection(db, "municipios");
    const querySnapshot = await getDocs(municipiosRef);
    let municipios = querySnapshot.docs.map((doc) => doc.data());
    setMunicipios(municipios);
  }, []);

  return municipios;
}
