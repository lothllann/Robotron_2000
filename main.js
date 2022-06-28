

const controle = document.querySelectorAll(".controle-ajuste")
const estatisticas = document.querySelectorAll('[data-estatistica]')

const pecas = {
    "bracos": {
        "forca": 35,
        "poder": 25,
        "energia": -20,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 15,
        "poder": 5,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 5,
        "poder": 15,
        "energia": 50,
        "velocidade": -5
    },
    "pernas": {
        "forca": 40,
        "poder": 25,
        "energia": -35,
        "velocidade": 45
    },
    "foguetes": {
        "forca": 0,
        "poder": 40,
        "energia": 0,
        "velocidade": -5
    }
}




controle.forEach((element) => {
    element.addEventListener('click', (e) => {
        manipulaDados(e.target.textContent, e.target.parentNode);
        atualizaEstatisticas(e.target.textContent, e.target.dataset.peca);

    })
});



function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]");

    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(operacao, peca) {

    estatisticas.forEach((e) => {
        if (operacao === '+') {
             e.textContent = parseInt(e.textContent) + pecas[peca][e.dataset.estatistica]
        } else {
            e.textContent = parseInt(e.textContent) - pecas[peca][e.dataset.estatistica]
        }
       
    })
}