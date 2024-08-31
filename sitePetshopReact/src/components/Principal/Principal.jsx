import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Menu from "../Header/Menu";
import Secao from "../Secao/Secao";
import Cartao from "../Cartao/Cartao";
import Titulo from "../Titulo/Titulo";
import Formulario from "../Formulario/Formulario";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Principal.css';
import { collection, getDocs } from "firebase/firestore";
import db from "../../database/firebaseConfig";

const Principal = () => {

  const lerBanco = async () => {
    const comentarios = await getDocs(collection(db, "comentarios"));
    comentarios.forEach((documento) => {
      console.log(documento.data(email));
    });

  }

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
    </div>
  );
};
export default Principal;
