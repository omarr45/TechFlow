import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-between w-full max-w-6xl gap-4 p-4 mx-auto text-center border-t-2 md:flex-row border-text/10'>
      <p>Copyright &copy; {new Date().getFullYear()} - TechFlow Pro</p>
      <ul
        className='flex items-center justify-center gap-4 text-text'
        aria-label='Social Media Links'>
        <li title='Personal Website'>
          <a
            className='hover:text-accent1'
            href='https://omar45.com/'
            target='_blank'
            aria-label='Personal Website'>
            <Icon icon='pepicons-pop:internet' fontSize={26} />
          </a>
        </li>
        <li title='GitHub'>
          <a
            className='hover:text-accent1'
            href='https://www.github.com/omarr45/TechFlow'
            target='_blank'
            aria-label='GitHub Account'>
            <Icon icon='simple-icons:github' fontSize={24} />
          </a>
        </li>
        <li title='YouTube'>
          <a
            className='hover:text-accent1'
            href='https://www.youtube.com/@Omar45/'
            target='_blank'
            aria-label='YouTube Channel'>
            <Icon icon='simple-icons:youtube' fontSize={24} />
          </a>
        </li>
        <li title='Buy Me a Coffee'>
          <a
            className='hover:text-accent1'
            href='https://www.buymeacoffee.com/omar45/'
            target='_blank'
            aria-label='Buy Me a Coffee Account'>
            <Icon icon='simple-icons:buymeacoffee' fontSize={24} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
