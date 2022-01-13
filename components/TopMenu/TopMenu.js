import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useAuth } from "../../contexts/AuthenticationContext";

export default () => {
  const { authUser, userType, loading } = useAuth();
  const ciclo = "cadastroAberto"; //cadastroAberto, apreciacaoCadastro, recursosAberto, apreciacaoResursos, resultados
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {authUser && loading === false ? (
          {
            municipio: (
              <Nav className="me-auto">
                <Nav.Link href="./">Início</Nav.Link>
                <Nav.Link href="ranqueamento">Ranqueamento</Nav.Link>
                {ciclo === "resultados" && (
                  <Nav.Link href="dados">Resultados</Nav.Link>
                )}
                {ciclo === "cadastroAberto" && (
                  <Nav.Link href="dados">Cadastro</Nav.Link>
                )}
                <Nav.Link href="ajuda">Ajuda</Nav.Link>
                <Nav.Link href="autenticacao">Desconectar</Nav.Link>
                <Navbar.Text>-Fernanda-Tupã-</Navbar.Text>
              </Nav>
            ),
            estado: (
              <Nav className="me-auto">
                <Nav.Link href="./">Início</Nav.Link>
                <Nav.Link href="ranqueamento">Ranqueamento</Nav.Link>
                <Nav.Link href="validacao">Validação</Nav.Link>
                <Nav.Link href="recursos">Recursos</Nav.Link>
                <Nav.Link href="ajuda">Ajuda</Nav.Link>
                <Nav.Link href="autenticacao">Desconectar</Nav.Link>
              </Nav>
            ),
            administrador: (
              <Nav className="me-auto">
                <Nav.Link href="./">Início</Nav.Link>
                <Nav.Link href="ranqueamento">Ranqueamento</Nav.Link>
                <Nav.Link href="validacao">Validação</Nav.Link>
                <Nav.Link href="recursos">Recursos</Nav.Link>
                <Nav.Link href="ajuda">Ajuda</Nav.Link>
                <Nav.Link href="autenticacao">Desconectar</Nav.Link>
              </Nav>
            ),
          }[userType]
        ) : (
          <Nav className="me-auto">
            <Nav.Link href="./">Início</Nav.Link>
            <Nav.Link href="ranqueamento">Ranqueamento</Nav.Link>
            <Nav.Link href="ajuda">Ajuda</Nav.Link>
            <Nav.Link href="autenticacao">Conectar-se</Nav.Link>
          </Nav>
        )}
        <Navbar.Brand>
          <img
            height="40"
            src="/logo-rodape-negativo.png"
            className="d-inline-block align-top"
            alt="Governo Estado de São Paulo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
