import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Alterarsenha() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.checkValidity();
  };
  return (
    <Container className="mt-3">
      <Form validated onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Senha Atual</Form.Label>
          <Form.Control
            type="password"
            placeholder="Senha atual"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Nova Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nova Senha"
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="passwordConfirmation">
          <Form.Label>Confirme a senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="senha"
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
