const {total, troco} = require("../index.js")

test("O total da compra deve ser 100", () => {
  expect(total).toBe(100)
})

test("O troco deve ser 20", () => {
  expect(troco).toBe(20)
})