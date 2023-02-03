import React from 'react';

import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';

import homeBanner from 'assets/banner-home.png';

import videos from 'json/db.json';
import styles from './Home.module.css';


const Home = () => {
    return (
        <>
            <Banner banner={homeBanner} />
            <main>
                <Title>
                    <h1>Um lugar para guardar seus vídeos e filmes!</h1>
                </Title>
                <section className={styles.card__container}>
                    {
                        videos.map(item =>
                            <Card
                                key={item.id}
                                {...item}
                            />)
                    }
                </section>
            </main>
        </>
    );
}

export default Home;