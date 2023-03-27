const Header = () => {
  return (
    <header className=''>
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