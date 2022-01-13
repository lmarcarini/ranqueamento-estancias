import mockData from "../scripts/mock2.json";
import Container from "react-bootstrap/Container";
import pontuacao from "../scripts/pontuacao";

export default (dados) => {
  return (
    <Container style={{ border: "1px solid" }}>
      <h5> Município: {mockData.municipio}</h5>
      <h5> Ano: {mockData.ano}</h5>
      <h5>Pontuação prévia: {pontuacao(mockData)}</h5>
      <h5>Respostas: </h5>
      {mockData.perguntas.map(({ id, cabecalho, resposta }) => (
        <div key={id}>
          <h6>{cabecalho}</h6>
          <p>{resposta}</p>
        </div>
      ))}
      <h5>Pleitos: </h5>
      {mockData.pleitos.map(({ nome, situacao, tipo }, i) => (
        <div key={i}>
          <h6>Pleito #{i + 1 + " " + nome}</h6>
          <p>Situação: {" " + situacao}</p>
          <p>Tipo: {" " + tipo}</p>
        </div>
      ))}
    </Container>
  );
};
