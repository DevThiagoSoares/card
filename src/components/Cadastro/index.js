import React, { useState } from "react";
import "./styles.css";

function Cadastro({ onCadastro }) {
    const [pergunta, setPergunta] = useState("");
    const [resposta, setResposta] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const novaPergunta = { pergunta, resposta };
        onCadastro(novaPergunta);
        setPergunta("");
        setResposta("");
        console.log(novaPergunta)
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="pergunta">Pergunta:</label>
                <input
                    type="text"
                    id="pergunta"
                    value={pergunta}
                    onChange={(e) => setPergunta(e.target.value)}
                />
                <label htmlFor="resposta">Resposta:</label>
                <textarea
                    id="resposta"
                    value={resposta}
                    onChange={(e) => setResposta(e.target.value)}
                />
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default Cadastro;
