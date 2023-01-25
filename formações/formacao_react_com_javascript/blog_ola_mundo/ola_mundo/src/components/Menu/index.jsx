import React from 'react';
import styles from './Menu.module.css';
import MenuLink from './MenuLink';

const Menu = () => {

    return (
        <header>
            <nav className={styles.navigation}>
                <MenuLink path='/' styles={styles} innerContent='Início' />
                <MenuLink path='/aboutme' styles={styles} innerContent='Sobre mim' />
            </nav>
        </header>
    );
}

export default Menu;