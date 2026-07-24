import { useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Credentials from './components/Credentials';
import Process from './components/Process';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative w-full min-h-screen bg-[#0b0b0b] text-[#f4f4f4] overflow-x-hidden font-sans">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Credentials />
            <Process />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      )}
    </MotionConfig>
  );
}

export default App;
