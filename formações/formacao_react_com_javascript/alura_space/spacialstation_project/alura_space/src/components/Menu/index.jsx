import React from "react";
import icons from "./icons.json";

import styles from "./Menu.module.scss";

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {icons.map((icon) => (
          <li key={icon.id} className={styles.menu__item}>
            <img src={icon.path} alt={icon.name} />
            <a href={icon.link}>{icon.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
