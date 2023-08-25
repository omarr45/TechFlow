import Companies from '@sections/Companies';
import GetStarted from '@sections/GetStarted';
import Hero from '@sections/Hero';
import PricingPlans from '@sections/PricingPlans';
import SellingPoints from '@sections/SellingPoints';
import Testimonials from '@sections/Testimonials';

const Home = () => {
  return (
    <main className='p-4 text-center'>
      <Hero />
      <Companies />
      <SellingPoints />
      <Testimonials />
      <GetStarted />
      <PricingPlans />
    </main>
  );
};

export default Home;
