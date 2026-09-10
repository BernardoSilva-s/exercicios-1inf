# Aula 9 — TIPOS DE DADOS, OPERADORES E EXPRESSÕES

# 🎯 Objetivos da Aula

- Conhecer os principais tipos de dados do JavaScript.
- Diferenciar texto, número e valor lógico.
- Conhecer os operadores aritméticos.
- Criar expressões utilizando operadores.
- Armazenar resultados de operações em variáveis.

# 🧩 O que são tipos de dados?

Um programa trabalha com diferentes tipos de informação.

Por exemplo:

```jsx
const nome = "Carlos"
const idade = 17
const aprovado = true
```

Essas três informações possuem características diferentes.

| Variável | Valor | Tipo |
| --- | --- | --- |
| `nome` | `"Carlos"` | String |
| `idade` | `17` | Number |
| `aprovado` | `true` | Boolean |

# 📝 String

`String` representa textos.

```jsx
const nome = "Carlos"
const cidade = "Fortaleza"
const curso = "Desenvolvimento de Sistemas"
```

Podemos utilizar aspas simples:

```jsx
const nome = 'Carlos'
```

ou aspas duplas:

```jsx
const nome = "Carlos"
```

Durante o curso, podemos manter um padrão utilizando aspas duplas.

# 🔢 Number

`Number` representa números.

```jsx
const idade = 17
const nota = 8.5
const quantidade = 10
```

JavaScript utiliza o mesmo tipo `Number` para números inteiros e decimais.

```jsx
const numeroInteiro = 10
const numeroDecimal = 10.5
```

# ✅ Boolean

`Boolean` representa apenas dois valores:

```jsx
true
```

ou:

```jsx
false
```

Exemplo:

```jsx
const alunoAtivo = true
const aprovado = false
```

Podemos pensar:

```
true  → verdadeiro
false → falso
```

# 🧩 Descobrindo o tipo com `typeof`

JavaScript possui o operador `typeof`.

```jsx
const nome = "Carlos"

console.log(typeof nome)
```

Resultado:

```
string
```

Outro exemplo:

```jsx
const idade = 17

console.log(typeof idade)
```

Resultado:

```
number
```

E:

```jsx
const aprovado = true

console.log(typeof aprovado)
```

Resultado:

```
boolean
```

# ➕ Operadores Aritméticos

JavaScript permite realizar operações matemáticas.

| Operador | Operação |
| --- | --- |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Resto da divisão |
| `**` | Potenciação |

# 📌 Adição

```jsx
const resultado = 10 + 5

console.log(resultado)
```

Resultado:

```
15
```

# 📌 Subtração

```jsx
const resultado = 10 - 5
```

Resultado:

```
5
```

# 📌 Multiplicação

```jsx
const resultado = 10 * 5
```

Resultado:

```
50
```

# 📌 Divisão

```jsx
const resultado = 10 / 5
```

Resultado:

```
2
```

# 📌 Resto da divisão — `%`

O operador `%` retorna o resto de uma divisão.

```jsx
const resultado = 10 % 3
```

Resultado:

```
1
```

Porque:

```
10 ÷ 3 = 3
resto = 1
```

Esse operador será muito importante quando começarmos a trabalhar com condicionais.

# 📌 Potenciação — `*`

```jsx
const resultado = 2 ** 3
```

Resultado:

```
8
```

Porque:

```
2 × 2 × 2 = 8
```

# 🧩 O que é uma expressão?

Uma **expressão** é uma combinação de valores, variáveis e operadores que produz um resultado.

Por exemplo:

```jsx
10 + 5
```

é uma expressão.

Também podemos utilizar variáveis:

```jsx
const idade = 17
const resultado = idade + 1
```

A expressão:

```jsx
idade + 1
```

produz:

```
18
```

# 📌 Operações com variáveis

Podemos combinar várias variáveis:

```jsx
const preco = 50
const quantidade = 3

const total = preco * quantidade

console.log(total)
```

Resultado:

```
150
```

Esse tipo de operação será muito utilizado nos projetos.

# 🧠 Ordem das operações

JavaScript segue a ordem matemática das operações.

```jsx
const resultado = 10 + 5 * 2
```

Primeiro:

```
5 × 2 = 10
```

Depois:

```
10 + 10 = 20
```

Resultado:

```
20
```

Podemos utilizar parênteses para definir a prioridade:

```jsx
const resultado = (10 + 5) * 2
```

Agora:

```
15 × 2 = 30
```

Resultado:

```
30
```

# 🧩 Exemplo prático — Compra

Imagine um sistema de vendas.

Um produto custa:

```jsx
const preco = 25
```

O cliente compra:

```jsx
const quantidade = 4
```

Podemos calcular:

```jsx
const total = preco * quantidade
```

Resultado:

```
100
```

O programa conseguiu transformar informações simples em uma solução para um problema real.

Fim da aula!

_

# 🧩 Exercício Rápido

Uma loja precisa calcular o valor total de uma compra.

Crie:

```jsx
const preco = 25
const quantidade = 4
```

Calcule o valor total e armazene o resultado em uma variável chamada `total`.

Depois calcule o valor restante após o cliente pagar `120` reais.

Armazene o resultado em uma variável chamada `troco`.