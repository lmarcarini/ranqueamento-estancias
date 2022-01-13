import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import TabelaMunicipiosValidacao from "../components/Validacao/TabelaMunicipiosValidacao";
import ValidarForm from "../components/ValidarForm";

export default () => {
  const [municipios, setmunicipios] = useState([
    { posicao: 1, nome: "Tupa", pontuacao: 70, pontuacaoValidada: 65 },
    { posicao: 2, nome: "Barretos", pontuacao: 60, pontuacaoValidada: 55 },
    { posicao: 3, nome: "Brotas", pontuacao: 65, pontuacaoValidada: 40 },
  ]);

  const [municipioSelecionado, setMunicipioSelecionado] = useState(false);

  const handleSelecionar = (municipio) => setMunicipioSelecionado(municipio);

  useEffect(() => {
    console.log(municipioSelecionado);
  }, [municipioSelecionado]);

  return (
    <Container>
      {municipioSelecionado ? (
        <ValidarForm dados={{ municipio: municipioSelecionado }}></ValidarForm>
      ) : (
        <TabelaMunicipiosValidacao
          listaMunicipios={municipios}
          handleSelecionar={handleSelecionar}
        />
      )}
    </Container>
  );
};
