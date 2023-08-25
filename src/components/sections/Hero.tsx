import Button from '@ui/Button';
import Heading from '@ui/Heading';

const Hero = () => {
  return (
    <section className='relative my-12 space-y-8 md:my-24'>
      <div
        aria-hidden={true}
        className='absolute right-20 -left-40 -top-[38rem] blur-3xl opacity-[0.15] -z-20 md:left-0'>
        <div className='bg-accent1 h-[40rem]'></div>
      </div>
      <Heading as='h1' size='xl' className='max-w-3xl mx-auto'>
        Streamlining your digital journey.
      </Heading>
      <p className='text-text/60 [text-wrap:balance] md:text-xl max-w-3xl mx-auto'>
        The ultimate all-in-one solution for businesses seeking seamless digital
        transformation. From project management and collaboration to data
        analytics and automation, our platform empowers teams to work smarter
        and achieve more. Say hello to a new era of efficiency and innovation
        with TechFlow Pro.
      </p>
      <div className='flex flex-col items-center justify-center w-full gap-4 md:flex-row md:gap-6'>
        <Button intent='primary'>Get Started</Button>
        <Button intent='ghost'>Learn More</Button>
      </div>
    </section>
  );
};

export default Hero;
