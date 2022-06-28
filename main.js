

const controle = document.querySelectorAll(".controle-ajuste")




controle.forEach((e) => {
    e.addEventListener("click", (e) => {
        manipulaDados(e.target.textContent);
        console.log(e.target.parentNode);
    })
});



function manipulaDados(operacao) {

const peca = document.querySelector(".controle-contador ")
    
    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}