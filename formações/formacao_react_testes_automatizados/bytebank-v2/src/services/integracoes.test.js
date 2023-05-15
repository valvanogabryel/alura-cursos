import api from './api';
import { buscaTransacoes, salvaTransacao } from './transacoes';
import { buscaSaldo } from './saldo';

jest.mock('./api');

const transactionMock = [
  {
    id: 1,
    transacao: 'Transferência',
    valor: '150',
    data: '22/11/2022',
    mes: 'Novembro'
  }
];

const requestMock = response => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: response
      });
    }, 200);
  });
};

const requestMockError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
};

const postRequestMock = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        status: 201
      });
    }, 200);
  });
}
const postRequestMockError = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, 200);
  });
}

describe('API Requests', () => {
  beforeEach(() => {
    api.get.mockClear();
  });

  it('should return a transaction list', async () => {
    api.get.mockImplementation(() => requestMock(transactionMock));

    const transaction = await buscaTransacoes();

    expect(transaction).toEqual(transactionMock);
    expect(api.get).toHaveBeenCalledWith('/transacoes');

  });

  it('should return an empty list', async () => {
    api.get.mockImplementation(() => requestMockError());

    const transaction = await buscaTransacoes();

    expect(transaction).toHaveLength(0);
    expect(transaction).toEqual([]);
    expect(api.get).toHaveBeenCalledWith('/transacoes');
  });

  it('should return a 201 status - (Created) after a POST requisition ', async () => {
    api.post.mockImplementation(() => postRequestMock());

    const status = await salvaTransacao(transactionMock[0]);

    expect(status).toBe(201);
    expect(api.post).toHaveBeenCalledWith('/transacoes', transactionMock[0]);
  });

  it('should return "Erro na requisição" after an unsuccessfull POST requisition', async () => {
    api.post.mockImplementation(() => postRequestMockError());

    const status = await salvaTransacao(transactionMock[0]);

    expect(status).toBe('Erro na requisição');
    expect(api.post).toHaveBeenCalledWith('/transacoes', transactionMock[0]);
  });
});