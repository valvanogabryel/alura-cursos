import React from 'react';

import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';

import favoritesBanner from 'assets/banner-favoritos.png';

const Favorites = () => {
    return (
        <>
            <Banner banner={favoritesBanner} />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section>
                <Card
                    id={3}
                    title='Vingadores: Guerra Infinita'
                    cover='https://image.tmdb.org/t/p/w500/rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg'
                    isFavorite />
            </section>
        </>
    );
}

export default Favorites;