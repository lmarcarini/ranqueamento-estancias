import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { db } from "../Firebase/auth";
import DataEvento from "./DataEvento";

export default function Calendar() {
  const [datas, setdatas] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      let eventosRef = collection(db, "eventos");
      const eventosSnap = await getDocs(eventosRef);
      setdatas(
        eventosSnap.docs
          .map((doc) => doc.data())
          .sort((a, b) => a.date.localeCompare(b.date))
      );
    };
    fetchEventos();
  }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Calendário</Card.Title>

        {datas.map(({ date, nome }, i) => (
          <DataEvento key={i} data={date}>
            {nome}
          </DataEvento>
        ))}
      </Card.Body>
    </Card>
  );
}
