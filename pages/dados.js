import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import VisualizadorDados from "../components/VisualizadorDados";
import { useState } from "react";
import DadosEnviadosModal from "../components/DadosEnviadosModal";

export default () => {
  const [dadosEnviados, setDadosEnviados] = useState(true);
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
      <Button className="mt-5 mb-5" href="form">
        Enviar dados
      </Button>
      <DadosEnviadosModal />
    </Container>
  );
};
