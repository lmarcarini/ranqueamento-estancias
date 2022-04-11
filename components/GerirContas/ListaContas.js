import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

export default function ListaContas({ contas = {}, handleSelect }) {
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Município</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(contas).map((conta) => (
            <tr key={conta.email} onClick={(e) => handleSelect(conta)}>
              <td>{conta.nome}</td>
              <td>{conta.email}</td>
              <td>{conta.tipo}</td>
              <td>{conta.municipio}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
