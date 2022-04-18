import { db } from "../Firebase/auth";
import { collection, getDocs, writeBatch, doc } from "firebase/firestore";
import { useState } from "react";
import { pontuacaoFinal } from "../scripts/finalScore";
import perguntas from "../scripts/perguntas";

const useDivulgar = () => {
  const [divulgando, setDivulgando] = useState(false);
  //function to get all docs from a collection
  const getAllDocs = async (collectionName) => {
    const collectionRef = collection(db, collectionName);
    const docs = await getDocs(collectionRef);
    return docs.docs.map((doc) => {
      let data = doc.data();
      data.id = doc.id;
      data.pontuacao = pontuacaoFinal(data);
      return data;
    });
  };

  //transaction to read create and delete docs from a collection to another
  const transaction = async (
    originCollection,
    destinationCollection,
    array,
    rankArray
  ) => {
    const batch = writeBatch(db);
    array.forEach((data) => {
      batch.set(
        doc(db, destinationCollection, data.municipio + "_" + data.ano),
        data
      );
    });
    array.forEach((data) => {
      batch.delete(doc(db, originCollection, data.id));
    });
    const ranqueamentoDoc = doc(db, "ranqueamento", perguntas.ano.toString());
    const ranqueamentoYear = { ano: perguntas.ano };
    batch.set(ranqueamentoDoc, ranqueamentoYear);
    rankArray.forEach((data) => {
      console.log(data);
      batch.set(
        doc(
          db,
          "ranqueamento",
          perguntas.ano.toString(),
          "municipios",
          data.nome
        ),
        data
      );
    });
    return await batch.commit();
  };

  const fillWithDados = (dados, municipios) => {
    const array = [...dados];
    municipios.forEach((municipio) => {
      if (!dados.some((data) => data.municipio === municipio.nome)) {
        array.push({
          municipio: municipio.nome,
          ano: perguntas.ano,
          id: municipio.nome + "_" + perguntas.ano,
          pontuacao: 0,
        });
      }
    });
    return array;
  };

  const criarRanqueamento = (dados) => {
    const sorted = dados.sort((a, b) => {
      a.pontuacao - b.pontuacao;
    });
    const ranqueamentoArray = sorted.map((data, i) => {
      return {
        nome: data.municipio,
        ano: data.ano,
        pontuacao: data.pontuacao,
        posicao: i + 1,
      };
    });
    return ranqueamentoArray;
  };

  const divulgar = async () => {
    setDivulgando(true);
    try {
      const dados = await getAllDocs("dadosCadastrados");
      console.log(dados);
      const municipios = await getAllDocs("municipios");
      let dadosComTodos = fillWithDados(dados, municipios);
      console.log(criarRanqueamento(dadosComTodos));
      await transaction(
        "dadosCadastrados",
        "cadastrosAnteriores",
        dados,
        criarRanqueamento(dadosComTodos)
      );
      alert("Divulgação realizada com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro durante o envio!");
    }
    setDivulgando(false);
  };

  return [divulgar, divulgando];
};

export default useDivulgar;
