import {
  render,
  screen
} from '@testing-library/react';
import Transactions from './index';

import styles from '../Extrato.module.css'

test('Should render the same component with updated props', () => {
  const firstTransaction = {
    transacao: "Depósito",
    valor: 100
  };

  const { rerender } = render(
    <Transactions
      estilos={styles}
      transacao={firstTransaction}
    />
  );

  const firstTransactionType = screen.getByTestId('tipoTransacao'); //pega o data-testid=""
  const firstTransactionValue = screen.getByTestId('valorTransacao');

  expect(firstTransactionType).toHaveTextContent('Depósito');
  expect(firstTransactionValue).toHaveTextContent('R$ 100');

  const secondTransaction = {
    transacao: 'Transferência',
    valor: 50
  };

  rerender(<Transactions
    estilos={styles}
    transacao={secondTransaction}
  />
  );

  const secondTransactionType = screen.getByTestId('tipoTransacao');
  const secondTransactionValue = screen.getByTestId('valorTransacao');

  expect(secondTransactionType).toHaveTextContent('Transferência');
  expect(secondTransactionValue).toHaveTextContent('- R$ 50');
});