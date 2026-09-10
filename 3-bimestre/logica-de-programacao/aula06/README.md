# Aula 6 — COMO VAMOS PROGRAMAR EM JS E DOCUMENTAÇÃO

# 🎯 Objetivos da Aula

- Compreender como vamos desenvolver em JavaScript durante a disciplina.
- Conhecer o Node.js como ambiente de execução.
- Entender a importância da documentação.
- Aprender a consultar a documentação oficial do JavaScript.
- Compreender que programar também envolve pesquisar e consultar referências.

# 🧩 Como vamos programar em JavaScript?

Durante a disciplina, utilizaremos principalmente:

- **GitHub** → armazenamento dos projetos;
- **GitHub Codespaces** → ambiente de desenvolvimento;
- **Node.js** → execução dos programas;
- **Jest** → testes automáticos;
- **GitHub Actions** → execução automática dos testes.

Nosso fluxo será:

```
GitHub
   ↓
Codespace
   ↓
Escrever código
   ↓
Executar com Node.js
   ↓
Testar com Jest
   ↓
Commit
   ↓
GitHub Actions
```

# 🖥️ O que é o Node.js?

O JavaScript nasceu para funcionar principalmente dentro dos navegadores.

O **Node.js** permite executar JavaScript fora do navegador.

Por exemplo, podemos criar:

```jsx
console.log("Olá, mundo!")
```

e executar:

```bash
node index.js
```

O Node.js interpreta o código e apresenta o resultado no terminal.

# 📌 Nosso arquivo principal

Durante as primeiras atividades utilizaremos:

```
index.js
```

Esse será o arquivo onde escreveremos nossos programas.

Exemplo:

```jsx
console.log("Meu primeiro código")
```

Para executar:

```bash
node index.js
```

Resultado:

```
Meu primeiro código
```

# 📚 O que é documentação?

A **documentação** é uma fonte de referência que explica como uma tecnologia funciona.

Ela apresenta informações como:

- comandos;
- funções;
- regras;
- exemplos;
- parâmetros;
- comportamentos;
- valores retornados.

Programadores consultam documentação constantemente.

**Saber pesquisar faz parte de programar.**

# 🌐 Documentação do JavaScript

Uma das principais referências para JavaScript é a **MDN Web Docs (**https://developer.mozilla.org/pt-BR/) ou mesmo o W3Schools (https://www.w3schools.com/).

Ela apresenta documentação sobre:

- JavaScript;
- HTML;
- CSS;
- APIs da Web.

Por exemplo, quando quisermos entender melhor o `console.log()`, podemos consultar a documentação em vez de tentar decorar tudo.

# 🔎 Como pesquisar na documentação

Imagine que queremos descobrir como funciona `console.log`.

Podemos pesquisar:

```
MDN console.log
```

ou:

```
JavaScript console.log MDN
```

O objetivo não é decorar todos os comandos.

O objetivo é aprender a **encontrar a informação correta**.

# 🧠 Programador não precisa decorar tudo

Um erro comum de quem está começando é pensar:

> "Um programador precisa saber todos os comandos de cabeça."
> 

Não.

Um bom programador precisa saber:

1. Entender o problema.
2. Saber o que precisa fazer.
3. Saber pesquisar.
4. Saber interpretar a documentação.
5. Testar a solução.

Por isso, consultar documentação durante o desenvolvimento é uma prática normal.

# 🧩 Exemplo

Queremos transformar uma mensagem em letras maiúsculas.

Podemos pesquisar na documentação:

```
JavaScript string uppercase MDN
```

Encontraremos o método:

```jsx
toUpperCase()
```

Então podemos utilizar:

```jsx
const nome = "John"

const resultado = nome.toUpperCase()

console.log(resultado)
```

Resultado:

```
JOHN
```

# ⚠️ Documentação × copiar código

Consultar documentação não significa simplesmente copiar e colar código.

O ideal é:

```
Problema
   ↓
Pesquisa
   ↓
Documentação
   ↓
Entendimento
   ↓
Código
   ↓
Teste
```

# 💬 Dica extra

> **Não tente decorar tudo. Aprenda a entender, pesquisar, testar e corrigir.**
> 

Essa habilidade será utilizada durante todo o curso.

Fim da aula!

_