import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('<App/> component', () => {
  it('should allow add a transaction in extract', () => {
    render(<App />, { wrapper: BrowserRouter });

    const select = screen.getByTestId('select-opcoes');
    const valueInput = screen.getByPlaceholderText('Digite um valor');
    const button = screen.getByRole('button');

    userEvent.selectOptions(select, ['Depósito']);
    userEvent.type(valueInput, '100');
    userEvent.click(button);

    const newTransaction = screen.getByTestId('lista-transacoes');
    const extract = screen.getByRole('listitem');

    expect(newTransaction).toContainElement(extract);
  });
});