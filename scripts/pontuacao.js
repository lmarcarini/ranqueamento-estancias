import gabarito from "./perguntas.json";

const scoreRespostas = (gabarito, perguntas) =>
  gabarito.reduce((acc, [key, respostas]) => {
    let resposta = respostas.opcoes.find(
      (reference) => reference.value === perguntas[key]?.resposta
    );
    return acc + (resposta?.pontuacao || 0);
  }, 0);

const scorePleitos = (gabarito, pleitos) =>
  Math.min(
    33.3,
    Object.values(pleitos || {}).reduce(
      (acc, arr) =>
        acc +
        (gabarito.pleitos.situacao[arr["situacao"]] || 0) +
        (gabarito.pleitos.tipo[arr["tipo"]] || 0),
      0
    )
  );

export default function pontuacao(doc) {
  if (!doc.perguntas) return 0;
  let score = scoreRespostas(Object.entries(gabarito.perguntas), doc.perguntas);
  score += scorePleitos(gabarito, doc.pleitos);
  return score.toFixed(1);
}
