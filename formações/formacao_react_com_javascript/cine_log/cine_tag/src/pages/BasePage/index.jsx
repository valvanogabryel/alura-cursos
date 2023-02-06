import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';
import Container from 'components/Container';
import Footer from 'components/Footer';

import { FavoritesProvider } from 'common/context/Favorites';

const BasePage = () => {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />

                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    );
}

export default BasePage;