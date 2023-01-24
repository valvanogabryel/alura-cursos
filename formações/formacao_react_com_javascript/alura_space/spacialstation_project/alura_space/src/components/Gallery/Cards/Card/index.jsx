import React from 'react'
import favorite from '../../favorito.png';
import open from '../../open.png';

const Card = ({ item, styles }) => {
    return (
        <li
            key={item.id}
            className={styles.gallery__card}>
            <img
                className={styles.gallery__image}
                src={item.image}
                alt={item.title} />
            <p
                className={styles.gallery__description}>
                {item.title}</p>

            <div>
                <p>{item.credits}</p>
                <span>
                    <img
                        src={favorite}
                        alt="Ícone de favoritar" />
                    <img
                        src={open}
                        alt="Ícone de ampliar imagem" />
                </span>
            </div>
        </li>
    )
}

export default Card;