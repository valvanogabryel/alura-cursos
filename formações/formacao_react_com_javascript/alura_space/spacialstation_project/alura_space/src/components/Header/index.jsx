import logo from './images/logo.png';
import search from './images/search.png';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo da Alura Space" />
            <div className={styles.header__container}>
                <input type="text" placeholder="O que você procura?" className={styles.header__input} />
                <img src={search} alt="Ícone de pesquisa" />
            </div>
        </header>
    )
}

export default Header;