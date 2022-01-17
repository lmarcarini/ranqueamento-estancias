import Table from "react-bootstrap/Table";

export default ({ listaMunicipios }) => {
  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>Posição</th>
          <th>Município</th>
          <th>Pontuação</th>
        </tr>
      </thead>
      <tbody>
        {listaMunicipios.map(({ posicao, nome, pontuacao }, i) => (
          <tr key={i}>
            <td>{posicao}</td>
            <td>{nome}</td>
            <td>{pontuacao}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
