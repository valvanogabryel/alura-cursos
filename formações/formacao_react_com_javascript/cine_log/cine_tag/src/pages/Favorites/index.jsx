import React from 'react';

import Banner from 'components/Banner';

import favoritesBanner from 'assets/banner-favoritos.png';
import Title from 'components/Title';
import Card from 'components/Card';

const Favorites = () => {
    return (
        <>
            <Banner banner={favoritesBanner} />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <Card id={3} title='Teste' cover='nenhum' />
        </>
    );
}

export default Favorites;