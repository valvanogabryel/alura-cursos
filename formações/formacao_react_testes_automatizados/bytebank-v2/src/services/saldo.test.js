import api from "./api";
import { buscaSaldo } from "./saldo";

jest.mock('./api');

const currencyMock = {
  valor: 1000
}

const requestMock = response => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: response
      });
    }, 200);
  })
}

const requestMockError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  })
}

describe('currency API request', () => {
  beforeEach(() => {
    api.get.mockClear();
  });

  it('should return the current currency', async () => {
    api.get.mockImplementation(() => requestMock(currencyMock));

    const currency = await buscaSaldo();

    expect(currency).toEqual(currencyMock.valor);
    expect(api.get).toHaveBeenCalled();
    expect(api.get).toHaveBeenCalledWith('/saldo');
  });

  it('should return the currency of 1000', async () => {
    api.get.mockImplementation(() => requestMockError());

    const currency = await buscaSaldo();

    expect(currency).toEqual(1000);
    expect(api.get).toHaveBeenCalled();
    expect(api.get).toHaveBeenCalledWith('/saldo');
  });
});