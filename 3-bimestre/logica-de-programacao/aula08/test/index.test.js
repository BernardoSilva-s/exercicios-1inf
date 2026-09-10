const {nome, idade, cidade} = require("../index.js")

test("O nome do aluno deve estar correto", () => {
  expect(nome).toBe("Carlos")
})

test("A idade do aluno deve estar correta", () => {
  expect(idade).toBe(17)
})

test("A cidade do aluno deve estar correta", () => {
  expect(cidade).toBe("Fortaleza")
})