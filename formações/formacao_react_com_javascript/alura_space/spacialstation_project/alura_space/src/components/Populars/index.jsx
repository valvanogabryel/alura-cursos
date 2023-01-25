import React from 'react';

import PopularCards from './PopularCards';

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
            <button>Ver mais</button>
        </div>
    );
}

export default Populars;