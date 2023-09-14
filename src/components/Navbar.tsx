import { useEffect, useState } from 'react';

import Link from '@ui/Link';
import ThemeToggle from '@ui/ThemeToggle';
import logo from '/logo.svg';

const Navbar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const handleThemeChange = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };

  return (
    <nav className='border-0 border-b-2 border-text/10 md:border-0'>
      <div className='flex flex-wrap items-center justify-between max-w-6xl p-4 mx-auto md:px-10 md:py-5'>
        <a
          href='/'
          className='flex items-center focus:outline-none ring-offset-8 ring-offset-background/[0.85] focus-visible:ring-4 ring-accent1 rounded'>
          <img src={logo} width={32} height={32} className='h-8 mr-3' alt='TechFLow Pro Logo' />
          <span className='self-center text-2xl font-bold whitespace-nowrap'>
            TechFlow Pro
          </span>
        </a>
        <div className='space-x-4'>
          <ThemeToggle
            onClick={handleThemeChange}
            theme={theme}
            className='md:hidden hover:opacity-100 bottom-4 right-4 focus:outline-none ring-offset-4 ring-offset-background/[0.85] focus-visible:ring-4 ring-accent1 rounded'
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            type='button'
            className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg md:hidden hover:bg-text/10 focus:outline-none focus:ring-2 focus:ring-text/30'
            aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`}>
          <ul className='relative flex flex-col items-start justify-center p-2 mt-4 font-medium rounded-lg md:items-center md:p-0 bg-text/10 md:flex-row md:space-x-8 md:mt-0 md:bg-transparent'>
            <Link link='#'>Features</Link>
            <Link link='#'>Reviews</Link>
            <Link link='#'>Pricing</Link>
            <ThemeToggle
              onClick={handleThemeChange}
              theme={theme}
              className='hidden md:block md:opacity-50 hover:opacity-100 bottom-4 right-4 md:static focus:outline-none ring-offset-4 ring-offset-background/[0.85] focus-visible:ring-4 ring-accent1 rounded md:'
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
