import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import VisualizadorDados from "../components/VisualizadorDados";
import { useState } from "react";

export default () => {
  const [anos, setAnos] = useState([2021, 2020, 2019]);
  const [anoSelecionado, setAnoSelecionado] = useState(null);
  const selecaoAno = (e) => {
    setAnoSelecionado(e.target.value);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Form.Select
          aria-label="Selecione o ano:"
          id="ano"
          onChange={selecaoAno}
        >
          <option>Selecione o ano do ranqueamento</option>
          {anos.map((ano) => (
            <option value={ano}>{ano}</option>
          ))}
        </Form.Select>
      </Row>
      <Row>{anoSelecionado && <VisualizadorDados />}</Row>
    </Container>
  );
};
