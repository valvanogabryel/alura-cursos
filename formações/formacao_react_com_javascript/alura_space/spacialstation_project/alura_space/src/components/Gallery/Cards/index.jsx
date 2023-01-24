import React from 'react';
import Card from './Card';

const Cards = ({ items, styles }) => {
    return (
        <ul className={styles.gallery__cards}>
            {
                items.map(item => (
                    <Card item={item}
                        styles={styles}
                    />
                ))
            }
        </ul>
    )
}

export default Cards;