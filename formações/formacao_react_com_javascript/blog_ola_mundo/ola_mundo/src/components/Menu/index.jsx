import React from 'react';
import styles from './Menu.module.css';

const Menu = () => {
    return (
        <header>
            <nav className={styles.navigation}>
                <a href="/" className={styles.link}>Início</a>
                <a href="/aboutme" className={styles.link}>Sobre mim</a>
            </nav>
        </header>
    );
}

export default Menu;