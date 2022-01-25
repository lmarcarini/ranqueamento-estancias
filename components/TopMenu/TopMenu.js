import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import MenuLink from "./MenuLink";
import { useAuth } from "../../contexts/AuthenticationContext";

const TopMenu = () => {
  const { authUser, loading, logout } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="topmenubar" />
        <Navbar.Brand>
          <Image
            height="40"
            width="92"
            layout="fixed"
            src="/logo-rodape-negativo.png"
            className="d-inline-block align-top"
            alt="Governo Estado de São Paulo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="topmenubar">
          <Nav className="me-auto">
            <MenuLink href="/">Início</MenuLink>
            <MenuLink href="/ranqueamento">Ranqueamento</MenuLink>
            {authUser &&
              {
                municipio: (
                  <>
                    <MenuLink href="/cadastro">Cadastro</MenuLink>
                    <MenuLink href="/resultados">Resultados</MenuLink>
                  </>
                ),
                estado: <MenuLink href="/validacao">Validação</MenuLink>,
                administrador: <MenuLink href="/validacao">Validação</MenuLink>,
              }[authUser.tipo]}
            <MenuLink href="/ajuda">Ajuda</MenuLink>
          </Nav>
          <Nav className="mr-auto">
            {authUser ? (
              <NavDropdown
                title={`${authUser.displayNome}/${authUser.municipio}`}
                id="acountDropdown"
              >
                <NavDropdown.Item href="/alterarsenha">
                  Alterar Senha
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Desconectar
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <MenuLink href="/autenticacao">Conectar-se</MenuLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopMenu;
