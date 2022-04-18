import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InfoIcon from "./InfoIcon";

export default function SectionB({ id, dadosAnteriores }) {
  const [pleitos, setpleitos] = useState([]);
  const [nPleitos, setnPleitos] = useState(0);

  const adicionarPleito = () => {
    setpleitos([...pleitos, { id: nPleitos }]);
    setnPleitos(nPleitos + 1);
  };

  useEffect(() => {
    if (!dadosAnteriores) return;
    setpleitos(
      Object.entries(dadosAnteriores.pleitos).map(([key, pleito], i) => ({
        ...pleito,
        id: i,
      }))
    );
    setnPleitos(dadosAnteriores.pleitos.length || 0);
  }, [dadosAnteriores]);

  const excluir = (e) => {
    let id = e.target.id;
    let tempPleitos = [...pleitos];
    tempPleitos.splice(id, 1);
    setpleitos(tempPleitos);
  };

  return (
    <>
      <h4 id={id}>
        B) Pleitos{" "}
        <InfoIcon>
          Nesse item deve ser indexado os pleitos{" "}
          <b>
            REALIZADOS NO PERÍODO DE ATÉ DOIS ANOS QUE ANTECEDEM O PREENCHIMENTO
            DA PLATAFORMA, INDEPENDENTE DA QUANTIDADE DE PLEITOS.
          </b>
        </InfoIcon>
      </h4>
      {!(pleitos?.length > 0) && (
        <p>
          Nenhum pleito cadastrado. Clique em adicionar pleitos para começar a
          cadastrar.
        </p>
      )}
      {pleitos.map(
        ({ id, nome = "", situacao = "", tipo = "", valor = 0 }, i) => (
          <Form.Group className="mb-4" id={i} key={id}>
            <h5>Pleito #{i + 1}: </h5>
            <Form.Label>Nome do pleito:</Form.Label>
            <Form.Control
              type="text"
              id="nome"
              name={"pleito_nome_" + i}
              defaultValue={nome}
              required
            ></Form.Control>
            <Form.Label>Valor do pleito (R$):</Form.Label>
            <Form.Control
              type="number"
              id="valor"
              name={"pleito_valor_" + i}
              defaultValue={valor}
              required
            ></Form.Control>
            <Form.Label>
              Situação:{" "}
              <InfoIcon>
                <ul>
                  <li>
                    <b>Obras finalizadas:</b> são os projetos que apresentam o
                    índice percentual de conclusão de obra de 95% a 100%,
                    considerando que essas obras obedeceram aos trâmites
                    burocráticos dos convênios com o Estado de São Paulo.
                    Ressalta-se que, as obras que demonstrarem os índices de 95%
                    a 99,9% de conclusão, podem estar pendentes de alguma
                    documentação e/ou alguma adequação com o item descritivo da
                    planilha do projeto inicial, considerando como obra
                    finalizada.
                  </li>
                  <li>
                    <b>Obras em andamentos:</b> referem-se às obras iniciadas e
                    as obras paradas que ainda continua no processo de
                    construção, independentemente da situação do andamento do
                    projeto por motivos variáveis como a falta de aprovação de
                    prorrogação de prazo, término de contrato com a construtora,
                    falta de documentação, entre outros motivos.{" "}
                  </li>
                  <li>
                    <b>Obras não iniciadas:</b> são obras que após aprovados
                    pelo COC e conveniadas com a Secretaria de Turismo do Estado
                    de São Paulo, não conseguiram dar início ao projeto por
                    algum motivo, como a falta de documentação, mudança do
                    pleito, perca de prazos, entre outros.
                  </li>
                </ul>
              </InfoIcon>
            </Form.Label>
            <Form.Select
              aria-label="Selecione a situação"
              id="situacao"
              defaultValue={situacao}
              name={"pleito_situacao_" + i}
              required
            >
              <option>Selecione a situação do pleito:</option>
              <option value="obra finalizada">obra finalizada</option>
              <option value="obra em andamento">obra em andamento</option>
              <option value="obra não iniciada">obra não iniciada</option>
            </Form.Select>
            <Form.Label>
              Tipo do pleito:{" "}
              <InfoIcon>
                <ul>
                  <li>
                    <b>Atrativos naturais:</b> Pleitos direcionados para
                    valorização de atrativos naturais como monumento e
                    revitalização, considerados geomorfológicos (litoral,
                    correntes, relevo), biogeográficos (agrupamentos vegetais
                    e/ou agrupamentos animais) e os mistos. São classificados de
                    bosques, orlas, rios, lagos, cachoeiras, represas,
                    balneários, vulcões;
                  </li>
                  <li>
                    <b>Atrativos culturais:</b> Monumento, revitalização,
                    revitalização de patrimônio edificado para outra função.
                    Podem ser classificadoscomo históricos, contemporâneos,
                    comerciais e não comerciais, sendo caracterizados
                    pelospatrimônios tombados, centros culturais, galerias,
                    museus, obras de valor cultural local, arquitetura
                    religiosa, arquitetura militar, exposições, festivais,
                    planetários, parques temáticos;
                  </li>
                  <li>
                    <b>Infraestrutura turística:</b> Estrutura que foram
                    motivadas pelo interesse do turismo (turista). Classificadas
                    como hotéis, agências, trens turísticos, posto de
                    informações turísticas, sinalização turística padronizada;
                  </li>
                  <li>
                    <b>Infraestrutura de apoio:</b> Estrutura fundamental para
                    um município e de grande utilidade do turista, sendo
                    indispensável para o turismo (autóctone + turista). São os
                    postos de gasolina, farmácias, hospitais, bancos, loja de
                    souvenires, mercados, restaurantes, parque de exposição,
                    centro de eventos, portais de entrada, equipamentos
                    desportivos;
                  </li>
                  <li>
                    <b>Infraestrutura de acesso:</b> Estruturas fundamentais
                    para a ligação de acesso do local de residência ao destino
                    turístico. Indispensável para o autóctone e utilizada pelos
                    turistas. São as estradas, viadutos, portos, aeroportos,
                    metrôs, trens, rodoviárias; e,
                  </li>
                  <li>
                    <b>Infraestrutura básica urbana:</b> Estruturas fundamentais
                    para o autóctone, que apesar de serem considerados básicos,
                    são fundamentais para o desenvolvimento do turismo em uma
                    localidade. São classificados como obras de saneamento,
                    ruas, sarjetas, pavimentação, revitalização e urbanização de
                    ruas, pontos de ônibus, praças públicas, mobiliário urbano.
                  </li>
                </ul>
              </InfoIcon>
            </Form.Label>
            <Form.Select
              aria-label="Selecione a situação"
              id="tipo"
              defaultValue={tipo}
              name={"pleito_tipo_" + i}
              required
            >
              <option>Selecione o tipo do pleito:</option>
              <option value="Atrativo natural e/ou cultural">
                Atrativo natural e/ou cultural
              </option>
              <option value="Infraestrutura turística">
                Infraestrutura turística
              </option>
              <option value="Infraestrutura de apoio">
                Infraestrutura de apoio
              </option>
              <option value="Infraestrutura de acesso">
                Infraestrutura de acesso
              </option>
              <option value="Infraestrutura básica urbana">
                Infraestrutura básica urbana
              </option>
            </Form.Select>
            <Button onClick={excluir} id={i} className="mt-2" variant="danger">
              Excluir Pleito
            </Button>
          </Form.Group>
        )
      )}

      <Button onClick={adicionarPleito} className="mt-2">
        Adicionar novo pleito
      </Button>
    </>
  );
}
