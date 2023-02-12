const controle = document.querySelectorAll("[data-ajuste]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.ajuste, evento.target.parentNode)
        atualizarEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacoes, controle) {
    const peca = controle.querySelector("[data-contador]")

    if (operacoes === "-") {
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizarEstatisticas(peca) {
    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]         
    })
}

let cores = [
    "img/Robotron_Amarelo.png",
    "img/robotron_branco.png",
    "img/Robotron_Preto.png",
    "img/Robotron_Rosa.png",
    "img/Robotron_Vermelho.png",
    "img/robotron.png"
]

let robotron = document.querySelector("#robotron");

let botaoDireito = document.getElementById("botao_direito");
let botaoEsquerdo = document.getElementById("botao_esquerdo");

botaoDireito.addEventListener("click", () => {
    let primeiraImg = robotron;
    primeiraImg.src = cores[0];
    cores[0] = cores[1];
    cores[1] = cores[2];
    cores[2] = cores[3];
    cores[3] = cores[4];
    cores[4] = cores[5];
    cores[5] = primeiraImg.src
        console.log(primeiraImg.src)
})

botaoEsquerdo.addEventListener("click", () => {
    let primeiraImg = robotron;
    primeiraImg.src = cores[5];
    primeiraImg.src = cores[4];
    cores[4] = cores[3];
    cores[3] = cores[2];
    cores[2] = cores[1];
    cores[1] = cores[0];
    cores[0] = primeiraImg.src
})