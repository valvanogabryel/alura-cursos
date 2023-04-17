import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Rotas from './rotas';
import { createBrowserHistory } from 'history';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AbApolloClient from './componentes/AbApolloClient';
import CarrinhoProvider from './common/contexts/carrinho';

export const history = createBrowserHistory({ window });

const queryClient = new QueryClient();

function App() {
  return (
    <AbApolloClient>
      <CarrinhoProvider>
        <QueryClientProvider client={queryClient}>
          <HistoryRouter history={history}>
            <Rotas />
          </HistoryRouter>
        </QueryClientProvider>
      </CarrinhoProvider>
    </AbApolloClient>
  );
}

export default App;
