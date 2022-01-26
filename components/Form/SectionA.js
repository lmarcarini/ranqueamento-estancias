import PerguntaForm from "./PerguntaForm.js";
import perguntas_a1 from "../../scripts/perguntas_a1.json";
import perguntas_a3 from "../../scripts/perguntas_a3.json";
import perguntas_a4 from "../../scripts/perguntas_a4.json";

export default function SectionA({ id, dadosAnteriores }) {
  return (
    <>
      <h4 id={id}>Atendimento à legislação</h4>
      {perguntas_a1.map(({ cabecalho, info, codigo, opcoes }) => (
        <PerguntaForm
          cabecalho={cabecalho}
          info={info}
          key={codigo}
          codigo={codigo}
          opcoes={opcoes}
          resposta={
            dadosAnteriores?.perguntas &&
            dadosAnteriores?.perguntas[codigo]?.resposta
          }
        ></PerguntaForm>
      ))}

      <h5>A.3 Certidões emitidas que comprovem:</h5>

      {perguntas_a3.map(({ cabecalho, info, codigo, opcoes }) => (
        <PerguntaForm
          cabecalho={cabecalho}
          info={info}
          key={codigo}
          codigo={codigo}
          opcoes={opcoes}
          resposta={
            dadosAnteriores?.perguntas &&
            dadosAnteriores?.perguntas[codigo]?.resposta
          }
        ></PerguntaForm>
      ))}

      <h5>
        A.4 Cópia do plano diretor de turismo com ata das últimas seis reuniões
        do COMTUR:
      </h5>

      {perguntas_a4.map(({ cabecalho, info, codigo, opcoes }) => (
        <PerguntaForm
          cabecalho={cabecalho}
          info={info}
          key={codigo}
          codigo={codigo}
          opcoes={opcoes}
          resposta={
            dadosAnteriores?.perguntas &&
            dadosAnteriores?.perguntas[codigo]?.resposta
          }
        ></PerguntaForm>
      ))}
    </>
  );
}
