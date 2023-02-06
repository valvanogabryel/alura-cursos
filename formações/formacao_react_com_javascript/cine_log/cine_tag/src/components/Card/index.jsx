import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';
import 'animate.css';

import favoriteIcon from './favoritar.png';
import unfavoriteIcon from './desfavoritar.png';

import { useFavoriteContext } from 'common/context/Favorites';

const Card = (item) => {
    const { favorites, addFavorite } = useFavoriteContext();
    const isFavorite = favorites.some(fav => fav.id === item.id);
    const icon = isFavorite ? unfavoriteIcon : favoriteIcon;


    return (
        <div
            key={item.id}
            className={styles.container}
        >
            <Link className={styles.link}
                to={`/${item.id}`}>
                <img
                    src={item.cover}
                    alt={`capa do vídeo ${item.title}`}
                    className={styles.cover}
                />
                <h2>{item.title}</h2>
            </Link>
            <img
                src={icon}
                alt="Favoritar filme"
                className={`${styles.favorite} ${icon === unfavoriteIcon ? 'animate__animated animate__bounceIn' : ''}`}
                onClick={() => addFavorite(item)}
            />
        </div>
    );
}

export default Card;