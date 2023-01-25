import React from 'react';

const PopularCards = ({ item }) => {
    return (
        <img
            key={item.id}
            src={item.path}
            alt={item.alt}
        />
    );
}

export default PopularCards;