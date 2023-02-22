import { Routes, Route } from 'react-router-dom';
import AdminRestaurants from './paginas/Admin/Restaurants/AdminRestaurants';
import FormRestaurants from './paginas/Admin/Restaurants/FormRestaurants';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path="/admin/restaurantes" element={<AdminRestaurants />} />
      <Route path="/admin/restaurantes/novo" element={<FormRestaurants />} />
      <Route path="/admin/restaurantes/:id" element={<FormRestaurants />} />
    </Routes>
  );
}

export default App;
