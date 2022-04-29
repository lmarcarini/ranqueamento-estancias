import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import SectionA from "./SectionA";
import SectionB from "./SectionB";
import SectionC from "./SectionC";
import { useEffect, useMemo, useState } from "react";
import pontuacao from "../../scripts/pontuacao";
import ConfirmacaodeEnvio from "./ConfirmacaodeEnvio";
import { useAuth } from "../../contexts/AuthenticationContext";
import { formatDados } from "../../scripts/formatDados";
import useFormSubmit from "./useFormSubmit";
import { Spinner } from "react-bootstrap";

function CadastroForm({ dadosAnteriores }) {
  const { authUser } = useAuth();
  const [dados, setdados] = useState(dadosAnteriores || {});
  const [filesToUpload, setFilesToUpload] = useState([]);
  const score = useMemo(() => pontuacao(dados), [dados]);
  const [handleSend, submitState, submitProgress] = useFormSubmit();

  const handleChange = (e) => setdados(formatDados(e.target.form, authUser));

  const [showConfirmation, setshowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    const data = Array.from(new FormData(form).entries());
    setFilesToUpload(data.filter(([name, _]) => name.split("_")[0] === "file"));
    setshowConfirmation(true);
  };

  const handleConfirm = () => {
    handleSend(authUser, dados, filesToUpload);
    setshowConfirmation(false);
  };

  useEffect(() => {
    if (submitState === "done") {
      window.location.href = "/cadastro#sucesso";
      window.location.reload();
    }
  }, [submitState]);

  return (
    <Container style={{ paddingBottom: "70px" }}>
      <Form onChange={handleChange} id="dados" onSubmit={handleSubmit}>
        <Nav className="justify-content-center">
          <a className="nav-link" href="#secaoA">
            A) Legislação
          </a>
          <a className="nav-link" href="#secaoB">
            B) Pleitos
          </a>
          <a className="nav-link" href="#secaoC">
            C) Requisitos
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
              Pontuação prévia: {score}/90.7
            </Form.Label>
            <ConfirmacaodeEnvio
              handleClose={() => setshowConfirmation(false)}
              show={showConfirmation}
              handleSend={handleConfirm}
            />
            <Button type="submit" disabled={submitState !== "false"}>
              <>
                {submitProgress !== "stop" && (
                  <Spinner as="span" animation="border" />
                )}
                {submitProgress === "stop" && "Enviar"}
                {submitProgress === "files" && "Enviando arquivos"}
                {submitProgress === "database" && "Enviando dados"}
              </>
            </Button>
          </Container>
        </NavBar>
      </Form>
    </Container>
  );
}

export default CadastroForm;
