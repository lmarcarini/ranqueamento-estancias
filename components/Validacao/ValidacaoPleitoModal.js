import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import respostas from "../../scripts/respostas.json";

export default function ValidacaoPleitoModal({
  pleito = { nome: "", tipo: "", situacao: "" },
  handleValidacaoPleito,
  i,
}) {
  const [show, setShow] = useState(false);

  const [tipoValidado, setTipoValidado] = useState("");
  const [situacaoValidado, setSituacaoValidado] = useState("");
  const [justificativa, setJustificativa] = useState("");

  useEffect(() => {
    setTipoValidado(pleito.tipo);
    setSituacaoValidado(pleito.situacao);
  }, [pleito]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidacaoPleito(tipoValidado, situacaoValidado, justificativa, i);
    handleClose();
  };

  const handleChangeTipo = (e) => setTipoValidado(e.target.value);
  const handleChangeSituacao = (e) => setSituacaoValidado(e.target.value);
  const handleTypeJustificativa = (e) => setJustificativa(e.target.value);

  return (
    <>
      <Button onClick={handleShow} variant="danger">
        Validar
      </Button>
      <Modal onHide={handleClose} show={show}>
        <Modal.Header>Pleito: {pleito.nome}</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Tipo: {pleito.tipo}</Form.Label>
            <Form.Select onChange={handleChangeTipo}>
              {Object.entries(respostas.pleitos.tipo).map(
                ([tipo, valor], i) => (
                  <option key={i} value={tipo}>
                    {tipo}
                  </option>
                )
              )}
            </Form.Select>
            <Form.Label>Situação: {pleito.situacao}</Form.Label>
            <Form.Select onChange={handleChangeSituacao}>
              {Object.entries(respostas.pleitos.situacao).map(
                ([situacao, valor], i) => (
                  <option key={i} value={situacao}>
                    {situacao}
                  </option>
                )
              )}
            </Form.Select>
            <Form.Control
              onChange={handleTypeJustificativa}
              as="textarea"
              className="mt-2"
              placeholder="Justificativa"
            ></Form.Control>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>Validar</Button>
          <Button onClick={handleClose} variant="secondary">
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
