let numeroSecreto;
let tentativas;
const maxTentativas = 3;

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    tentativas = 0;
    document.querySelector(".texto__paragrafo").textContent = "Tente adivinhar o número secreto entre 1 e 10.";
    document.querySelector(".container__input").value = "";
    document.querySelector("#reiniciar").disabled = true;
    document.querySelector(".container__botao").disabled = false;
}

function verificarChute() {
    const chute = parseInt(document.querySelector(".container__input").value, 10);
    
    if (isNaN(chute) || chute < 1 || chute > 10) {
        document.querySelector(".texto__paragrafo").textContent = "Escolha um número entre 1 e 10.";
        return;
    }
    
    tentativas++;
    
    if (chute === numeroSecreto) {
        document.querySelector(".texto__paragrafo").textContent = `Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativas.`;
        document.querySelector(".container__botao").disabled = true;
        document.querySelector("#reiniciar").disabled = false;
    } else if (tentativas >= maxTentativas) {
        document.querySelector(".texto__paragrafo").textContent = `Suas tentativas acabaram! O número secreto é ${numeroSecreto}. Tente novamente.`;
        document.querySelector(".container__botao").disabled = true;
        document.querySelector("#reiniciar").disabled = false;
    } else if (chute < numeroSecreto) {
        document.querySelector(".texto__paragrafo").textContent = `Errou! O número secreto é maior. Tentativa ${tentativas} de ${maxTentativas}.`;
    } else {
        document.querySelector(".texto__paragrafo").textContent = `Errou! O número secreto é menor. Tentativa ${tentativas} de ${maxTentativas}.`;
    }
}

function reiniciarJogo() {
    iniciarJogo();
}

window.onload = iniciarJogo;
