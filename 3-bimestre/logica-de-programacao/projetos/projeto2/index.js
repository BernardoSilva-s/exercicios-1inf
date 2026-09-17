const cliente = "Lucas Almeida"
const produto = "notebook gamer"
const preco = 4500
const quantidade = 2
const estoque = 10 
const valorPago = 9000
const subtotal = "preco * quantidade"

let descontoPercentual = "nenhum"
let statusPedido = "aguardando"
let pagamentoStatus = "aguardo"
let estoqueDisponivel = "aguardando"


if( "quantidade"<="estoque" ) {
    estoqueDisponivel = "Estoque disponível"
    statusPedido = "Pedido aprovado"
    console.log("estoque disponivel")
} else{
    console.log("estoque indisponivel")
}

if (valorPago >= valorFinal){
    pagamentoStatus = "aprovado"
} else {
    pagamentoStatus = "pagamento negado"
}

const resumo = `cliente: ${cliente}
produto: ${produto}
preco: ${preco}
quantidade: ${quantidade}
estoque:${estoque}
valorPago:${valorPago}
subtotal:${subtotal}
estoqueDisponivel:${estoqueDisponivel}
descontoPercentual:${descontoPercentual}
valorDesconto:${this.valorDesconto}
valorFinal:${this.valorFinal}
pagamentoStatus:${pagamentoStatus}
troco:${troco}
statusPedido:${statusPedido}
resumo:${resumo}
`










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