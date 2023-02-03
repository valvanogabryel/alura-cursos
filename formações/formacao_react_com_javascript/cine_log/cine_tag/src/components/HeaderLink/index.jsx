import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './HeaderLink.module.css';

const HeaderLink = ({ path, children }) => {
    return (
        <>
            <NavLink to={path} className=
                {
                    ({ isActive }) => `${styles.header__link} ${isActive ? styles.active : ''}`
                }
            >
                {children}
            </NavLink>
        </>
    );
}

export default HeaderLink;