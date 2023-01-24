import React from 'react';

const PopularCard = ({ item, styles }) => {
    return (
        <img
            key={item.id}
            src={item.path}
            alt={item.alt}
            className={styles.populars__images} />
    );
}

export default PopularCard;