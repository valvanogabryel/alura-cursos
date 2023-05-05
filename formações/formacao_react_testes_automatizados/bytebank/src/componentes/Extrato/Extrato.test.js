import {render, screen} from '@testing-library/react';
import Extract from './index';

test('should render a extract list', () => {
  const transactions = [
    {
      transacao: 'Depósito',
      valor: 100
    },
    {
      transacao: 'Transferência',
      valor: 50
    },
  ];

  render(<Extract transacoes={transactions}/>);
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
});