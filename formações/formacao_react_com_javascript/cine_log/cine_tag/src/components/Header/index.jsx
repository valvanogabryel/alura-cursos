import HeaderLink from 'components/HeaderLink';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='./'>
                <img src={logo} alt="Logo da cine tag" />
            </Link>
            <nav className={styles.header__navbar}>
                <HeaderLink path='/'>Home</HeaderLink>
                <HeaderLink path='/favoritos'>Favoritos</HeaderLink>
            </nav>
        </header>
    );
}

export default Header;