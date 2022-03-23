import Container from "react-bootstrap/Container";
import Calendar from "../components/Calendar";

export default function Home() {
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
      <Calendar />
    </Container>
  );
}
