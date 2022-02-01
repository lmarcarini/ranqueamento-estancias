import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { db } from "../Firebase/auth";
import { collection, setDoc, doc, onSnapshot, query } from "firebase/firestore";
import EventoCard from "../components/Eventos/EventoCard";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchEventos = async () => {
      let eventosRef = collection(db, "eventos");
      let q = query(eventosRef);
      const unsubscribe = onSnapshot(q, (eventosSnap) => {
        setEventos(
          eventosSnap.docs.map((doc) => {
            let evento = doc.data();
            evento["id"] = doc.id;
            return evento;
          })
        );
      });
    };
    fetchEventos();
  }, []);

  const handleAdicionarEvento = (e) => {
    e.preventDefault();
    const addEvento = async () => {
      let eventosRef = collection(db, "eventos");

      await setDoc(doc(eventosRef), {
        date: new Date().toLocaleDateString("pt-BR"),
        nome: "Evento",
      });
    };
    addEvento();
  };

  const updateEvento = async (evento) => {
    let eventosRef = collection(db, "eventos");
    console.log(evento);
    await setDoc(doc(eventosRef, evento.id), evento);
  };

  const handleUpdateDate = (date, id) => {
    let evento = eventos.find((evento) => evento.id === id);
    evento.date = date.replace(/(\d+)-(\d+)-(\d+)/, "$3/$2/$1");
    updateEvento(evento);
  };
  return (
    <Container className="mt-3 mb-3">
      <Button onClick={handleAdicionarEvento}>Adicionar Evento</Button>
      <Container className="mt-3">
        {eventos.map(({ nome, date, id }) => (
          <EventoCard
            key={id}
            date={date}
            nome={nome}
            id={id}
            updateDate={handleUpdateDate}
          />
        ))}
      </Container>
    </Container>
  );
}
