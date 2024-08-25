import React from "react";

const Cartao = ({ titulo, descricao, imagem, link }) => {
    return (
        <div className="cartao">
            <img src={imagem} alt={titulo} className="imgCartao" />
            <div className="conteudo-cartao">

                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <p>{link}</p>
            </div>
        </div>

    );
};
export default Cartao;