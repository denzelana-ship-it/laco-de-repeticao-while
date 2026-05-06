let saldo = 500.00; 

while (saldo > 0) {
    let saque = parseFloat(prompt(`Saldo disponível: R$ ${saldo.toFixed(2)}
Quanto deseja sacar?`));

    if (saque > 0 && saque <= saldo) {
        let saldoAnterior = saldo;
        saldo = saldo - saque;
        
        alert(`Saque de R$ ${saque.toFixed(2)} realizado!
Saldo anterior: R$ ${saldoAnterior.toFixed(2)}
Sobra atual: R$ ${saldo.toFixed(2)}`);
    } 
    else if (saque > saldo) {
        alert("Saldo insuficiente! Você não tem esse valor.");
    }
    else {
        alert("Valor de saque inválido.");
    }
}

alert("Sessão encerrada. Saldo final: R$ " + saldo.toFixed(2));