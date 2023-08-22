import Item from "../item.js";

/* eslint-disable no-undef */
describe("Item tests", () => {
  it("should have the 'nome', 'valor' and 'quantidade' properties", () => {
    const { nome, valor, quantidade } = new Item("Pitaya", 1.5, 10);

    expect(nome).toBe("Pitaya");
    expect(valor).toBe(1.5);
    expect(quantidade).toBe(10);
  });

  it("should have the price calculated according to the quantity", () => {
    const item = new Item("Pitaya", 0.1, 3);
    const value = item.pegaValorTotalItem();

    expect(value).toBeCloseTo(0.3);
  });
});
