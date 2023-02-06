import React from 'react';

import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Card';
import CardContainer from 'components/CardContainer';

import favoritesBanner from 'assets/banner-favoritos.png';
import { useFavoriteContext } from 'common/context/Favorites';

import styles from './Favorites.module.css';

const Favorites = () => {
    const { favorites } = useFavoriteContext();

    if (favorites.length === 0) {
        return (
            <>
                <Banner banner={favoritesBanner} />
                <section className={styles.container}>
                    <p>Você não tem <span>nenhum</span> filme favoritado :(</p>
                </section>
            </>
        )
    }

    return (
        <>
            <Banner banner={favoritesBanner} />
            <section className={styles.container}>
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
            </section>
        </>
    );
}

export default Favorites;