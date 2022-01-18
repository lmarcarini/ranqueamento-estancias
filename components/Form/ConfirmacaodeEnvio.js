import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ConfirmacaodeEnvio({ show, handleClose, handleSend }) {
  return (
    <>
      <Modal show={show} centered>
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
          <Button variant="primary" onClick={handleSend}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
