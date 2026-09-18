const cliente = "Larissa Farias"
const calcado = "Tênis Esportivo"
const preco = 90
const quantidade = 4
const estoque = 2
const valorPago = 500

const subtotal = preco * quantidade

let estoqueDisponivel

if (quantidade <= estoque) {
    estoqueDisponivel = "Estoque suficiente"
} else {
    estoqueDisponivel = "Estoque insuficiente"
}


let cupomStatus
let valorCupom

if (subtotal >= 200) {
    cupomStatus = "Cupom aplicado"
    valorCupom = 40
} else {
    cupomStatus = "Sem cupom"
    valorCupom = 0
}

const valorFinal = subtotal - valorCupom

let pagamentoStatus

if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}


let troco

if (pagamentoStatus === "Pagamento aprovado") {
    troco = valorPago - valorFinal
} else {
    troco = 0
}

let statusCompra

if (estoqueDisponivel === "Estoque suficiente") {
    if (pagamentoStatus === "Pagamento aprovado") {
        statusCompra = "Compra confirmada"
    } else {
        statusCompra = "Compra pendente de pagamento"
    }
} else {
    statusCompra = "Compra não pode ser confirmada por falta de estoque"
}


const resumo = `
Cliente: ${cliente}
Calçado: ${calcado}
Preço: R$ ${preco}
Quantidade solicitada: ${quantidade}
Estoque disponível: ${estoque}
Subtotal: R$ ${subtotal}
Cupom: ${cupomStatus}
Valor do cupom: R$ ${valorCupom}
Valor final: R$ ${valorFinal}
Pagamento: ${pagamentoStatus}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}
Situação: ${statusCompra}
`

console.log(resumo)

module.exports = {
    cliente,
    calcado,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    cupomStatus,
    valorCupom,
    valorFinal,
    pagamentoStatus,
    troco,
    statusCompra,
    resumo
}
