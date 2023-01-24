import React from 'react';
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
        </section>
    );
}

export default Gallery;