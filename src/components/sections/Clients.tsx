import { Icon } from '@iconify/react';

const Clients = () => {
  return (
    <section className=''>
      {/* <section>3 parts</section> */}
      <section className='grid max-w-4xl grid-cols-2 gap-10 p-6 mx-auto md:p-10 md:grid-cols-3 place-items-center'>
        <div className='transition-[filter] hover:grayscale-0 grayscale'>
          <Icon icon='logos:google' fontSize={30} />
        </div>
        <div className='transition-[filter] hover:grayscale-0 grayscale'>
          <Icon icon='logos:quora' fontSize={30} />
        </div>
        <div className='transition-[filter] hover:grayscale-0 grayscale'>
          <Icon icon='logos:growth-book' fontSize={30} />
        </div>
        <div className='transition-[filter] hover:grayscale-0 grayscale'>
          <Icon icon='logos:microsoft' fontSize={30} />
        </div>
        <div className='transition-[filter] hover:grayscale-0 grayscale'>
          <Icon icon='logos:zoom' fontSize={30} />
        </div>
        <div className='transition-[filter] hover:grayscale-0 grayscale'>
          <Icon icon='logos:sanity' fontSize={30} />
        </div>
      </section>
    </section>
  );
};

export default Clients;
