import Footer from 'components/Footer';
import Header from 'components/Header';
import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favoritos' element={<Favorites />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;