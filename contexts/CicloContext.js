import { createContext, useContext } from "react";
import useGetCiclo from "../Firebase/useGetCiclo";

//Ciclos para o App
//cadastroAberto, apreciacaoCadastro, recursosAberto, apreciacaoResursos, resultados
const cicloContext = createContext({ ciclo: "aberto" });

export const CicloProvider = ({ children }) => {
  const ciclo = useGetCiclo();
  return (
    <cicloContext.Provider value={ciclo}>{children}</cicloContext.Provider>
  );
};

export const useCiclo = () => useContext(cicloContext);
