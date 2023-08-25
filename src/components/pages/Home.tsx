import Clients from '@sections/Clients';
import Hero from '@sections/Hero';
import Testimonials from '@sections/Testimonials';

const Home = () => {
  return (
    <main className='p-4 text-center'>
      <Hero />
      <Clients />
      <Testimonials />
    </main>
  );
};

export default Home;
