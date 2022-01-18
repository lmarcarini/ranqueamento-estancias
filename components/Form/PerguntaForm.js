import { useState } from "react";
import Form from "react-bootstrap/Form";
import InfoIcon from "./InfoIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PerguntaForm({
  cabecalho,
  codigo,
  opcoes,
  info,
  resposta,
}) {
  const [fileIsShown, setfileIsShown] = useState(false);
  const toggleFile = (e) => {
    setfileIsShown(
      e.target.id !== "" && opcoes[e.target.id.match(/(?<=_)[^_]*$/)[0]].file
    );
  };

  const [validated, setValidated] = useState("false");

  return (
    <>
      <Form.Group
        validated={validated}
        className="mb-3"
        controlId="formA1"
        onChange={toggleFile}
      >
        <Form.Label>{cabecalho}</Form.Label>
        <InfoIcon>{info}</InfoIcon>
        {opcoes.map((opcao, i) => (
          <Row key={i}>
            <Col md="auto">
              <Form.Check
                type="radio"
                file={opcao.file.toString()}
                id={codigo + "_" + i}
                name={codigo}
                label={opcao.value}
                value={opcao.value}
                defaultChecked={opcao.value === resposta}
                required
              />{" "}
            </Col>
            <Col style={{ color: "grey" }}>
              <i>
                {" " +
                  opcao.pontuacao +
                  "    ponto" +
                  (opcao.pontuacao === "1" ? "" : "s")}
              </i>
            </Col>
          </Row>
        ))}
      </Form.Group>
      {fileIsShown && (
        <Row className="mb-3">
          <Form.Control type="file" required />
        </Row>
      )}
    </>
  );
}
