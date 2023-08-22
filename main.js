/**
1. [x] Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. [x] Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. [] Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

    💡 Para saber o tipo de dado você pode usar o operador `typeof`

4. [] Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. [] Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. [] Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. [] Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. [] Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. [] Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. [] Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
 */

// 1
// alert("Hello World!");

// 2
let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
console.log(`Desafio - Exercício 2`);
console.log(`--> Variável A: ${a}`);
console.log(`--> Variável B: ${b}`);
console.log(`--> Soma: ${a + b}`);
console.log(`\n-------------------------------------------\n\n`);

// 3
let c;
if (Math.floor(Math.random() * 100) % 2) {
  c = Math.floor(Math.random() * 100);
} else {
  c = geraStringAleatoria(10);
}
console.log(`Desafio - Exercício 3`);
console.log(
  typeof c === "number"
    ? "Variável C é um número"
    : "Variável C não é um número"
);
console.log(`Conteúdo da variável: ${c}`);
console.log(`\n-------------------------------------------\n\n`);

// 4

// ----------------------------
/** Utilitário */

function geraStringAleatoria(tamanho) {
  var stringAleatoria = "";
  var caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < tamanho; i++) {
    stringAleatoria += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }
  return stringAleatoria;
}
