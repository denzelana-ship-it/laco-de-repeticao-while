let soma = 0;
let contador = 0;
let nota = 0;

while (nota >= 0) {
    nota = parseFloat(prompt("Digite uma nota (0 a 10) ou um número negativo para sair:"));
    
    if (nota >= 0 && nota <= 10) {
        soma += nota;
        contador++;
    }
}

let media = 0;
if (contador > 0) {
    media = soma / contador;
}

alert("Quantidade de notas: " + contador + "\nMédia final: " + media.toFixed(2));