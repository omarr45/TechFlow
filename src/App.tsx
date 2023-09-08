import { Analytics } from '@vercel/analytics/react'
import Footer from '@components/Footer';
import Home from '@pages/Home';
import Navbar from '@components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
