import React from 'react';
import { useParams } from 'react-router-dom';

import Banner from 'components/Banner';
import Container from 'components/Container';

import playerBanner from 'assets/banner-player.png';

import styles from './Player.module.css';

import videos from 'json/db.json';

const Player = () => {
    const params = useParams();
    const video = videos.find(video => video.id === Number(params.id));

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