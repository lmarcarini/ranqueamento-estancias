import Container from "react-bootstrap/Container";
import Calendar from "../components/Calendar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/auth";
import Link from "next/link";

export default function Home({ datas }) {
  return (
    <Container className="mt-3">
      <h4>
        Sistema de cadastro de informações para ranqueamento das estâncias
        turísticas do estado de São Paulo.
      </h4>
      <p>
        O sistema tem objetivo de ranquear as estâncias turísticas do Estado de
        São Paulo. Para isso, a plataforma é baseada no ranqueamento das
        estâncias turísticas categorizada em três tipos:
      </p>
      <ol type="A">
        <li>Atendimento a legislação</li>
        <li>Cumprimento de requisitos</li>
        <li>Realização de pleitos com destinação turística</li>
      </ol>
      <p>
        De acordo com os dados preenchidos pelo município e verificados pela
        Secretaria de Turismo do Estado, será dada uma pontuação para cada
        município, validando posteriormente a divulgação dos resultados. Os
        municípios com as menores pontuações terão o título de estância
        turística substituído pelas três cidades melhores classificadas na
        pontuação dos MITs (municípios de interesse turístico).
      </p>
      <p>
        Para maiores informações consulte a{" "}
        <Link href="/ajuda">
          <a>aba AJUDA</a>
        </Link>{" "}
        ou veja o{" "}
        <a href="/Manual de Utilização.pdf">
          Manual de Utilização do Software do Sistema de Ranqueamento de
          Estâncias do Estado de São Paulo
        </a>
        .
      </p>
      <p>
        <b>
          Conecte-se e fique atento aos prazos para envio de dados e para
          abrimento de recurso.
        </b>
      </p>
      <Calendar datas={datas} />
    </Container>
  );
}

export async function getStaticProps() {
  let eventosRef = collection(db, "eventos");
  const eventosSnap = await getDocs(eventosRef);
  const datas = eventosSnap.docs
    .map((doc) => doc.data())
    .sort((a, b) => a.date.localeCompare(b.date));

  return {
    props: {
      datas,
    },
    revalidate: 120,
  };
}
