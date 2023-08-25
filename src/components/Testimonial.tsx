export type testimonial = {
  desc: string;
  name: string;
  title: string;
  org: string;
  img: string;
};

type testProps = {
  testimonial: testimonial;
};

const Testimonial = ({ testimonial: tst }: testProps) => {
  return (
    <li className='p-4 space-y-2 text-left border-2 rounded-2xl bg-gradient-to-br from-accent1/20 to-text/5 border-text/5'>
      <div className='flex items-center justify-start gap-4'>
        <img className='w-16 h-16 rounded-full' src={tst.img} alt={tst.name} />
        <div>
          <p className='text-lg font-bold'>{tst.name}</p>
          <p className='text-sm'>
            {tst.title} at {tst.org}
          </p>
        </div>
      </div>
      <p className='text-sm text-text/60'>{tst.desc}</p>
    </li>
  );
};

export default Testimonial;
