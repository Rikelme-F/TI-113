/*Ex5: Crie um algoritmo usando funções que leia até 50 números inteiros e armazene-os numa lista de números, considere as premissas abaixo:

• Não pode informar letras, palavras ou vazio. Alerte-o do erro e repita a leitura.
• Não pode informar números negativos. Alerte-o do erro e repita a leitura.
• Crie um menu que o usuário escolha cadastrar 5, 15, 25 ou 50.
• Ao final do cadastro ele tem um outro menu pra escolher exibir:  1 - A lista cadastrada, 2- somente os pares, 3- somente os impares.*/

function solicitarNumero(mensagem) {
    let numero;
    while (true) {
        numero = prompt(mensagem).trim();
        
        // Verificação se o número é vazio ou não é um número
        if (!numero || isNaN(numero)) {
            alert("Erro: Você deve informar um número válido.");
            continue;
        }

        numero = parseInt(numero);

        // Verificação se o número é negativo
        if (numero < 0) {
            alert("Erro: Números negativos não são permitidos.");
            continue;
        }

        return numero;
    }
}

function cadastrarNumeros(total) {
    let numeros = [];
    
    for (let i = 0; i < total; i++) {
        let numero = solicitarNumero(`Informe o número ${i + 1} de ${total}:`);
        numeros.push(numero);
    }

    return numeros;
}

function exibirMenuCadastro() {
    while (true) {
        let opcao = parseInt(prompt("Escolha a quantidade de números para cadastrar:\n1 - 5\n2 - 15\n3 - 25\n4 - 50"));

        switch (opcao) {
            case 1:
                return 5;
            case 2:
                return 15;
            case 3:
                return 25;
            case 4:
                return 50;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    }
}

function exibirMenuExibir() {
    while (true) {
        let opcao = parseInt(prompt("Escolha a opção de exibição:\n1 - Lista completa\n2 - Números pares\n3 - Números ímpares"));

        switch (opcao) {
            case 1:
            case 2:
            case 3:
                return opcao;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    }
}

function exibirNumeros(numeros) {
    let opcao = exibirMenuExibir();

    switch (opcao) {
        case 1:
            alert("Lista completa: " + numeros.join(", "));
            break;
        case 2:
            let pares = numeros.filter(num => num % 2 === 0);
            alert("Números pares: " + pares.join(", "));
            break;
        case 3:
            let impares = numeros.filter(num => num % 2 !== 0);
            alert("Números ímpares: " + impares.join(", "));
            break;
    }
}

function main() {
    let quantidade = exibirMenuCadastro();
    let numeros = cadastrarNumeros(quantidade);
    exibirNumeros(numeros);
}

// Executar a função principal
main();
