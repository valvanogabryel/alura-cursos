import React from 'react';

import Banner from 'components/Banner';

import favoritesBanner from 'assets/banner-favoritos.png';
import Title from 'components/Title';

const Favorites = () => {
    return (
        <>
            <Banner banner={favoritesBanner} />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
        </>
    );
}

export default Favorites;