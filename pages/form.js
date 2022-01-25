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
import { db } from "../Firebase/auth";
import { useAuth } from "../contexts/AuthenticationContext";
import { doc, setDoc, getDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import gabarito from "../scripts/respostas";

const replacePergunta = (perguntas, id, newValue) => {
  perguntas[id] = { resposta: newValue, cabecalho: gabarito.cabecalho[id] };
  return perguntas;
};

export default function CadastroForm() {
  const { authUser, loading } = useAuth();
  const [loadingOldData, setloadingolddata] = useState(true);
  const [dadosAnteriores, setdadosanteriores] = useState({
    perguntas: {},
    pleitos: {},
  });
  const [dados, setdados] = useState({ ano: 2020, perguntas: {}, pleitos: {} });
  const [score, setscore] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (!authUser && !loading) router.push("/");
  }, [authUser, loading, router]);

  useEffect(() => {
    if (!authUser) return false;
    async function fetchDadosAnteriores() {
      const dadosCadastrados = collection(db, "dadosCadastrados");
      const dadosCadRef = doc(dadosCadastrados, authUser.municipio);
      const dadosSnap = await getDoc(dadosCadRef);
      if (dadosSnap.exists()) {
        setdadosanteriores(dadosSnap.data());
      }
      setloadingolddata(false);
    }
    fetchDadosAnteriores();
  }, [authUser]);

  useEffect(() => {
    setscore(pontuacao(dados));
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
    async function cadastrarFirestore() {
      await setDoc(doc(db, "dadosCadastrados", authUser.municipio), {
        ano: dados.ano,
        municipio: authUser.municipio,
        funcionario: authUser.nome,
        data: new Date().toLocaleString("pt-BR"),
        perguntas: { ...dados.perguntas },
        pleitos: { ...dados.pleitos },
      });
      window.location.href = "/cadastro#sucesso";
    }
    cadastrarFirestore();
  };

  if (loading) return <div>Carregando...</div>;
  if (!authUser) return <div>Não autorizado</div>;
  if (loadingOldData) return <div>Carregando...</div>;
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
