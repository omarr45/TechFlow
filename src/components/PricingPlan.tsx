import Button from '@ui/Button';
import { cva, type VariantProps } from 'class-variance-authority';

export type PricingPlanType = {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
};

const btn = cva('button', {
  compoundVariants: [
    {
      class: 'w-full max-w-xs p-4 mx-auto space-y-4 border-2 rounded-2xl',
    },
  ],
  variants: {
    intent: {
      ghost:
        'bg-gradient-to-br from-text/5 to-transparent border-text/5 marker:text-text',
      primary:
        'bg-gradient-to-br from-text/5 to-accent1/20 border-text/5 marker:text-accent1',
      secondary:
        'bg-gradient-to-br from-text/5 to-accent2/20 border-text/5 marker:text-accent2',
    },
    featured: {
      true: 'md:scale-105',
      false: 'md:scale-95',
    },
  },
  defaultVariants: {
    intent: 'primary',
    featured: false,
  },
});

interface PricingPlanProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    VariantProps<typeof btn> {
  plan: PricingPlanType;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  className,
  intent,
  featured,
  plan,
  ...rest
}) => (
  <li className={btn({ intent, featured, className })} {...rest}>
    <h3 className='text-2xl font-bold uppercase'>{plan.name}</h3>
    <p>{plan.description}</p>
    <div>
      <p className='text-5xl font-semibold'>${plan.price}</p>
      <p className='text-sm '>per month</p>
    </div>
    <Button intent={intent}>Buy {plan.name} Plan</Button>
    <ul className='pl-4 text-left list-disc'>
      {plan.features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
  </li>
);

export default PricingPlan;
