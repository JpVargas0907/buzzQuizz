let qtdNiveis
let qtdPerguntas
let perguntas = []
let quizz = {
    title: "",
    image: "",
    questions: [{
        title: "",
        color: "",
        answers: [{
            text: "",
            image: "",
            isCorrectAnswer: ""
        },
        {
            text: "",
            image: "",
            isCorrectAnswer: ""
        }
        ]
    }
    ],
    levels: [
        {
            title: "Título do nível 1",
            image: "https://http.cat/411.jpg",
            text: "Descrição do nível 1",
            minValue: 0
        },
        {
            title: "Título do nível 1",
            image: "https://http.cat/411.jpg",
            text: "Descrição do nível 1",
            minValue: 0
        }
    ]
}

let nodePergunta
let nodeColor
let nodeRespostas = []
let nodeImagens = []

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
        <input type="text" class="resposta${i}" placeholder="Resposta correta">
        <input type="text" class="imagem${i}" placeholder="Quantidade de níveis do quizz">
        <p class="subtitulo">Respostas incorretas</p>
        <input type="text" class="resposta${i}" placeholder="Resposta incorreta 1">
        <input type="text" class="imagem${i}" placeholder="URL da imagem 1">
        <input type="text" class="resposta${i}" placeholder="Resposta incorreta 2">
        <input type="text" class="imagem${i}" placeholder="URL da imagem 2">
        <input type="text" class="resposta${i}" placeholder="Resposta incorreta 3">
        <input type="text" class="imagem${i}" placeholder="URL da imagem 3">
    </div>
        ` ;
        nodeRespostas[i] = document.querySelectorAll(`.resposta${i}`)
        nodeImagens[i] = document.querySelectorAll(`.imagem${i}`)
    };

    nodePergunta = document.querySelectorAll(".texto-pergunta");
    nodeColor = document.querySelectorAll(".cor-fundo");
}

// Funções para a tela 3.2


function carregarNumeroDeNiveis() {
    for (let i = 0; i < qtdPerguntas; i++) {
        const telaNiveis = document.querySelector(".tela3-3 .niveis");
        telaNiveis.innerHTML += `
        <div class="conteudo">
                <p class="subtitulo">Nível ${i + 1}</p>
                <input type="text" class="titulo-nivel" placeholder="Título do nível">
                <input type="text" class="porcentagem" placeholder="% de acerto mínima">
                <input type="text" class="url-imagem" placeholder="URL da imagem do nível">
                <input type="text" class="descricao-nivel" placeholder="Descrição do nível">
        </div>
        ` ;
    };

}

function isHexa(h){
    let regexp = /#[0-9A-Fa-f]{6}/g
    return regexp.test(h);
}

function carregarTelaCriarNiveis() {
    let pergunta;
    let validador = 0;
    let i;

    for (i = 0; i < qtdPerguntas; i++) {
        pergunta = nodePergunta.item(i).value;

        if(pergunta.length > 20  && isHexa(nodeColor.item(i).value) && nodeRespostas[0].item(i) !== "" && nodeRespostas[1].item(i).value !== ""){
            validador ++;
            
        } 
    }

    if(validador === i){
        document.querySelector(".tela3-2").style.display = "none"
        document.querySelector(".tela3-3").style.display = "flex"
        carregarNumeroDeNiveis();
    } else {
        alert("Dados preenchidos de forma incorreta. Preencha novamente!")
    }

}