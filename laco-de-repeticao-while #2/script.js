let soma = 0, quantidade = 0;

while (true) {
    let nota = Number(prompt("Nota (0-10) ou negativo para sair:"));

    if (isNaN(nota)) continue;
    if (nota < 0) break;

    if (nota <= 10) {
        soma += nota;
        quantidade++;
    }
}

alert(`Média: ${(quantidade ? soma / quantidade : 0).toFixed(2)}`);