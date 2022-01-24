import gabarito from "../scripts/respostas.json";

const scoreRespostas = (gabarito, perguntas) =>
  gabarito.reduce((acc, [key, respostas]) => {
    let resposta = perguntas[key]?.resposta;
    return acc + (respostas[resposta] || 0);
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
  let score = scoreRespostas(Object.entries(gabarito.respostas), doc.perguntas);
  score += scorePleitos(gabarito, doc.pleitos);
  return score.toFixed(1);
}
