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
import { storage } from "../Firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function CadastroForm() {
  const { authUser, loading } = useAuth();
  const [loadingOldData, setloadingolddata] = useState(true);
  const [dadosAnteriores, setdadosanteriores] = useState({
    perguntas: {},
    pleitos: {},
  });
  const [dados, setdados] = useState({ ano: 2022, perguntas: {}, pleitos: {} });
  const [filesToUpload, setFilesToUpload] = useState([]);
  const [score, setscore] = useState(0);

  const router = useRouter();

  //Carrega Último cadastro
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

  //firstload score
  useEffect(() => {
    if (loadingOldData) return null;
    let form = document.getElementById("dados");
    if (form) setdados(formatDados(form));
  }, [loadingOldData, dadosAnteriores]);

  //Update score
  useEffect(() => {
    setscore(pontuacao(dados));
  }, [dados]);

  //format Dados
  const formatDados = (form) => {
    const data = Object.fromEntries(new FormData(form).entries());
    return {
      ano: dados.ano,
      municipio: authUser.municipio,
      funcionario: authUser.nome,
      data: new Date().toLocaleString("pt-BR"),
      perguntas: Object.entries(data).reduce((acc, [codigo, resposta]) => {
        if (codigo[0] === "a" || codigo[0] === "c")
          acc[codigo] = {
            resposta: resposta,
            cabecalho: gabarito.cabecalho[codigo],
          };
        return acc;
      }, {}),
      pleitos: Object.entries(data)
        .filter((x) => /^pleito/.test(x))
        .reduce((pleitos, [x, value]) => {
          let [_, type, codigo] = x.split("_");
          if (!pleitos[codigo]) pleitos[codigo] = {};
          pleitos[codigo][type] = value;
          return pleitos;
        }, {}),
    };
  };

  const handleChange = (e) => {
    let form = e.target.form;
    setdados(formatDados(form));
  };

  const uploadFile = async ([codigo, file]) => {
    const storageRef = ref(storage, `temp/${codigo}`);
    const snapshot = await uploadBytes(storageRef, file);
    let url = await getDownloadURL(snapshot.ref);
    return { codigo: codigo.split("_")[1], url: url };
  };

  //Lida com o envio do cadastro
  const [show, setshow] = useState(false);
  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    const data = Array.from(new FormData(form).entries());
    setFilesToUpload(data.filter(([name, _]) => name.split("_")[0] === "file"));
    handleShow();
  };
  const handleSend = () => {
    async function cadastrarFirestore() {
      const resultado = await Promise.all(
        filesToUpload.map(async (file) => uploadFile(file))
      );
      let dadosParaEnvio = { ...dados };
      resultado.forEach(
        ({ codigo, url }) => (dadosParaEnvio.perguntas[codigo]["url"] = url)
      );
      console.log(dadosParaEnvio);
      await setDoc(
        doc(db, "dadosCadastrados", authUser.municipio),
        dadosParaEnvio
      );
      window.location.href = "/cadastro#sucesso";
      console.log("sucesso");
    }
    cadastrarFirestore();
  };

  //handle redirects
  useEffect(() => {
    if (!authUser && !loading) router.push("/");
  }, [authUser, loading, router]);
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
        <SectionB id="secaoB" dadosAnteriores={dadosAnteriores} />
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
