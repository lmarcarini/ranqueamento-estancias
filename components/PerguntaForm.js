import { useState } from "react";
import Form from "react-bootstrap/Form";
import InfoIcon from "./InfoIcon";

export default function PerguntaForm({ cabecalho, codigo, opcoes, info }) {
  const [fileIsShown, setfileIsShown] = useState(false);
  const toggleFile = (e) => {
    setfileIsShown(
      e.target.id !== "" && opcoes[e.target.id.match(/(?<=_).*$/)[0]].file
    );
  };

  return (
    <Form.Group className="mb-3" controlId="formA1" onChange={toggleFile}>
      <Form.Label>{cabecalho}</Form.Label>
      <InfoIcon>{info}</InfoIcon>
      {opcoes.map((opcao, i) => (
        <Form.Check
          type="radio"
          key={i}
          file={opcao.file.toString()}
          id={codigo + "_" + i}
          name={codigo}
          label={opcao.value}
          value={opcao.value}
        />
      ))}

      {fileIsShown && <Form.Control type="file" />}
    </Form.Group>
  );
}
