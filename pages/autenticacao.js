import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth } from "../contexts/AuthenticationContext";

export default function Autenticacao() {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    login(form.email.value, form.senha.value);
  };

  return (
    <Container className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            name="email"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="senha"
            name="senha"
            required
          ></Form.Control>
        </Form.Group>

        <Button className="mt-3" type="submit">
          Conectar
        </Button>
        <p>Esqueci a senha</p>
        <p>Entre em contato com a secretaria pelo email: turismo@sp.gov.br</p>
      </Form>
    </Container>
  );
}
