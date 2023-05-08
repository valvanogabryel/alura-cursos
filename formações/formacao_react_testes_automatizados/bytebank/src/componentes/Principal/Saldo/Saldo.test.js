import { render, screen } from "@testing-library/react";
import Saldo from ".";

describe('the <Saldo/> component', () => {
  test('should render with the correct format', () => {
    render(<Saldo saldo={1000} />);

    const saldo = screen.getByTestId('saldo');

    expect(saldo).toHaveTextContent('R$ 1000');
  });
});