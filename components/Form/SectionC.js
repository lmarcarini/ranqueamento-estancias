import perguntas_c1 from "../../scripts/perguntas_c1";
import perguntas_c2 from "../../scripts/perguntas_c2";
import PerguntaForm from "./PerguntaForm";

export default function SectionC({ id, dadosAnteriores }) {
  return (
    <>
      <h4 id={id}>Requisitos</h4>
      <h5>C.1 Estruturação e composição do COMTUR</h5>
      {perguntas_c1.map(({ cabecalho, info, codigo, opcoes }) => (
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

      {perguntas_c2.map(({ cabecalho, info, codigo, opcoes }) => (
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
