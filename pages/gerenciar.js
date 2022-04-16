import { Button, Container, Form } from "react-bootstrap";
import { useAuth } from "../contexts/AuthenticationContext";
import { useRouter } from "next/router";
import { useCadastroState } from "../customhooks/useCadastro";
import { useEffect, useState } from "react";
import useDivulgar from "../customhooks/useDivulgar";
import { db } from "../Firebase/auth";
import { doc, updateDoc } from "firebase/firestore";

export default function Gerenciar() {
  const { authUser, loading } = useAuth();
  const { router } = useRouter();
  const [cadastroState] = useCadastroState();
  const [divulgar, divulgando] = useDivulgar();
  const [abertoFormChecked, setAbertoFormChecked] = useState(false);

  const handleCadastroAbertoChange = (e) => {
    setAbertoFormChecked(e.target.checked);
    console.log(e.target.checked);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    divulgar();
  };

  const handleSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    var values = {};
    formData.forEach((value, key) => (values[key] = value));
    const newState = {
      cadastro:
        values.permitirCadastro === "on"
          ? "aberto"
          : values.permitirValidacao === "on"
          ? "validacao"
          : "fechado",
    };
    if (values.anoCadastro) newState["anoCadastro"] = values.anoCadastro;
    console.table(newState);
    saveSettings(newState);
  };

  //redireciona caso não logado
  useEffect(() => {
    if (!authUser && !loading) router.push("/");
  }, [authUser, loading, router]);
  if (loading) return <div>Carregando...</div>;
  if (!authUser && !loading) return <div>Não autorizado</div>;
  return (
    <Container className="mt-3">
      <Form className="mb-3" onSubmit={handleSave} id="configuracaoForm">
        {cadastroState !== null && (
          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              label="Cadastros"
              id="permitirCadastro"
              name="permitirCadastro"
              defaultChecked={cadastroState === "aberto"}
              onChange={handleCadastroAbertoChange}
            />
            <Form.Text>Permite cadastros de informações do município</Form.Text>
          </Form.Group>
        )}

        {cadastroState !== null && (
          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              label="Validação"
              id="permitirValidacao"
              name="permitirValidacao"
              defaultChecked={cadastroState === "validacao"}
              disabled={abertoFormChecked}
            />
            <Form.Text>Permite validação de informações do município</Form.Text>
          </Form.Group>
        )}
        {cadastroState !== null && (
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="2022"
              value={cadastroState.anoCadastro}
              id="anoCadastro"
              name="anoCadastro"
              disabled={!abertoFormChecked}
              required
            />
            <Form.Text>Ano para registro de cadastro</Form.Text>
          </Form.Group>
        )}
        <Button type="submit" form="configuracaoForm">
          Salvar alterações
        </Button>
      </Form>
      <hr />
      <Form className="mb-3">
        <Button
          disabled={cadastroState === "aberto" || divulgando}
          tooltip="É necessário que o cadastro esteja fechado para realizar essa ação"
          onClick={handleOnClick}
          variant="danger"
        >
          Divulgar Validação
        </Button>
        <br />
        <i>
          {cadastroState === "aberto" &&
            "Para divulgar é necessário que o cadastro esteja fechado"}
        </i>
      </Form>
    </Container>
  );
}

const saveSettings = async (cadastroState) => {
  try {
    let configuracaoRef = doc(db, "configuracao", "configuracao");
    updateDoc(configuracaoRef, cadastroState);
    alert("Configurações salvas com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Erro ao salvar configuração");
  }
};
