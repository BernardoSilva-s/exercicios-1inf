# Aula 8 — VARIÁVEIS E PREFIXOS `let`, `const` E `var`

# 🎯 Objetivos da Aula

- Compreender o que são variáveis.
- Aprender a criar variáveis em JavaScript.
- Conhecer `let`, `const` e `var`.
- Entender quando utilizar cada declaração.
- Alterar valores armazenados em variáveis.
- Identificar a diferença entre uma variável que pode ou não ser alterada.

# 🧩 O que é uma variável?

Uma **variável** é um espaço utilizado pelo programa para armazenar uma informação.

Imagine que precisamos guardar o nome de um aluno:

```jsx
const nome = "Carlos"
```

Podemos pensar que o programa possui uma "caixa" chamada `nome`:

```
nome
┌──────────┐
│ Carlos   │
└──────────┘
```

Depois podemos utilizar essa informação:

```jsx
console.log(nome)
```

Resultado:

```
Carlos
```

# 📌 Criando uma variável

A forma mais comum atualmente é utilizar `let` ou `const`.

```jsx
let idade = 17
```

Nesse exemplo:

- `let` → define a variável;
- `idade` → nome da variável;
- `=` → atribui um valor;
- `17` → valor armazenado.

# 🧩 O `let`

Utilizamos `let` quando o valor da variável **pode mudar** durante a execução do programa.

```jsx
let idade = 17

idade = 18

console.log(idade)
```

Resultado:

```
18
```

O valor foi alterado de `17` para `18`.

# 🧩 O `const`

Utilizamos `const` quando não pretendemos atribuir outro valor à variável.

```jsx
const nome = "Carlos"

console.log(nome)
```

Podemos utilizar o valor normalmente:

```jsx
console.log(nome)
```

Mas não podemos fazer:

```jsx
nome = "João"
```

Isso causará um erro.

# 🔄 `let` × `const`

| Declaração | Pode receber outro valor? | Uso comum |
| --- | --- | --- |
| `let` | ✅ Sim | Valores que mudam |
| `const` | ❌ Não | Valores que não serão reatribuídos |
| `var` | ✅ Sim | Código legado |

# 🧩 E o `var`?

Antes do `let` e do `const`, JavaScript utilizava principalmente `var`.

Exemplo:

```jsx
var nome = "Carlos"

nome = "João"

console.log(nome)
```

Funciona normalmente.

Porém, `var` possui comportamentos relacionados ao escopo que podem causar confusão, principalmente em programas maiores.

Por isso, em código moderno, normalmente preferimos:

```jsx
let
```

e

```jsx
const
```

# 📌 Regra que vamos utilizar

Durante nossas atividades, utilizaremos principalmente:

```jsx
const
```

quando o valor não precisar ser reatribuído.

E:

```jsx
let
```

quando o valor precisar mudar.

Evite `var`, salvo quando for solicitado em algo muito específico.

# 🧠 Exemplos

### Valor que não muda

```jsx
const nome = "Maria"
const cidade = "Fortaleza"
const escola = "EEEP"
```

### Valor que muda

```jsx
let pontos = 0

pontos = 10
pontos = 20
```

# 📌 Uma variável pode ser utilizada várias vezes

```jsx
const nome = "Maria"

console.log(nome)
console.log(nome)
console.log("Olá,", nome)
```

Resultado:

```
Maria
Maria
Olá, Maria
```

# ⚠️ Cuidado com nomes de variáveis

Prefira nomes que expliquem o que está sendo armazenado:

```jsx
const nomeAluno = "Maria"
const idadeAluno = 17
const notaFinal = 8.5
```

Evite:

```jsx
const x = "Maria"
const a = 17
const n = 8.5
```

Quanto mais claro o nome, mais fácil será entender o programa.

# 📌 Regras básicas para nomes

Podemos utilizar:

```jsx
const nome = "Maria"
const nomeAluno = "João"
const idade2 = 17
```

Não podemos começar com número:

```jsx
const 2idade = 17
```

Também não devemos utilizar espaços:

```jsx
const nome aluno = "Maria"
```

Utilizamos normalmente **camelCase**:

```jsx
const nomeCompleto = "Maria Silva"
const idadeAluno = 17
const notaPrimeiraProva = 8
```

Fim da aula!

_

# 🧩 Exercício Rápido

No arquivo index.js, crie 3 variáveis que armazene:

- nome recebendo Carlos;
- idade recebendo 17;
- cidade recebendo Fortaleza.

Utilize `const` para as três informações.