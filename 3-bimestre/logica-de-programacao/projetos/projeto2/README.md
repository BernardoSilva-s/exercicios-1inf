# 🚀 PROJETO 2 — SISTEMA DE ANÁLISE DE PEDIDOS

# 🎯 PROBLEMA

Você faz parte da equipe de desenvolvimento de uma empresa de tecnologia que presta serviços para lojas de informática.

Durante a Sprint atual, o setor **Comercial** solicitou uma melhoria no sistema utilizado pelos vendedores para registrar pedidos.

Atualmente, o vendedor precisa realizar manualmente vários cálculos antes de finalizar uma venda. Além disso, algumas situações precisam ser verificadas, como a disponibilidade do produto em estoque, a existência de desconto e se o valor pago pelo cliente é suficiente.

Durante a reunião de **Sprint Planning**, o responsável pelo setor Comercial apresentou o seguinte problema:

> "Precisamos de uma solução que analise um pedido de venda e apresente ao vendedor os valores da compra e a situação do pedido antes que ele seja finalizado."
> 

O líder técnico transformou a solicitação nos requisitos abaixo.

# 📋 PROJETO

## RF01 — Registro do pedido

O sistema deve representar um pedido contendo:

- nome do cliente;
- nome do produto;
- preço do produto;
- quantidade solicitada;
- quantidade disponível em estoque;
- valor pago pelo cliente.

Para os testes, será utilizado inicialmente:

```
Cliente: Lucas Almeida
Produto: Notebook Gamer
Preço: R$ 4.500
Quantidade: 2
Estoque: 10
Valor pago: R$ 9.000
```

## RF02 — Cálculo do subtotal

O sistema deve calcular o valor total dos produtos considerando o preço unitário e a quantidade solicitada.

Para o cenário de teste:

```
Preço: R$ 4.500
Quantidade: 2

Subtotal esperado: R$ 9.000
```

## RF03 — Verificação do estoque

O sistema deve verificar se a quantidade solicitada está disponível no estoque.

Quando a quantidade solicitada for menor ou igual ao estoque disponível, o resultado deverá indicar que existe estoque suficiente.

Quando a quantidade solicitada for maior que o estoque disponível, o resultado deverá indicar que não existe estoque suficiente.

Para o cenário principal:

```
Quantidade solicitada: 2
Estoque: 10

Resultado esperado: Estoque disponível
```

## RF04 — Aplicação de desconto

A empresa possui uma regra comercial:

> Pedidos com subtotal igual ou superior a R$ 1.000 recebem 10% de desconto.
> 

Pedidos com subtotal inferior a R$ 1.000 não recebem desconto.

Para o cenário principal:

```
Subtotal: R$ 9.000

Desconto esperado: 10%
```

O sistema também deverá apresentar o valor correspondente ao desconto.

```
Valor do desconto esperado: R$ 900
```

## RF05 — Cálculo do valor final

O sistema deverá apresentar o valor que o cliente deverá pagar depois da aplicação do desconto.

Para o cenário principal:

```
Subtotal: R$ 9.000
Desconto: R$ 900

Valor final esperado: R$ 8.100
```

## RF06 — Verificação do pagamento

O sistema deverá verificar se o valor pago pelo cliente é suficiente para quitar o pedido.

Quando o valor pago for maior ou igual ao valor final, o pagamento deverá ser considerado aprovado.

Quando o valor pago for menor que o valor final, o pagamento deverá ser considerado insuficiente.

Para o cenário principal:

```
Valor final: R$ 8.100
Valor pago: R$ 9.000

Resultado esperado: Pagamento aprovado
```

## RF07 — Cálculo do troco

Quando o pagamento for suficiente, o sistema deverá calcular o troco do cliente.

Para o cenário principal:

```
Valor pago: R$ 9.000
Valor final: R$ 8.100

Troco esperado: R$ 900
```

Quando o pagamento for insuficiente, o troco deverá ser considerado:

```
R$ 0
```

## RF08 — Situação do pedido

O sistema deverá informar se o pedido poderá prosseguir para finalização.

Quando houver estoque suficiente, deverá apresentar:

```
Pedido disponível para finalização
```

Quando não houver estoque suficiente, deverá apresentar:

```
Pedido não pode ser finalizado por falta de estoque
```

Para o cenário principal, o resultado esperado é:

```
Pedido disponível para finalização
```

## RF09 — Resumo do pedido

O sistema deverá gerar uma apresentação textual contendo as principais informações da venda.

O resumo deverá conter:

- cliente;
- produto;
- preço;
- quantidade;
- subtotal;
- desconto;
- valor do desconto;
- valor final;
- situação do estoque;
- valor pago;
- situação do pagamento;
- troco;
- situação do pedido.

O formato visual da apresentação fica a critério do desenvolvedor.

# 🧪 CENÁRIOS DE NEGÓCIO

Além do cenário principal, o sistema deverá ser capaz de lidar com outras situações.

## Cenário 02 — Compra sem desconto

```
Cliente: Ana Souza
Produto: Teclado Mecânico
Preço: R$ 200
Quantidade: 2
Estoque: 10
Valor pago: R$ 400
```

Resultados esperados:

```
Subtotal: R$ 400
Desconto: 0%
Valor do desconto: R$ 0
Valor final: R$ 400
Pagamento: Pagamento aprovado
Troco: R$ 0
Estoque: disponível
```

## Cenário 03 — Estoque insuficiente

```
Cliente: Carlos Mendes
Produto: Placa de Vídeo
Preço: R$ 1.500
Quantidade: 8
Estoque: 5
Valor pago: R$ 12.000
```

Resultado esperado:

```
Estoque: indisponível

Pedido não pode ser finalizado por falta de estoque
```

## Cenário 04 — Pagamento insuficiente

```
Cliente: Mariana Lima
Produto: Monitor Gamer
Preço: R$ 2.000
Quantidade: 1
Estoque: 10
Valor pago: R$ 1.000
```

Resultados esperados:

```
Subtotal: R$ 2.000
Desconto: 10%
Valor do desconto: R$ 200
Valor final: R$ 1.800
Pagamento: Pagamento insuficiente
Troco: R$ 0
```

Crie o arquivo `index.js` que deverá conter a solução desenvolvida pelo aluno.

No final, cole esse código abaixo para que os testes funcionem:

```jsx
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
```

Boas práticas! 🤙