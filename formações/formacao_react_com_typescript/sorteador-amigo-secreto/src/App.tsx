import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Config from './pages/Config';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Config />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
