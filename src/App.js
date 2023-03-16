import "./App.css";
import { useState } from "react";

function App() {
  const [classe, setClasse] = useState(false);
  const [questaoAtual, setQuestaoAtual] = useState(0);

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


  // shuffle(questoes);

  return (
    <div className="App">
      <section>
        <div className="face">
          <div className={classe ? "front" : "front2"}>
            <h2>PERGUNTA</h2>
            <p>{questoes[questaoAtual].pergunta}</p>
          </div>
          <div className={classe ? "back" : "back2"}>
            <h2>RESPOSTA</h2>
            <p>{questoes[questaoAtual].resposta}</p>
          </div>

        </div>
        <button
          onClick={() => {
            setClasse(!classe);
          }}
        >
          click
        </button>
        <button
          onClick={() => {
            if (questaoAtual === questoes.length - 1) {
              setQuestaoAtual(0);
            } else {
              const questaoAleatoria = Math.floor(Math.random() * 4);
              setQuestaoAtual(questaoAleatoria);

            }
            setClasse(false);
          }}
        >
          Próxima Questão
        </button>
      </section>
    </div>
  );
}

export default App;
