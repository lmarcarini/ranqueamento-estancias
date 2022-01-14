import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default () => {
  const handleSubmit = () => {};
  return (
    <Form>
      <Form.Label>Recurso</Form.Label>
      <Form.Control
        as="textarea"
        type="text"
        placeholder="Insira seu recurso aqui"
      />
      <Button onClick={handleSubmit} className="mt-2">
        Registrar recurso
      </Button>
    </Form>
  );
};
