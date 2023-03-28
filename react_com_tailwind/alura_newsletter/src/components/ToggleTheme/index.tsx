import { useEffect } from 'react';
import {
  MoonIcon,
  SunIcon
} from '@heroicons/react/24/solid';

const ToggleTheme: React.FC = () => {
  const isSystemPreferenceDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const pageClassList = document.documentElement.classList;

  useEffect(() => {
    isSystemPreferenceDark &&
      pageClassList.add('dark');
  }, []);

  const toggle = () => {
    pageClassList.toggle('dark');
  }

  return (
    <div className='hidden sm:block'>
      <MoonIcon className='h-8 fill-gray-100 translate-y-0 duration-200 opacity-100 absolute cursor-pointer dark:-translate-y-20 dark:opacity-0 hover:fill-gray-300 hover:scale-105' onClick={toggle} />
      <SunIcon className='h-8 fill-gray-100 cursor-pointer duration-200 opacity-0 -translate-y-20 dark:translate-y-0 dark:opacity-100 hover:fill-gray-300 hover:scale-105' onClick={toggle} />
    </div>
  );
}

export default ToggleTheme;