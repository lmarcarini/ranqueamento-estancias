import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import TabelaMunicipiosValidacao from "../components/Validacao/TabelaMunicipiosValidacao";
import ValidarForm from "../components/ValidarForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import useCadastros from "../customhooks/useCadastro";

export default function Validacao() {
  const cadastros = useCadastros();
  const [municipioSelecionado, setMunicipioSelecionado] = useState(false);

  const handleSelecionar = (municipio) => {
    setMunicipioSelecionado(municipio);
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
        <ValidarForm
          dados={cadastros.find(
            (dados) => dados.municipio === municipioSelecionado
          )}
        ></ValidarForm>
      ) : (
        <TabelaMunicipiosValidacao
          listaMunicipios={cadastros}
          handleSelecionar={handleSelecionar}
        />
      )}
    </Container>
  );
}
