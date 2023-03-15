
import styles from './Header.module.sass';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__dice} role='img' aria-label='Logo do Sorteador'>
        {/* dice image */}
      </div>
      <img
        className={styles.header__participant}
        src="/images/participante.png"
        alt="Pessoa com um presente na mão"
      />
    </header>
  );
}

export default Header;