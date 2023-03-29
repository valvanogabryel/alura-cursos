import User from "../../interfaces/IUser";
import ToggleTheme from "../ToggleTheme";

interface HeaderProps {
  scrollPos: number;
  user: User | undefined;
};

const Header: React.FC<HeaderProps> = ({ scrollPos, user }) => {
  const headerClasses = `flex justify-between text-white items-center px-5 h-20 bg-blue-dark transition transform duration-300 ease-in-out ${scrollPos < 10 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} sm:rounded-xl sm:m-5 dark:bg-dark-200`;

  return (
    <header className={headerClasses}>
      <span className="text-gray-100">Olá, <span className="font-black -tracking-tight cursor-pointer hover:underline">{user?.name || 'Usuário'}!</span></span>
      <h1>Alura Newsletter</h1>
      <ToggleTheme />
    </header>
  );
}

export default Header;