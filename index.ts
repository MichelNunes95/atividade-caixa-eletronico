import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

let saldo: number = 0;
let opcao: string | null = "";

console.log("=== BEM-VINDO AO CAIXA ELETRÔNICO ===");

do {
    console.log("\n1. Depositar | 2. Sacar | 3. Saldo | 4. Sair");
    opcao = prompt("Escolha uma opção: ");

    if (opcao === '1') {
        const valor = parseFloat(prompt("Valor do depósito: R$ ") || "0");
        saldo += valor;
        console.log("Depósito realizado!");
        
    } else if (opcao === '2') {
        const valor = parseFloat(prompt("Valor do saque: R$ ") || "0");
        if (valor <= saldo) {
            saldo -= valor;
            console.log("Saque realizado!");
        } else {
            console.log("Saldo insuficiente.");
        }
        
    } else if (opcao === '3') {
        console.log(`Seu saldo é: R$ ${saldo.toFixed(2)}`);
        
    } else if (opcao === '4') {
        console.log("Até logo!");
        
    } else {
        console.log("Opção inválida.");
    }

} while (opcao !== '4'); // O programa repete ENQUANTO a opção não for '4'


console.log("eae");
