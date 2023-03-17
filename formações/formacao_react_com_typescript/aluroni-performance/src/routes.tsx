import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeaderMenu from 'components/HeaderMenu';
import Footer from 'components/Footer';

const Banner = lazy(() => import('components/Banner'));
const Home = lazy(() => import('pages/Home'));
const Menu = lazy(() => import('pages/Menu'));
const Dish = lazy(() => import('pages/Dish'));
const About = lazy(() => import('pages/About'));
const NotFound = lazy(() => import('pages/NotFound'));
const Admin = lazy(() => import('components/Admin'));


const AppRouter = () => {
  return (
    <main className='container'>
      <BrowserRouter>
        <HeaderMenu />
        <Suspense fallback={<p>Carregando</p>}>
          <Routes>
            <Route path='/' element={<Banner />}>
              <Route index element={<Home />} />
              <Route path='cardapio' element={<Menu />} />
              <Route path='sobre' element={<About />} />
            </Route>
            <Route path='admin/:user' element={<Admin />} />
            <Route path='prato/:id' element={<Dish />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default AppRouter;