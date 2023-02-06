import React from 'react';

import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import CardContainer from 'components/CardContainer';

import homeBanner from 'assets/banner-home.png';

import videos from 'json/db.json';


const Home = () => {
    return (
        <>
            <Banner banner={homeBanner} />
            <main>
                <Title>
                    <h1>Um lugar para guardar seus vídeos e filmes!</h1>
                </Title>
                <CardContainer>
                    {
                        videos.map(video =>
                            <Card
                                key={video.id}
                                id={video.id}
                                title={video.title}
                                cover={video.cover}
                            />)
                    }
                </CardContainer>
            </main>
        </>
    );
}

export default Home;