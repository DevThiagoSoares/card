import "./styles.css";
import { useState } from "react";
import Cadastro from "../Cadastro";

function Card() {
    const [classe, setClasse] = useState(false);
    const [questaoAtual, setQuestaoAtual] = useState(0);
    const [pergunta, setPergunta] = useState([]);
    const [modalAberta, setModalAberta] = useState(false);



    const questoes = [
        {
            pergunta: "questão 1",
            resposta: "resposta 1",
        },
        {
            pergunta: "questão 2",
            resposta: "resposta 2",
        },
        {
            pergunta: "questão 3",
            resposta: "resposta 3",
        },
        {
            pergunta: "questão 4",
            resposta: "resposta 4",
        },
    ];

    if (pergunta.length === 0) {
        questoes.map((item) => {
            pergunta.push(item)
        })
    }

    function handleCadastro(novaPergunta) {
        setPergunta([...pergunta, novaPergunta]);
    }

    function quitPage() {
        localStorage.clear()
        window.location.reload(true)
    }

    return (
        <div className="app">
            {/* <Cadastro onCadastro={handleCadastro} /> */}
            <section>
                <div className="face" onClick={() => {
                    setClasse(!classe);
                }}>
                    <div className={classe ? "front" : "front2"}>
                        <h2>PERGUNTA</h2>
                        <p>{pergunta[questaoAtual].pergunta}</p>
                    </div>
                    <div className={classe ? "back" : "back2"}>
                        <h2>RESPOSTA</h2>
                        <p>{pergunta[questaoAtual].resposta}</p>
                    </div>
                </div>

                <div className="buttons-container">
                    <button className="button" onClick={() => setModalAberta(true)}>Cadastrar Pergunta</button>
                    <button className="button"
                        onClick={() => {
                            if (questaoAtual === pergunta.length - 1) {
                                setQuestaoAtual(0);
                            } else {
                                const questaoAleatoria = Math.floor(Math.random() * pergunta.length);
                                setQuestaoAtual(questaoAleatoria);
                            }
                            setClasse(false);
                        }}
                    >
                        Próxima Pergunta
                    </button>
                </div>
            </section>
            <button className="button sair" onClick={quitPage}>Sair</button>

            {
                modalAberta && (
                    <div className="modal" overlayClassName="Overlay">
                        <Cadastro onCadastro={handleCadastro} />
                        <button className="button" onClick={() => setModalAberta(false)}>Fechar Modal</button>
                    </div>
                )
            }


        </div >
    );
}

export default Card;
