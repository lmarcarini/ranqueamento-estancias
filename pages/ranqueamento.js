import { useState } from "react";
import Container from "react-bootstrap/Container";
import TabelaMunicipios from "../components/TabelaMunicipios";

export default () => {
  const [municipios, setmunicipios] = useState([
    { posicao: 1, nome: "Tupa", pontuacao: 70 },
    { posicao: 2, nome: "Barretos", pontuacao: 60 },
  ]);

  return (
    <Container className="mt-3">
      <h4 style={{ textAlign: "center" }}>Ranqueamento ano 2022</h4>
      <TabelaMunicipios listaMunicipios={municipios}></TabelaMunicipios>
    </Container>
  );
};
