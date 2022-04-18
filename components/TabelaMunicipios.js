import { useState } from "react";
import Table from "react-bootstrap/Table";

export default function TabelaMunicipios({ listaMunicipios }) {
  //onclick sort by Posição
  const [municipios, setMunicipios] = useState(listaMunicipios);
  const [ordem, setOrdem] = useState("");

  const sortByPosicao = () => {
    if (ordem === "asc") {
      setMunicipios(listaMunicipios.sort((a, b) => a.posicao - b.posicao));
      setOrdem("desc");
    } else {
      setMunicipios(listaMunicipios.sort((a, b) => b.posicao - a.posicao));
      setOrdem("asc");
    }
  };

  //on click sort by nome
  const sortByNome = () => {
    if (ordem === "asc") {
      setMunicipios(
        listaMunicipios.sort((a, b) => ("" + a.nome).localeCompare(b.nome))
      );
      setOrdem("desc");
    } else {
      setMunicipios(
        listaMunicipios.sort((a, b) => ("" + b.nome).localeCompare(a.nome))
      );
      setOrdem("asc");
    }
  };

  //on click sort by pontuação
  const sortByPontuacao = () => {
    if (ordem === "asc") {
      setMunicipios(listaMunicipios.sort((a, b) => a.pontuacao - b.pontuacao));
      setOrdem("desc");
    } else {
      setMunicipios(listaMunicipios.sort((a, b) => b.pontuacao - a.pontuacao));
      setOrdem("asc");
    }
  };

  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th onClick={sortByPosicao}>Posição</th>
          <th onClick={sortByNome}>Município</th>
          <th onClick={sortByPontuacao}>Pontuação</th>
        </tr>
      </thead>
      <tbody>
        {municipios.map(({ posicao, nome, pontuacao }, i) => (
          <tr key={i}>
            <td>{posicao}</td>
            <td>{nome}</td>
            <td>{pontuacao}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
