import Navbar from '@components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <section className='flex items-center justify-center flex-col gap-4'>
        <h2 className='w-full bg-secondary text-primary text-center text-4xl font-bold p-8'>
          Hi There
        </h2>
      </section>
    </>
  );
}

export default App;
