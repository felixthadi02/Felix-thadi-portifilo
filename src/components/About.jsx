import { motion } from 'framer-motion';
import { Search, Smartphone, Sparkles, UsersRound } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiCanva, SiGoogleads, SiGoogleadsense, SiGoogleanalytics, SiGooglesearchconsole, SiMeta, SiWordpress } from 'react-icons/si';
import profileImg from '../assets/felix-profile.webp';

const tools = [
  { name: 'SEO', Icon: Search, color: '#111111' },
  { name: 'Google Ads', Icon: SiGoogleads, color: '#4285F4' },
  { name: 'Meta Ads', Icon: SiMeta, color: '#0866FF' },
  { name: 'AdMob', Icon: SiGoogleadsense, color: '#EA4335' },
  { name: 'AppLovin', Icon: Smartphone, color: '#111111' },
  { name: 'GA4', Icon: SiGoogleanalytics, color: '#F9AB00' },
  { name: 'Search Console', Icon: SiGooglesearchconsole, color: '#458CF5' },
  { name: 'WordPress', Icon: SiWordpress, color: '#21759B' },
  { name: 'Ubersuggest', Icon: Search, color: '#F04B3A' },
  { name: 'CRM', Icon: UsersRound, color: '#111111' },
  { name: 'Canva', Icon: SiCanva, color: '#00C4CC' },
  { name: 'AI Tools', Icon: Sparkles, color: '#7C3AED' }
];

function BottomMarquee() {
  return (
    <div className="w-full overflow-hidden border-y border-black/15 bg-black/10 py-3">
      <motion.div
        className="flex w-max items-center gap-3"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {[...tools, ...tools].map((tool, index) => {
          const Icon = tool.Icon;
          return (
            <div
              key={`${tool.name}-${index}`}
              className="tool-logo-pill flex items-center gap-3 rounded-full border border-black/10 bg-white/90 px-5 py-2 text-xs font-black uppercase tracking-widest text-black shadow-sm"
            >
              <Icon size={18} style={{ color: tool.color }} aria-hidden="true" /> {tool.name}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-[#FF2A2A] text-white pt-24 pb-36 px-6 md:px-12 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 flex flex-col items-center justify-start relative pt-10">
          <div className="absolute -top-25 w-2 h-36 bg-black rounded-b-md z-10 shadow-lg" />
          <div className="absolute top-10 w-6 h-6 bg-zinc-700 border-2 border-zinc-500 rounded-md z-10 shadow-md flex items-center justify-center">
            <div className="w-2 h-2 bg-zinc-300 rounded-full" />
          </div>

          <motion.div
            className="mt-7 bg-zinc-900 border-4 border-black text-black w-72 md:w-80 rounded-2xl overflow-hidden shadow-2xl origin-top flex flex-col items-center relative z-20 pb-6 cursor-grab active:cursor-grabbing"
            style={{ rotate: -3 }}
            whileHover={{ rotate: [-3, 2, -4, -3], transition: { duration: 1.5, ease: 'easeInOut', repeat: Infinity } }}
            drag
            dragConstraints={{ left: -30, right: 30, top: -20, bottom: 20 }}
            dragElastic={0.2}
          >
            <div className="w-12 h-3 bg-black rounded-b-md mb-4 flex items-center justify-center">
              <div className="w-6 h-1 bg-white rounded-full" />
            </div>
            <div className="w-full bg-black text-white py-1 px-4 flex justify-between items-center mb-4 text-[10px] font-mono tracking-widest uppercase">
              <span>Growth Pass</span>
              <span className="text-brand-red">#0922-FELIX</span>
            </div>
            <div className="w-56 h-56 bg-zinc-800 border-2 border-black rounded-xl overflow-hidden shadow-inner relative flex items-center justify-center">
              <img src={profileImg} alt="Felix Thadi, Digital Marketing Expert" loading="lazy" width="560" height="560" className="w-full h-full object-cover object-[68%_center] grayscale contrast-125" />
            </div>
            <div className="mt-2 text-center px-4 w-full">
              <h3 className="text-lg font-black tracking-tight text-white uppercase font-sans">Felix Thadi</h3>
              <p className="text-xs font-mono font-bold tracking-widest text-[#FF2A2A] uppercase mt-1">Digital Marketing Expert</p>
              <div className="mt-2 flex justify-center items-center h-8 bg-white border border-black p-1.5 rounded space-x-0.5 overflow-hidden">
                {[...Array(24)].map((_, index) => (
                  <div key={index} className="bg-black h-full" style={{ width: `${index % 3 === 0 ? 3 : index % 2 === 0 ? 1.5 : 0.8}px` }} />
                ))}
              </div>
              <span className="text-[9px] font-mono text-zinc-500 tracking-widest block mt-1 uppercase">SEO • PERFORMANCE • JAIMAX</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          <motion.h2
            className="text-6xl md:text-8xl font-black tracking-tight text-black font-sans uppercase mb-6 animate-pulse"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Hello!
          </motion.h2>
          <motion.div
            className="text-white text-base md:text-lg leading-relaxed space-y-4 max-w-xl mb-8 font-sans"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              I am <strong className="text-black font-black tracking-wide text-2xl uppercase">Felix Thadi</strong>, a Digital Marketing Expert and Team Lead with <strong className="text-black font-bold">3.5+ years across real estate, mobile app monetization, and e-commerce</strong>.
            </p>
            <p>
              I currently work as a Digital Marketing Expert at <strong>JAIMAX Software Solutions</strong>, connecting performance marketing, app monetization, revenue optimization, creative execution, and analytics.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-white/90">
              <li>Lead SEO, Google Ads, Meta Ads, content, and reporting across channels.</li>
              <li>Optimize mobile revenue through <strong className="text-black">AdMob, AppLovin, and DT Exchange</strong>.</li>
              <li>Build real-estate lead-generation campaigns for UAE-focused audiences.</li>
              <li>Create WordPress landing pages and improve conversion through A/B testing.</li>
              <li>Turn GA4 and Search Console data into practical campaign decisions.</li>
            </ul>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="rounded-2xl border border-black/15 bg-black/10 p-4 backdrop-blur-sm">
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-black/55">Assessment</p>
              <h4 className="mt-1 font-black uppercase text-black">LinkedIn SEO Skill</h4>
              <p className="mt-1 text-xs text-white/85">Assessment passed</p>
            </div>
            <div className="rounded-2xl border border-black/15 bg-black/10 p-4 backdrop-blur-sm">
              <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-black/55">Campaign Stack</p>
              <h4 className="mt-1 font-black uppercase text-black">Google • Meta • GA4</h4>
              <p className="mt-1 text-xs text-white/85">Execution, tracking, and optimization</p>
            </div>
          </motion.div>

          <motion.a
            href="https://www.linkedin.com/in/thadifelix/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white shadow-xl transition-transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaLinkedinIn size={16} className="text-[#58a6ff]" /> View LinkedIn Profile
          </motion.a>
        </div>
      </div>

      <div className="absolute left-0 right-0 z-20" style={{ bottom: '48px' }}>
        <BottomMarquee />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-30">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="relative block w-full h-12 text-[#f4f4f4] fill-current">
          <path d="M0,45 C120,60 240,75 360,70 C480,65 600,40 720,45 C840,50 960,65 1080,60 C1200,55 1320,30 1440,35 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
