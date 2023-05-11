var helloWorld = "Olá mundo!"; // escopo globlal
console.log(helloWorld);

var helloWorld = "Olá mundo, de novo?";
console.log(helloWorld);

helloWorld = "Olá mundo, será que isto tá certo?";
console.log(helloWorld);

if (true) {
  var endereco = "Rua do Bispo";
}

console.log("endereco\n", endereco);

if (true) {
  let nomeInstituicao = "Coderhouse Brasil";
  console.log(nomeInstituicao);

  nomeInstituicao = "Coderhouse";
  console.log(nomeInstituicao);
}

if (true) {
  const pais = "Brasil";
  console.log(pais);

  pais = "Argentina";
  console.log(pais);
}

console.log(pais);

console.log(nomeInstituicao);

function media(nota1, nota2, nota3) {
  const calculoMedia = (nota1 + nota2 + nota3) / 3;
  console.log(calculoMedia);
  if (calculoMedia < 6) {
    console.log(
      "Sua nota não foi suficiente para aprovação, te vemos na recuperação"
    );
  } else {
    console.log("Parabéns, aprovado!");
  }
  console.log("Sua nota foi" + calculoMedia);
  return calculoMedia;
}

media(3, 9, 4);

function subtrair(num1, num2) {
  if (num1 < num2) {
    console.error("Não foi possível subtrair");
  } else {
    console.log(num1 - num2);
    return num1 - num2;
  }
}

subtrair(5, 2);

// Arrays
const pessoas = ["Gabriel", "Tamires", "Pedro", "Matheus"];

console.log(pessoas[0]);
// metodos array
pessoas.push("Jhonatan");
pessoas.pop();
pessoas.shift();
pessoas.find(item);
pessoas.unshift("Matheus");

console.log(pessoas);

// Objeto
let xicara = {
  cor: "preta",
  forma: "redonda",
  peso: 5,
  capacidade: 200,
  fabricacao: {
    lote: "128339018",
    estado: "SP",
  },
};

let xicara2 = {
  cor: "branca",
  forma: "quadrada",
  peso: 5,
  capacidade: 200,
  fabricacao: {
    lote: "128339018",
    estado: "SP",
  },
};

// console.log(xicara.fabricacao.lote);

const xicaras = [xicara, xicara2];
// console.log(xicaras);

let aluno1 = {
  nome: "Maria",
  idade: 15,
  nota: 9,
};

let aluno2 = {
  nome: "João",
  idade: 16,
  nota: 8,
};

let alunos = [aluno1, aluno2];

console.log(alunos[0]);
console.log(alunos[1].nome);

// outro arrays de objetos

const salas = [
  {
    codigo: "CO-01",
    status: "disponível",
  },
  {
    codigo: "CO-02",
    status: "indisposível",
  },
];

// console.log(salas[1].status);

const alunosCoderhouse = ["Jhonatan", "Wellington", "Yann", "Breno"];

for (let indice = 0; indice < alunosCoderhouse.length; indice++) {
  console.log("O aluno é" + alunosCoderhouse[indice]);
}

let indice = 0;
while (indice < alunosCoderhouse.lenght) {
  // execute isso...
  console.log("O aluno é" + alunosCoderhouse[indice]);
  indice++;
}

var numeros = [1, 2, 3, 4, 5, 6];

function somatorio(numeros) {
  var resultado = 0;

  numeros.forEach((numero) => {
    resultado = resultado + numero;
  });

  console.log(resultado);
}

somatorio(numeros);

function ola() {
  console.log("ola, mundo!");
}
() => {
  console.log("Olá, mundo!");
};

ola();
