import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './HeaderLink.module.css';

const HeaderLink = () => {
    return (
        <>
            <NavLink to='./' className={styles.header__link}>
                Home
            </NavLink>

            <NavLink to='/favoritos' className={styles.header__link}>
                Favoritos
            </NavLink>
        </>
    );
}

export default HeaderLink;