import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default (params) => {
  const [pleitos, setpleitos] = useState([]);

  const adicionarPleito = () => {
    setpleitos([...pleitos, {}]);
  };

  return (
    <>
      {pleitos.map(() => (
        <>
          <Form.Label>Nome do pleito:</Form.Label>
          <Form.Control type="text"></Form.Control>
          <Form.Label>Valor do pleito (R$):</Form.Label>
          <Form.Control type="number"></Form.Control>
          <Form.Label>Situação:</Form.Label>
          <Form.Select aria-label="Selecione a situação">
            <option>Selecione a situação do pleito:</option>
            <option value="obra finalizada">obra finalizada</option>
            <option value="obra em andamento">obra em andamento</option>
            <option value="obra não iniciada">obra não iniciada</option>
          </Form.Select>
          <Form.Label>Tipo do pleito:</Form.Label>
          <Form.Select aria-label="Selecione a situação">
            <option>Selecione o tipo do pleito:</option>
            <option value="Atrativo natural e/ou cultural">
              Atrativo natural e/ou cultural
            </option>
            <option value="Infraestrutura turística">
              Infraestrutura turística
            </option>
            <option value="Infraestrutura de apoio">
              Infraestrutura de apoio
            </option>
            <option value="Infraestrutura de apoio">
              Infraestrutura de apoio
            </option>
            <option value="Infraestrutura de apoio">
              Infraestrutura de apoio
            </option>
          </Form.Select>
        </>
      ))}

      <Button onClick={adicionarPleito}>Adicionar novo pleito</Button>
    </>
  );
};