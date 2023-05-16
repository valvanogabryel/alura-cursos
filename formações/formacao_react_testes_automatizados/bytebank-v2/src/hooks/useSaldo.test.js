import {
  act,
  renderHook
} from '@testing-library/react';
import useSaldo from './useSaldo';
import { buscaSaldo } from '../services/saldo';

jest.mock('../services/saldo');

const currencyMock = {
  valor: 1500
};

describe('hooks/useSaldo.js', () => {
  it('should return the current currency and a function that updates it', async () => {
    buscaSaldo.mockImplementation(() => currencyMock.valor);

    const { result } = renderHook(() => useSaldo());
    expect(result.current[0]).toBe(0);

    await act(async () => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(currencyMock.valor);
  });
});