// SCRIPT TELA 2

const API = "https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes"
let ID_DO_QUIZZ // O ID virá do quizz selecionado na Tela 1
let resultadoQuizz = document.querySelector(".resultado-quizz");

let quizzSelecionado ="";
let arrayAnswers = [];
let arrayTodasPerguntas =[];
let primeirasRespostas = [];
let primeiraResposta;
let acertos;

function abrirQuizz(elemento){
    ID_DO_QUIZZ = elemento.innerHTML
    carregarQuizz();

    document.querySelector(".tela1").style.display = "none"
    document.querySelector(".tela2").style.display = "block"
}

function comparador() {   // usado para embaralhar as respostas de cada pergunta
  return Math.random() - 0.5;
}

function carregarQuizz() {
    console.log(ID_DO_QUIZZ)
    const promise = axios.get(`${API}/${ID_DO_QUIZZ}`);
    promise.then(renderizarQuizz);
  }

function renderizarQuizz(response) {
    quizzSelecionado = response.data;
    tituloQuizz = document.querySelector(".titulo-quizz p");
    tituloQuizz.innerHTML = quizzSelecionado.title;
    imagemQuizz = quizzSelecionado.image;
    document.querySelector(".titulo-quizz").style.backgroundImage = "url(" + `${imagemQuizz}` + ")";
    //adicionar opacidade com preto na imagem

      
    const containerPerguntas = document.querySelector(".perguntas");
    containerPerguntas.innerHTML = "";

      for(let i = 0; i < quizzSelecionado.questions.length; i++) { // adicionando as perguntas no display
        const tituloPergunta = quizzSelecionado.questions[i].title;
        const tituloCor = quizzSelecionado.questions[i].color;

        containerPerguntas.innerHTML += `
        <div class="pergunta-box proxima">
            <div class="topo" style="background-color:${tituloCor}"> 
            <h3>${tituloPergunta}</h3>
            </div>
            
         <div class="pergunta-flex"> </div>
        </div> `

        arrayAnswers = quizzSelecionado.questions[i].answers;
        arrayAnswers = arrayAnswers.sort(comparador); // embaralhando as respostas da pergunta ídice "i"
        // array para usar nas próximas funções:
        arrayTodasPerguntas.push(arrayAnswers);

        for(let j = 0; j < arrayAnswers.length; j++) { // adicionando as respostas no display
            const containerPerguntaFlex = document.querySelector(".perguntas").lastElementChild.lastElementChild;
            const tituloResposta = arrayAnswers[j].text;
            const imagemResposta = arrayAnswers[j].image;
            const statusResposta = arrayAnswers[j].isCorrectAnswer;


            if (statusResposta === true) { 

            containerPerguntaFlex.innerHTML += `
        
            <div class="resposta correta" onclick="selecionarResposta(this)"><img src="${imagemResposta}" width="330" height="175">
            <h4>${tituloResposta}</h4>
            </div> `
            
          }
          else if (statusResposta === false) { 

            containerPerguntaFlex.innerHTML += `
        
            <div class="resposta falsa" onclick="selecionarResposta(this)"><img src="${imagemResposta}" width="330" height="175">
            <h4>${tituloResposta}</h4>
            </div> `
            
          }


        }


      } 
    }   
    

function selecionarResposta (respostaClicada) {

  if(respostaClicada.parentNode.classList.contains("ativar") === false) {
      respostaClicada.parentNode.classList.add("ativar"); // aciona o css de resposta "correta" ou "falsa"
      respostaClicada.parentNode.parentNode.classList.remove("proxima"); // remove esta classe para o scrollIntoView ir para proxima pergunta

      primeiraResposta = respostaClicada;
      primeirasRespostas.push(primeiraResposta); // esse array de respostas selecionadas vai ser usado para calcular a pontuação
      setTimeout(quizzVisivel, 2000); 

  }  else if (respostaClicada.classList.contains("ativar")) { // para não trocar de resposta selecionada
  return;
}

}

function quizzVisivel () {
  if (primeirasRespostas.length !== arrayTodasPerguntas.length) { //se número de respostas selecionadas condiz com o de perguntas do quizz
    const proximaPergunta = document.querySelector(".proxima"); 
    proximaPergunta.scrollIntoView();
    console.log(proximaPergunta)
  } else {
    setTimeout(exibirResultadoQuizz, 100);

  }
}


function exibirResultadoQuizz () {

acertos = 0

  for(let i = 0; i < arrayTodasPerguntas.length;i++) {
    if(primeirasRespostas[i].classList.contains("correta")) {
    acertos += 1;
    }
  }

  pontuacao = Math.round(acertos / (arrayTodasPerguntas.length)*100);

  let tituloResultado;
  let imagemResultado;
  let mensagemResultado;

  for (let i = quizzSelecionado.levels.length -1; i >= 0; i = i -1) {
    if (pontuacao >= quizzSelecionado.levels[i].minValue) {
      tituloResultado = quizzSelecionado.levels[i].title;
      imagemResultado = quizzSelecionado.levels[i].image;
      mensagemResultado = quizzSelecionado.levels[i].text;
    }
    
}

  resultadoQuizz.innerHTML = "";

  resultadoQuizz.innerHTML +=

`<div class="resultado-box">
<div class="topo"> <h3>${pontuacao}% de acerto: ${tituloResultado}</h3></div>

    <div class="resultado-flex">
        <div>
            <img src="${imagemResultado}" width="364" height="273">
        </div>
        <div class="mensagemfinal">
            <p>${mensagemResultado}</p>
        </div>
    </div>
    

</div>

<button onclick="reiniciarQuizz()">Reiniciar Quizz</button>

<div class="home" onclick="voltarParaHome()"><h1>Voltar para home</h1></div>
`

const resultado = document.querySelector(".resultado-box"); 
resultado.scrollIntoView();

}


function voltarParaHome(){
  document.querySelector(".tela2").style.display = "none"
  document.querySelector(".tela1").style.display = "flex"
}

function reiniciarQuizz(){
  const elemento = document.querySelector(".titulo-quizz");

  arrayTodasPerguntas = [];
  primeirasRespostas = [];
  resultadoQuizz.innerHTML = "";
  carregarQuizz(ID_DO_QUIZZ)
  elemento.scrollIntoView(); 
}
