import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BasePage from 'pages/BasePage';
import Home from 'pages/Home';
import Favorites from 'pages/Favorites';
import Player from 'pages/Player';
import NotFound from 'pages/NotFound';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BasePage />}>
                    <Route index element={<Home title='Início' />} />
                    <Route path='favoritos' element={<Favorites title='Favoritos' />} />
                    <Route path=':id' element={<Player />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;