import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// O componente "Link" do react-router-dom funciona de maneira semelhante a tag âncora do HTML. Porém, sua particularidade é que, ao contrário da tag "a", o componente "Link" não recarrega a página.

// <a href="/pathname"></a>
// <Link to="/pathanme"></Link>

const MenuLink = ({ path, styles, innerContent }) => {
    const location = useLocation();

    console.log(location)
    console.log(path)

    return (
        <Link
            to={path}
            className={
                `${styles.link} 
            ${location.pathname === path ? styles.active : ''}`
            }>
            {innerContent}
        </Link>
    );
}

export default MenuLink;