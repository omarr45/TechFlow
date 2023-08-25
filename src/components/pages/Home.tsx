import Clients from '@sections/Clients';
import GetStarted from '@sections/GetStarted';
import Hero from '@sections/Hero';
import Testimonials from '@sections/Testimonials';

const Home = () => {
  return (
    <main className='p-4 text-center'>
      <Hero />
      <Clients />
      <Testimonials />
      <GetStarted />
    </main>
  );
};

export default Home;
