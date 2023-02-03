import Container from 'components/Container';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Favorites from 'pages/Favorites';
import Home from 'pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/favoritos' element={<Favorites />} />
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;