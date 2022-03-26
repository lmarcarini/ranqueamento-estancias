import Container from "react-bootstrap/Container";
import Calendar from "../components/Calendar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/auth";

export default function Home({ datas }) {
  return (
    <Container className="mt-3">
      <h4>
        Sistema de cadastro de informações para ranqueamento das estâncias
        turísticas do estado de São Paulo.
      </h4>
      <p>
        O ranqueamento das estâncias turísticas é baseado em três categorias:
      </p>
      <ol type="A">
        <li>Atendimento a legislação</li>
        <li>Cumprimento de requisitos</li>
        <li>Realização de pleitos com destinação turística</li>
      </ol>
      <p>
        De acordo com os dados preenchidos e verificados pela Secretaria de
        Turismo, será dada uma pontuação para cada município. Os municípios com
        as menores pontuações terão o título de estância turística substituído.
      </p>
      <p>
        <b>
          Fique atento aos prazos para envio de dados e para abrimento de
          recurso.
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
