import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import dados from "../scripts/mock2.json";
import { useState } from "react";
import RecursoForm from "../components/RecursoForm";

export default () => {
  const [validado, setValidado] = useState(true);

  return (
    <Container className="mt-3">
      {validado ? (
        <Container>
          <Row className="border">
            <h5>Respostas</h5>
            {dados.perguntas.map(
              ({ id, cabecalho, resposta, validacao, justificativa }) => (
                <div key={id} className="mb-2">
                  <h6>{cabecalho}</h6>
                  <p>Resposta: {" " + resposta}</p>
                  {validacao !== "false" && (
                    <>
                      <p style={{ color: "red" }}>
                        Validada: {" " + validacao}
                      </p>
                      <p style={{ color: "red" }}>
                        Justificativa: {" " + justificativa}
                      </p>
                    </>
                  )}
                  {true && (
                    <p>
                      <a href="link.html">Comprovante</a>
                    </p>
                  )}
                </div>
              )
            )}
            <h5>Pleitos</h5>
            {dados.pleitos.map((pleito, i) => (
              <div key={i} className="mb-2">
                <h6># {i + 1 + " " + pleito.nome}</h6>
                <p>Situação: {" " + pleito.situacao}</p>
                {pleito.situacaoValidado && (
                  <p style={{ color: "red" }}>
                    Situação validada: {" " + pleito.situacaoValidado}
                  </p>
                )}
                <p>Tipo: {" " + pleito.tipo}</p>
                {pleito.tipoValidado && (
                  <p style={{ color: "red" }}>
                    Tipo validado: {" " + pleito.tipoValidado}
                  </p>
                )}
                {pleito.justificativa && (
                  <p style={{ color: "red" }}>
                    Justificativa: {" " + pleito.justificativa}
                  </p>
                )}
              </div>
            ))}
          </Row>
          <Row>
            <RecursoForm />
          </Row>
        </Container>
      ) : (
        <p>
          Os dados do município ainda não foram apreciados. Aguarde e fica
          atento aos prazos.
        </p>
      )}
    </Container>
  );
};
