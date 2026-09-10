const {total, valorFinal} = require("../index.js")

test("O total da compra deve ser 240", () => {
  expect(total).toBe(240)
})

test("O valor final deve ser 220", () => {
  expect(valorFinal).toBe(220)
})