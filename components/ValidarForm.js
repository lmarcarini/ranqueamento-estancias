import mockData from "../scripts/mock2.json";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import PleitosListValidacao from "./Validacao/PleitosListValidacao";
import RespostasListValidacao from "./Validacao/RespostasListValidacao";

export default ({
  dados = { municipio: "Carregando", pleitos: "", perguntas: "" },
}) => {
  const [dadosValidados, setDadosValidados] = useState({});

  useEffect(() => {
    setDadosValidados({ ...mockData });
  }, [mockData]);

  useEffect(() => {
    console.log(dadosValidados);
  }, [dadosValidados]);

  const handleValidacao = (id, opcao, justificativa) => {
    let perguntas = dadosValidados.perguntas;
    let i = perguntas.findIndex((p) => p.id === id);
    perguntas[i]["validacao"] = opcao;
    perguntas[i]["justificativa"] = justificativa;
    setDadosValidados({ ...dadosValidados, perguntas: perguntas });
  };

  const handleValidacaoPleito = (
    tipoValidado,
    situacaoValidado,
    justificativa,
    i
  ) => {
    let pleitos = dadosValidados.pleitos;
    pleitos[i]["tipoValidado"] = tipoValidado;
    pleitos[i]["justificativa"] = justificativa;
    pleitos[i]["situacaoValidado"] = situacaoValidado;
    setDadosValidados({ ...dadosValidados, pleitos: pleitos });
  };

  //TODO
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form>
      <p>
        <b>Município:</b> {dados.municipio}
      </p>
      <p>
        <b>Ano:</b> {mockData.ano}
      </p>
      <RespostasListValidacao
        perguntas={mockData.perguntas}
        handleValidacao={handleValidacao}
      />
      <PleitosListValidacao
        pleitos={mockData.pleitos}
        handleValidacaoPleito={handleValidacaoPleito}
      />
      <Button onClick={handleSubmit}>Registrar alterações</Button>
    </Form>
  );
};
