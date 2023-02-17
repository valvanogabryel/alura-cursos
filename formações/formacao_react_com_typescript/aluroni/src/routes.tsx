import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Banner from 'components/Banner';
import HeaderMenu from 'components/HeaderMenu';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import About from 'pages/About';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Dish from 'pages/Dish';
import Admin from 'components/Admin';

const AppRouter = () => {
    return (
        <main className='container'>
            <BrowserRouter>
                <HeaderMenu />
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
                <Footer />
            </BrowserRouter>
        </main>
    );
};

export default AppRouter;