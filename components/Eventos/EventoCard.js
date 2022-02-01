import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { useRef } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { EditText } from "react-edit-text";
import { db } from "../../Firebase/auth";
import "react-edit-text/dist/index.css";

export default function EventoCard({ nome, date, updateDate, id }) {
  const editTextRef = useRef(null);

  const updateEvento = async (evento) => {
    let eventosRef = collection(db, "eventos");
    await setDoc(doc(eventosRef, id), evento);
  };

  const handleSave = (e) => {
    let nome = e.value;
    if (nome === "") {
      e.name = e.previousValue;
      editTextRef.current.value = e.previousValue;
      console.log(e);
      return null;
    }
    let evento = { nome: nome, date: date };
    updateEvento(evento);
  };

  const handleDelete = (e) => {
    let eventosRef = collection(db, "eventos");
    deleteDoc(doc(eventosRef, id));
  };

  return (
    <Card className="mb-3">
      <Card.Header>
        <Row>
          <Col>
            <EditText
              ref={editTextRef}
              onSave={handleSave}
              defaultValue={nome}
            />
          </Col>
          <Col md="auto">
            <FontAwesomeIcon
              icon={faTrashAlt}
              onClick={handleDelete}
              style={{ width: "18px" }}
            ></FontAwesomeIcon>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        Data:
        <Form.Control
          type="date"
          defaultValue={date.replace(/(\d+)\/(\d+)\/(\d+)/, "$3-$2-$1")}
          onChange={(e) => updateDate(e.target.value, id)}
        />
      </Card.Body>
    </Card>
  );
}
