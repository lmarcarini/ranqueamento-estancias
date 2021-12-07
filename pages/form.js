import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import NavBar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import SectionA from "../components/Form/SectionA";
import SectionB from "../components/Form/SectionB";
import SectionC from "../components/Form/SectionC";
import { useEffect, useState } from "react";
import pontuacao from "../scripts/pontuacao";

export default function form() {
  const [dados, setdados] = useState({ ano: 2020, respostas: {}, pleitos: {} });
  const [score, setscore] = useState(0);

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
        respostas: { ...dados.respostas, [e.target.name]: [e.target.value] },
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
      <Form onChange={handleChange}>
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
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Container>
        </NavBar>
      </Form>
    </Container>
  );
}
