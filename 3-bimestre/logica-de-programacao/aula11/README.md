# Aula 11 — OPERAÇÕES COM VARIÁVEIS

# 🎯 Objetivos da Aula

- Realizar operações utilizando variáveis.
- Utilizar variáveis em cálculos matemáticos.
- Compreender a diferença entre armazenar um valor e calcular um resultado.
- Utilizar operadores `+`, , , `/` e `%` com variáveis.
- Resolver problemas simples utilizando informações armazenadas.
- Aplicar operações com variáveis em situações próximas da realidade profissional.

# 🧩 Relembrando as variáveis

Na aula anterior aprendemos que uma variável permite armazenar uma informação.

Por exemplo:

```
const preco = 50
const quantidade = 3
```

Podemos utilizar essas informações em uma operação:

```
const total = preco * quantidade
```

Agora temos:

```
preco       → 50
quantidade  → 3
total       → 150
```

# 📌 Operações com variáveis

Podemos utilizar os operadores matemáticos que já conhecemos:

| Operador | Operação | Exemplo |
| --- | --- | --- |
| `+` | Adição | `a + b` |
| `-` | Subtração | `a - b` |
| `*` | Multiplicação | `a * b` |
| `/` | Divisão | `a / b` |
| `%` | Resto | `a % b` |
| `**` | Potência | `a ** b` |

# ➕ Adição

```
const numero1 = 10
const numero2 = 5

const resultado = numero1 + numero2

console.log(resultado)
```

Resultado:

```
15
```

# ➖ Subtração

```
const saldo = 100
const gasto = 35

const restante = saldo - gasto

console.log(restante)
```

Resultado:

```
65
```

Esse tipo de operação aparece, por exemplo, em sistemas financeiros.

# ✖️ Multiplicação

```
const preco = 20
const quantidade = 5

const total = preco * quantidade

console.log(total)
```

Resultado:

```
100
```

# ➗ Divisão

```
const total = 100
const pessoas = 4

const valorPorPessoa = total / pessoas

console.log(valorPorPessoa)
```

Resultado:

```
25
```

# `%` — Resto da divisão

O operador `%` também pode ser utilizado com variáveis.

```
const numero = 17
const divisor = 5

const resto = numero % divisor

console.log(resto)
```

Resultado:

```
2
```

Porque:

```
17 ÷ 5 = 3
resto = 2
```

Esse operador será muito importante quando começarmos a trabalhar com condicionais.

# 🧩 Variáveis podem participar de várias operações

Uma mesma variável pode ser utilizada várias vezes.

```
const preco = 100

const desconto = 20
const valorComDesconto = preco - desconto

const imposto = 10
const valorFinal = valorComDesconto + imposto

console.log(valorFinal)
```

O programa realiza:

```
100 - 20 = 80
80 + 10 = 90
```

Resultado:

```
90
```

# 🧠 Criando um pequeno sistema

Imagine que estamos desenvolvendo um sistema de uma loja.

Recebemos:

```
const preco = 80
const quantidade = 3
```

Precisamos descobrir o valor da compra.

```
const total = preco * quantidade
```

Agora precisamos aplicar um desconto de R$ 20:

```
const desconto = 20
const valorFinal = total - desconto
```

Nosso programa ficou:

```
const preco = 80
const quantidade = 3
const desconto = 20

const total = preco * quantidade
const valorFinal = total - desconto

console.log(valorFinal)
```

Resultado:

```
220
```

# 📌 Uma variável pode depender de outra

Observe:

```
const preco = 80
const quantidade = 3

const total = preco * quantidade
```

A variável `total` depende dos valores de:

```
preco
quantidade
```

Podemos representar:

```
preco ───────┐
             ├──→ total
quantidade ──┘
```

Isso é muito comum em sistemas reais.

# 🧩 Exemplo — Média de um aluno

Imagine um sistema escolar.

Temos três notas:

```
const nota1 = 8
const nota2 = 7
const nota3 = 9
```

Podemos calcular a média:

```
const media = (nota1 + nota2 + nota3) / 3
```

Resultado:

```
8
```

O programa completo:

```
const nota1 = 8
const nota2 = 7
const nota3 = 9

const media = (nota1 + nota2 + nota3) / 3

console.log(media)
```

# ⚠️ Cuidado com a ordem das operações

Observe:

```
const resultado = 10 + 20 * 2
```

O resultado será:

```
50
```

Primeiro:

```
20 × 2 = 40
```

Depois:

```
10 + 40 = 50
```

Se quisermos realizar a soma primeiro:

```
const resultado = (10 + 20) * 2
```

Agora:

```
30 × 2 = 60
```

Fim da aula!

_

# 🧩 Exercício Rápido

Uma loja precisa calcular o valor final de uma compra.

O cliente comprou:

```
Preço do produto: R$ 80
Quantidade: 3
Desconto: R$ 20
```

Crie as variáveis:

```
preco
quantidade
desconto
```

Calcule:

```
total
```

Depois calcule:

```
valorFinal
```

O resultado esperado é:

```
220
```