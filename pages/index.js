import Container from "react-bootstrap/Container";
import Calendar from "../components/Calendar";

export default function Home() {
  return (
    <Container className="mt-3">
      <p>
        Sistema de cadastro de informações para ranqueamento das estâncias
        turísticas do estado de São Paulo.
      </p>
      <p>
        O ranqueamento das estâncias turísticas é baseado em três categorias,
        atendimento a legislação, cumprimento de requisitos e realização de
        pleitos com destinação turística. De acordo com os dados preenchidos e
        verificados pela Secretaria de Turismo, será dada uma pontuação para
        cada município. Os municípios com as menores pontuações terão o título
        de estância turística substituído.
      </p>
      <p>
        Fique atento aos prazos para envio de dados e para abrimento de recurso.
      </p>
      <Calendar />
    </Container>
  );
}
