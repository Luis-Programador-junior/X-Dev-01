//declarando as variaveis 
const btnAvancar = document.getElementById("btn-avancar"); // btnAvancar é uma variavel constante, estar recebendo o valor btn-avancar que é um seletor class
const btnVoltar = document.getElementById("btn-voltar");   // btnVoltar é uma variavel constante, estar recebendo o valor btn-voltar
let cartaoAtual = 0;                                       // cataoAtual é uma variavel let, estar recebendo o valor 0
const cartoes = document.querySelectorAll(".cartao");      // catoes é uma variavel cont, estar recebendo o valor de todos os seletores .cartao

//funcao btnAvncar
btnAvancar.addEventListener("click", function () {

    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao();
});

//funcao btnvoltar
btnVoltar.addEventListener("click", function () {

    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao();
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
