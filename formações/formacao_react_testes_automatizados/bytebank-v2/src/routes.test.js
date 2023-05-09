import { render, screen } from '@testing-library/react';
import App from './paginas/Principal/App';
import { BrowserRouter } from 'react-router-dom';

describe('Routes', () => {
  it('should render the main route', () => {
    render(<App />, { wrapper: BrowserRouter });
    const username = screen.getByText('Olá, Joana :)!');
    expect(username).toBeInTheDocument();
  });
});