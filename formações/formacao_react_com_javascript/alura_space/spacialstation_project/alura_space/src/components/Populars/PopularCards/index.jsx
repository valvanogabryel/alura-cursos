import React from 'react';

const PopularCards = ({ item, key }) => {
    return (
        <img
            key={key}
            src={item.path}
            alt={item.alt}
        />
    );
}

export default PopularCards;