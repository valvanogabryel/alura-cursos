import ToggleTheme from "../ToggleTheme";

interface HeaderProps {
  scrollPos: number;
}

const Header: React.FC<HeaderProps> = ({ scrollPos }) => {
  const headerClasses = `flex justify-between text-white items-center px-5 h-20 bg-blue-dark transition transform duration-300 ease-in-out ${scrollPos < 400 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} sm:rounded-xl sm:m-5 dark:bg-dark-200`;

  return (
    <header className={headerClasses}>
      <span className="text-gray-100">Olá, usuário!</span>
      <h1 className="text-xl text-gray-100">Alura Newsletter</h1>
      <ToggleTheme />
    </header>
  );
}

export default Header;