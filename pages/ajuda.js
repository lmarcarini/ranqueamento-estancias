import Container from "react-bootstrap/Container";
import Image from "next/image";
import { Button, Table } from "react-bootstrap";

const Ajuda = () => {
  const handleOpenPDF = () => {
    window.open("/Manual de Utilização.pdf", "_blank");
  };

  return (
    <Container className="mt-3 mb-3">
      <Button className="mb-3" onClick={handleOpenPDF}>
        Baixar manual de apoio do software
      </Button>
      <p>
        O estado de São Paulo tem 645 municípios, dos quais apenas 70 cidades
        são consideradas estâncias e 140 são considerados Municípios de
        Interesse Turístico (MIT).{" "}
      </p>
      <p>
        Para o fomento do turismo as novas legislações estaduais a de n° 1.261
        de 29 de abril de 2015 e a de n° 16.283 de 15 de julho de 2016,
        estabelecem condições e requisitos para a permanência da classificação
        das estâncias e dos MITs, buscando estabelecer requisitos para a
        consolidação e permanência das estâncias na distribuição dos recursos
        disponíveis para os programas de infraestrutura e melhoria, como também
        uma competição saudável entre as cidades nomeadas estâncias, e os
        denominados municípios de interesse turístico, que se diferenciam pelo
        montante dos recursos recebidos para aplicação do turismo no Estado.
      </p>
      <p>
        Assim, o ranqueamento é fundamentado no{" "}
        <u>
          Modelo de critérios para o regulamento do ranqueamento das estâncias
          turísticas
        </u>
        . O modelo é baseado em três categorias:
      </p>

      <ol>
        <li type="A">Atendimento a legislação</li>
        <li type="A">Cumprimento de requisitos</li>
        <li type="A">Realização de pleitos com destinação turística</li>
      </ol>

      <p>
        A somatória de avaliação será composta por uma matriz de pontuação para
        uma hierarquização das estâncias, compreendendo os critérios de cada
        categoria.
      </p>
      <p>
        Considera-se que a estância que conseguir compor os melhores atributos
        do modelo estará não só garantindo a sua permanência na categoria das
        estâncias, mas também estará conseguindo melhor fomentar o turismo na
        concepção de uma análise metodológica conceitual do termo turismo,
        pautado no desenvolvimento e crescimento da atividade.
      </p>
      <p>
        A figura a seguir ilustra o{" "}
        <b>
          Modelo de critérios para o regulamento do ranqueamento das estâncias
          turísticas
        </b>
        .
      </p>

      <Image
        src="tripe-ranqueamento.png"
        layout="responsive"
        height="1526"
        width="2314"
      />
      <br />
      <h5>DESCRIÇÃO DAS CATEGORIAS:</h5>
      <ol type="A">
        <li>
          <u>
            <b>Atendimento a legislação</b>
          </u>{" "}
          n° 1.261 de 29 de abril de 2015, que enfatiza:
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
          <u>
            <b>Pleitos indutores de turismo:</b>
          </u>{" "}
          que caracteriza pleitos direcionados a base escalonada de:
          <ol type="a">
            <li>Atrativos naturais </li>
            <li>Atrativos culturais</li>
            <li>Infraestrutura turística </li>
            <li>Infraestrutura de apoio</li>
            <li>Infraestrutura de acesso </li>
            <li>Infraestrutura básica urbana </li>
          </ol>
          <br />
          A figura ilustra o modelo escalonado da categoria de pleitos indutores
          do turismo
          <Image
            src="categorias-pleitos.png"
            layout="responsive"
            height="1373"
            width="2174"
          />
          <p>
            Considera-se que os pleitos devem seguir o modelo de critérios
            apresentado na nessa categoria, na qual direcionam o fomento do
            turismo na concepção verdadeira de uma estância turística. Baseado
            na definição de que uma estância tem que oferecer atrativos que
            define e distingue um lugar turístico, os pleitos de indução a
            valorização aos atrativos naturais e culturais são considerados
            estratégicos para o fomento do turismo. Consequentemente, o modelo
            escalonado de categorias de pleitos indutores é enfatizado em
            relação à maior aproximação dos pleitos conceituados para uma
            valorização turística.
          </p>
        </li>
        <li>
          <u>
            <b>Conjunto de requisitos:</b>
          </u>{" "}
          que enfatiza a necessidade de:
          <ol>
            <li>Avaliação dos pleitos</li>
            <li>Participação no turismo regional</li>
            <li>Pleito regional</li>
            <li>Incentivos e investimentos turísticos</li>
            <li>Capacitação turística</li>
            <li>Gestão de convênios</li>
            <li>Programa de Turismo educacional</li>
            <li>Marketing turístico</li>
            <li>Pesquisa de satisfação dos pleitos</li>
          </ol>
        </li>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Requisito</th>
              <th>Sistematização</th>
              <th>Observação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>1. Avaliação do COMTUR</b>
              </td>
              <td>
                É importante que o COMTUR seja composto por partícipes de 1/3 da
                iniciativa pública e 2/3 da iniciativa privada.
              </td>
              <td>
                Os conselhos municipais são ferramentas de participação ativa
                dos cidadãos no processo de elaboração de políticas públicas. O
                art. 29, XII da Constituição Federal determina a cooperação das
                associações representativas no planejamento municipal,
                demonstrando o papel fundamental a ser exercido pelos conselhos
                municipais. Os conselhos municipais são compostos por
                representantes da Prefeitura Municipal e da sociedade civil. O
                caráter permanente desses conselhos possibilita que a
                participação do cidadão efetivamente se converta na formulação,
                implementação e avaliação das políticas públicas municipais.
              </td>
            </tr>
            <tr>
              <td>
                <b>2. Participação no turismo regional</b>
              </td>
              <td>
                É importante que as cidades estâncias estejam engajadas no
                desenvolvimento regional, inseridas no Mapa Brasileiro do
                Turismo do Ministério do Turismo.
              </td>
              <td>
                Os conselhos municipais são ferramentas de participação ativa
                dos cidadãos no processo de elaboração de políticas públicas. O
                art. 29, XII da Constituição Federal determina a cooperação das
                associações representativas no planejamento municipal,
                demonstrando o papel fundamental a ser exercido pelos conselhos
                municipais. Os conselhos municipais são compostos por
                representantes da Prefeitura Municipal e da sociedade civil. O
                caráter permanente desses conselhos possibilita que a
                participação do cidadão efetivamente se converta na formulação,
                implementação e avaliação das políticas públicas municipais.
              </td>
            </tr>
            <tr>
              <td>
                <b>3. Pleito regional</b>
              </td>
              <td>
                Salienta-se que as estâncias limítrofes devem apresentar pleitos
                fundamentados no desenvolvimento regional.
              </td>
              <td>
                Salienta-se que as estâncias limítrofes devem apresentar pleitos
                fundamentados no desenvolvimento regional. Considera-se que
                estâncias possam apresentar pleitos de importância regional ou
                padronizados regionalmente com outras estâncias ou municípios de
                interesse turístico. Este critério deve ser formatado em uma
                política pública estadual, incentivando que os Municípios
                estâncias trabalhem em conjunto.
              </td>
            </tr>
            <tr>
              <td>
                <b>4. Incentivos e investimentos turísticos</b>
              </td>
              <td>
                Ressalta-se a capacidade de investimento e incentivos das
                estâncias para o fomento do turismo por meio de iniciativas
                privadas, parcerias, legislações municipais, entre outros.
              </td>
              <td>
                As estâncias não podem ficar focadas somente aos recursos do
                DADETUR, devem apresentar capacidade de investimento baseado na
                estruturação do turismo, como também leis municipais de
                incentivo a atividade. Este requisito pode fazer parte de uma
                política pública que seja fundamentado pelo COMTUR, por meio de
                um documento municipal, onde conste da responsabilidade,
                envolvimento, engajamento, e disponibilidade de contrapartida
                dos empreendedores locais e ONGs constituídas (Associação de
                artesãos, por exemplo), que se comprometam na contrapartida do
                investimento do setor público.
              </td>
            </tr>
            <tr>
              <td>
                <b>5. Capacitação turística</b>
              </td>
              <td>
                Os cursos de capacitação têm como base o efeito multiplicador
                para o trade turístico das estâncias. Cabe ao poder público
                oferecer cursos de acordo com sua demanda real.
              </td>
              <td>
                Os cursos devem ser obrigatórios e multiplicadores para o trade
                turístico das estâncias. A Secretaria de Turismo do Estado deve
                oferecer capacitação técnica de hospitalidade focada ao
                aprimoramento dos serviços turísticos, como também as estâncias
                devem oferecer cursos de capacitação para o <i>trade</i>{" "}
                turístico.
              </td>
            </tr>
            <tr>
              <td>
                <b>6. Gestão de convênios</b>
              </td>
              <td>
                A Secretaria de Turismo do Estado deve oferecer capacitação de
                gestão do manual de convênios do DADETUR a cada dois anos para
                as estâncias e os MIT.
              </td>
              <td>
                Os cursos de capacitação devem ser realizados para os prefeitos,
                presidentes da câmara de vereadores, secretários municipais de
                turismo, gestores técnicos de convênios das prefeituras, membros
                do COMTUR e membros responsáveis por validação e acompanhamento
                dos convênios do Estado como requisito obrigatório do
                ranqueamento.
              </td>
            </tr>
            <tr>
              <td>
                <b>7. Programa de Turismo educacional</b>
              </td>
              <td>
                Os municípios devem apresentar programa de educação turística
                para efeito de sensibilização e conscientização do turismo.
              </td>
              <td>
                É importante que o programa de educação turística esteja
                inserido no sistema da legislação Estadual. Enfatiza-se que as
                crianças são multiplicadoras de conhecimento, sendo
                indispensável no percurso de uma conscientização turística um
                programa de educação turística nas estâncias.
              </td>
            </tr>
            <tr>
              <td>
                <b>
                  8. <i>Marketing</i> turístico
                </b>
              </td>
              <td>
                É necessário que a estâncias realizem estratégias de marketing
                com promoção de divulgação embasada no crescimento da marca do
                turismo no Estado, além da difusão da publicidade dos atrativos.
              </td>
              <td>
                Destacam-se as ações de marketing e promoção devem ser
                contrapartida obrigatória das estâncias. Levar em consideração
                para a produção do material os empreendimentos e ONGs
                constituídas que farão parte do mesmo, sendo necessário
                participar da capacitação turística.
              </td>
            </tr>
            <tr>
              <td>
                <b>9. Pesquisa de satisfação dos pleitos</b>
              </td>
              <td>
                Destaca-se que a satisfação do gerenciamento da gestão dos
                recursos do DADETUR é indispensável perante a população,
                validando a frase de que o turismo só será bom para o turista
                quando primeiramente for bom para a comunidade.
              </td>
              <td>
                Ter dados sobre a satisfação do turismo perante o autóctone
                torna evidente a contemplação da realização positiva dos pleitos
                realizados com os recursos do DADETUR nas estâncias. Ressalta-se
                que a falta de dados sobre a atividade turística, principalmente
                perante o autóctone, pode interferir em processos de decisão,
                fundamental para a sustentabilidade e respeito em relação às
                relações interpessoais, intrínseca da atividade turística que
                causa impactos diretos em relação aos aspectos culturais,
                sociais, econômicos e ambientais.
              </td>
            </tr>
          </tbody>
        </Table>
      </ol>
      <p>
        De acordo com os dados preenchidos e verificados pela Secretaria
        Estadual de Turismo, será dada uma pontuação para cada município. Os
        municípios com as menores pontuações terão o título de estância
        turística substituído para MITs, e os melhores MITs pássaro a ser
        considerados Estâncias Turísticas.
      </p>
      <p>
        Acredita-se que a legislação vigente possa garantir uma competição
        saudável entre os municípios paulistas, fortalecendo o crescimento do
        turismo de maneira indutora na conceituação teórica do desenvolvimento
        do setor.
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
