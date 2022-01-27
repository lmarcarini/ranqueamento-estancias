import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import TabelaMunicipiosValidacao from "../components/Validacao/TabelaMunicipiosValidacao";
import ValidarForm from "../components/ValidarForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { db } from "../Firebase/auth";
import { collection, getDocs } from "firebase/firestore";

export default function Validacao() {
  const [municipios, setmunicipios] = useState([]);
  const [cadastros, setcadastros] = useState([]);
  const [municipioSelecionado, setMunicipioSelecionado] = useState(false);
  const [dados, setdados] = useState(null);

  const fetchCadastros = async () => {
    let cadastrosRef = collection(db, "dadosCadastrados");
    const querySnapshot = await getDocs(cadastrosRef);
    let municipios = querySnapshot.docs.map((doc) => ({
      nome: doc.data().municipio,
    }));
    setmunicipios(municipios);
    let cadastros = Object.fromEntries(
      querySnapshot.docs.map((doc) => [doc.data().municipio, doc.data()])
    );
    setcadastros(cadastros);
  };

  useEffect(() => {
    fetchCadastros();
  }, []);

  const handleSelecionar = (municipio) => {
    setMunicipioSelecionado(municipio);
    setdados(cadastros[municipio]);
  };

  const handleVoltar = (e) => {
    e.preventDefault();
    setMunicipioSelecionado(false);
  };

  return (
    <Container className="mt-3 mb-3">
      {!municipioSelecionado ? (
        <p>Selecione um município para validar:</p>
      ) : (
        <Button onClick={handleVoltar} variant="secondary">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ width: "18px", marginLeft: "5px" }}
          ></FontAwesomeIcon>{" "}
          Voltar
        </Button>
      )}
      {municipioSelecionado ? (
        <ValidarForm dados={dados}></ValidarForm>
      ) : (
        <TabelaMunicipiosValidacao
          listaMunicipios={municipios}
          handleSelecionar={handleSelecionar}
        />
      )}
    </Container>
  );
}
