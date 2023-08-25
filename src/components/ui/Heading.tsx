type HeadingOwnProps<E extends React.ElementType> = {
  size: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  children: React.ReactNode;
  as?: E;
};

type HeadingProps<E extends React.ElementType> = HeadingOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof HeadingOwnProps<E>>;

const classes = {
  sm: 'text-2xl font-bold',
  md: 'text-3xl font-bold md:text-5xl',
  lg: 'text-4xl font-bold md:text-6xl',
  xl: 'text-5xl font-bold md:text-7xl',
  '2xl': 'text-5xl sm:text-6xl font-bold md:text-8xl',
};

const Heading = <E extends React.ElementType>({
  size,
  children,
  className,
  as,
}: HeadingProps<E>) => {
  const Component = as || 'p';
  return (
    <Component className={`${classes[size]} ${className}`}>
      {children}
    </Component>
  );
};

export default Heading;
