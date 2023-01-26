import React from 'react';
import styles from './Banner.module.css';
import colorfulCircle from 'assets/circulo_colorido.png';
import myPhoto from 'assets/minha_foto.jpg';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentation}>
                <h1 className={styles.title}>Olá, Mundo!</h1>
                <p className={styles.paragraph}>
                    Boas vindas ao blog "Olá, mundo"! Me chamo Gabryel Valvano. Sou desenvolvedor Front-end. Aqui, compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.images}>
                <img
                    src={colorfulCircle}
                    className={styles.colorfulCircle}
                    aria-hidden={true}
                    alt=""
                />
                <img
                    src={myPhoto}
                    className={styles.myPhoto}
                    aria-hidden={true}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Banner;