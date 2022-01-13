import ValidacaoPleitoModal from "./ValidacaoPleitoModal";

export default ({ pleitos, handleValidacaoPleito }) => {
  return (
    <>
      <h5>Pleitos</h5>
      {pleitos.map((pleito, i) => (
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
          <ValidacaoPleitoModal
            pleito={pleito}
            handleValidacaoPleito={handleValidacaoPleito}
            i={i}
          />
        </div>
      ))}
    </>
  );
};
