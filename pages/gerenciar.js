import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function Gerenciar() {
  const [cadastroAberto, setCadastroAberto] = useState(false);

  const toogleCadastroAberto = () => {
    setCadastroAberto(!cadastroAberto);
  };

  return (
    <Container className="mt-3">
      <Form>
        <Form.Check
          type="switch"
          label="Permitir cadastros de informações do município"
          id="permitir-cadastro"
          value={cadastroAberto}
          onClick={toogleCadastroAberto}
          className="mb-3"
        />
        <Button
          disabled={cadastroAberto}
          tooltip="É necessário que o cadastro esteja fechado para realizar essa ação"
        >
          Divulgar Validação
        </Button>
      </Form>
    </Container>
  );
}
