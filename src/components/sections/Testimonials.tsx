import Heading from '@ui/Heading';
import Testimonial from '@components/Testimonial';
import type { testimonial } from '@components/Testimonial';

const testimonials: testimonial[] = [
  {
    desc: 'TechFlow Pro revolutionized how we manage projects. Our productivity has skyrocketed, and deadlines are no longer a source of stress. We are now able to deliver projects on time, every time.',
    name: 'Tarek T.',
    title: 'CEO',
    org: 'Innovatech Solutions',
    img: '/tarek.webp',
  },
  {
    desc: "As a data-driven company, we found TechFlow Pro's analytics tools invaluable. The insights we gained led to data-backed decisions that significantly improved our bottom line.",
    name: 'Mark R.',
    title: 'CTO',
    org: 'DataMinds Inc',
    img: '/mark.webp',
  },
  {
    desc: 'The automation features of TechFlow Pro saved us countless hours on repetitive tasks. We can now focus on strategic initiatives that truly matter. Our team is more motivated than ever before.',
    name: 'Benjamin L.',
    title: 'Operations Manager',
    org: 'NexaCore',
    img: '/benjamin.webp',
  },
  {
    desc: 'Collaboration has never been smoother since we started using TechFlow Pro. Real-time updates and communication tools brought our geographically dispersed team closer than ever.',
    name: 'Alex M.',
    title: 'Project Lead',
    org: 'FusionX Labs',
    img: '/alex.webp',
  },
  {
    desc: 'TechFlow Pro has simplified our complex workflows. With its intuitive interface and powerful features, even our non-technical team members feel confident using it for their daily tasks.',
    name: 'John W.',
    title: 'Marketing Manager',
    org: 'NovaSync',
    img: '/john.webp',
  },
  {
    desc: 'We were amazed by how quickly we saw results after implementing TechFlow Pro. The automation tools not only saved time but also reduced errors, leading to increased customer satisfaction.',
    name: 'Kevin S.',
    title: 'Operations Director',
    org: 'Streamline',
    img: '/kevin.webp',
  },
];

const Testimonials = () => {
  return (
    <section className='max-w-6xl py-6 mx-auto space-y-4 md:space-y-8 md:my-12'>
      <Heading size='md' as='h2'>
        Our clients say
      </Heading>

      <ul className='grid grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] gap-4'>
        {testimonials.map((tst) => (
          <Testimonial testimonial={tst} key={tst.name} />
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
