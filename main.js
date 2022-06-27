const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")

const arm = document.querySelector("#arm")

somar.addEventListener("click", (e) => {manipulaDados("somar")})

subtrair.addEventListener("click", (e) => {manipulaDados("subtrair")})

function manipulaDados(operacao) {
    if (operacao === 'subtrair') {
        arm.value = parseInt(arm.value) - 1;
    } else {
       arm.value = parseInt(arm.value) + 1; 
    }
}