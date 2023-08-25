import { Icon } from '@iconify/react';

const Companies = () => {
  return (
    <section className='grid max-w-6xl grid-cols-2 gap-10 p-6 mx-auto md:py-16 md:grid-cols-4 place-items-center'>
      <div className='transition-[filter] hover:grayscale-0 grayscale'>
        <Icon icon='logos:google' fontSize={30} />
      </div>
      <div className='transition-[filter] hover:grayscale-0 grayscale'>
        <Icon icon='logos:microsoft' fontSize={30} />
      </div>
      <div className='transition-[filter] hover:grayscale-0 grayscale'>
        <Icon icon='logos:cloudinary' fontSize={30} />
      </div>
      <div className='transition-[filter] hover:grayscale-0 grayscale'>
        <Icon icon='logos:quora' fontSize={30} />
      </div>
      <div className='transition-[filter] hover:grayscale-0 grayscale'>
        <Icon icon='logos:zoom' fontSize={30} />
      </div>
      <div className='transition-[filter] hover:grayscale-0 grayscale'>
        <Icon icon='logos:cakephp' fontSize={30} />
      </div>
      <div className='transition-[filter] hover:grayscale-0 grayscale'>
        <Icon icon='logos:appwrite' fontSize={30} />
      </div>
      <div className='transition-[filter] hover:grayscale-0 grayscale'>
        <Icon icon='logos:growth-book' fontSize={30} />
      </div>
    </section>
  );
};

export default Companies;
