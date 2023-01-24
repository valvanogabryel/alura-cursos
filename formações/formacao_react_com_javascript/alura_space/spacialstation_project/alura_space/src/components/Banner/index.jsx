import React from "react";
import banner from './images/banner.png';
import styles from './banner.module.scss';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <h1>A galeria mais completa do espaço!</h1>
            <img src={banner} alt="Imagem da terra vista do espaço." />
        </div>
    );
}

export default Banner;