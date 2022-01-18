import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";

export default function ValidacaoModal({
  opcoes = ["1", "2"],
  cabecalho = "",
  id = 0,
  resposta = "",
  handleValidacao,
}) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [valueSelected, setValueSelected] = useState("false");
  const [justificativa, setJustificativa] = useState("");

  const handleSelect = (e) => setValueSelected(e.target.value);
  const handleTypeJustificativa = (e) => setJustificativa(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidacao(id, valueSelected, justificativa);
    handleClose();
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Validar
      </Button>
      <Modal show={show}>
        <Modal.Header>{cabecalho}</Modal.Header>
        <Modal.Body>
          <p>Resposta:</p>
          <p>{resposta}</p>
          {Object.entries(opcoes).map(([opcao], i) => (
            <Form.Check
              type="radio"
              key={i}
              id={i}
              name="resposta"
              label={opcao}
              value={opcao}
              onClick={handleSelect}
            />
          ))}
          <Form.Control
            onChange={handleTypeJustificativa}
            as="textarea"
            className="mt-2"
            placeholder="Justificativa"
          ></Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Confirmar </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
