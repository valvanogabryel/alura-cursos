import SocialMedias from '../SocialMedias';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer__container'>
            <SocialMedias />
            <section className='footer__logo'>
                <img src="/imagens/logo.png" alt="Logo da Organo" />
            </section>
            <section className='footer__info'>
                <p className='footer__text'>Desenvolvido por <a href="https://github.com/valvanogabryel" className='footer__link' target="_blank" rel='noreferrer'>Gabryel Valvano.</a></p>
            </section>
        </footer>
    )
}

export default Footer;