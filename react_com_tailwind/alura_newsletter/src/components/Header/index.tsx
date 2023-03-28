import { MoonIcon } from '@heroicons/react/24/solid';
import { SunIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
  scrollDir: 'up' | 'down';
}

const Header: React.FC<HeaderProps> = ({ scrollDir }) => {
  const headerClasses = `header transition transform duration-200 ease-in-out ${scrollDir === 'up' ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`;

  return (
    <header className={headerClasses}>
      <span className="">Olá, usuário!</span>
      <h1 className="text-2xl">Alura Newsletter</h1>
      <input
        type="checkbox"
        name="theme-changer"
        id="theme-changer"
        className="hidden sm:block"
      />
      <MoonIcon className='h-8 cursor-pointer hidden sm:block' />
      <SunIcon className='h-8 cursor-pointer hidden sm:block' />
    </header>
  );
}

export default Header;