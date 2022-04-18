import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAuth } from "../contexts/AuthenticationContext";
import { useState } from "react";

export default function Autenticacao() {
  const { login, resetPassword } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    login(form.email.value, form.senha.value);
  };

  const [showPasswordDialog, setShowPasswordDialog] = useState(false);

  const handleShowPasswordDialog = () => {
    setShowPasswordDialog(true);
  };

  const handleClosePasswordDialog = () => {
    setShowPasswordDialog(false);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    resetPassword(e.target.email.value);
    setShowPasswordDialog(false);
  };

  return (
    <Container className="mt-3">
      <Form onSubmit={handleSubmit} id="formAutenticar">
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="senha"
            name="senha"
            autoComplete="current-password"
            required
          ></Form.Control>
        </Form.Group>

        <Button className="mt-3" type="submit" form="formAutenticar">
          Conectar
        </Button>
      </Form>
      <p className="mt-3">
        <a href="#" onClick={handleShowPasswordDialog}>
          Esqueci a senha
        </a>
      </p>
      <Modal
        centered
        show={showPasswordDialog}
        onHide={handleClosePasswordDialog}
      >
        <Form onSubmit={handleResetPassword} id="formResetPassword">
          <Modal.Header>Redefinição de senha</Modal.Header>
          <Modal.Body>
            <Form.Label>Digite seu e-mail:</Form.Label>
            <Form.Control type="email" name="email" required></Form.Control>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="mt-3" form="formResetPassword">
              Enviar e-mail
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <p className="mt-3">
        Para criar uma nova conta, entre em contato com a secretaria de turismo
        pelo email: turismo@sp.gov.br
      </p>
    </Container>
  );
}
