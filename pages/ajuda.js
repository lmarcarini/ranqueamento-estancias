import Container from "react-bootstrap/Container";
import Image from "next/image";
import { Button } from "react-bootstrap";

const Ajuda = () => {
  const handleOpenPDF = () => {
    window.open(
      "/Manual de Utilização do Sistema de Ranqueamento de Estâncias do Estado de São Paulo.pdf",
      "_blank"
    );
  };

  return (
    <Container className="mt-3 mb-3">
      <Button className="mb-3" onClick={handleOpenPDF}>
        Baixar manual de apoio do software
      </Button>
      <p>
        O estado de São Paulo tem 645 municípios, dos quais apenas 70 cidades
        são consideradas estâncias e 140 são considerados Municípios de
        Interesse Turístico (MIT). Para o fomento do turismo as novas
        legislações a de n° 1.261 de 29 de abril de 2015 e a de n° 16.283 de 15
        de julho de 2016, estabelecem condições e requisitos para a permanência
        da classificação das estâncias e dos MITs, buscando estabelecer
        requisitos para a consolidação e permanência das estâncias na
        distribuição dos recursos disponíveis para os programas de
        infraestrutura e melhoria, como também uma competição saudável entre as
        cidades nomeadas estâncias, e os denominados municípios de interesse
        turístico, que se diferenciam pelo montante dos recursos recebidos para
        aplicação do turismo no Estado.
      </p>
      <p>
        Assim, o ranqueamento das estâncias turísticas é baseado em três
        categorias, na qual a somatória de avaliação poderá ser composta por uma
        matriz de avaliação e de pontuação para uma hierarquização das
        estâncias, compreendendo os critérios de:
      </p>
      <ol type="A">
        <li>
          <b>Atendimento a legislação</b> n° 1.261 de 29 de abril de 2015, que
          enfatiza:
          <ul>
            <li>
              Estudo de demanda turística existente nos dois anos anteriores a
              apresentação dos dados;
            </li>
            <li>Inventário turísticos dos atrativos dos municípios;</li>
            <li>Inventário do equipamentos e serviços turísticos;</li>
            <li>Inventário da infraestrutura de apoio turístico;</li>
            <li>
              Certidões emitidas que comprovem água potável sistema de coleta e
              tratamento de esgotos sanitários e gestão de resíduos sólidos
            </li>
            <li>
              Cópia do plano diretor de turismo com ata das últimas seis
              reuniões do COMTUR
            </li>
          </ul>
        </li>
        <li>
          <b>Pleitos indutores de turismo</b>: que caracteriza pleitos
          direcionados a base escalonada de:
          <ul>
            <li>Atrativos naturais</li>
            <li>Atrativos culturais</li>
            <li>Infraestrutura turística </li>
            <li>Infraestrutura de apoio</li>
            <li>Infraestrutura de acesso</li>
            <li>Infraestrutura básica urbana</li>
          </ul>
          A figura ilustra o modelo escalonado de categorias de pleitos
          indutores do turismo:
          <Image
            src="categorias-pleitos.png"
            layout="responsive"
            height="1373"
            width="2174"
          />
        </li>
        <li>
          <b>Conjunto de requisitos</b>: que enfatiza a necessidade de:
          <ul>
            <li>Avaliação dos pleitos</li>
            <li>Participação no turismo regional</li>
            <li>Pleito regional</li>
            <li>Incentivos e investimentos turísticos</li>
            <li>Capacitação turística</li>
            <li>Gestão de convênios</li>
            <li>Programa de Turismo educacional</li>
            <li>Marketing turístico</li>
            <li>Pesquisa de satisfação dos pleitos</li>
            <li>
              <i>
                Histórico do município no DADETUR – requisito restrito somente a
                Secretaria de Turismo do Estado de São Paulo
              </i>
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Considera-se que a estância que conseguir compor os melhores atributos
        do modelo estará não só garantindo a sua permanência na categoria das
        estâncias, mas também estará conseguindo melhor fomentar o turismo na
        concepção de uma análise metodológica conceitual do termo turismo,
        pautado no desenvolvimento e crescimento da atividade.
      </p>

      <p>
        A figura a seguir ilustra o modelo de critérios para o regulamento do
        ranqueamento das estâncias turísticas.
      </p>
      <Image
        src="tripe-ranqueamento.png"
        layout="responsive"
        height="1301"
        width="2425"
      />
      <p>
        De acordo com os dados preenchidos e verificados pela Secretaria
        Estadual de Turismo, será dada uma pontuação para cada município. Os
        municípios com as menores pontuações terão o título de estância
        turística substituído para MITs, e os melhores MITs pássaro a ser
        considerados Estâncias Turísticas. Acredita-se que a legislação vigente
        possa garantir uma competição saudável entre os municípios paulistas,
        fortalecendo o crescimento do turismo de maneira indutora na
        conceituação teórica do desenvolvimento do setor.
      </p>
      <p>
        <i>
          Para maiores informações entrar em contato com a Secretaria de Turismo
          do estado de São Paulo, setor ranqueamento – DADETUR.
        </i>
      </p>
    </Container>
  );
};

export default Ajuda;
