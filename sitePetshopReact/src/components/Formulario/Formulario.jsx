import { useState } from "react";
import React from "react";
import "./Formulario.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../../database/firebaseConfig";


const Formulario = ({ campos, bancoDeDados }) => {
    const [dados, setDados] = useState({});

    const alteraDados = (e) => {
        const valor = e.target.value;
        const chave = e.target.id;
        setDados({ ...dados, [chave]: valor });
    }

    const salvarDados = async (e) => {
        e.preventDefault(); 
        console.log(dados);
        const docRef = await addDoc(collection(db, bancoDeDados), dados);

    };

    return (
        <form id="Form_contato" onSubmit={salvarDados}>
            {campos.map((item) => {
                return (
                    <div>
                        <label htmlFor={item.id}>{item.nome}</label>
                        <input id={item.id} type={item.tipo} value={dados[item.id]} onChange={alteraDados} />
                    </div>
                )
            })}
            <button type="submit">Enviar</button>
        </form>

    );
};

export default Formulario;