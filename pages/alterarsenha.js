import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth } from "../contexts/AuthenticationContext";

export default function Alterarsenha() {
  const { changePassword } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.checkValidity();
    let password = e.target.password.value;
    let newPassword = e.target.newPassword.value;
    let passwordConfirmation = e.target.passwordConfirmation.value;
    if (newPassword.length < 6) {
      alert("Senhas precisam ter pelo menos 6 caracteres");
      return null;
    }
    if (newPassword !== passwordConfirmation) {
      alert("Senhas não coincidem.");
      return null;
    }
    changePassword(password, newPassword);
  };
  return (
    <Container className="mt-3">
      <Form validated onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="oldPassword">
          <Form.Label>Senha Atual</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha atual"
            name="password"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="newPassword">
          <Form.Label>Nova Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nova Senha"
            name="newPassword"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="passwordConfirmation">
          <Form.Label>Confirme a senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="senha"
            name="passwordConfirmation"
            required
          ></Form.Control>
        </Form.Group>

        <Button className="mt-3" type="submit">
          Alterar senha
        </Button>
      </Form>
    </Container>
  );
}
