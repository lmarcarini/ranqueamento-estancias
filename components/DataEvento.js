import { useMemo } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function DataEvento({ date, children }) {
  const styles = {
    antes: { color: "black" },
    urgente: { color: "red" },
    depois: { color: "grey" },
  };

  const estado = useMemo(() => {
    let hoje = new Date(Date.now());
    let [dia, mes, ano] = date.split("/");
    let data = new Date(ano, mes - 1, dia);
    let offset = hoje.getTime() - data.getTime();
    if (offset < 0) return "antes";
    let week = 1000 * 60 * 60 * 24 * 7;
    if (offset < week) return "urgente";
    return "depois";
  }, [date]);

  return (
    <Row style={styles[estado]}>
      <Col md="auto">{date}</Col>
      <Col>{children}</Col>
    </Row>
  );
}
