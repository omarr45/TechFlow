type Props = {
  children: string;
  link: string;
};

const Link = ({ link, children }: Props) => {
  return (
    <li className='w-full md:w-auto'>
      <a
        href={link}
        className='block px-2 py-2 rounded md:text-text/50 hover:bg-accent1/40 w-full md:w-auto md:hover:bg-transparent md:border-0 md:hover:text-text md:p-0 focus:outline-none ring-offset-4 ring-offset-background/[0.85] focus-visible:ring-4 ring-accent1'>
        {children}
      </a>
    </li>
  );
};

export default Link;
