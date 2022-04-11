import { db } from "./auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const useGetCiclo = () => {
  const [ciclo, setCiclo] = useState("fechado");

  useEffect(() => {
    const getCiclo = async () => {
      let configuracaoRef = doc(db, "configuracao", "configuracao");
      const querySnapshot = await getDoc(configuracaoRef);
      let cadastroState = querySnapshot.data();
      setCiclo(cadastroState.cadastro);
    };
    getCiclo();
  }, []);

  return { ciclo };
};

export default useGetCiclo;
