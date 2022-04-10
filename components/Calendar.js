import { Placeholder } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import DataEvento from "./DataEvento";

export default function Calendar({ datas }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Calendário</Card.Title>

        {datas ? (
          datas.map(({ date, nome }, i) => (
            <DataEvento key={i} date={date}>
              {nome}
            </DataEvento>
          ))
        ) : (
          <Placeholder as="Card.Text" animation="glow">
            <Placeholder xs="12" />
            <Placeholder xs="12" />
            <Placeholder xs="12" />
            <Placeholder xs="12" />
          </Placeholder>
        )}
      </Card.Body>
    </Card>
  );
}
