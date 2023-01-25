import React from 'react';
import styles from './Menu.module.css';
import MenuLink from './MenuLink';

const Menu = () => {

    return (
        <header>
            <nav className={styles.navigation}>
                <MenuLink path='/' styles={styles} children='Início' />
                <MenuLink path='/aboutme' styles={styles} children='Sobre mim' />
            </nav>
        </header>
    );
}

export default Menu;