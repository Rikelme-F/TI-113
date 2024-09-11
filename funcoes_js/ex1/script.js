/* Crie uma função que lê um vetor de 5 números inteiros e mostre-os, 
considere que o usuário não pode informar letras, palavras ou vazio. 
Alerte-o do erro e repita a leitura caso ocorra.*/



function LerVetores () {

let listaNumeros = [];

for (let i = 0; index < 5; i++) {
   let numeroString = prompt("Informe um Número:");
   let numero = parseInt (numeroString);
   listaNumeros.push(numero);
} 
 return listaNumeros;
}