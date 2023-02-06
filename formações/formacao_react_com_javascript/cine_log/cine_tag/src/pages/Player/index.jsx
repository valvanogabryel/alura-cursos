import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Banner from 'components/Banner';

import playerBanner from 'assets/banner-player.png';

import styles from './Player.module.css';

import NotFound from 'pages/NotFound';

const Player = () => {
    const [video, setVideos] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/valvanogabryel/cinetag-api/videos?id=${params.id}`)
            .then(response => response.json())
            .then(data => {
                setVideos(...data);
            })
    }, [params])


    if (!video) {
        return < NotFound />
    }

    return (
        <>
            <Banner banner={playerBanner} />
            <h1 className={styles.title}>
                Player
            </h1>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </section>
        </>
    );
}

export default Player;