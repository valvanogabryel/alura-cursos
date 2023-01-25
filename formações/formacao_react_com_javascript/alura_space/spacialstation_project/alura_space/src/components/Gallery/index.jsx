import React, { useState } from 'react';
import Tags from '../Tags';
import Cards from './Cards';
import styles from './gallery.module.scss';
import photos from './photos.json';


const Gallery = () => {
    const [items, setItems] = useState(photos);
    const tags = [...new Set(photos.map(photo => photo.tag))];

    const filterPhotos = (tag) => {
        const filteredPhotos = photos.filter(photo => photo.tag === tag);
        setItems(filteredPhotos);
    }

    return (
        <section className={styles.gallery}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filterPhotos={filterPhotos} setItems={setItems} />
            <Cards items={items} styles={styles} />
        </section>
    );
}

export default Gallery;