import React from 'react';
import styles from './CardContainer.module.css';

const CardContainer = ({ children }) => {
    return (
        <section className={styles.card__container}>
            {children}
        </section>
    );
}

export default CardContainer;