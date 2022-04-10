import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import VisualizadorDados from "../components/VisualizadorDados";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthenticationContext";
import useResultados from "../customhooks/useResultados";

export default function Resultados() {
  const { authUser, loading } = useAuth();

  const { anos, dadosAnteriores } = useResultados(authUser?.municipio);
  const [anoSelecionado, setAnoSelecionado] = useState(null);
  const selecaoAno = (e) => {
    setAnoSelecionado(e.target.value);
    if (e.target.value === "false") setAnoSelecionado(null);
  };

  useEffect(() => {
    if (!authUser && !loading) router.push("/");
  }, [authUser, loading]);
  if (loading) return <div>Carregando...</div>;
  if (!authUser && !loading) return <div>Não autorizado</div>;

  return (
    <Container className="mt-3">
      <Row>
        <Form.Select
          aria-label="Selecione o ano:"
          id="ano"
          onChange={selecaoAno}
        >
          <option value={false}>Selecione o ano do ranqueamento</option>
          {anos.map((ano, i) => (
            <option value={i} key={i}>
              {ano}
            </option>
          ))}
        </Form.Select>
      </Row>
      <Row>
        {anoSelecionado && (
          <VisualizadorDados
            final={true}
            dados={dadosAnteriores[anoSelecionado]}
          />
        )}
      </Row>
    </Container>
  );
}
