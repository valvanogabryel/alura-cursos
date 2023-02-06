import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Card.module.css';
import favoriteIcon from './favoritar.png';
import unfavoriteIcon from './desfavoritar.png';
import { useFavoriteContext } from 'common/context/Favorites';

const Card = (item) => {
    const { favorites, addFavorite } = useFavoriteContext();
    const isFavorite = favorites.some(fav => fav.id === item.id);
    const icon = isFavorite ? unfavoriteIcon : favoriteIcon;
    const navigate = useNavigate();

    return (
        <div
            key={item.id}
            className={styles.container}
        >
            <img
                src={item.cover}
                alt={`capa do vídeo ${item.title}`}
                className={styles.cover}
            />
            <h2>{item.title}</h2>
            <img
                src={icon}
                alt="Favoritar filme"
                className={styles.favorite}
                onClick={() => addFavorite(item)}
            />
        </div>
    );
}

export default Card;