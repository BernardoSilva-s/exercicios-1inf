# Aula 2 — CONHECENDO O CODESPACE: COMO SERÁ O DESENVOLVIMENTO DE ATIVIDADES E PROJETOS

# 🎯 Objetivos da Aula

- Conhecer o GitHub Codespaces.
- Aprender como será o ambiente de programação.
- Conhecer o explorador de arquivos.
- Utilizar o terminal.
- Executar programas em JavaScript.
- Executar testes utilizando Jest.

# 🧩 O que é o GitHub Codespaces?

O **GitHub Codespaces** é um ambiente de desenvolvimento online.

Isso significa que podemos programar diretamente pelo navegador, sem instalar programas no computador.

Dentro dele teremos:

- editor de código;
- terminal;
- arquivos do projeto;
- integração com GitHub.

Tudo ficará salvo automaticamente no repositório.

# 🖥️ Conhecendo a interface

Ao abrir um Codespace encontraremos:

## Explorer

Mostra todos os arquivos do projeto.

Exemplo:

```
index.js
package.json
README.md
test
```

## Editor

Área onde escrevemos o código.

## Terminal

Local onde executamos comandos.

Exemplo:

```bash
node index.js
```

# 📦 Instalando dependências

Quando um projeto é aberto pela primeira vez, utilizamos:

```bash
npm install
```

Esse comando instala todas as dependências descritas no arquivo `package.json`.

# ▶️ Executando um programa

Para executar um arquivo JavaScript:

```bash
node index.js
```

# 🧪 Executando testes

Durante toda a disciplina utilizaremos:

```bash
npm test
```

O Jest executará automaticamente todos os testes da pasta:

```
test
```

Se tudo estiver correto aparecerá:

```
PASS
```

Caso exista algum erro:

```
FAIL
```

Esses mesmos testes serão executados automaticamente pelo GitHub Actions.

# 📌 Fluxo de trabalho da disciplina

Em praticamente todas as aulas seguiremos este processo:

1. Abrir o Codespace.
2. Ler o README.
3. Desenvolver o exercício.
4. Executar `npm test`.
5. Corrigir possíveis erros.
6. Fazer commit.
7. Enviar para o GitHub.

Fim da aula!

_

# 🧩 Exercício Rápido

Agora vamos verificar se conseguimos executar testes corretamente.

No arquivo:

```
index.js
```

Copie e cole o seguinte conteúdo:

```jsx
const saudacao = "Olá, mundo!"
console.log(saudacao)

module.exports = saudacao
```

Agora clique com botão direito na pasta "aula02" e clique em "Open in Integrated Terminal".

Execute o comando no terminal `node index.js` e posteriormente para testar `npm test`.