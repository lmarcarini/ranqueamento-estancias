//format data from form to be read by score engine
import gabarito from "./perguntas";

export const formatDados = (form, authUser) => {
  const data = Object.fromEntries(new FormData(form).entries());
  return {
    ano: gabarito.ano,
    municipio: authUser.municipio,
    funcionario: authUser.nome,
    data: new Date().toLocaleString("pt-BR"),
    perguntas: Object.entries(data).reduce((acc, [codigo, resposta]) => {
      if (codigo[0] === "a" || codigo[0] === "c")
        acc[codigo] = {
          resposta: resposta,
          cabecalho: gabarito.perguntas[codigo].cabecalho,
        };
      return acc;
    }, {}),
    pleitos: Object.entries(data)
      .filter((x) => /^pleito/.test(x))
      .reduce((pleitos, [x, value]) => {
        let [_, type, codigo] = x.split("_");
        if (!pleitos[codigo]) pleitos[codigo] = {};
        pleitos[codigo][type] = value;
        return pleitos;
      }, {}),
  };
};
