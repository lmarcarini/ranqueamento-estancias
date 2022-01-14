import { createContext, useContext } from "react";

//Ciclos para o App
//cadastroAberto, apreciacaoCadastro, recursosAberto, apreciacaoResursos, resultados
const cicloContext = createContext({ ciclo: "cadastroAberto" });

export const CicloProvider = ({ children }) => {
  const ciclo = { ciclo: "cadastroAberto" };
  return (
    <cicloContext.Provider value={ciclo}>{children}</cicloContext.Provider>
  );
};

export const useCiclo = () => useContext(cicloContext);
