let quizzes = []

buscarDados()

function buscarDados(){
    const promise = axios.get("https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes");

    promise.then(carregarDados);
}

function carregarDados(response){
    quizzes = response.data;
    renderQuizzes();
}

function renderQuizzes(){
    const listaQuizzes = document.querySelector(".lista-quizzes")

    for(let i = 0; i <= listaQuizzes.clientHeight; i++){
        listaQuizzes.innerHTML += `
        <li class="quizz">
        <div class="gradient"></div>
        <img src="${quizzes[i].image}" alt="">
        <p class="titulo-quizz">${quizzes[i].title}</p>
        </li>`
    }
}