import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import TabelaMunicipios from "../components/TabelaMunicipios";
import { db } from "../Firebase/auth";
import { collection, getDocs } from "firebase/firestore";

export default function Ranqueamento({ ranqueamentos, anos }) {
  const [municipios, setmunicipios] = useState([]);

  const [anoSelecionado, setAnoSelecionado] = useState(null);
  const selecaoAno = (e) => {
    if (e.target.value === "-1") {
      setAnoSelecionado(null);
      return null;
    }
    let ano = e.target.value;
    setAnoSelecionado(ano);
    setmunicipios(ranqueamentos[ano]);
  };

  return (
    <Container className="mt-3">
      <Form.Select
        aria-label="Selecione a ano do ranqueamento:"
        id="ano"
        onChange={selecaoAno}
      >
        <option value="-1">Selecione o ano do ranqueamento</option>
        {anos.map((ano, i) => (
          <option value={i} key={i}>
            {ano}
          </option>
        ))}
      </Form.Select>
      {anoSelecionado && (
        <TabelaMunicipios listaMunicipios={municipios}></TabelaMunicipios>
      )}
    </Container>
  );
}

export async function getStaticProps() {
  let ranqueamentosRef = collection(db, "ranqueamento");
  const querySnapshot = await getDocs(ranqueamentosRef);
  let anos = querySnapshot.docs.map((doc) => doc.data().ano);
  let ranqueamentos = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      let ranqueRef = collection(doc.ref, "municipios");
      const ranqueSnap = await getDocs(ranqueRef);
      return ranqueSnap.docs.map((doc) => doc.data());
    })
  );

  return {
    props: {
      ranqueamentos,
      anos,
    },
    revalidate: 120,
  };
}
