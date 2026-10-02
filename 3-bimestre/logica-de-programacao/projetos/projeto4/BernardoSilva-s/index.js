const cliente = "Eduardo Nunes"
const opcaoMenu = 4
const quantidade = 2
const formaPagamento = "cartao"
const statusPedido = "pendente"

let prato

switch (opcaoMenu) {
    case 1:
        prato = "casquinha"
        break
    case 2:
        prato = "Milkshake"
        break
    case 3:
        prato = "sundae"
        break
    case 4:
        prato = "Picolé"
        break
    default:
        prato = "opção inválida"
        break

}

let precoUnitario

switch (opcaoMenu) {
    case 1:
        precoUnitario = 7
        break
    case 2:
        precoUnitario = 18
        break
    case 3:
        precoUnitario = 16
        break
    case 4:
        precoUnitario = 5
        break
    default:
        precoUnitario = 0
        break

}

const subtotal = precoUnitario * quantidade
const freteStatus = subtotal >= 40 ? "Frete gratís" : "Frete pago"
const frete = subtotal >= 40 ? 0 : 8

let pagamentoMensagem = "aguardando"

switch (formaPagamento) {
    case "pix":
        pagamentoMensagem = "Pagamento via PIX"
        break
    case "cartao":
        pagamentoMensagem = "Pagamento via cartão"
        break
    case "dinheiro":
        break
    default:
        pagamentoMensagem = "Forma de pagamento inválida"
        break

}


let descontoPercentual

switch (formaPagamento) {
    case "pix":
    case "cartao":
        descontoPercentual = 5
        break
    case "dinheiro":
    default:
        descontoPercentual = 0
        break
}

const desconto = subtotal * descontoPercentual / 100
const total = subtotal - desconto + frete

let statusMensagem

switch (statusPedido) {
    case "pendente":
        statusMensagem = "Aguardando pagamento"
        break
    case "aprovado":
        statusMensagem = "Pedido em preparo"
        break
    case "enviado":
        statusMensagem = "Pedido a caminho"
        break
    case "cancelado":
        statusMensagem = "Pedido cancelado"
        break
    default:
        statusMensagem = "Status desconhecido"
        break
}



const resumo = `
cliente: ${cliente}
opcaoMenu: ${prato}
quantidade: ${quantidade}
formaPagamento: ${formaPagamento}
statusPedido : ${statusPedido}
prato: ${prato}
precoUnitario :{precoUnitario}
subtotal: ${subtotal}
freteStatutos: ${freteStatus}
frete :${frete}
pagamentoMensagem: ${pagamentoMensagem}
descontoPercentual : ${descontoPercentual}
desconto : ${desconto}
total : ${total}
statusMensagen : ${statusMensagem}
`




module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}