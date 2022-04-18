import Table from "react-bootstrap/Table";
import pontuacao from "../../scripts/pontuacao";
import { pontuacaoFinal } from "../../scripts/finalScore";

export default function TabelaMunicipiosValidacao({
  listaMunicipios,
  handleSelecionar,
}) {
  const handleClick = (nome) => {
    handleSelecionar(nome);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Posição</th>
          <th>Município</th>
          <th>Pontuação</th>
          <th>Validada</th>
        </tr>
      </thead>
      <tbody>
        {listaMunicipios.map((dados, i) => (
          <tr key={i} onClick={(_) => handleClick(dados.municipio)}>
            <td>{i + 1}</td>
            <td>{dados.municipio}</td>
            <td>{pontuacao(dados) || "0"}</td>
            <td>{pontuacaoFinal(dados) || "-"}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
