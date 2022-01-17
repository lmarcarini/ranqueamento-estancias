import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import TabelaMunicipios from "../components/TabelaMunicipios";

export default () => {
  const [anos, setAnos] = useState([2021, 2020, 2019]);
  const [municipios, setmunicipios] = useState([
    { posicao: 1, nome: "Tupa", pontuacao: 70 },
    { posicao: 2, nome: "Barretos", pontuacao: 60 },
  ]);

  const [anoSelecionado, setAnoSelecionado] = useState(null);
  const selecaoAno = (e) => {
    setAnoSelecionado(e.target.value);
  };

  return (
    <Container className="mt-3">
      <Form.Select
        aria-label="Selecione a ano do ranqueamento:"
        id="ano"
        onChange={selecaoAno}
      >
        <option>Selecione o ano do ranqueamento</option>
        {anos.map((ano) => (
          <option value={ano}>{ano}</option>
        ))}
      </Form.Select>
      {anoSelecionado && (
        <TabelaMunicipios listaMunicipios={municipios}></TabelaMunicipios>
      )}
    </Container>
  );
};
