import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Config from './pages/Config';
import Raffle from './pages/Raffle';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Config />} />
          <Route path='/sorteio' element={<Raffle />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
