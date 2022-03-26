import Table from "react-bootstrap/Table";

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
        {listaMunicipios.map(
          ({ municipio, pontuacao, pontuacaoValidada = "-" }, i) => (
            <tr key={i} onClick={(_) => handleClick(municipio)}>
              <td>{i + 1}</td>
              <td>{municipio}</td>
              <td>{pontuacao}</td>
              <td>{pontuacaoValidada}</td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
}
