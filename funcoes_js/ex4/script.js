/*Ex4: Crie um algoritmo usando funções que tenha um menu de cadastro de nomes e salários bruto de até 50 pessoas,
 e ao final, mostre os nomes, salários brutos e os salários líquidos de todos que foram lidos,
considerando 10% de INSS a descontar.*/

const MAX_PESSOAS = 50;
let nomes = [];
let salariosBrutos = [];

function cadastro() {
    const quantidade = parseInt(prompt(`Digite a quantidade de pessoas para cadastro (máximo ${MAX_PESSOAS}):`), 10);

    if (isNaN(quantidade) || quantidade <= 0 || quantidade > MAX_PESSOAS) {
        alert("Quantidade inválida. O valor deve ser um número entre 1 e " + MAX_PESSOAS + ".");
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        let nome = prompt(`Digite o nome da pessoa ${i + 1}:`);
        let salarioBruto = parseFloat(prompt(`Digite o salário bruto da pessoa ${i + 1}:`));

        if (isNaN(salarioBruto) || salarioBruto < 0) {
            alert("Salário inválido. O salário deve ser um número positivo.");
            i--; // Repetir a entrada
        } else {
            nomes.push(nome);
            salariosBrutos.push(salarioBruto);
        }
    }
}

function calcularSalarioLiquido(salarioBruto) {
    return salarioBruto * 0.90; // Desconto de 10% diretamente
}

function mostrarResultados() {
    let resultados = nomes.map((nome, i) => {
        let salarioLiquido = calcularSalarioLiquido(salariosBrutos[i]);
        return `Nome: ${nome}, Salário Bruto: R$ ${salariosBrutos[i].toFixed(2)}, Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`;
    }).join('\n');
    
    alert(resultados || "Nenhum dado cadastrado.");
}

function menu() {
    while (true) {
        const opcao = parseInt(prompt("Menu:\n1. Cadastrar pessoas\n2. Mostrar resultados\n3. Sair\nEscolha uma opção:"), 10);

        switch (opcao) {
            case 1:
                cadastro();
                break;
            case 2:
                mostrarResultados();
                break;
            case 3:
                alert("Saindo...");
                return;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    }
}

// Iniciar o menu
menu();
