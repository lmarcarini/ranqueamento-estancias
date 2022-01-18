import Table from "react-bootstrap/Table";

export default function TabelaMunicipiosValidacao({
  listaMunicipios,
  handleSelecionar,
}) {
  const handleClick = (e, nome) => {
    console.log(nome);
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
          ({ posicao, nome, pontuacao, pontuacaoValidada = "-" }, i) => (
            <tr key={i} onClick={(e) => handleClick(e, nome)}>
              <td>{posicao}</td>
              <td>{nome}</td>
              <td>{pontuacao}</td>
              <td>{pontuacaoValidada}</td>
            </tr>
          )
        )}
      </tbody>
    </Table>
  );
}
