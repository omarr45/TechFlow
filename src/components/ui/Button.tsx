import { cva, type VariantProps } from 'class-variance-authority';

const btn = cva('button', {
  compoundVariants: [
    {
      class:
        'rounded-full py-3 px-6 font-semibold w-full md:w-auto active:scale-90 transition-transform focus:outline-none focus-visible:ring-4 ring-offset-4 ring-offset-background',
    },
  ],
  variants: {
    intent: {
      primary:
        'bg-accent1 hover:bg-accent1/80 text-white focus-visible:ring-accent1 ',
      secondary:
        'bg-text/10 hover:bg-text/20 border border-text/20 focus-visible:ring-text/30 ',
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof btn> {}

const Button: React.FC<ButtonProps> = ({ className, intent, ...rest }) => (
  <button className={btn({ intent, className })} {...rest} />
);

export default Button;
