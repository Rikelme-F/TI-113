/*Ex3: Crie um algoritmo usando funções que faça uma leitura de 10 letras em um vetor,
 e após verificar quantas vogais foram lidas e mostre somente consoantes no alerta.*/
 
 let letras = [];
 let numeroDeLetras = 10;
 let consoantes = [];
 let contadorVogais = 0;
 
 function lerLetras() {
     for (let i = 0; i < numeroDeLetras; i++) {
         let letra = prompt("Informe uma letra:").toUpperCase(); // Leitura da letra e conversão para maiúscula
         letras.push(letra);
         
         // Verificação se a letra é uma vogal
         if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
             contadorVogais++;
         } else {
             // Se não for vogal, adiciona à lista de consoantes
             consoantes.push(letra);
         }
     }
     
     // Montando a mensagem das consoantes
     let mensagemConsoantes = consoantes.join(", "); // Converte o vetor de consoantes em uma string
     alert("Consoantes lidas: " + mensagemConsoantes + "\n Total de vogais: " + contadorVogais);
 }
 
 // Chama a função para ler as letras
 lerLetras();



    
         


 