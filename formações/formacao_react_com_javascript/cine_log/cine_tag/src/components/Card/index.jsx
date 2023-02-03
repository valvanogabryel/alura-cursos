import React from 'react';
import styles from './Card.module.css';
import favoriteIcon from './favoritar.png';

const Card = ({ id, title, cover }) => {
    return (
        <div
            key={id}
            className={styles.container}
        >
            <img
                src={cover}
                alt={`capa do vídeo ${title}`}
                className={styles.cover}
            />
            <h2>{title}</h2>
            <img
                src={favoriteIcon}
                alt="Favoritar filme"
                className={styles.favorite}
            />
        </div>
    );
}

export default Card;