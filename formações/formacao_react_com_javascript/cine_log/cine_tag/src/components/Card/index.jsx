import React from 'react';
import styles from './Card.module.css';
import favoriteIcon from './favoritar.png';
import unfavoriteIcon from './desfavoritar.png';
import { useFavoriteContext } from 'common/context/Favorites';

const Card = (item) => {
    const { addFavorite } = useFavoriteContext();

    return (
        <div
            key={item.id}
            className={styles.container}
        >
            <img
                src={item.cover}
                alt={`capa do vídeo ${item.title}`}
                className={styles.cover}
            />''
            <h2>{item.title}</h2>
            <img
                src={
                    item.isFavorite ? unfavoriteIcon : favoriteIcon
                }
                alt="Favoritar filme"
                className={styles.favorite}
                onClick={() => addFavorite(item)}
            />
        </div>
    );
}

export default Card;