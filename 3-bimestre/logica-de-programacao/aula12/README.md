# Aula 12 — STRING E TEMPLATE STRING

# 🎯 Objetivos da Aula

- Compreender o que são strings.
- Criar e armazenar textos em variáveis.
- Concatenar strings.
- Utilizar o operador `+` com textos.
- Conhecer as template strings.
- Utilizar `${}` para inserir variáveis dentro de textos.
- Criar mensagens dinâmicas.

# 🧩 O que é uma String?

Uma **string** representa uma sequência de caracteres utilizada para armazenar textos.

Exemplos:

```
const nome = "Carlos"
const cidade = "Fortaleza"
const curso = "Desenvolvimento de Sistemas"
```

Todos esses valores são strings.

# 📌 Strings precisam de aspas

Podemos utilizar aspas simples:

```
const nome = 'Carlos'
```

ou aspas duplas:

```
const nome = "Carlos"
```

Também podemos utilizar **template strings**, que veremos nesta aula:

```
const nome = `Carlos`
```

# 🔤 Strings também podem conter números

Observe:

```
const idade = 17
```

Aqui temos um número.

Agora:

```
const idade = "17"
```

Aqui temos uma string.

Apesar de visualmente parecerem iguais, são tipos diferentes.

```
const numero = 17
const texto = "17"
```

Podemos verificar:

```
console.log(typeof numero)
console.log(typeof texto)
```

Resultado:

```
number
string
```

# 🧩 Concatenando strings

Podemos juntar textos utilizando `+`.

```
const nome = "Carlos"
const sobrenome = "Silva"

const nomeCompleto = nome + " " + sobrenome

console.log(nomeCompleto)
```

Resultado:

```
Carlos Silva
```

Esse processo é chamado de **concatenação**.

# 📌 Outro exemplo

```
const curso = "Desenvolvimento"
const area = "de Sistemas"

const nomeCurso = curso + " " + area

console.log(nomeCurso)
```

Resultado:

```
Desenvolvimento de Sistemas
```

# ⚠️ O operador `+` pode fazer coisas diferentes

Quando utilizamos números:

```
const resultado = 10 + 5
```

Temos:

```
15
```

Quando utilizamos strings:

```
const resultado = "10" + "5"
```

Temos:

```
105
```

Porque o JavaScript está concatenando os textos.

# 🧩 Misturando números e strings

Observe:

```
const idade = 17

const mensagem = "Eu tenho " + idade + " anos."

console.log(mensagem)
```

Resultado:

```
Eu tenho 17 anos.
```

Isso funciona, mas pode ficar difícil de ler quando temos muitas variáveis.

Por isso existe uma forma melhor.

# 🚀 Template String

As **template strings** utilizam crases:

```
`
```

Exemplo:

```
const nome = "Carlos"

const mensagem = `Olá, ${nome}!`

console.log(mensagem)
```

Resultado:

```
Olá, Carlos!
```

# 🧩 O que significa `${}`?

Dentro de uma template string podemos utilizar:

```
${variavel}
```

O JavaScript substitui essa expressão pelo seu valor.

Exemplo:

```
const nome = "Maria"
const idade = 17

const mensagem = `Meu nome é ${nome} e tenho ${idade} anos.`

console.log(mensagem)
```

Resultado:

```
Meu nome é Maria e tenho 17 anos.
```

# 📌 Template String com operações

Não precisamos colocar apenas variáveis.

Podemos colocar expressões:

```
const preco = 50
const quantidade = 3

const mensagem = `O total é R$ ${preco * quantidade}.`

console.log(mensagem)
```

Resultado:

```
O total é R$ 150.
```

# 🧠 Template String × concatenação

### Concatenação

```
const nome = "Carlos"
const idade = 17

const mensagem = "Meu nome é " + nome + " e tenho " + idade + " anos."
```

### Template String

```
const nome = "Carlos"
const idade = 17

const mensagem = `Meu nome é ${nome} e tenho ${idade} anos.`
```

A segunda forma costuma ser mais fácil de ler.

# 📌 Template Strings com várias linhas

Outra vantagem é poder criar textos em várias linhas.

```
const mensagem = `
Olá!

Bem-vindo ao curso de
Desenvolvimento de Sistemas.
`

console.log(mensagem)
```

Isso é especialmente útil quando precisamos construir mensagens maiores.

# 🧩 Exemplo prático — Perfil de aluno

Imagine que um sistema precisa gerar uma apresentação do aluno.

Temos:

```
const nome = "Carlos"
const idade = 17
const curso = "Desenvolvimento de Sistemas"
```

Podemos criar:

```
const perfil = `O aluno ${nome} tem ${idade} anos e está matriculado no curso de ${curso}.`
```

Resultado:

```
O aluno Carlos tem 17 anos e está matriculado no curso de Desenvolvimento de Sistemas.
```

# 🧩 Exemplo prático — Produto

Um sistema de vendas possui:

```
const produto = "Teclado"
const preco = 120
const quantidade = 2
```

Podemos calcular:

```
const total = preco * quantidade
```

E gerar uma mensagem:

```
const mensagem = `O cliente comprou ${quantidade} unidades de ${produto}, totalizando R$ ${total}.`
```

Resultado:

```
O cliente comprou 2 unidades de Teclado, totalizando R$ 240.
```

Aqui estamos juntando os conhecimentos das aulas anteriores:

```
Variáveis
   ↓
Operações
   ↓
Strings
   ↓
Template String
   ↓
Mensagem final
```

Fim da aula!

_

# 🧩 Exercício Rápido

Crie um programa que possua as seguintes informações:

```
const nome = "Carlos"
const curso = "Desenvolvimento de Sistemas"
const escola = "EEEP"
```

Utilizando **template string**, crie uma variável chamada:

```
mensagem
```

Ela deverá produzir exatamente:

```
Carlos está estudando Desenvolvimento de Sistemas na EEEP.
```