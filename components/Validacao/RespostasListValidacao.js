import ValidacaoModal from "./ValidacaoModal";
import gabarito from "../../scripts/respostas.json";

export default function RespostasListValidacao({
  perguntas = {},
  handleValidacao,
}) {
  return (
    <>
      <h5>Respostas</h5>
      {Object.entries(perguntas)
        .sort((a, b) => {
          return a[0].localeCompare(b[0]);
        })
        .map(([id, { cabecalho, resposta, validacao, justificativa, url }]) => (
          <div key={id} className="mb-2">
            <h6>{cabecalho}</h6>
            <p>Resposta: {" " + resposta}</p>
            {validacao && (
              <>
                <p
                  style={
                    resposta === validacao
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  Validada: {" " + validacao}
                </p>
                {justificativa !== "" && (
                  <p style={{ color: "red" }}>
                    Justificativa: {" " + justificativa}
                  </p>
                )}
              </>
            )}
            {url && (
              <p>
                <a href={url}>Anexo{"-" + id}</a>
              </p>
            )}
            <ValidacaoModal
              cabecalho={cabecalho}
              reposta={resposta}
              id={id}
              opcoes={gabarito.respostas[id]}
              handleValidacao={handleValidacao}
            ></ValidacaoModal>
          </div>
        ))}
    </>
  );
}
