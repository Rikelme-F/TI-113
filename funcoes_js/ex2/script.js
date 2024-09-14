/*Ex2: Crie uma função que lê uma lista de 4 notas, mostre-as junto com a média no alerta, 
considerando que o usuário não pode informar letras, palavras ou vazio.
Alerte-o do erro e repita a leitura das notas caso ocorra.*/

function lerNotas() {
    const notas = [];
    const numeroDeNotas = 4;

    while (notas.length < numeroDeNotas) {
        const entrada = prompt(`Insira a nota ${notas.length + 1} de ${numeroDeNotas}:`);
        
        if (entrada === null || entrada.trim() === "" || isNaN(entrada)) {
            alert("Erro: Insira um número válido.");
            continue;
        }

        const nota = parseFloat(entrada);
        if (nota >= 0 && nota <= 10) {
            notas.push(nota);
        } else {
            alert("Erro: A nota deve estar entre 0 e 10.");
        }
    }

    const soma = notas.reduce((acc, val) => acc + val, 0);
    const media = soma / notas.length;

    alert(`Notas: ${notas.join(", ")}\nMédia: ${media.toFixed(2)}`);
}

// Chama a função para ler as notas
lerNotas();

//Esta linha usa o método reduce para calcular a soma dos valores no array notas. Vamos detalhar:

//notas.reduce(...): O método reduce é usado para reduzir um array a um único valor. Ele aplica uma função acumuladora em cada item do array, produzindo um resultado final.

//(acc, val) => acc + val: Esta é a função acumuladora passada para o reduce:

//acc (acumulador): É o valor acumulado até o momento. Começa com o valor inicial fornecido (no caso, 0), e em cada iteração, acumula a soma dos valores do array.
//val (valor atual): É o valor atual do elemento do array sendo processado.
//A função retorna acc + val, que atualiza o acumulador com a soma do valor atual.
//, 0: Este é o valor inicial para o acumulador acc. Especifica que o acumulador deve começar com 0.