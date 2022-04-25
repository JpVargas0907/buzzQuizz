// Buscando e listando os quizzes no servidor

document.querySelector(".tela2").style.display = "none"
document.querySelector(".tela3-1").style.display = "none"
document.querySelector(".tela3-2").style.display = "none"
document.querySelector(".tela3-3").style.display = "none"
document.querySelector(".tela3-4").style.display = "none"



buscarDados();

function buscarDados(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");

    promise.then(carregarDados);
}

function carregarDados(response){
    let quizzes = response.data;
    renderQuizzes(quizzes);
}

function renderQuizzes(quizzes){
    const listaQuizzes = document.querySelector(".lista-quizzes")
    console.log(listaQuizzes)
    for(let i = 0; i <= quizzes.length; i++){
        listaQuizzes.innerHTML += `
        <li class="quizz">
        <p class="id" onclick="abrirQuizz(this)">${quizzes[i].id}</p>
        <div class="gradient"></div>
        <img src="${quizzes[i].image}" alt="">
        <p>${quizzes[i].title}</p>
        </li>`
    }
    console.log(quizzes)
}

function abrirTela3(){
    document.querySelector(".tela1").style.display = "none"
    document.querySelector(".tela3-1").style.display = "flex"
  }