// SOULUÇÃO DO PROBLEMA ======================

const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000

// Cálculo do subtotal
const subtotal = preco * quantidade

// Verificaçâo do estoque 
let estoqueDisponivel 

if (quantidade <= estoque) {
    estoqueDisponivel = "Sim"
} else {
    estoqueDisponivel = "Estoque indisponível"
}

// Aplicação do desconto
let descontoPercentual;

if (subtotal >= 1000) {
    descontoPercentual = 10
} else {
    descontoPercentual = 0
}

// Cálculo do valor do desconto
let valorDesconto = subtotal * (descontoPercentual / 100)

// Cálculo do valor final
let valorFinal = subtotal - valorDesconto

// Verificação do pagamento
let pagamentoStatus

if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}

// Cálculo do troco
let troco

if (valorPago >= valorFinal) {
    troco = valorPago - valorFinal
} else {
    troco = 0
}

// Situação do pedido
let statusPedido

if (quantidade <= estoque) {
    statusPedido = "Pedido disponível para finalização"
} else {
    statusPedido = "Pedido não pode ser finalizado por falta de estoque"
}

// Resumo do pedido
const resumo = (`
Cliente: ${cliente}
Produto: ${produto}
Preço: R$ ${preco}
Quantidade: ${quantidade}
Subtotal: R$ ${subtotal}
Desconto: ${descontoPercentual}%
Valor do desconto: R$ ${valorDesconto}
Valor final: R$ ${valorFinal}
Estoque: ${estoqueDisponivel}
Valor pago: R$ ${valorPago}
Situação do pagamento: ${pagamentoStatus}
Troco: R$ ${troco}
Situação do pedido: ${statusPedido}
`)

console.log(resumo)

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}
