import { render, screen } from '@testing-library/react';
import {
  BrowserRouter,
  MemoryRouter,
  Routes,
  Route
} from 'react-router-dom';

import App from './paginas/Principal/App';
import Cartoes from './componentes/Cartoes';
import Pagina404 from './paginas/Pagina404';
import AppRoutes from './routes';

describe('Routes', () => {
  it('should render the main route', () => {
    render(<App />, { wrapper: BrowserRouter });
    const username = screen.getByText('Olá, Joana :)!');
    expect(username).toBeInTheDocument();
  });

  it('should render the cards route', () => {
    const route = '/cartoes';

    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='cartoes' element={<Cartoes />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const myCards = screen.getByText('Meus cartões');

    expect(myCards).toHaveTextContent('Meus cartões');
  });

  it('should render the current route', () => {
    const route = '/cartoes';

    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    const currentLocation = screen.getByTestId('location');

    expect(currentLocation).toHaveTextContent('/cartoes');
  });

  it('should render a 404 page when url does not exist', () => {
    const route = '/inexistent';

    render(
      <MemoryRouter initialEntries={[route]}>
        <AppRoutes />
      </MemoryRouter>
    );

    const pageNotFound = screen.getByTestId('pagina-404');

    expect(pageNotFound).toContainHTML('<h1>Ops! Não encontramos a página</h1>');
  })
});