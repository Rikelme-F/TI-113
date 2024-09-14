/* Crie uma função que lê um vetor de 5 números inteiros e mostre-os, 
considere que o usuário não pode informar letras, palavras ou vazio. 
Alerte-o do erro e repita a leitura caso ocorra.*/

function lerVetor() {
    let listaNumeros = [];
    let quantidadeNumeros = 5;
    
    for (let i = 0; i < quantidadeNumeros; i++) {
        while (true) {
            let numero = prompt("Informe um número inteiro:");
            
            if (numero !== null && !isNaN(numero) && numero.trim() !== "") {
                listaNumeros.push(parseInt(numero, 10));
                break;
            } else {
                alert("Entrada inválida. Por favor, informe um número inteiro.");
            }
        }
    }
    
    return listaNumeros;
}

function mostrarVetor(vetor) {
    alert("Números informados: " + vetor.join(", "));
}

let vetor = lerVetor();
mostrarVetor(vetor);
