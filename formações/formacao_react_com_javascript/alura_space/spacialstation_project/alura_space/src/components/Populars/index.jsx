import React from 'react';

import PopularCards from './PopularCards';
import Button from 'components/Button';

import popularPhotos from './popular_photos.json';

import styles from './popular.module.scss';

const Populars = () => {
    return (
        <div className={styles.populars}>
            <h2>Populares</h2>
            <ul className={styles.populars__images}>
                {
                    popularPhotos.map(
                        photo => (
                            <PopularCards
                                item={photo}
                                key={photo.id}
                            />
                        ))
                }
            </ul>
            <Button innerContent='Ver mais' />
        </div>
    );
}

export default Populars;