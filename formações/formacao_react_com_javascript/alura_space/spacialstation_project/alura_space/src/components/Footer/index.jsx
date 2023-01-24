import React from 'react';
import { twitter, instagram, facebook } from './icons';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__icons__container}>

                <a href="https://www.facebook.com/AluraCursosOnline/" target='_blank' rel='noreferrer'>
                    <img src={facebook} alt="" className={styles.footer__icons} />
                </a>

                <a href="https://twitter.com/aluraonline?lang=en" target='_blank' rel='noreferrer'>
                    <img src={twitter} alt="" className={styles.footer__icons} />
                </a>

                <a href="https://www.instagram.com/aluraonline/?hl=en" target='_blank' rel='noreferrer'>
                    <img src={instagram} alt="" className={styles.footer__icons} />
                </a>
            </div>
            <p>Desenvolvido por <a href='https://github.com/valvanogabryel' target='_blank' rel='noreferrer'>Gabryel Valvano</a>.</p>
        </footer>
    )
}

export default Footer;