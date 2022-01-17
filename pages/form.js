import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import NavBar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import SectionA from "../components/Form/SectionA";
import SectionB from "../components/Form/SectionB";
import SectionC from "../components/Form/SectionC";
import { useEffect, useState } from "react";
import pontuacao from "../scripts/pontuacao";
import ConfirmacaodeEnvio from "../components/Form/ConfirmacaodeEnvio";
import gabarito from "../scripts/respostas.json";

const replacePergunta = (perguntas, id, newValue) => {
  let i = perguntas.findIndex((data) => id === data.id);
  if (i === -1) return [...perguntas, { id: id, resposta: newValue }];
  return perguntas.map((data) =>
    id === data.id ? { id: id, resposta: newValue } : data
  );
};

const carregarPerguntas = (respostas, ano) => ({
  ano: ano,
  perguntas: Object.keys(respostas).map((id) => {
    return { id: id, resposta: "" };
  }),
});

export default function form() {
  const [dados, setdados] = useState({ ano: 2020, perguntas: [], pleitos: [] });
  const [score, setscore] = useState(0);

  useEffect(() => {
    setdados(carregarPerguntas(gabarito.respostas, gabarito.ano));
  }, []);

  useEffect(() => {
    setscore(pontuacao(dados));
    console.log(dados);
  }, [dados]);

  const addPleito = (pleito) => {
    setdados({
      ...dados,
      pleitos: {
        ...dados.pleitos,
        [pleito.id.slice(1)]: {
          nome: pleito.querySelector("#nome").value,
          valor: pleito.querySelector("#valor").value,
          situacao: pleito.querySelector("#situacao").value,
          tipo: pleito.querySelector("#tipo").value,
        },
      },
    });
  };

  const handleChange = (e) => {
    if (e.target.type === "radio")
      setdados({
        ...dados,
        perguntas: replacePergunta(
          dados.perguntas,
          e.target.name,
          e.target.value
        ),
      });
    else {
      let pleito = e.target.parentNode;
      if (pleito.id.charAt(0) === "b") addPleito(pleito);
    }
  };

  const excluirPleito = (id) => {
    let copyDados = { ...dados };
    delete copyDados.pleitos[id];
    setdados(copyDados);
  };

  return (
    <Container style={{ paddingBottom: "70px" }}>
      <Form onChange={handleChange} id="dados">
        <Tabs defaultActiveKey="sectionA" id="form">
          <Tab eventKey="sectionA" title="Atendimento à Legislação">
            <SectionA />
          </Tab>
          <Tab eventKey="sectionB" title="Pleitos">
            <SectionB excluirPleito={excluirPleito} />
          </Tab>
          <Tab eventKey="sectionC" title="Requisitos">
            <SectionC />
          </Tab>
        </Tabs>
        <NavBar fixed="bottom" bg="dark" variant="dark">
          <Container>
            <Form.Label className="lead" style={{ color: "white" }}>
              Pontuação prévia: {score}/100
            </Form.Label>
            <ConfirmacaodeEnvio />
          </Container>
        </NavBar>
      </Form>
    </Container>
  );
}
