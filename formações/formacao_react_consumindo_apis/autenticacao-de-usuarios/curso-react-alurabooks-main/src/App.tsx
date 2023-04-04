import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Rotas from './rotas';
import { createBrowserHistory } from 'history';
import './App.css';

export const history = createBrowserHistory({ window });

function App() {
  return (
    <HistoryRouter history={history}>
      <Rotas />
    </HistoryRouter>
  );
}

export default App;
