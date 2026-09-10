# Aula 7 — MEU PRIMEIRO PROGRAMA — HELLO WORLD

# 🎯 Objetivos da Aula

- Criar o primeiro programa em JavaScript.
- Compreender o conceito de saída de dados.
- Utilizar `console.log()`.
- Executar um programa utilizando Node.js.
- Entender a sequência de execução de um programa.

# 🧩 O que é um programa?

Um **programa** é um conjunto de instruções que informa ao computador o que ele deve fazer.

Por exemplo:

```jsx
console.log("Olá, mundo!")
```

Essa instrução diz ao computador:

> Exiba a mensagem "Olá, mundo!" no terminal.
> 

# 🌎 O famoso Hello World

Um dos primeiros programas ensinados quando alguém aprende uma linguagem de programação é:

```
Hello World
```

Em português:

```
Olá, mundo!
```

Ele é simples, mas possui uma função importante: verificar se o ambiente de programação está funcionando.

# 📌 Nosso primeiro programa

Crie um arquivo:

```
index.js
```

Dentro dele:

```jsx
console.log("Hello World!")
```

# ▶️ Executando o programa

No terminal:

```bash
node index.js
```

O resultado será:

```
Hello World!
```

Parabéns: você acabou de executar seu primeiro programa em JavaScript.

# 🧩 Entendendo o `console.log()`

O comando:

```jsx
console.log()
```

é utilizado para exibir informações no console.

Podemos passar uma mensagem:

```jsx
console.log("Olá!")
```

Um número:

```jsx
console.log(10)
```

Ou várias informações:

```jsx
console.log("Nome:", "John")
```

Resultado:

```
Nome: John
```

# 📌 Vários `console.log()`

Podemos executar várias instruções:

```jsx
console.log("Primeira mensagem")
console.log("Segunda mensagem")
console.log("Terceira mensagem")
```

O JavaScript executará as instruções na ordem:

```
Primeira mensagem
Segunda mensagem
Terceira mensagem
```

# 🧠 Ordem de execução

Por enquanto, podemos imaginar nosso programa como uma lista de instruções:

```
1. Execute a primeira instrução
2. Execute a segunda instrução
3. Execute a terceira instrução
4. Finalize o programa
```

Exemplo:

```jsx
console.log("A")
console.log("B")
console.log("C")
```

Resultado:

```
A
B
C
```

# ⚠️ Alterar a ordem altera o resultado

Compare:

```jsx
console.log("Primeiro")
console.log("Segundo")
```

com:

```jsx
console.log("Segundo")
console.log("Primeiro")
```

O computador não decide qual deve vir primeiro.

Ele simplesmente executa aquilo que foi escrito.

Fim da aula!

_

# 🧩 Exercício Rápido

Agora você mesmo irá criar o arquivo `index.js`!

Após criar o arquivo, crie um programa que exiba exatamente estas três mensagens, nesta ordem:

```
Meu nome é [seu nome]
Estou aprendendo JavaScript
Meu primeiro programa está funcionando!
```

O programa deverá utilizar SOMENTE `console.log()` para apresentar as três mensagens.

No final, execute `node index.js` e execute o programa. Não há necessidade de testar aqui.