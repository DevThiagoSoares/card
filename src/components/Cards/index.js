import "./styles.css";
import { useState } from "react";
import Cadastro from "../Cadastro";

function Card() {
  const [classe, setClasse] = useState(false);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [pergunta, setPergunta] = useState([]);
  const [modalAberta, setModalAberta] = useState(false);
  const [opcao, setOpcao] = useState("naoAleatoria");

  const questoes = [
    {
      pergunta: "Sois Maçom ?",
      resposta: "M..I..C..T..M..R..",
    },
    {
      pergunta: "De onde vindes ?",
      resposta: "De uma Loja de São João Justa e Perfeita.",
    },
    {
      pergunta: "Que trazeis?",
      resposta: "Amizade, Paz e votos de prosperidade à todos os IIr.",
    },
    {
      pergunta: "Nada mais trazeis ?",
      resposta: "O Ven.. Mestre de minha Loja V..S..P..T..V..T.. Ven..M..",
    },
    {
      pergunta: "Que se faz em vossa Loja?",
      resposta:
        "Levantam-se Templos à Virtude e cavam-se masmorras ao vício. Ven..M.",
    },
    {
      pergunta: "Que vindes fazer aqui ?",
      resposta:
        "Vencer minhas paixões, submeter a minha vontade e fazer novos progre na Maçonaria, estreitando os laços de fraternidade que nos unem verdadeiros IIr..",
    },
    {
      pergunta: "Que desejais ?",
      resposta: "Um lugar entre vós.",
    },
    {
      pergunta: "Quais os instrumentos e utensílios de trabalho do Apr..?",
      resposta: "A Régua de 24 polegadas, o Maço e o Cinzel. 2-Ven..M.",
    },
    {
      pergunta: "Quais as Grandes Luzes da Maçonaria?",
      resposta: "O Livro da Lei, o Compasso e o Esquadro.",
    },
    {
      pergunta: "O que representa o Painel da Loja de Apr.. ?",
      resposta:
        "O caminho que devemos trilhar para atingir o domínio de nós mesmos conhecendo e interpretando o simbolismo.",
    },
    {
      pergunta: "2a 5a Ven..M.. - Que forma tem uma Loja?",
      resposta: "A de um Quadrilongo.",
    },
    {
      pergunta: "Qual a sua altura? APR.",
      resposta: "Da Terra ao Céu.",
    },
    {
      pergunta: "Seu comprimento?",
      resposta: "Do Oriente ao Ocidente.",
    },
    {
      pergunta: "Sua largura?",
      resposta: "Do Norte ao Sul.",
    },
    {
      pergunta: "Sua profundidade?",
      resposta: "Da superficie ao centro da Terra. Ven..M.",
    },
    {
      pergunta: "Por que essas dimensões?",
      resposta:
        "Porque a Maçonaria é universal e o Universo uma imensa Oficina.",
    },
    {
      pergunta: "Sobre que se apóia uma Loja?",
      resposta: "Sobre três Pilares - SABEDORIA-FORÇA - BELEZA Ven..M..",
    },
    {
      pergunta: "Quem representa o Pilar da Sabedoria ?",
      resposta: "O Venerável Mestre.",
    },
    {
      pergunta: "E os Pilares da Força e da Beleza?",
      resposta: "Os 1° e 2° Vigilantes.",
    },

    {
      pergunta: "Quais as Jóias fixas de uma Loja?",
      resposta: "A Prancheta da Loja - a Pedra Bruta e a Pedra Cúbica.",
    },
    {
      pergunta: "Quais as jóias móveis da Loja ?",
      resposta: "O Esquadro, o Nível e o Prumo.",
    },
    {
      pergunta: "Onde se encontram e quem representam estas jóias ?",
      resposta:
        "Nos Colares do: Ven..M..o esquadro; - 1° Vig..o nível; e 2° Vig.. o prumo",
    },
    {
      pergunta: "A que ordem de Arquitetura foram dadas essas três CCol..?",
      resposta:
        "A Jônica- para representar a Sabedoria; a Dórica- para representar a Fôrça; e a Coríntia- para representar a Beleza.",
    },
    {
      pergunta: "Simbolicamente, o que representa o Teto das Lojas Maçônicas?",
      resposta:
        "APR-A abóboda celeste, a para atingir o Céu, é representado na Escada de Jacó, cujos degraus representam uma das Virtudes do Maçom.",
    },
    {
      pergunta:
        "Quais os três símbolos destacados, na base, no centro e no topo da escada ?",
      resposta: "Fé, Esperança e Caridade.",
    },
    {
      pergunta: "O que representa o Sol no teto das Lojas simbólicas?",
      resposta:
        "Simboliza a Glória do Criador, através dos seus raios vivificantes nos ensina a praticar o Bem.",
    },
    {
      pergunta:
        "O Pavimento de Mosaico com seus quadrados pretos e brancos que lição nos ensina?",
      resposta:
        "Que apesar da diversidade, do antagonismo, não deve existir distinção, porque a Humanidade foi criada para viver na mais perfeita harmonia e na mais íntima Fraternidade.",
    },
    {
      pergunta: "O que representa a Orla Dentada?",
      resposta:
        "Nos mostra a atração universal, simboliza o amor que deve existir entre os Ir...",
    },
    {
      pergunta:
        "Quais as quatrovirtudes cardeais representada em cada canto do pavimento?",
      resposta: "A Temperança; Justiça; Coragem; e Prudência.",
    },
    {
      pergunta: "O que representa o Livro da Lei em uma Loja simbólica ?",
      resposta:
        "O Códido de Moral que cada um de nós respeita e segue. Aqui representado pela Bíblia Sagrada.",
    },
    {
      pergunta: "Que há de comum entre nós?",
      resposta: "Uma Verdade.",
    },

    {
      pergunta: "Que vos exigiram para ser maçom?",
      resposta: "Ser Livre e de Bons Costumes.",
    },
    {
      pergunta: "Como foste recebido Maçom?",
      resposta: "Nem nu, nem vestido.",
    },
    {
      pergunta: "Que vos fizeram para vos instruir?",
      resposta:
        "Fizeram-me viajar do Ocidente para o Oriente e do Oriente para o Ocidente. A princípio, por um caminho escabroso, em meio de ruídos e trovões; depois, por um caminho menos difícil, ouvindo-se choque de armas; finalmente em uma terceira viagem, por um caminho suave, envolto do maior silêncio.",
    },
    {
      pergunta: "Que vos fizeram para vos instruir?",
      resposta:
        "Fizeram-me viajar do Ocidente para o Oriente e do Oriente para o Ocidente. A princípio, por um caminho escabroso, em meio de ruídos e trovões; depois, por um caminho menos difícil, ouvindo-se choque de armas; finalmente em uma terceira viagem, por um caminho suave, envolto do maior silêncio.",
    },

    {
      pergunta: "Que representa as três portas em que batestes?",
      resposta:
        "As três disposições à procura da verdade: Sinceridade, Coragem e Perseverança.",
    },
    {
      pergunta: "Como vos ligastes à Ordem ?",
      resposta: "Por um Juramento e uma Consagração.",
    },
    {
      pergunta: "Quais são os deveres do Maçom ?",
      resposta:
        "Honrar e venerar o G..A..D..U.. tratar os homens sem distinção de classe e de raça; combater a ambição, o orgulho; o preconceito e os erros; lutar contra a ignorância, a mentira, o fanatismo e a superstição; praticar a justiça e a verdade, promovendo o bem estar da Pátria e da humanidade.",
    },
    {
      pergunta: "Como se reconhecem os Maçons ?",
      resposta:
        "Por Sinais, Toques e Palavras.: \n Ven..M.. - Daí o Toque de Apr.. ao Ir.. 1° Vig..\n:1° VIG.. - (após receber o Toque) O Toque está certo Ven..M..\n:Ven..M.. - Daí a Palavra Sagrada ao Ir.. 2° Vig..\n:2° VIG.. - (após pedir e receber pela forma regular a P..S.:)a palavra está certa V..M.. 4: Ven..M..-",
    },
    {
      pergunta: "Porque portáveis uma alpargata no pé direito ?",
      resposta: "Para manifestar o respeito por pisar este lugar Sagrado.",
    },
    {
      pergunta: "Porque os AApr.. trabalham do meio-dia à meia-noite ?",
      resposta:
        "É uma homenagem à Zoroastro, que reunia seus discípulos ao meio-dia, Terminava os trabalhos à meia-noite por um Ágape fraternal.",
    },
    {
      pergunta: "Que idade tendes ?\nAPR..",
      resposta: "",
    },
    {
      pergunta: "Sobre que número se fundamenta todo o simbolismo maçônico ?",
      resposta: "Sobre o número três.",
    },
    {
      pergunta:
        "Como vêdes o no 3 é primordial no 1o grau, e para passardes ao 2o grau, deveis estudar as propriedades dos números nas ordens Pitagórica, Cabala, Arquitetura, e Arqueologia iniciática de Vetrúvio, Ramée e outras. Qual é, O simbolismo do no 3 ?",
      resposta: [
        "O número 1 (um), é a unidade, e o princípio dos números, mas a unidade só existe pelos outros números.",
        "O numero 2 é o número terrível, fatídigo. É o símbolo dos contrários, da dúvida e",
        "da contradição. O Apr.. não deve se aprofundar no estudo.",
        "Três é o número da Luz, Fogo, Chama e Calor. Como três são os pontos que o maçom deve orgulhar-se de apor a seu nome.",
      ],
    },
    {
      pergunta: "O que representa o número 4 para o Apr..?",
      resposta: [
        "As provas que passamos pelos 4 elementos da natureza: Terra, Ar, Água e Fogo",
      ],
    },
    {
      pergunta: "O que comprova a regularidade de uma Loja?",
      resposta: ["A Carta Constitutiva."],
    },
  ];

  if (pergunta.length === 0) {
    questoes.map((item) => {
      pergunta.push(item);
    });
  }

  function handleCadastro(novaPergunta) {
    setPergunta([...pergunta, novaPergunta]);
  }

  function quitPage() {
    localStorage.clear();
    window.location.reload(true);
  }

  function gerarProximaPergunta() {
    if (opcao === "naoAleatoria") {
      setQuestaoAtual(questaoAtual + 1);
      if (questaoAtual >= pergunta.length - 1) {
        setQuestaoAtual(0);
      }
    } else if (opcao === "aleatoriaSemRepeticao") {
      const perguntasNaoSorteadas = pergunta.filter(
        (item, index) => index !== questaoAtual
      );
      const questaoAleatoria = Math.floor(
        Math.random() * perguntasNaoSorteadas.length
      );
      setQuestaoAtual(
        pergunta.indexOf(perguntasNaoSorteadas[questaoAleatoria])
      );
      if (perguntasNaoSorteadas.length === 1) {
        setOpcao("naoAleatoria");
      }
    } else {
      const questaoAleatoria = Math.floor(Math.random() * pergunta.length);
      setQuestaoAtual(questaoAleatoria);
    }
    setClasse(false);
  }

  function voltarParaPerguntaAnterior() {
    if (questaoAtual > 0) {
      setQuestaoAtual(questaoAtual - 1);
    } else {
      alert("Esta é a primeira pergunta!");
      setQuestaoAtual(0);
    }
  }

  function handleOpcao(e) {
    setOpcao(e.target.value);
  }

  return (
    <div className="app">
      <section>
        <select className="meu-seletor" onChange={handleOpcao}>
          <option value="naoAleatoria">Não Aleatorias</option>
          <option value="aleatoriaSemRepeticao">Aleatorias</option>
        </select>

        <div
          className="face"
          onClick={() => {
            setClasse(!classe);
          }}
        >
          <div className={classe ? "front" : "front2"}>
            <h2>PERGUNTA</h2>
            <h3>{pergunta[questaoAtual].pergunta}</h3>
          </div>
          <div className={classe ? "back" : "back2"}>
            <h2>RESPOSTA</h2>
            <h3>{pergunta[questaoAtual].resposta}</h3>
          </div>
        </div>

        <div className="buttons-container">
          <button className="button" onClick={voltarParaPerguntaAnterior}>
            Voltar Pergunta
          </button>
          <button className="button" onClick={gerarProximaPergunta}>
            Próxima Pergunta
          </button>
        </div>
      </section>
      <button className="button sair" onClick={() => setModalAberta(true)}>
        Cadastrar Pergunta
      </button>
      <button className="button sair" onClick={quitPage}>
        Sair
      </button>

      {modalAberta && (
        <div className="modal" overlayClassName="Overlay">
          <Cadastro onCadastro={handleCadastro} />
          <button className="button" onClick={() => setModalAberta(false)}>
            Fechar Modal
          </button>
        </div>
      )}
    </div>
  );
}
export default Card;
