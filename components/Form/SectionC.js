import gabarito from "../../scripts/perguntas.json";
import PerguntaForm from "./PerguntaForm";

export default function SectionC({ id, dadosAnteriores }) {
  const fillPergunta = (codigo) => (
    <PerguntaForm
      cabecalho={gabarito.perguntas[codigo].cabecalho}
      info={gabarito.perguntas[codigo].info}
      codigo={codigo}
      opcoes={gabarito.perguntas[codigo].opcoes}
      descricaoanexo={gabarito.perguntas[codigo].descricaoanexo}
      resposta={
        dadosAnteriores?.perguntas &&
        dadosAnteriores?.perguntas[codigo]?.resposta
      }
    ></PerguntaForm>
  );
  return (
    <>
      <h4 id={id}>C) Requisitos</h4>
      <h6>C.1 Estruturação e composição do COMTUR</h6>
      {fillPergunta("c1")}
      {fillPergunta("c2")}
      {fillPergunta("c3")}
      {fillPergunta("c4")}
      {fillPergunta("c5")}
      {fillPergunta("c6")}
      {fillPergunta("c7")}
      {fillPergunta("c8")}
      {fillPergunta("c9")}
    </>
  );
}
