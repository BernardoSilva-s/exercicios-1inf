const prompt = require("prompt-sync")()

const limiteEstoqueBaixo = Number(prompt("Limite de estoque baixo: "))
const quantidadeProdutos = Number(prompt("Quantidade de produtos: "))
const catalogo = []

for (let i = 0; i < quantidadeProdutos; i++) {
	const nome = prompt(`Produto ${i + 1} - nome: `)
	const preco = Number(prompt(`Produto ${i + 1} - preço: `))
	const estoque = Number(prompt(`Produto ${i + 1} - estoque: `))

	catalogo.push({ nome, preco, estoque })
}

const nomeProdutoReajuste = prompt("Reajuste - nome do produto: ")
const aumento = Number(prompt("Reajuste - aumento: "))

for (let i = 0; i < catalogo.length; i++) {
	if (catalogo[i].nome === nomeProdutoReajuste) {
		catalogo[i].preco += aumento
		break
	}
}

let produtoMaisCaro = catalogo.length > 0 ? catalogo[0].nome : undefined
let maiorPreco = catalogo.length > 0 ? catalogo[0].preco : -Infinity
let estoqueTotal = 0
let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
	if (catalogo[i].preco > maiorPreco) {
		maiorPreco = catalogo[i].preco
		produtoMaisCaro = catalogo[i].nome
	}

	estoqueTotal += catalogo[i].estoque

	if (catalogo[i].estoque <= limiteEstoqueBaixo) {
		produtosComEstoqueBaixo++
	}
}

const resumo = `Produto mais caro: ${produtoMaisCaro}\nEstoque total: ${estoqueTotal}\nProdutos com estoque baixo: ${produtosComEstoqueBaixo}`

module.exports = {
	catalogo,
	limiteEstoqueBaixo,
	produtoMaisCaro,
	estoqueTotal,
	produtosComEstoqueBaixo,
	resumo
}
