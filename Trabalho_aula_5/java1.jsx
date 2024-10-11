let resultado;

let preco = 30; // let deixa que a varivel mude de valor enquanto que o const protege o mesmo.

/*if (preco < 49){
  resultado = "Livro barato"
} else {
  resultado = "Livro não e barato"
}*/

preco = 50; //<--- Aqui parte do conste let

resultado = preco < 40? "Livro barato" : "Livro não e barato";

const meuarray = [1,2,3]

const meuobjeto = {
  texto : "Uma propiedade",
  numero : 34
}

let minha_var = "endereco"

// Função primerira opção
function soma(a, b){
  return a + b;
}

// Função segunda opção
const anonima = function (a, b){
  return a + b;
}

// Função terceira opção
const arrow = (a, b) => {
  return a + b;
}

// Função terceira opção 2
const arrow2 = (a, b) => a + b;

// Função terceira opção(com um unico parametro)
const arrow3 = a => a + 2;