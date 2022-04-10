import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function InfoIcon({ children }) {
  const [modalShow, setModalShow] = useState(false);

  const onHide = () => setModalShow(false);

  return (
    <>
      <FontAwesomeIcon
        icon={faInfoCircle}
        onClick={() => setModalShow(true)}
        style={{ width: "18px", marginLeft: "5px" }}
      ></FontAwesomeIcon>

      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop={true}
        onHide={onHide}
      >
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
