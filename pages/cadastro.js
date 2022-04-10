import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import VisualizadorDados from "../components/VisualizadorDados";
import { useEffect, useState } from "react";
import DadosEnviadosModal from "../components/DadosEnviadosModal";
import { useCiclo } from "../contexts/CicloContext";
import FormContainer from "../components/Form/FormContainer";
import { useAuth } from "../contexts/AuthenticationContext";
import { useRouter } from "next/router";
import { db } from "../Firebase/auth";
import { doc, getDoc, collection } from "firebase/firestore";

export default function Cadastro() {
  const { authUser, loading } = useAuth();
  const { router } = useRouter();
  const [dadosEnviados, setDadosEnviados] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const { ciclo } = useCiclo();

  useEffect(() => {
    const abortController = new AbortController();
    if (!authUser) return false;
    async function fetchDadosAnteriores() {
      const dadosCadastrados = collection(db, "dadosCadastrados");
      const dadosCadRef = doc(dadosCadastrados, authUser.municipio);
      const dadosSnap = await getDoc(dadosCadRef);
      if (dadosSnap.exists()) {
        setDadosEnviados(dadosSnap.data());
      }
      setLoadingData(false);
    }
    fetchDadosAnteriores();
    return () => {
      abortController.abort();
    };
  }, [authUser]);

  const [cadastrando, setCadastrando] = useState(false);
  const handleStartForm = () => {
    setCadastrando(true);
  };

  //redireciona caso não logado
  useEffect(() => {
    if (!authUser && !loading) router.push("/");
  }, [authUser, loading, router]);
  if (loading) return <div>Carregando...</div>;
  if (!authUser && !loading) return <div>Não autorizado</div>;
  return (
    <Container className="mt-3">
      {cadastrando && <FormContainer dadosAnteriores={dadosEnviados} />}
      {ciclo === "cadastroAberto" && !cadastrando && (
        <Button className="mt-3" onClick={handleStartForm}>
          {dadosEnviados ? "Alterar dados cadastrados" : "Cadastrar dados"}
        </Button>
      )}
      {ciclo === "cadastroAberto" && !cadastrando ? (
        dadosEnviados && !loadingData ? (
          <VisualizadorDados dados={dadosEnviados} />
        ) : (
          <h6>
            O município ainda não tem possui inseridos para o ranqueamento deste
            ano.
          </h6>
        )
      ) : (
        <h6>Fora do período de cadastro.</h6>
      )}

      <DadosEnviadosModal />
    </Container>
  );
}
