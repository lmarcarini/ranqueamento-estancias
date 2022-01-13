import { useState } from "react";
import Card from "react-bootstrap/Card";
import DataEvento from "./DataEvento";

export default () => {
  const [datas, setdatas] = useState([
    { data: new Date(2021, 11, 5), descricao: "Cadastro das informações" },

    {
      data: new Date(2022, 2, 2),
      descricao: "Divulgação de resultados",
    },
    {
      data: new Date(2022, 3, 2),
      descricao: "Último dia para recurso de pontuação",
    },
    {
      data: new Date(2022, 4, 2),
      descricao: "Resultado após recursos",
    },
  ]);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Calendário</Card.Title>

        {datas.map(({ data, descricao }, i) => (
          <DataEvento key={i} data={data}>
            {descricao}
          </DataEvento>
        ))}
      </Card.Body>
    </Card>
  );
};
