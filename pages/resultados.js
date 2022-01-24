import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import VisualizadorDados from "../components/VisualizadorDados";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthenticationContext";
import { db } from "../Firebase/auth";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export default function Resultados() {
  const { authUser, loading } = useAuth();
  const [anos, setAnos] = useState([]);
  const [anoSelecionado, setAnoSelecionado] = useState(null);
  const selecaoAno = (e) => {
    setAnoSelecionado(e.target.value);
  };

  const [municipio, setmunicipio] = useState(null);
  useEffect(() => {
    if (!authUser) return false;
    async function fetchUserInfo() {
      const users = collection(db, "users");
      const docRef = doc(users, authUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setmunicipio(docSnap.data().municipio || null);
      }
    }
    fetchUserInfo();
  }, [authUser]);

  const [dadosAnteriores, setDadosAnteriores] = useState(null);
  useEffect(() => {
    if (!municipio) return null;
    async function fetchCadastros() {
      const cadastros = collection(db, "cadastrosAnteriores");
      const q = query(cadastros, where("municipio", "==", municipio));
      const cadastrosSnap = await getDocs(q);
      console.log(cadastrosSnap.docs.map((doc) => doc.data()));
      setDadosAnteriores(cadastrosSnap.docs.map((doc) => doc.data()));
      setAnos(cadastrosSnap.docs.map((doc) => doc.data().ano));
    }
    fetchCadastros();
  }, [municipio]);

  useEffect(() => {
    if (!authUser && !loading) router.push("/");
  }, [authUser, loading]);
  if (loading) return <div>Carregando...</div>;
  if (!authUser && !loading) return <div>Não autorizado</div>;
  return (
    <Container className="mt-3">
      <Row>
        <Form.Select
          aria-label="Selecione o ano:"
          id="ano"
          onChange={selecaoAno}
        >
          <option>Selecione o ano do ranqueamento</option>
          {anos.map((ano, i) => (
            <option value={i} key={i}>
              {ano}
            </option>
          ))}
        </Form.Select>
      </Row>
      <Row>
        {anoSelecionado && (
          <VisualizadorDados
            final={true}
            dados={dadosAnteriores[anoSelecionado]}
          />
        )}
      </Row>
    </Container>
  );
}
