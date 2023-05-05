import {
  render,
  screen
} from '@testing-library/react';

import Cabecalho from './index';

test('should render logged username', () => {
  render(<Cabecalho/>);

  const username = screen.getByText('Joana Fonseca Gomes');

  expect(username).toBeInTheDocument();
});