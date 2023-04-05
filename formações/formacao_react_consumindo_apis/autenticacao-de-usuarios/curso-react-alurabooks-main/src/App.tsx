import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Rotas from './rotas';
import { createBrowserHistory } from 'history';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const history = createBrowserHistory({ window });

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HistoryRouter history={history}>
        <Rotas />
      </HistoryRouter>
    </QueryClientProvider>
  );
}

export default App;
