import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default () => {
  return (
    <Container className="mt-3">
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email"></Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="senha"></Form.Control>
        </Form.Group>

        <Button className="mt-3">Conectar</Button>
        {
          //TODO
        }
        <p>Entre em contato com a secretaria pelo email: turismo@sp.gov.br</p>
      </Form>
    </Container>
  );
};
