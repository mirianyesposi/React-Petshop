import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Secao from "../Secao/Secao";
import Titulo from "../Titulo/Titulo";
import Formulario from "../Formulario/Formulario";
import db from "../../database/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import './Admin.css';

const Admin = () => {
  const [servico, setServico] = useState()

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

  return(
    <>
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
    </>
  )
};

export default Admin;