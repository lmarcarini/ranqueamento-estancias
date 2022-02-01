import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const day = 1000 * 60 * 60 * 24;

const compareDates = (date1, date2) => {
  console.log(date1);
  let offset = date2.getTime() - date1.getTime();
  if (offset < 0) return "-1";
  if (offset < day) return "0";
  return "1";
};

export default function DataEvento({ data, children }) {
  const [estado, setestado] = useState("antes");

  const styles = {
    antes: { color: "black" },
    urgente: { color: "red" },
    depois: { color: "grey" },
  };

  useEffect(() => {
    let hoje = new Date(Date.now());
    let estados = { "-1": "antes", 0: "urgente", 1: "depois" };
    let [dia, mes, ano] = data.split("/");
    setestado(estados[compareDates(new Date(ano, mes - 1, dia), hoje)]);
  }, [data]);
  return (
    <Row style={styles[estado]}>
      <Col md="auto">{data}</Col>
      <Col>{children}</Col>
    </Row>
  );
}
