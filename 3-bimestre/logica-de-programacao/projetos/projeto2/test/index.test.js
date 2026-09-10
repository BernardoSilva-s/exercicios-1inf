const {
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
} = require("../index")


test("Deve armazenar corretamente os dados do pedido", () => {

    expect(cliente).toBe("Lucas Almeida")
    expect(produto).toBe("Notebook Gamer")
    expect(preco).toBe(4500)
    expect(quantidade).toBe(2)
    expect(estoque).toBe(10)
    expect(valorPago).toBe(9000)

})


test("Deve calcular o subtotal corretamente", () => {

    expect(subtotal).toBe(9000)

})


test("Deve identificar que existe estoque suficiente", () => {

    expect(estoqueDisponivel).toBe("Sim")

})


test("Deve aplicar 10% de desconto para pedidos acima do valor mínimo", () => {

    expect(descontoPercentual).toBe(10)
    expect(valorDesconto).toBe(900)

})


test("Deve calcular o valor final corretamente", () => {

    expect(valorFinal).toBe(8100)

})


test("Deve identificar o pagamento como aprovado", () => {

    expect(pagamentoStatus).toBe("Pagamento aprovado")

})


test("Deve calcular o troco corretamente", () => {

    expect(troco).toBe(900)

})


test("Deve permitir a finalização do pedido quando houver estoque", () => {

    expect(statusPedido)
        .toBe("Pedido disponível para finalização")

})


test("Deve gerar um resumo contendo as informações do pedido", () => {

    expect(resumo).toContain("Lucas Almeida")
    expect(resumo).toContain("Notebook Gamer")
    expect(resumo).toContain("4500")
    expect(resumo).toContain("9000")
    expect(resumo).toContain("10")
    expect(resumo).toContain("900")
    expect(resumo).toContain("8100")
    expect(resumo).toContain("Pagamento aprovado")
    expect(resumo).toContain(
        "Pedido disponível para finalização"
    )

})