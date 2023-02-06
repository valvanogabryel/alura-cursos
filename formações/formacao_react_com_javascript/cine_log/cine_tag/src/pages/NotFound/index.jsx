import React from 'react'

import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <section className={styles.container}>
            <h2>Ops...</h2>
            <p>O conteúdo que você procura não foi encontrado :(</p>
        </section>
    );
}

export default NotFound;