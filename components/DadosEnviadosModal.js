import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function DadosEnviadosModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#sucesso") setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body>Dados enviados com sucesso.</Modal.Body>
    </Modal>
  );
}
