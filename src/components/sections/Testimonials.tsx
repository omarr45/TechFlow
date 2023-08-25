import Testimonial from '@components/Testimonial';
import type { testimonial } from '@components/Testimonial';

const testimonials: testimonial[] = [
  {
    desc: 'TechFlow Pro revolutionized how we manage projects. Our productivity has skyrocketed, and deadlines are no longer a source of stress.',
    name: 'Tarek T.',
    title: 'CEO',
    org: 'Innovatech Solutions',
    img: '/tarek.jpg',
  },
  {
    desc: "As a data-driven company, we found TechFlow Pro's analytics tools invaluable. The insights we gained led to data-backed decisions that significantly improved our bottom line.",
    name: 'Mark R.',
    title: 'CTO',
    org: 'DataMinds Inc',
    img: '/mark.jpg',
  },
  {
    desc: 'The automation features of TechFlow Pro saved us countless hours on repetitive tasks. We can now focus on strategic initiatives that truly matter.',
    name: 'Benjamin L.',
    title: 'Operations Manager',
    org: 'NexaCore Enterprises',
    img: '/benjamin.jpg',
  },
  {
    desc: 'Collaboration has never been smoother since we started using TechFlow Pro. Real-time updates and communication tools brought our geographically dispersed team closer than ever.',
    name: 'Alex M.',
    title: 'Project Lead',
    org: 'FusionX Labs',
    img: '/alex.jpg',
  },
  {
    desc: 'TechFlow Pro has simplified our complex workflows. With its intuitive interface and powerful features, even our non-technical team members feel confident using it.',
    name: 'John W.',
    title: 'Marketing Manager',
    org: 'NovaSync Inc',
    img: '/john.jpg',
  },
  {
    desc: 'We were amazed by how quickly we saw results after implementing TechFlow Pro. The automation tools not only saved time but also reduced errors, leading to increased customer satisfaction.',
    name: 'Kevin S.',
    title: 'Operations Director',
    org: 'Streamline Logistics',
    img: '/kevin.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className='max-w-6xl mx-auto my-6 space-y-4 md:space-y-8 md:my-12'>
      <h2 className='text-3xl font-bold md:text-5xl'>Our clients say</h2>
      <ul className='grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-4'>
        {testimonials.map((tst) => (
          <Testimonial testimonial={tst} key={tst.name} />
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
