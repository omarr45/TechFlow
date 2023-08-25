import Button from '@ui/Button';
import Heading from '@ui/Heading';

const Hero = () => {
  return (
    <section className='relative px-2 my-12 space-y-8 md:my-24'>
      <div
        aria-hidden={true}
        className='absolute right-20 -left-40 -top-[38rem] blur-3xl opacity-[0.15] -z-20 md:left-0'>
        <div className='bg-accent1 h-[40rem]'></div>
      </div>
      <Heading as='h1' size='2xl' className='max-w-4xl mx-auto'>
        Streamlining your digital journey.
      </Heading>
      <p className='max-w-3xl py-2 mx-auto text-text/60 md:text-xl'>
        Unlock seamless transformation with TechFlow Pro - your all-in-one
        solution for streamlined workflows and elevated efficiency.
      </p>
      <div className='flex flex-col items-center justify-center w-full gap-4 md:flex-row md:gap-6'>
        <Button intent='primary'>Get Started</Button>
        <Button intent='ghost'>Learn More</Button>
      </div>
    </section>
  );
};

export default Hero;
