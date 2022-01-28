import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import EditConta from "../components/GerirContas/EditConta";
import ListaContas from "../components/GerirContas/ListaContas";
import { useAuth } from "../contexts/AuthenticationContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { db } from "../Firebase/auth";
import { collection, getDocs } from "firebase/firestore";

export default function GerenciarUsuarios() {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  const [contas, setContas] = useState();
  const [contaSelecionada, setContaSelecionada] = useState(null);

  const [loadingUsuarios, setLoadingUsuarios] = useState(true);
  //Carrega Último cadastro
  useEffect(() => {
    if (!authUser) return false;
    async function fetchUsuarios() {
      const usuariosRef = collection(db, "users");
      const usuariosSnap = await getDocs(usuariosRef);
      setContas(
        usuariosSnap.docs
          .map((user) => user.data())
          .filter((user) => user.tipo !== "admin")
      );
      setLoadingUsuarios(false);
    }
    fetchUsuarios();
  }, [authUser]);

  const handleAdicionar = (e) => {
    e.preventDefault();
    setContaSelecionada({ email: "", nome: "", tipo: "", uid: null });
  };

  const handleSelect = (conta) => setContaSelecionada(conta);
  const handleVoltar = (e) => {
    e.preventDefault();
    setContaSelecionada(null);
  };

  //handle redirects
  useEffect(() => {
    if (!authUser && !loading) router.push("/");
  }, [authUser, loading, router]);
  if (loading) return <div>Carregando...</div>;
  if (!authUser || authUser.tipo !== "admin") return <div>Não autorizado</div>;
  return (
    <Container className="mt-3 mb-3">
      {!contaSelecionada ? (
        <>
          <div className="mb-3">
            <Button onClick={handleAdicionar}>
              <FontAwesomeIcon
                icon={faPlus}
                style={{ width: "18px", marginLeft: "5px" }}
              ></FontAwesomeIcon>{" "}
              Adicionar Usuário
            </Button>
          </div>
          <ListaContas handleSelect={handleSelect} contas={contas} />
        </>
      ) : (
        <>
          <div className="mb-3">
            <Button onClick={handleVoltar} variant="secondary">
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ width: "18px", marginLeft: "5px" }}
              ></FontAwesomeIcon>{" "}
              Voltar
            </Button>
          </div>
          <Row>
            <EditConta conta={contaSelecionada} />
          </Row>
        </>
      )}
    </Container>
  );
}
