import React from 'react';
import PopularCards from '../Popular/PopularCards';
import Tags from '../Tags';
import Cards from './Cards';
import styles from './gallery.module.scss';
import photos from './photos.json';


const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <Cards items={photos} styles={styles} />
            <PopularCards />
        </section>
    );
}

export default Gallery;