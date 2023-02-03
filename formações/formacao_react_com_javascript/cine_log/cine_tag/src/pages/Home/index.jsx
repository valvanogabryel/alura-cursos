import React from 'react';

import Banner from 'components/Banner';

import homeBanner from 'assets/banner-home.png';
import Title from 'components/Title';

const Home = () => {
    return (
        <>
            <Banner banner={homeBanner} />
            <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>
        </>
    );
}

export default Home;