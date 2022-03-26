import { Placeholder } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import DataEvento from "./DataEvento";

export default function Calendar({ datas }) {
  // const [datas, setdatas] = useState([]);

  // useEffect(() => {
  //   const fetchEventos = async () => {
  //     let eventosRef = collection(db, "eventos");
  //     const eventosSnap = await getDocs(eventosRef);
  //     setdatas(
  //       eventosSnap.docs
  //         .map((doc) => doc.data())
  //         .sort((a, b) => a.date.localeCompare(b.date))
  //     );
  //   };
  //   fetchEventos();
  // }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Calendário</Card.Title>

        {!datas ? (
          datas.map(({ date, nome }, i) => (
            <DataEvento key={i} data={date}>
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
