import Container from "react-bootstrap/Container";
import pontuacao from "../scripts/pontuacao";
import finalScore from "../scripts/finalScore";

export default function VisualizadorDados({ dados, final = false }) {
  return (
    <Container className="mt-3 mb-3" style={{ border: "1px solid" }}>
      <h6> Município: {dados.municipio}</h6>
      <h6> Ano: {dados.ano}</h6>
      <h6> Preenchido em: {dados.data}</h6>
      <h6> Preenchido por: {dados.funcionario}</h6>
      {final ? (
        <h6>Pontuação: {finalScore(dados)}</h6>
      ) : (
        <h6>Pontuação prévia: {pontuacao(dados)}</h6>
      )}

      <hr />
      <h5>Respostas</h5>
      {Object.entries(dados.perguntas).map(
        ([id, { cabecalho, resposta, validacao, justificativa }]) => (
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
                {validacao && (
                  <p style={{ color: "red" }}>Validada: {" " + validacao}</p>
                )}
                {justificativa && (
                  <p style={{ color: "red" }}>
                    Justificativa: {" " + justificativa}
                  </p>
                )}
              </>
            )}
          </div>
        )
      )}
      <hr />
      <h5>Pleitos</h5>
      {dados.pleitos ? (
        <>
          {Object.entries(dados.pleitos).map(([id, pleito], i) => (
            <div key={id} className="mb-2">
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
        </>
      ) : (
        <h6>Não foram incluídos nenhum pleito nesse cadastro.</h6>
      )}
    </Container>
  );
}
