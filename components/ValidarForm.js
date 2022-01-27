import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import PleitosListValidacao from "./Validacao/PleitosListValidacao";
import RespostasListValidacao from "./Validacao/RespostasListValidacao";
import Container from "react-bootstrap/Container";
import { useAuth } from "../contexts/AuthenticationContext";
import { db } from "../Firebase/auth";
import { setDoc, collection, doc } from "firebase/firestore";

export default function ValidarForm({
  dados = {
    ano: "carregando",
    municipio: "Carregando",
    pleitos: {},
    perguntas: {},
  },
}) {
  const { authUser } = useAuth();
  const [dadosValidados, setDadosValidados] = useState({});

  useEffect(() => {
    setDadosValidados({ ...dados });
  }, []);

  const handleValidacao = (id, justificativa, opcao) => {
    let perguntas = dadosValidados.perguntas;
    perguntas[id]["validacao"] = opcao;
    perguntas[id]["justificativa"] = justificativa;
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
    let dadosAEnviar = { ...dados };
    dadosAEnviar["validado"] === "verdadeiro";
    dadosAEnviar["validadoPor"] === authUser.nome;
    dadosAEnviar["validadoEm"] === new Date().toLocaleString("pt-BR");
    const enviarValidacao = async () => {
      let cadastrosRef = collection(db, "dadosCadastrados");
      await setDoc(doc(cadastrosRef, dados.municipio), dadosAEnviar);
      alert("Dados enviados com sucesso!");
    };
    enviarValidacao();
  };

  return (
    <Container className="mt-3 border">
      <p>
        <b>Município:</b> {dados.municipio}
      </p>
      <p>
        <b>Ano:</b> {dados.ano}
      </p>
      <hr />
      <RespostasListValidacao
        perguntas={dados.perguntas}
        handleValidacao={handleValidacao}
      />
      <hr />
      <PleitosListValidacao
        pleitos={dados.pleitos}
        handleValidacaoPleito={handleValidacaoPleito}
      />
      <hr />
      <Button onClick={handleSubmit} className="mb-3">
        Registrar alterações
      </Button>
    </Container>
  );
}
