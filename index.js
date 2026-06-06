"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)({ sigint: true });
let saldo = 0;
let opcao = "";
console.log("=== BEM-VINDO AO CAIXA ELETRÔNICO ===");
do {
    console.log("\n1. Depositar | 2. Sacar | 3. Saldo | 4. Sair");
    opcao = prompt("Escolha uma opção: ");
    if (opcao === '1') {
        const valor = parseFloat(prompt("Valor do depósito: R$ ") || "0");
        saldo += valor;
        console.log("Depósito realizado!");
    }
    else if (opcao === '2') {
        const valor = parseFloat(prompt("Valor do saque: R$ ") || "0");
        if (valor <= saldo) {
            saldo -= valor;
            console.log("Saque realizado!");
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
    else if (opcao === '3') {
        console.log(`Seu saldo é: R$ ${saldo.toFixed(2)}`);
    }
    else if (opcao === '4') {
        console.log("Até logo!");
    }
    else {
        console.log("Opção inválida.");
    }
} while (opcao !== '4'); // O programa repete ENQUANTO a opção não for '4'
