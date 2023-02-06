import React from 'react';

import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';
import CardContainer from 'components/CardContainer';

import favoritesBanner from 'assets/banner-favoritos.png';
import { useFavoriteContext } from 'common/context/Favorites';

const Favorites = () => {
    const { favorites } = useFavoriteContext();
    return (
        <>
            <Banner banner={favoritesBanner} />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <CardContainer>
                {
                    favorites.map(fav =>
                        <Card
                            key={fav.id}
                            id={fav.id}
                            title={fav.title}
                            cover={fav.cover}
                        />)
                }
            </CardContainer>
        </>
    );
}

export default Favorites;