import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InfoIcon from "./InfoIcon";

export default function SectionB({ id, dadosAnteriores }) {
  const [pleitos, setpleitos] = useState([]);
  const [nPleitos, setnPleitos] = useState(0);

  const adicionarPleito = () => {
    setpleitos([...pleitos, { id: nPleitos }]);
    setnPleitos(nPleitos + 1);
  };

  useEffect(() => {
    setpleitos(
      Object.entries(dadosAnteriores.pleitos).map(([key, pleito], i) => ({
        ...pleito,
        id: i,
      }))
    );
    setnPleitos(dadosAnteriores.pleitos.length || 0);
  }, [dadosAnteriores.pleitos]);

  const excluir = (e) => {
    let id = e.target.id;
    let tempPleitos = [...pleitos];
    tempPleitos.splice(id, 1);
    setpleitos(tempPleitos);
  };

  return (
    <>
      <h4 id={id}>Pleitos</h4>
      {pleitos.map(
        ({ id, nome = "", situacao = "", tipo = "", valor = 0 }, i) => (
          <Form.Group className="mb-4" id={i} key={id}>
            <h5>Pleito:</h5>

            <Form.Label>Nome do pleito:</Form.Label>
            <Form.Control
              type="text"
              id="nome"
              name={"pleito_nome_" + i}
              defaultValue={nome}
              required
            ></Form.Control>
            <Form.Label>Valor do pleito (R$):</Form.Label>
            <Form.Control
              type="number"
              id="valor"
              name={"pleito_valor_" + i}
              defaultValue={valor}
              required
            ></Form.Control>
            <Form.Label>
              Situação: <InfoIcon />
            </Form.Label>
            <Form.Select
              aria-label="Selecione a situação"
              id="situacao"
              defaultValue={situacao}
              name={"pleito_situacao_" + i}
              required
            >
              <option>Selecione a situação do pleito:</option>
              <option value="obra finalizada">obra finalizada</option>
              <option value="obra em andamento">obra em andamento</option>
              <option value="obra não iniciada">obra não iniciada</option>
            </Form.Select>
            <Form.Label>
              Tipo do pleito: <InfoIcon />
            </Form.Label>
            <Form.Select
              aria-label="Selecione a situação"
              id="tipo"
              defaultValue={tipo}
              name={"pleito_tipo_" + i}
              required
            >
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
            <Button onClick={excluir} id={i} className="mt-2" variant="danger">
              Excluir Pleito
            </Button>
          </Form.Group>
        )
      )}

      <Button onClick={adicionarPleito} className="mt-2">
        Adicionar novo pleito
      </Button>
    </>
  );
}
