import gabarito from "../scripts/respostas.json";

export default function pontuacao(doc) {
  let score = 0;
  score = Object.entries(gabarito.respostas).reduce(
    (acc, arr) =>
      acc + (gabarito.respostas[arr[0]][doc.respostas[arr[0]]] || 0),
    0
  );
  score += Math.min(
    33.3,
    Object.values(doc.pleitos || {}).reduce(
      (acc, arr) =>
        acc +
        (gabarito.pleitos.situacao[arr["situacao"]] || 0) +
        (gabarito.pleitos.tipo[arr["tipo"]] || 0),
      0
    )
  );
  return score.toFixed(1);
}
