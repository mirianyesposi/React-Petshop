import React from "react";
import Cabecalho from "./components/Cabecalho";
import Menu from "./components/Menu";
import Secao from "./components/Secao";
import Cartao from "./components/Cartao";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";
import "./App.css";

import { collection, getDocs } from "firebase/firestore";
import db from "./database/firebaseConfig";

const App = () => {
  //Busca todos os documentos da coleção "comentarios"
  //e lista no console cada um dos documentos salvos
  const lerBanco = async () => {
    const comentarios = await getDocs(collection(db, "comentarios"));
    comentarios.forEach((documento) => {
      console.log(documento.data());
    });
  };

  const campos = [
    //VETOR de OBJETOS
    {
      //Começa o Objeto
      nome: "Nome completo",
      id: "nome",
      tipo: "text",
    }, //Fim do OBJETO
    {
      nome: "Email Válido",
      id: "email",
      tipo: "email",
    },
    {
      nome: "Cidade",
      id: "cidade",
      tipo: "text",
    },
    {
      nome: "Estado",
      id: "estado",
      tipo: "text",
    },
    {
      nome: "Telefone de Contato",
      id: "fone",
      tipo: "text",
    },
    {
      nome: "Deixe seu recado",
      id: "recado",
      tipo: "text",
    },
  ];

  const camposDoServico = [
    //VETOR de OBJETOS
    {
        //Começa o Objeto
        nome: "Titulo",
        id: "titulo",
        tipo: "text",
      }, //Fim do OBJETO
      {
        nome: "Descrição",
        id: "desc",
        tipo: "text",
      },
      {
        nome: "Imagem",
        id: "img",
        tipo: "text",
      },
  ];

  return (
    <div>
      <Cabecalho />
      <Menu />
      <Secao>
        <img src="src/assets/topo.jpg"></img>
      </Secao>

      <Secao>
        <Titulo texto="Serviços" />
        <Cartao
          descricao="Um texto descritivo"
          imagem="#"
          titulo="Um LOGO BEM GRANDE"
        />
        <Cartao descricao="LOREN IPSUN" imagem="#" titulo="Um TITULO" />
      </Secao>

      <Secao>
        <Titulo texto="Contato" />

        <Formulario campos={campos} />
        <button onClick={lerBanco}>Ler dados do Banco</button>
      </Secao>

      <Secao>
        <Titulo texto="Cadastro de serviço" />

        <Formulario campos={camposDoServico} bancoDeDados={"servicos"}/>
        <button onClick={lerBanco}>Ler dados do Banco</button>
      </Secao>

    </div>
  );
};
export default App;
