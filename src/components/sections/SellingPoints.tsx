type SellingPoint = {
  title: string;
  description: string;
};

const points: SellingPoint[] = [
  {
    title: 'Comprehensive Suite',
    description:
      "TechFlow Pro offers an integrated suite of tools to cover all aspects of your business's needs.",
  },
  {
    title: 'Boost Productivity',
    description:
      'Streamline processes, automate tasks, and enhance collaboration to maximize productivity.',
  },
  {
    title: 'Data-Driven Insights',
    description:
      'Leverage advanced analytics to make informed decisions and drive business growth.',
  },
];

const SellingPoints = () => {
  return (
    <section className='grid max-w-6xl grid-cols-1 gap-8 py-8 mx-auto my-12 text-center border-0 md:grid-cols-3 md:my-24 border-y-2 border-text/20'>
      {points.map((point) => (
        <div key={point.title} className='space-y-2'>
          <h3 className='text-2xl font-bold md:text-3xl'>{point.title}</h3>
          <p className='text-sm text-text/80 md:text-base'>
            {point.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default SellingPoints;
