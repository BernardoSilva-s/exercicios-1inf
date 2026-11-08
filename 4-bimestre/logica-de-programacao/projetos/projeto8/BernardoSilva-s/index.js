const prompt = require("prompt-sync")()

const precoUnitario = Number(prompt("Preço unitário: "))
const quantidade = Number(prompt("Quantidade: "))
const formaPagamento = prompt("Forma de pagamento: ")

const calcularSubtotal = (preco, quantidade) => preco * quantidade

function calcularFrete(subtotal) {
  if (subtotal >= 100) {
    return 0
  }

  return 10
}

function calcularDesconto(subtotal, formaPagamento) {
  let percentual = 0

  switch (formaPagamento) {
    case "pix":
    case "dinheiro":
      percentual = 5
      break
    case "cartao":
      percentual = 0
      break
  }

  return (subtotal * percentual) / 100
}

function calcularTotal(preco, quantidade, formaPagamento) {
  const subtotal = calcularSubtotal(preco, quantidade)
  const frete = calcularFrete(subtotal)
  const desconto = calcularDesconto(subtotal, formaPagamento)

  return subtotal - desconto + frete
}

const subtotal = calcularSubtotal(precoUnitario, quantidade)
const frete = calcularFrete(subtotal)
const desconto = calcularDesconto(subtotal, formaPagamento)
const total = calcularTotal(precoUnitario, quantidade, formaPagamento)

const resumo = `Subtotal: ${subtotal}\nFrete: ${frete}\nDesconto: ${desconto}\nTotal: ${total}`

module.exports = {
  precoUnitario,
  quantidade,
  formaPagamento,
  calcularSubtotal,
  calcularFrete,
  calcularDesconto,
  calcularTotal,
  subtotal,
  frete,
  desconto,
  total,
  resumo
}