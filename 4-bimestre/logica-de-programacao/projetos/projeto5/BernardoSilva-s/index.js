const prompt = require("prompt-sync") ()
const nomeTurno = prompt("Digte o nome do turno: ") 
const meta = Number(prompt("Digite a meta: ")) 
const producaoInicial = Number(prompt("Digite a produção inicial: ")) 
const pecasPorCaixa = Number(prompt("Digite a quantidade de peças por caixa: "))

let producaoFinal = producaoInicial

while (producaoFinal < meta)  { 
    producaoFinal +=1
}

let itensRestantes = producaoFinal 
let caixasNecessarias =0 
 
do {
itensRestantes -= pecasPorCaixa
caixasNecessarias +=1
} while (itensRestantes >0 ) 

    const situacaoMeta = producaoFinal >= meta 
 ? "Meta atingida"
 : "Meta não atingida"   



 const resumo = ` turno: ${nomeTurno} 
 meta: ${meta}
 producaoInical: ${producaoInicial}
 pecasPorCaixa: ${pecasPorCaixa}
 producaoFinal: ${producaoFinal}
 caixasNecessaria : ${caixasNecessarias}
situacaoMeta: ${situacaoMeta}

 `







 module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}