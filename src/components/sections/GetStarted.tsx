import Button from '@ui/Button';
import Heading from '@ui/Heading';

const GetStarted = () => {
  return (
    <section className='relative py-16 space-y-4 md:space-y-6 md:py-24'>
      <div
        aria-hidden={true}
        className='absolute inset-0 w-full -translate-y-1/2 -z-20 blur-3xl top-1/2 opacity-20'>
        <div className='h-40 bg-accent1'></div>
      </div>
      <ul className='relative flex items-center justify-center max-w-6xl mx-auto -space-x-3'>
        <li>
          <img
            className='w-10 h-10 transition-transform rounded-full hover:scale-105'
            src='/mark.jpg'
            alt='Mark'
          />
        </li>
        <li>
          <img
            className='relative z-10 transition-transform rounded-full hover:scale-105 w-14 h-14'
            src='/alex.jpg'
            alt='Alex'
          />
        </li>
        <li>
          <img
            className='hover:scale-105 transition-transform relative z-20 w-[4.5rem] h-[4.5rem] rounded-full'
            src='/tarek.jpg'
            alt='Tarek'
          />
        </li>
        <li>
          <img
            className='relative z-10 transition-transform rounded-full hover:scale-105 w-14 h-14'
            src='/kevin.jpg'
            alt='Kevin'
          />
        </li>
        <li>
          <img
            className='w-10 h-10 transition-transform rounded-full hover:scale-105'
            src='/benjamin.jpg'
            alt='Benjamin'
          />
        </li>
      </ul>
      <Heading size='md' as='h2'>
        Get started now
      </Heading>
      <p className='md:text-lg text-text/80'>
        Be part of millions people around the world using{' '}
        <strong>TechFlow Pro</strong> for digital transformation.
      </p>
      <div className='flex flex-col items-center justify-center w-full gap-4 md:flex-row md:gap-6'>
        <Button intent='primary'>Get Started</Button>
        <Button intent='ghost'>Learn More</Button>
      </div>
    </section>
  );
};

export default GetStarted;
