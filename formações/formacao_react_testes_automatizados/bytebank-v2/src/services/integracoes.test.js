import { render, screen } from '@testing-library/react';
import App from '../paginas/Principal/App';
import { buscaTransacoes } from './transacoes';
import { BrowserRouter } from 'react-router-dom';

describe('API Requests', () => {
  it('should return a transaction list', async () => {
    const transactions = await buscaTransacoes();
    expect(transactions).toHaveLength(3);

    render(
      <App />,
      {
        wrapper: BrowserRouter
      })

    const transaction = await screen.findAllByText('Novembro');
    transaction.forEach(item =>
      expect(item).toBeInTheDocument()
    );

    ;
  });
})