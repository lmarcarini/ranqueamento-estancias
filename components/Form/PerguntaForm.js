import { useState } from "react";
import Form from "react-bootstrap/Form";
import InfoIcon from "./InfoIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UploadFileInterface from "./UploadFileInterface";

export default function PerguntaForm({
  cabecalho,
  codigo,
  opcoes,
  info,
  resposta,
}) {
  const [file, setFile] = useState(null);
  const [fileIsShown, setfileIsShown] = useState(false);
  const toggleFile = (e) => {
    setfileIsShown(
      e.target.id !== "" && opcoes[e.target.id.match(/(?<=_)[^_]*$/)[0]].file
    );
  };

  const handleSetFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <Form.Group
        validated="false"
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
          <Form.Control
            type="file"
            name={"file_" + codigo}
            id={"file_" + codigo}
            onChange={handleSetFile}
            accept=".pdf"
            required
          />
        </Row>
      )}
    </>
  );
}
