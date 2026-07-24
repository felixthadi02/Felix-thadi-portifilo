import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Expertise', href: '#projects' },
  { name: 'Contact', href: '#footer' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-brand-red shadow-[0_0_12px_rgba(255,42,42,0.8)]"
        style={{ scaleX: progressScale }}
      />
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-4 ${
          isScrolled
            ? 'bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-black tracking-tight text-white flex items-center select-none font-sans">
            Felix Thadi<span className="text-brand-red text-3xl leading-none">!</span>
          </a>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white/80 hover:text-white transition-colors duration-300 py-2 font-medium tracking-wide text-sm font-sans group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right CTA / Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="#footer"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-medium text-sm tracking-wide hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,42,42,0.3)] transition-all duration-300"
            >
              Hire Me
            </a>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden text-white hover:text-brand-red transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-brand-red flex flex-col justify-center px-8 md:hidden"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-4xl font-extrabold text-white tracking-tight uppercase hover:text-black transition-colors"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#footer"
                onClick={() => setIsMobileOpen(false)}
                className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white bg-white text-brand-red font-bold text-lg hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
