
carregarTela1();

function carregarTela1 () {

    const containerHTML = document.querySelector("body");
    containerHTML.innerHTML = "";

    containerHTML.innerHTML += `
    <header>
    <p class="titulo">BuzzQuizz</p>
</header>

<main class="tela1">
    <div class="criar-quizz">
        <p>Você não criou nenhum quizz ainda :(</p>
        <button class="criar-quizz">Criar Quizz</button>
    </div>

    
    <ul class="lista-quizzes">
        <p class="titulo-lista">Todos os Quizzes</p>
        <li class="quizz">
            <div class="gradient"></div>
            <img src="../_imgs/bela-praia-tropical-e-mar-com-coqueiro-na-ilha-paradisiaca_74190-2206.webp" alt="">
            <p class="titulo-quizz">Praia Linda</p>
        </li>
    </ul>
</main>
`   }