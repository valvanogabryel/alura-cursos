import React from 'react';
import styles from './tags.module.scss';
import photos from '../Gallery/photos.json';

const Tags = ({ tags, filterPhotos, setItems }) => {
    return (
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__list}>
                {
                    tags.map((tag, index) =>
                        <li
                            key={index}
                            onClick={() => filterPhotos(tag)}>
                            {tag}
                        </li>
                    )
                }
                <li onClick={() => setItems(photos)}>
                    Todas
                </li>
            </ul>
        </div>
    );
}

export default Tags;