import Container from "react-bootstrap/Container";
import Image from "next/image";
import { Button } from "react-bootstrap";

const Ajuda = () => {
  return (
    <Container className="mt-3">
      <Button className="mb-3">Baixar manual de apoio do software</Button>
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
        categorias:
      </p>
      <ol type="A">
        <li> Atendimento a legislação n° 1.261 de 29 de abril de 2015; </li>
        <li> Cumprimento de requisitos; e,</li>
        <li> Realização de pleitos com destinação turística.</li>
      </ol>
      <p>Conforme ilustra a figura a seguir:</p>
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
      <Image
        src="tripe-ranqueamento.png"
        layout="responsive"
        height="1301"
        width="2425"
      />
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
