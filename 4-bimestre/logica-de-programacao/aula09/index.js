const prompt = require("prompt-sync")()

const quantidade = Number(prompt("Quantas vendas? "))
const vendasDaSemana = []

for (let i = 1; i <= quantidade; i++) {
  const venda = Number(prompt(`Venda ${i}: `))
  vendasDaSemana.push(venda)
}

let menorVenda = vendasDaSemana[0]

for (let i = 0; i < vendasDaSemana.length; i++) {
  if (vendasDaSemana[i] < menorVenda) {
    menorVenda = vendasDaSemana[i]
  }
}

console.log(menorVenda)

module.exports = menorVenda