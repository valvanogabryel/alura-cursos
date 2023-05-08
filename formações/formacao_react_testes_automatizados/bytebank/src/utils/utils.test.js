import { calculaNovoSaldo } from ".";

describe('When I perform a transaction', () => {
  test('That is a deposit, the balance should increase', () => {
    const valores = {
      transacao: 'Depósito',
      valor: 100
    };
    const saldo = 200;
    const newBalance = calculaNovoSaldo(valores, saldo);

    expect(newBalance).toBe(300);
  });
  test('That is a transfer, the balance should decrease', () => {
    const valores = {
      transacao: 'Transferência',
      valor: 100
    };
    const saldo = 200;
    const newBalance = calculaNovoSaldo(valores, saldo);

    expect(newBalance).toBe(100);
  });
});

it('must return the amount of the balance updated with the income', () => {
  const calculateIncome = jest.fn(balance => balance + balance * 0.005);
  const balance = 100;
  const newBalance = calculateIncome(balance);

  expect(calculateIncome).toHaveBeenCalled();
  expect(calculateIncome).toHaveBeenCalledWith(balance);
  expect(newBalance).toBe(100.5);
});