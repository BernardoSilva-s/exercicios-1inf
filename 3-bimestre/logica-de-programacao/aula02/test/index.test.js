const saudacao = require("../index.js")

test("A variável saudacao deve conter Olá, mundo!", () => {
  expect(saudacao).toBe("Olá, mundo!")
})