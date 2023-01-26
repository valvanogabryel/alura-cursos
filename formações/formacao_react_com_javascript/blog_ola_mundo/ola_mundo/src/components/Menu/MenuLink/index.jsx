import React from 'react';
import { NavLink } from 'react-router-dom';

// O componente "Link" do react-router-dom funciona de maneira semelhante a tag âncora do HTML. Porém, sua particularidade é que, ao contrário da tag "a", o componente "Link" não recarrega a página.

// <a href="/pathname"></a>
// <Link to="/pathanme"></Link>

// O componente "NavLink" é um tipo especial de <Link> que sabe qual está "ativo". Útil para menus de navegação.

const MenuLink = ({ path, styles, children }) => {
    return (
        <NavLink
            className=
            {
                ({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`
            }
            to={path}
        >
            {children}
        </NavLink>
    );
}

export default MenuLink;