import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import VisualizadorDados from "../components/VisualizadorDados";
import { useState } from "react";
import DadosEnviadosModal from "../components/DadosEnviadosModal";
import { useCiclo } from "../contexts/CicloContext";
import RecursoForm from "../components/RecursoForm";

export default () => {
  const [dadosEnviados, setDadosEnviados] = useState(true);
  const { ciclo } = useCiclo();
  return (
    <Container className="mt-3">
      {dadosEnviados ? (
        <VisualizadorDados />
      ) : (
        <h6>
          O município ainda não tem possui inseridos para o ranqueamento deste
          ano.
        </h6>
      )}
      {ciclo === "cadastroAberto" && (
        <Button className="mt-3" href="form">
          Cadastrar dados
        </Button>
      )}
      {ciclo === "recursosAberto" && <RecursoForm />}
      <DadosEnviadosModal />
    </Container>
  );
};
