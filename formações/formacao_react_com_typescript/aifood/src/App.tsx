import { Routes, Route } from 'react-router-dom';
import BaseAdminPage from './paginas/Admin/BaseAdminPage';
import AdminDishes from './paginas/Admin/Dishes/AdminDishes';
import AdminRestaurants from './paginas/Admin/Restaurants/AdminRestaurants';
import FormRestaurants from './paginas/Admin/Restaurants/FormRestaurants';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes" element={<VitrineRestaurantes />} />
      <Route path='/admin' element={<BaseAdminPage />}>

        <Route path="restaurantes" element={<AdminRestaurants />} />
        <Route path="restaurantes/novo" element={<FormRestaurants />} />
        <Route path="restaurantes/:id" element={<FormRestaurants />} />
        <Route path="pratos" element={<AdminDishes />} />

      </Route>
    </Routes>
  );
}

export default App;
