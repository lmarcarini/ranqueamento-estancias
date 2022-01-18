import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import SectionA from "../components/Form/SectionA";
import SectionB from "../components/Form/SectionB";
import SectionC from "../components/Form/SectionC";
import { useEffect, useState } from "react";
import pontuacao from "../scripts/pontuacao";
import ConfirmacaodeEnvio from "../components/Form/ConfirmacaodeEnvio";
import gabarito from "../scripts/respostas.json";
import dadosAnteriores from "../scripts/mock2.json";

const replacePergunta = (perguntas, id, newValue) => {
  let i = perguntas.findIndex((data) => id === data.id);
  if (i === -1) return [...perguntas, { id: id, resposta: newValue }];
  return perguntas.map((data) =>
    id === data.id ? { id: id, resposta: newValue } : data
  );
};

const carregarPerguntas = (respostas, ano, dadosAnteriores) => ({
  ano: ano,
  perguntas: Object.keys(respostas).map((id) => ({
    id: id,
    resposta:
      dadosAnteriores?.perguntas.find((p) => p.id === id)?.resposta || "",
  })),
  pleitos: dadosAnteriores?.pleitos || [],
});

export default function CadastroForm() {
  const [dados, setdados] = useState({ ano: 2020, perguntas: [], pleitos: [] });
  const [score, setscore] = useState(0);

  useEffect(() => {
    setdados(
      carregarPerguntas(gabarito.respostas, gabarito.ano, dadosAnteriores)
    );
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

  const [show, setshow] = useState(false);

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow();
  };

  const handleSend = () => {
    window.location.href = "/cadastro#sucesso";
  };

  return (
    <Container style={{ paddingBottom: "70px" }}>
      <Form onChange={handleChange} id="dados" onSubmit={handleSubmit}>
        <Nav className="justify-content-center">
          <a className="nav-link" href="#secaoA">
            Legislação
          </a>
          <a className="nav-link" href="#secaoB">
            Pleitos
          </a>
          <a className="nav-link" href="#secaoC">
            Requisitos
          </a>
        </Nav>

        <hr />
        <SectionA id="secaoA" dadosAnteriores={dadosAnteriores} />
        <hr />
        <SectionB
          id="secaoB"
          excluirPleito={excluirPleito}
          dadosAnteriores={dadosAnteriores}
        />
        <hr />
        <SectionC id="secaoC" dadosAnteriores={dadosAnteriores} />

        <NavBar fixed="bottom" bg="dark" variant="dark">
          <Container>
            <Form.Label className="lead" style={{ color: "white" }}>
              Pontuação prévia: {score}/100
            </Form.Label>
            <ConfirmacaodeEnvio
              handleClose={handleClose}
              show={show}
              handleSend={handleSend}
            />
            <Button type="submit">Enviar</Button>
          </Container>
        </NavBar>
      </Form>
    </Container>
  );
}
