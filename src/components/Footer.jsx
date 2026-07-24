import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappUrl =
  'https://wa.me/918179118725?text=Hi%20Felix%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20digital%20marketing%20work.';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#111111] text-[#F4F4F4] pt-24 pb-12 px-6 md:px-12 select-none overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="flex flex-col space-y-3">
            <h5 className="text-[11px] font-mono tracking-widest text-white/50 uppercase">Core Services</h5>
            <ul className="text-xs font-mono tracking-wider uppercase text-white/80 space-y-1.5">
              <li>SEO & Performance Marketing</li>
              <li>Google & Meta Advertising</li>
              <li>Mobile App Monetization</li>
              <li>Analytics & Content Strategy</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3">
            <h5 className="text-[11px] font-mono tracking-widest text-white/50 uppercase">Experience</h5>
            <p className="text-sm font-sans text-white/90">3.5+ years across real estate, performance marketing, mobile app monetization, and e-commerce.</p>
            <a href="#home" className="text-xs font-mono uppercase tracking-widest text-brand-red underline hover:text-white transition-colors pt-1">Back To Top</a>
          </div>
          <div className="flex flex-col space-y-3">
            <h5 className="text-[11px] font-mono tracking-widest text-white/50 uppercase">Location & Status</h5>
            <p className="text-sm font-sans text-white/90">Hyderabad, India &bull; Open to opportunities</p>
            <p className="text-xs font-mono tracking-widest text-white/40 uppercase">Current Year: {currentYear}</p>
          </div>
        </div>

        <div className="py-8 text-center relative flex flex-col items-center justify-center overflow-hidden">
          <motion.h3
            className="text-6xl sm:text-8xl md:text-[8rem] lg:text-[10rem] font-black lowercase tracking-tighter text-[#2a2a2a] select-none cursor-default font-sans leading-none whitespace-nowrap"
            whileHover={{ color: '#ffffff', scale: 1.02, transition: { duration: 0.4 } }}
          >
            felix thadi!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-xs sm:text-sm md:text-base uppercase tracking-[0.4em] text-white/50 font-medium"
          >
            Plan • Execute • Grow • Repeat
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10 items-center text-left">
          <div className="text-xs font-mono text-white/40 tracking-wider">
            &copy; {currentYear} Felix Thadi. All rights reserved. <br />
            <span className="text-[10px] text-white/30">Digital Marketing Expert & Team Lead</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:felix.thadi@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-brand-red/10 hover:border-brand-red/30 transition-all">
              <Mail size={16} /><span>felix.thadi@gmail.com</span>
            </a>
            <a href="tel:+918179118725" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-brand-red/10 hover:border-brand-red/30 transition-all">
              <Phone size={16} /><span>+91 81791 18725</span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 text-emerald-100 hover:bg-emerald-500 hover:text-white hover:border-emerald-400 transition-all">
              <FaWhatsapp size={17} /><span>WhatsApp Felix</span>
            </a>
          </div>
          <div className="text-left md:text-right text-xs font-mono text-white/45 tracking-wider">
            <a href="/Felix-Thadi-Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors mr-4">Resume</a>
            <a href="https://www.linkedin.com/in/thadifelix" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
