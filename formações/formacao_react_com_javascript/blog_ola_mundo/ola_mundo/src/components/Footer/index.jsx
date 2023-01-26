import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Trademark } from 'assets/marca_registrada.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Trademark />
            <p>Desenvolvido por <a
                href="https://github.com/valvanogabryel"
                className={styles.developer}
                target="_blank"
                rel='noreferrer'
            >
                Gabryel Valvano.
            </a>
            </p>
        </footer>

    );
}

export default Footer;