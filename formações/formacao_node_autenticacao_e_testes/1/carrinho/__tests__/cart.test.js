/* eslint-disable no-undef */
import Carrinho from "../carrinho.js";
import Item from "../item.js";

describe("Cart tests", () => {
  let cart;

  beforeEach(() => {
    cart = new Carrinho();
  });

  it("should be initialized with no items", () => {
    expect(typeof cart).toBe("object");
    expect(cart instanceof Carrinho).toBe(true);
    expect(cart.total).toBeNull();
    expect(cart.itens).toHaveLength(0);
  });

  it("should be able to receive items", () => {
    const banana = new Item("Banana", 0.5, 5);
    const apple = new Item("Maçã", 1, 3);

    cart.adiciona(banana);
    cart.adiciona(apple);

    expect(cart.itens).toHaveLength(2);
    expect(cart.itens).toContain(banana);
    expect(cart.itens).toContain(apple);
    expect(cart.itens[0]).toBe(banana);
    expect(cart.itens[1]).toBe(apple);
  });

  it("should have cart expected properties", () => {
    expect(cart).toHaveProperty("frete");
    expect(cart).toHaveProperty("itens");
    expect(cart).toHaveProperty("subtotal");
    expect(cart).toHaveProperty("total");
  });

  it("should throw an error when user tries to finalize the purshcase with the cart empty", () => {
    expect(() => {
      cart.finalizaCompra();
    }).toThrowError("Carrinho de compras vazio");
  });

  it("should be able to add shipping", () => {
    cart.adicionaFrete(10);
    expect(cart.frete).toEqual(10);
  });

  it("should calculate the cart's total price", () => {
    const banana = new Item("Banana", 0.5, 5);
    const apple = new Item("Maçã", 1, 3);

    cart.adiciona(banana);
    cart.adiciona(apple);
    cart.adicionaFrete(10);
    const totalPrice = cart.calculaTotal();

    expect(totalPrice).toEqual(15.5);
  });

  it("should be able to complete the purchase", () => {
    const banana = new Item("Banana", 0.5, 5);
    const apple = new Item("Maçã", 1, 3);

    cart.adiciona(banana);
    cart.adiciona(apple);
    cart.adicionaFrete(10);
    expect(cart.finalizaCompra()).toStrictEqual({
      subtotal: 5.5,
      frete: 10,
      total: 15.5,
    });
  });
});
