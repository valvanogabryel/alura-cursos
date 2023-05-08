import { render, screen } from '@testing-library/react';
import Form from './index';
import userEvent from '@testing-library/user-event';

describe('should render an input field', () => {
  test('in the document', () => {
    render(<Form />);
    const inputField = screen.getByPlaceholderText('Digite um valor');
    expect(inputField).toBeInTheDocument();
  });

  test('that have the "type" equals to "number"', () => {
    render(<Form />);
    const inputField = screen.getByPlaceholderText('Digite um valor');
    expect(inputField).toHaveAttribute('type', 'number');
  });

  test('that can be filled', () => {
    render(<Form />);
    const inputField = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(inputField, '100');
    expect(inputField).toHaveValue(100);
  });
});


it('should fire an "onSubmit" event when "Realizar transação" is clicked', () => {
  const performTransaction = jest.fn();

  render(<Form realizarTransacao={performTransaction} />);
  const button = screen.getByRole('button');
  userEvent.click(button);
  expect(performTransaction).toHaveBeenCalled();
});

it('must be possible to select an option from the <select/> element', () => {
  render(<Form />);

  const select = screen.getByTestId('select-opcoes');

  userEvent.selectOptions(select, 'Depósito');

  const selectOption = screen.getByRole('option', {
    name: 'Selecione um tipo de transação'
  });
  const depositOption = screen.getByRole('option', {
    name: 'Depósito'
  });

  expect(selectOption.selected).toBe(false);
  expect(depositOption.selected).toBe(true);
});
