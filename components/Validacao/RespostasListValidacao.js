import ValidacaoModal from "./ValidacaoModal";
import gabarito from "../../scripts/respostas.json";

export default ({ perguntas, handleValidacao }) => {
  return (
    <>
      <h5>Respostas</h5>
      {perguntas.map(
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
            <ValidacaoModal
              cabecalho={cabecalho}
              reposta={resposta}
              id={id}
              opcoes={gabarito.respostas[id]}
              handleValidacao={handleValidacao}
            ></ValidacaoModal>
          </div>
        )
      )}
    </>
  );
};
