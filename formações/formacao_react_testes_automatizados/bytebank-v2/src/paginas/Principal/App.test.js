import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../../routes';

describe('<App/> component', () => {
  it('should allow add a transaction in extract', () => {
    render(<App />, {
      wrapper: BrowserRouter
    });

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

  it('must navigate to the page corresponding to the clicked link', async () => {
    render(
      <AppRoutes />, {
      wrapper: BrowserRouter
    });

    const cardsPageLink = screen.getByText('Cartões');

    expect(cardsPageLink).toBeInTheDocument();

    userEvent.click(cardsPageLink);

    const cardPageTitle = await screen.findByText('Meus cartões');

    expect(cardPageTitle).toBeInTheDocument();
  });
});