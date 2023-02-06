import React, { useEffect, useState } from 'react';

import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import CardContainer from 'components/CardContainer';

import homeBanner from 'assets/banner-home.png';

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/valvanogabryel/cinetag-api/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data)
            });
    }, [])

    return (
        <>
            <Banner banner={homeBanner} />

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

        </>
    );
}

export default Home;