import dados from "../scripts/mock2.json";
import Container from "react-bootstrap/Container";
import pontuacao from "../scripts/pontuacao";

export default () => {
  return (
    <Container style={{ border: "1px solid" }}>
      <h5> Município: {dados.municipio}</h5>
      <h5> Ano: {dados.ano}</h5>
      <h5>Pontuação prévia: {pontuacao(dados)}</h5>
      <h5>Respostas</h5>
      {dados.perguntas.map(
        ({ id, cabecalho, resposta, validacao, justificativa }) => (
          <div key={id} className="mb-2">
            <h6>{cabecalho}</h6>
            <p>Resposta: {" " + resposta}</p>
            {validacao !== "false" && (
              <>
                <p style={{ color: "red" }}>Validada: {" " + validacao}</p>
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
    </Container>
  );
};
