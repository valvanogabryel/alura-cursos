import React from 'react';
import { home, mostLiked, mostViewed, hot, surpriseMe } from './icons';

import styles from './Menu.module.scss';

export const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="Início" />
                    <a href="/index.html">Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={mostLiked} alt="Mais curtidos" />
                    <a href="##">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={mostViewed} alt="Mais vistos" />
                    <a href="##">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={hot} alt="Novas" />
                    <a href="##">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpriseMe} alt="Surpreenda-me" />
                    <a href="##">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}

