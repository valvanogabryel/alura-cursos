import React from 'react';

import Banner from 'components/Banner';

import playerBanner from 'assets/banner-player.png';
import { useParams } from 'react-router-dom';

const Player = () => {
    const params = useParams();
    console.log(params.id);

    return (
        <>
            <Banner banner={playerBanner} />
            <h1>
                Player
            </h1>
        </>
    );
}

export default Player;