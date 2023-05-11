const container = document.getElementById("container");
console.log(container);

const button1 = document.querySelector("#button1");
console.log(button1.className);

const botoes = document.getElementsByClassName("btn");
console.log(botoes);

function mostraAlerta() {
  alert("Você clicou no botão!");
}

const listaDeCompras = []

function adicionarALista(item) {
    listaDeCompras.push(item)
}

const comprar = document.getElementById('compra')
const adicionarCompra = documnet.getElementById('adicionarCompra')

adicionarCompra.addEventListener('click', function)

adicionarALista(compra.value)
