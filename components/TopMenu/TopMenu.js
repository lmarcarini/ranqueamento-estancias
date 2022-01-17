import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "../../contexts/AuthenticationContext";
import { useCiclo } from "../../contexts/CicloContext";
import MenuLink from "./MenuLink";

export default () => {
  const { authUser, userType, loading, name } = useAuth();
  const { ciclo } = useCiclo();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="topmenubar" />
        <Navbar.Brand>
          <img
            height="40"
            src="/logo-rodape-negativo.png"
            className="d-inline-block align-top"
            alt="Governo Estado de São Paulo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="topmenubar">
          <Nav className="me-auto">
            <MenuLink href="./">Início</MenuLink>
            <MenuLink href="ranqueamento">Ranqueamento</MenuLink>
            {authUser &&
              loading === false &&
              {
                municipio: (
                  <>
                    <MenuLink href="cadastro">Cadastro</MenuLink>
                    <MenuLink href="resultados">Resultados</MenuLink>
                  </>
                ),
                estado: <MenuLink href="validacao">Validação</MenuLink>,
                administrador: <MenuLink href="validacao">Validação</MenuLink>,
              }[userType]}
            <MenuLink href="ajuda">Ajuda</MenuLink>
          </Nav>
          <Nav className="mr-auto">
            {authUser ? (
              <NavDropdown title={name} id="acountDropdown">
                <NavDropdown.Item href="autenticacao">
                  Alterar Senha
                </NavDropdown.Item>
                <NavDropdown.Item href="autenticacao">
                  Desconectar
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <MenuLink href="autenticacao">Conectar-se</MenuLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
