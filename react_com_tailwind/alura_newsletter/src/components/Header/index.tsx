import styles from "./Header.styles";

const Header = () => {
  return (
    <header className={styles.flex}>
      <span>Olá, usuário!</span>
      <h1>Alura Newsletter</h1>
      <input
        type="checkbox"
        name="theme-changer"
        id="theme-changer"
      />
    </header>
  );
}

export default Header;