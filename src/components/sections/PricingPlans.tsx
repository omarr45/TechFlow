import PricingPlan, { PricingPlanType } from '@components/PricingPlan';

import Heading from '@ui/Heading';

const plans: PricingPlanType[] = [
  {
    id: 1,
    name: 'Basic',
    price: 29,
    description:
      'Enhance team productivity with advanced collaboration features.',
    features: [
      'Project Management Tools',
      'Collaboration Features',
      'Basic Analytics',
    ],
  },
  {
    id: 2,
    name: 'Premium',
    price: 59,
    description:
      'Take your business to the next level with advanced collaboration tools.',
    features: [
      'All Basic features',
      'Advanced Analytics',
      'Automation Workflows',
      'Priority Support',
    ],
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 99,
    description:
      'Empower your organization with our best-in-class enterprise plan.',
    features: [
      'All Pro features',
      'Customizable Dashboards',
      'API Access',
      'Dedicated Account Manager',
    ],
  },
];

const PricingPlans = () => {
  return (
    <section className='relative py-6 space-y-4 md:space-y-6 md:py-12'>
      <Heading size='md' as='h2'>
        Pricing plans
      </Heading>
      <ul className='grid max-w-4xl grid-cols-1 gap-4 pt-4 mx-auto md:grid-cols-3'>
        <PricingPlan plan={plans[0]} intent='ghost' />
        <PricingPlan plan={plans[1]} intent='primary' featured={true} />
        <PricingPlan plan={plans[2]} intent='secondary' />
      </ul>
    </section>
  );
};

export default PricingPlans;
