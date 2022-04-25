let qtdNiveis
let qtdPerguntas
let perguntas = []
let pergunta = {
    pergunta: "",
    corFundo: "",
    resposta: ""
}

function isURL(s) {
    let regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}

function carregarTelaCriarPerguntas() {
    qtdNiveis = document.querySelector(".tela3-1 .quantidade-niveis").value
    qtdPerguntas = document.querySelector(".tela3-1 .quantidade-perguntas").value
    let titulo = document.querySelector(".tela3-1 .titulo-quizz").value
    let url = document.querySelector(".tela3-1 .url-imagem").value

    console.log(isURL(url))
    console.log(titulo.length)
    if (titulo.length >= 20 && titulo.length <= 65 && isURL(url) && qtdPerguntas >= 3 && qtdNiveis >= 2) {
        document.querySelector(".tela3-1").style.display = "none"
        document.querySelector(".tela3-2").style.display = "flex"
        carregarNumeroDePerguntas();
    } else {
        alert("Dados preenchidos de forma incorreta. Preencha novamente!")
    }
}

function carregarNumeroDePerguntas() {
    for (let i = 0; i < qtdPerguntas; i++) {
        const telaPerguntas = document.querySelector(".tela3-2 .perguntas");
        telaPerguntas.innerHTML += `
        <div class="conteudo">
        <p class="subtitulo">Pergunta ${i + 1}</p>
        <input type="text" class="texto-pergunta" placeholder="Texto da pergunta">
        <input type="text" class="cor-fundo" placeholder="Cor de fundo da pergunta">
        <p class="subtitulo">Resposta correta</p>
        <input type="text" class="resposta-correta" placeholder="Resposta correta">
        <input type="text" class="url-imagem" placeholder="Quantidade de níveis do quizz">
        <p class="subtitulo">Respostas incorretas</p>
        <input type="text" class="resposta-incorreta" placeholder="Resposta incorreta 1">
        <input type="text" class="resposta-incorreta" placeholder="URL da imagem 1">
        <input type="text" class="resposta-incorreta" placeholder="Resposta incorreta 2">
        <input type="text" class="resposta-incorreta" placeholder="URL da imagem 2">
        <input type="text" class="resposta-incorreta" placeholder="Resposta incorreta 3">
        <input type="text" class="resposta-incorreta" placeholder="URL da imagem 3">
    </div>
        ` ;
    };
}

// Funções para a tela 3.2

function carregarTelaCriarNiveis(){

    for(let i = 0; i < qtdPerguntas; i++){
        
    }

    
}