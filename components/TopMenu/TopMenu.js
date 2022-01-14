import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import { useAuth } from "../../contexts/AuthenticationContext";
import { useCiclo } from "../../contexts/CicloContext";
import MenuLink from "./MenuLink";

export default () => {
  const { authUser, userType, loading } = useAuth();
  const { ciclo } = useCiclo();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="topmenubar" />
        <Navbar.Collapse id="topmenubar">
          {authUser && loading === false ? (
            {
              municipio: (
                <Nav className="me-auto">
                  <MenuLink href="./">Início</MenuLink>
                  <MenuLink href="ranqueamento">Ranqueamento</MenuLink>
                  {ciclo === "resultados" && (
                    <MenuLink href="dados">Resultados</MenuLink>
                  )}
                  {ciclo === "cadastroAberto" && (
                    <MenuLink href="dados">Cadastro</MenuLink>
                  )}
                  <MenuLink href="ajuda">Ajuda</MenuLink>
                  <MenuLink href="autenticacao">Desconectar</MenuLink>
                  <Navbar.Text>-Fernanda-Tupã-</Navbar.Text>
                </Nav>
              ),
              estado: (
                <Nav className="me-auto">
                  <MenuLink href="./">Início</MenuLink>
                  <MenuLink href="ranqueamento">Ranqueamento</MenuLink>
                  <MenuLink href="validacao">Validação</MenuLink>
                  <MenuLink href="recursos">Recursos</MenuLink>
                  <MenuLink href="ajuda">Ajuda</MenuLink>
                  <MenuLink href="autenticacao">Desconectar</MenuLink>
                </Nav>
              ),
              administrador: (
                <Nav className="me-auto">
                  <MenuLink href="./">Início</MenuLink>
                  <MenuLink href="ranqueamento">Ranqueamento</MenuLink>
                  <MenuLink href="validacao">Validação</MenuLink>
                  <MenuLink href="recursos">Recursos</MenuLink>
                  <MenuLink href="ajuda">Ajuda</MenuLink>
                  <MenuLink href="autenticacao">Desconectar</MenuLink>
                </Nav>
              ),
            }[userType]
          ) : (
            <Nav className="me-auto">
              <MenuLink href="./">Início</MenuLink>
              <MenuLink href="ranqueamento">Ranqueamento</MenuLink>
              <MenuLink href="ajuda">Ajuda</MenuLink>
              <MenuLink href="autenticacao">Conectar-se</MenuLink>
            </Nav>
          )}
        </Navbar.Collapse>
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
