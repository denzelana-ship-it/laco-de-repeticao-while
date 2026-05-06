let saldo = 1000; 

while (saldo > 0) {
    let saque = parseFloat(prompt(`Saldo atual: R$ ${saldo}\nQuanto deseja sacar?`));

    if (saque <= saldo && saque > 0) {
        saldo -= saque;
        alert(`Saque realizado! Saldo restante: R$ ${saldo}`);
    } else {
        alert("Saldo insuficiente ou valor inválido! Tente um valor menor.");
    }
}

alert("Saldo zerado. Encerrando operações.");