import { useEffect, useState } from 'react';

import Button from '@ui/Button';

const Navbar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

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
    <nav>
      Navbar
      <Button
        onClick={handleThemeChange}
        className='p-3 bg-secondary w-52 text-primary hover:bg-secondary/80 rounded-xl'>
        Theme {theme}
      </Button>
    </nav>
  );
};

export default Navbar;
