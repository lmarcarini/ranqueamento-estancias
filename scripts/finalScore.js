import gabarito from "./perguntas.json";

const scoreRespostas = (gabarito, perguntas) =>
  gabarito.reduce((acc, [key, dados]) => {
    let respostas = dados.opcoes;
    let resposta = perguntas[key];
    let respostaValidada = resposta?.validacao;
    let respostaMunicipio = resposta?.resposta;
    let actual = 0;
    if (respostaValidada !== undefined) actual = respostaValidada;
    else actual = respostaMunicipio;
    let answerScore =
      respostas.find((reference) => reference.value === actual) || 0;
    return acc + answerScore.pontuacao;
  }, 0);

const scorePleitos = (gabarito, pleitos) =>
  Math.min(
    33.3,
    Object.values(pleitos || {}).reduce(
      (acc, arr) =>
        acc +
        (gabarito.pleitos.situacao[arr["situacaoValidado"]] ||
          gabarito.pleitos.situacao[arr["situacao"]] ||
          0) +
        (gabarito.pleitos.situacao[arr["tipoValidado"]] ||
          gabarito.pleitos.tipo[arr["tipo"]] ||
          0),
      0
    )
  );

export function pontuacaoFinal(doc) {
  if (!doc.perguntas) return 0;
  let score = scoreRespostas(Object.entries(gabarito.perguntas), doc.perguntas);
  score += scorePleitos(gabarito, doc.pleitos);
  return score.toFixed(1);
}
