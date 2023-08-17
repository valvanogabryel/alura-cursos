/* eslint-disable no-undef */
import Carrinho from "../carrinho.js";
import Item from "../item.js";

describe("Cart tests", () => {
  it("should be initialized with no items", () => {
    const cart = new Carrinho();

    expect(typeof cart).toBe("object");
    expect(cart instanceof Carrinho).toBe(true);
    expect(cart.total).toBeNull();
    expect(cart.itens).toHaveLength(0);
  });

  it("should be able to receive items", () => {
    const cart = new Carrinho();
    const banana = new Item("Banana", 0.5, 5);
    const apple = new Item("Maçã", 1, 3);

    cart.adiciona(banana);
    cart.adiciona(apple);

    expect(cart.itens).toHaveLength(2);
    expect(cart.itens).toContain(banana);
    expect(cart.itens).toContain(apple);
    expect(cart.itens[0]).toBe(banana);
    expect(cart.itens[1]).toBe(apple);
    expect(cart).toHaveProperty("total");
  });
});
