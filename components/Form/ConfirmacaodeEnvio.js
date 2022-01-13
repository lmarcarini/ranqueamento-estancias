import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default () => {
  const [show, setshow] = useState(false);

  const handleClose = () => setshow(false);
  const handleShow = () => setshow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/dados#sucesso";
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Enviar
      </Button>
      <Modal show={show}>
        <Modal.Header closeButton onHide={handleClose}>
          Confirmar envio?
        </Modal.Header>
        <Modal.Body>
          <p>
            As informações serão conferidas pela Secretaria de Turísmo de São
            Paulo e a pontuação poderá ser alterada. As informações
            sobreescreverão quaisquer informação enviada anteriormente para este
            ranqueamento. Você deseja realizar o envio?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Voltar
          </Button>
          <Button
            variant="primary"
            //type="submit"
            form="dados"
            onClick={handleSubmit}
          >
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
