let total = 0;
let valor;

do {
    valor = parseFloat(prompt("Insira o valor do item (ou 0 para finalizar):"));
    if (valor > 0) {
        total += valor;
    }
} while (valor !== 0);

alert(`O total da sua compra é: R$ ${total.toFixed(2)}`);