import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu";
import Secao from "./components/Secao/Secao";
import Cartao from "./components/Cartao/Cartao";
import Titulo from "./components/Titulo/Titulo";
import Formulario from "./components/Formulario/Formulario";

import './App.css'
import { collection, getDocs } from "firebase/firestore";
import db from "./database/firebaseConfig";

const App = () => {
  const [servico, setServico] = useState()

  const lerBanco = async () => {
    const comentarios = await getDocs(collection(db, "comentarios"));
    comentarios.forEach((documento) => {
      console.log(documento.data(email));
    });

  }

  const lerBancoServicos = async () => {
    const servicos = await getDocs(collection(db, "servicos"));
    let vetor = []
    servicos.forEach((documento) => {
      vetor.push(documento.data())
    });
    setServico(vetor)
  }
  useEffect(() => {
    lerBancoServicos()
  }, [])



  const campos = [  
    {
      nome: "Nome completo",
      id: "nome",
      tipo: "text",
    },
    {
      nome: "Email válido",
      id: "email",
      tipo: "email",
    },
    {
      nome: "Telefone com DDD",
      id: "fone",
      tipo: "number",
    },
    {
      nome: "Deixe seu recado",
      id: "recado",
      tipo: "text",
    },

  ]

  const camposServicos = [
    {
      nome: "Imagem",
      id: "imagem",
      tipo: "text",
    },
    {
      nome: "Titulo",
      id: "titulo",
      tipo: "text",
    },
    {
      nome: "Descrição",
      id: "descrição",
      tipo: "text",
    },

  ]
  return (
    <div>
      <Header />
      <Menu />
      <Secao>
        <img src="src/assets/imagem.png"></img>
      </Secao>
      <Secao>
        <Titulo texto="Contato" />
        <Formulario campos={campos} bancoDeDados={"comentarios"} />
        <button onClick={lerBanco}> Ler bancos de dados </button>
      </Secao>
      <Secao>
        <Titulo texto="Serviços" />
        {   
        servico ?  servico.map((item) => {
          return (
            <Cartao
              descricao={item.descrição}
              imagem={`src/assets/${item.imagem}`}
              titulo={item.titulo}
            />
          )
        }): null
      }
      </Secao>
      <Secao>
        <Titulo texto="Criar Serviços" />
        <Formulario campos={camposServicos} bancoDeDados={"servicos"} />
        <button onClick={lerBancoServicos}> Ler bancos de dados </button>

      </Secao>
    </div>
  );
};
export default App;
