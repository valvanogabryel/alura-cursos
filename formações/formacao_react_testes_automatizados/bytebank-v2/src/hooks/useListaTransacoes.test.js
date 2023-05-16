import {
  act,
  renderHook
} from '@testing-library/react';
import useListaTransacoes from './useListaTransacoes';
import { buscaTransacoes } from '../services/transacoes';

jest.mock('../services/transacoes');

const transactionMock = [
  {
    id: 1,
    transacao: 'Transferência',
    valor: '150',
    data: '22/11/2022',
    mes: 'Novembro'
  }
];

describe('hooks/useListaTransacoes.js', () => {
  it('should return a transaction list and a function that updates it', async () => {
    buscaTransacoes.mockImplementation(() => transactionMock);

    const { result } = renderHook(() => useListaTransacoes());
    expect(result.current[0]).toEqual([]);

    await act(async () => {
      result.current[1]();
    });

    expect(result.current[0]).toEqual(transactionMock);
  });
});