// SCRIPT TELA 2

const API = "https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes"
const ID_DO_QUIZZ = "2"

let arrayAnswers = [];

carregarQuizz();

function comparador() {
  return Math.random() - 0.5;
}

function carregarQuizz() {
    const promise = axios.get(`${API}/${ID_DO_QUIZZ}`);
    promise.then(renderizarQuizz);
  }

function renderizarQuizz(response) {
    const quizzSelecionado = response.data;
    tituloQuizz = document.querySelector(".titulo-quizz p");
    tituloQuizz.innerHTML = quizzSelecionado.title;
    imagemQuizz = quizzSelecionado.image;
    document.querySelector(".titulo-quizz").style.backgroundImage = "url(" + `${imagemQuizz}` + ")";

      
    const containerPerguntas = document.querySelector(".perguntas");
    containerPerguntas.innerHTML = "";

      for(let i = 0; i < quizzSelecionado.questions.length; i++) {
        const tituloPergunta = quizzSelecionado.questions[i].title;
        const tituloCor = quizzSelecionado.questions[i].color;

        containerPerguntas.innerHTML += `
        <div class="pergunta-box">
            <div class="topo" style="background-color:${tituloCor}"> 
            <h3>${tituloPergunta}</h3>
            </div>
            
         <div class="pergunta-flex"> </div>
        </div> `

        arrayAnswers = quizzSelecionado.questions[i].answers;
        arrayAnswers = arrayAnswers.sort(comparador);

        for(let j = 0; j < arrayAnswers.length; j++) {
            const containerPerguntaFlex = document.querySelector(".perguntas").lastElementChild.lastElementChild;
            const tituloResposta = arrayAnswers[j].text;
            const imagemResposta = arrayAnswers[j].image;
            const statusResposta = arrayAnswers[j].isCorrectAnswer;

            if (statusResposta === true) { 

            containerPerguntaFlex.innerHTML += `
        
            <div class="resposta correta"><img src="${imagemResposta}" width="330" height="175">
            <h4>"${tituloResposta}"</h4>
            </div> `
            
          }
          else if (statusResposta === false) { 

            containerPerguntaFlex.innerHTML += `
        
            <div class="resposta falsa"><img src="${imagemResposta}" width="330" height="175">
            <h4>"${tituloResposta}"</h4>
            </div> `
            
          }


        }


      }
    }      