import { ReactComponent as Logo } from 'assets/logo.svg';

import { NavLink } from 'react-router-dom';

import styles from './HeaderMenu.module.scss';

const HeaderMenu = () => {
    const menuRoutes = [
        {
            label: 'Início',
            path: '/'
        },
        {
            label: 'Cardápio',
            path: '/cardapio'
        },
        {
            label: 'Sobre',
            path: '/sobre'
        }
    ];

    return (
        <nav className={styles.nav}>
            <Logo />
            <ul className={styles.nav__list}>
                {
                    menuRoutes.map(route => (
                        <li
                            key={route.label}
                            className={styles.nav__link}
                        >
                            <NavLink
                                to={route.path}
                                className={({ isActive }) => {
                                    return isActive ? styles['linkElement--active'] : styles.linkElement;
                                }}
                            >
                                {route.label}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default HeaderMenu;