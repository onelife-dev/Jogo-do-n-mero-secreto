//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um número entre 1 e 10"
let listaDosNumeros = [];
let numeroLimite= 10
let tentativa = 1;
let numeroSecreto = gerarNumeroSecreto();
function gerarNumeroSecreto() {
    let NumeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let QuantidadeNaLista = listaDosNumeros.length;
    
    if (QuantidadeNaLista == numeroLimite){
        listaDosNumeros = [];
}
    
    if (listaDosNumeros.includes(NumeroEscolhido)) {
    return gerarNumeroSecreto();
}
    else {
        listaDosNumeros.push(NumeroEscolhido);
        console.log (listaDosNumeros);
        return NumeroEscolhido;

    }
}

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

    function ExebirMensagem() {
        
    exibirTextoNaTela('h1', 'Boas vinda ao número do jogo secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    }


function verificarChute(){
    let chute = document.querySelector('input').value;   

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto ${numeroSecreto} com
        ${tentativa} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
    }   
    else {      
        if (chute > numeroSecreto){
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
}
    else {
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
}
tentativa++;
limparCampo();
    }   
}

  function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativa = 1;
    ExebirMensagem();
    document.getElementById('reinciar').setAttribute('disabled', true );
}