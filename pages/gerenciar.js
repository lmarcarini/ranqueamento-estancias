import { Button, Container, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthenticationContext";
import { useRouter } from "next/router";
import { useCadastroState } from "../customhooks/useCadastro";
import { useEffect } from "react";
import useDivulgar from "../customhooks/useDivulgar";

export default function Gerenciar() {
  const { authUser, loading } = useAuth();
  const { router } = useRouter();
  const [cadastroState, handleChangeCadastroState] = useCadastroState();
  const [divulgar, divulgando] = useDivulgar();

  const toogleCadastroAberto = (e) => handleChangeCadastroState(e);

  const handleOnClick = (e) => {
    e.preventDefault();
    divulgar();
  };

  //redireciona caso não logado
  useEffect(() => {
    if (!authUser && !loading) router.push("/");
  }, [authUser, loading, router]);
  if (loading) return <div>Carregando...</div>;
  if (!authUser && !loading) return <div>Não autorizado</div>;
  return (
    <Container className="mt-3">
      <Form>
        {cadastroState !== null && (
          <Form.Check
            type="switch"
            label="Permitir cadastros de informações do município"
            id="permitir-cadastro"
            checked={cadastroState === "aberto"}
            onClick={toogleCadastroAberto}
            className="mb-3"
          />
        )}
        <Button
          disabled={cadastroState === "aberto" || divulgando}
          tooltip="É necessário que o cadastro esteja fechado para realizar essa ação"
          onClick={handleOnClick}
        >
          Divulgar Validação
        </Button>
      </Form>
    </Container>
  );
}
