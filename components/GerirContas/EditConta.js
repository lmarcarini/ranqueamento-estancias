import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useEffect, useState } from "react";
import { db } from "../../Firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function EditConta({ conta }) {
  const { email, tipo, nome, uid, municipio } = conta;

  const [tipoNovo, setTipoNovo] = useState(tipo);

  useEffect(() => {
    setTipoNovo(tipo);
  }, [tipo]);

  const handleChange = (e) => setTipoNovo(e.target.value);

  const handleAlterar = (e) => {
    e.preventDefault();
    const form = e.target;
    const usuario = Object.fromEntries(new FormData(form).entries());
    if (usuario.tipo === "estado") usuario["municipio"] = "SP";
    const alterarUsuario = async () => {
      usuario["email"] = email;
      usuario["uid"] = uid;
      await setDoc(doc(db, "users", uid), usuario);
      alert("Alterações completas.");
    };
    if (email) {
      alterarUsuario();
      return null;
    }
    const adicionarUsuario = async () => {
      alert("Usuário acrescentado.");
    };
    adicionarUsuario();
  };
  const handleDeletar = (e) => {
    e.preventDefault();
    confirmAlert({
      title: "Confirme para deletar",
      message: "Certeza que quer deletar esta conta?",
      buttons: [
        {
          label: "Sim",
          onClick: () => alert("Conta deletada"),
        },
        {
          label: "Cancelar",
          onClick: () => {},
        },
      ],
    });
  };
  return (
    <Form onSubmit={handleAlterar}>
      <Form.Group id="email" className="mb-3">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          name="email"
          type="email"
          defaultValue={email}
          disabled={email}
          required
        />
      </Form.Group>
      <Form.Group id="nome" className="mb-3">
        <Form.Label>Nome: </Form.Label>
        <Form.Control name="nome" type="text" defaultValue={nome} required />
      </Form.Group>
      <Form.Group id="tipo" className="mb-3">
        <Form.Label>Tipo: </Form.Label>
        <Form.Select
          name="tipo"
          defaultValue={tipo}
          onChange={handleChange}
          required
        >
          <option value="municipio">Servidor(a) municipal</option>
          <option value="estado">Servidor(a) estadual</option>
        </Form.Select>
      </Form.Group>
      {tipoNovo === "municipio" && (
        <Form.Group id="municipio" className="mb-3">
          <Form.Label>Município</Form.Label>
          <Form.Control
            type="text"
            defaultValue={municipio}
            name="municipio"
            required
          ></Form.Control>
        </Form.Group>
      )}
      <Nav>
        <Nav.Item>
          <Button type="submit">Registrar Alterações</Button>
        </Nav.Item>
        <Nav.Item>
          <Button variant="danger" onClick={handleDeletar}>
            Deletar Usuário
          </Button>
        </Nav.Item>
      </Nav>
    </Form>
  );
}
