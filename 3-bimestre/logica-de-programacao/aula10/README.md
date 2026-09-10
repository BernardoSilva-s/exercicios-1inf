# Aula 10 — COMENTÁRIOS NO CÓDIGO E O USO DO PONTO E VÍRGULA

# 🎯 Objetivos da Aula

- Compreender o que são comentários no código.
- Aprender a criar comentários de uma linha e de múltiplas linhas.
- Entender por que comentários são importantes.
- Conhecer o uso do ponto e vírgula (`;`) em JavaScript.
- Compreender o **Automatic Semicolon Insertion (ASI)**.
- Definir um padrão de escrita para os códigos da disciplina.

# 🧩 O que são comentários?

**Comentários** são trechos escritos dentro do código que não são executados pelo programa.

Eles servem para adicionar informações que ajudam os programadores a entender o código.

Por exemplo:

```jsx
// Nome do aluno
const nome = "Carlos"
```

O JavaScript ignora:

```jsx
// Nome do aluno
```

e executa apenas:

```jsx
const nome = "Carlos"
```

# 📌 Por que utilizar comentários?

Comentários podem ajudar a:

- explicar uma parte importante do código;
- identificar uma seção do programa;
- registrar uma decisão;
- facilitar a manutenção;
- ajudar outros programadores a entenderem o código.

Porém, comentários não devem explicar aquilo que já é óbvio.

Exemplo desnecessário:

```jsx
// Cria uma variável chamada nome
const nome = "Carlos"
```

O próprio código já é bastante claro.

Um comentário mais útil seria:

```jsx
// Nome utilizado para gerar o certificado do aluno
const nome = "Carlos"
```

# 📝 Comentário de uma linha

Para criar um comentário de uma linha utilizamos:

```jsx
//
```

Exemplo:

```jsx
// Dados do aluno

const nome = "Carlos"
const idade = 17
```

Tudo que estiver depois de `//` naquela linha será ignorado.

# 🧩 Comentário no final de uma linha

Também podemos colocar o comentário depois de uma instrução:

```jsx
const idade = 17 // idade atual do aluno
```

O JavaScript executará:

```jsx
const idade = 17
```

e ignorará:

```jsx
// idade atual do aluno
```

# 📚 Comentários de múltiplas linhas

Quando precisamos escrever um comentário com várias linhas, utilizamos:

```jsx
/*
   comentário
   de várias
   linhas
*/
```

Exemplo:

```jsx
/*
  Cadastro inicial
  do aluno
*/

const nome = "Carlos"
const idade = 17
```

Tudo entre:

```jsx
/*
```

e:

```jsx
*/
```

será ignorado.

# ⚠️ Comentário não é código

Observe:

```jsx
// console.log("Olá")
```

O programa **não executará** o `console.log()`.

Isso pode ser útil para testar temporariamente uma parte do código.

Exemplo:

```jsx
console.log("Mensagem 1")
// console.log("Mensagem 2")
console.log("Mensagem 3")
```

Resultado:

```
Mensagem 1
Mensagem 3
```

# 🧩 O que é o ponto e vírgula?

O ponto e vírgula:

```jsx
;
```

pode ser utilizado para indicar o final de uma instrução em JavaScript.

Exemplo:

```jsx
const nome = "Carlos";
const idade = 17;
console.log(nome);
```

Cada instrução termina com `;`.

# 📌 JavaScript exige ponto e vírgula?

**Não necessariamente.**

JavaScript possui um mecanismo chamado **Automatic Semicolon Insertion (ASI)**.

Isso significa que, em determinadas situações, o JavaScript consegue interpretar o final de uma instrução mesmo quando o `;` não foi escrito.

Por isso, também podemos escrever:

```jsx
const nome = "Carlos"
const idade = 17

console.log(nome)
```

Esse código é válido.

# 🔎 Comparando os dois estilos

Com ponto e vírgula:

```jsx
const nome = "Carlos";
const idade = 17;

console.log(nome);
```

Sem ponto e vírgula:

```jsx
const nome = "Carlos"
const idade = 17

console.log(nome)
```

Os dois estilos são utilizados por programadores.

# 📌 Qual padrão utilizaremos?

Na nossa disciplina, vamos utilizar **JavaScript sem ponto e vírgula**.

Portanto, escreveremos:

```jsx
const nome = "Carlos"
const idade = 17

console.log(nome)
```

e não:

```jsx
const nome = "Carlos";
const idade = 17;

console.log(nome);
```

O objetivo é manter todos os exercícios com o mesmo padrão visual.

# 🧠 Por que aprender sobre `;` se não vamos utilizá-lo?

Porque você encontrará código com ponto e vírgula em:

- projetos profissionais;
- tutoriais;
- documentação;
- GitHub;
- projetos de outros programadores.

É importante saber que:

```jsx
const nome = "Carlos";
```

e:

```jsx
const nome = "Carlos"
```

são formas válidas de escrever a instrução.

# ⚠️ Cuidado com o Automatic Semicolon Insertion

O JavaScript tenta inserir automaticamente o ponto e vírgula quando necessário.

Porém, isso não significa que podemos quebrar qualquer código em qualquer lugar.

Por exemplo:

```jsx
const resultado = 10
+ 5
```

O comportamento pode não ser o que o programador pretendia dependendo da estrutura.

Por isso, mesmo trabalhando sem `;`, devemos manter um código organizado e seguir boas práticas de formatação.

# 🧩 Exemplo prático

Imagine um sistema que calcula a pontuação de um aluno:

```jsx
const nome = "Carlos"
const nota1 = 8
const nota2 = 9

const media = (nota1 + nota2) / 2

console.log(media)
```

Podemos adicionar comentários para separar as partes:

```jsx
// Dados do aluno
const nome = "Carlos"
const nota1 = 8
const nota2 = 9

// Calcula a média
const media = (nota1 + nota2) / 2

// Exibe o resultado
console.log(media)
```

O programa continua funcionando exatamente da mesma forma.

Fim da aula!

_