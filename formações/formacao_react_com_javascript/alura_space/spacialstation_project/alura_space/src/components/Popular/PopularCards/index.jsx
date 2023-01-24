import React, { Fragment } from 'react';

import PopularCard from './PopularCard';

import popularPhotos from '../popular_photos.json'

import styles from '../popular.module.scss';

const PopularCards = () => {
    return (
        <Fragment>
            <div className={styles.populars}>
                <h2>Populares</h2>
                {
                    popularPhotos.map(
                        photo => <PopularCard item={photo} styles={styles} key={photo.id} />
                    )
                }
            </div>
            <button className={styles.button}>Ver mais</button>
        </Fragment>
    );
}

export default PopularCards;