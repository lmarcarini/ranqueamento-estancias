import PerguntaForm from "./PerguntaForm.js";
import gabarito from "../../scripts/perguntas.json";

export default function SectionA({ id, dadosAnteriores }) {
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
      <h4 id={id}>A) Atendimento à legislação</h4>
      {fillPergunta("a1")}
      {fillPergunta("a2")}
      <h6>A.3 Certidões emitidas que comprovem:</h6>
      {fillPergunta("a3_1")}
      {fillPergunta("a3_2")}
      {fillPergunta("a3_3")}

      <h6>
        A.4 Cópia do plano diretor de turismo com ata das últimas seis reuniões
        do COMTUR:
      </h6>
      {fillPergunta("a4_1")}
      {fillPergunta("a4_2")}
    </>
  );
}
