import dados from "../scripts/mock2.json";
import Container from "react-bootstrap/Container";
import pontuacao from "../scripts/pontuacao";
import finalScore from "../scripts/finalScore";

export default function VisualizadorDados({ final = false }) {
  return (
    <Container style={{ border: "1px solid" }}>
      <h5> Município: {dados.municipio}</h5>
      <h5> Ano: {dados.ano}</h5>
      {final ? (
        <h5>Pontuação: {finalScore(dados)}</h5>
      ) : (
        <h5>Pontuação prévia: {pontuacao(dados)}</h5>
      )}

      <hr />
      <h5>Respostas</h5>
      {dados.perguntas.map(
        ({ id, cabecalho, resposta, validacao, justificativa }) => (
          <div key={id} className="mb-2">
            <h6>{cabecalho}</h6>
            <p>Resposta: {" " + resposta}</p>
            {true && (
              <p>
                <a href="link.html">Anexo</a>
              </p>
            )}
            {final && validacao !== "false" && (
              <>
                <p style={{ color: "red" }}>Validada: {" " + validacao}</p>
                <p style={{ color: "red" }}>
                  Justificativa: {" " + justificativa}
                </p>
              </>
            )}
          </div>
        )
      )}
      <hr />
      <h5>Pleitos</h5>
      {dados.pleitos.map((pleito, i) => (
        <div key={i} className="mb-2">
          <h6># {i + 1 + " " + pleito.nome}</h6>
          <p>Situação: {" " + pleito.situacao}</p>
          {final && pleito.situacaoValidado && (
            <p style={{ color: "red" }}>
              Situação validada: {" " + pleito.situacaoValidado}
            </p>
          )}
          <p>Tipo: {" " + pleito.tipo}</p>
          {final && pleito.tipoValidado && (
            <p style={{ color: "red" }}>
              Tipo validado: {" " + pleito.tipoValidado}
            </p>
          )}
          {final && pleito.justificativa && (
            <p style={{ color: "red" }}>
              Justificativa: {" " + pleito.justificativa}
            </p>
          )}
        </div>
      ))}
    </Container>
  );
}
