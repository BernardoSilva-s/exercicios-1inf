const mensagem = require("../index.js")

test("A mensagem deve estar correta", () => {
  expect(mensagem).toBe("Estou aprendendo JavaScript!")
})