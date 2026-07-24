import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand the business goal, audience, market, competitors, current channel performance, and the opportunity behind the brief.',
    align: 'right', // relative to center line
    rotation: 2,
    positionClass: 'lg:translate-x-[180px] lg:-translate-y-4'
  },
  {
    num: '02',
    title: 'Strategize',
    desc: 'Choose the channel mix, audience, message, creative direction, campaign structure, tracking plan, and measurable KPIs.',
    align: 'left',
    rotation: -3,
    positionClass: 'lg:-translate-x-[180px] lg:translate-y-8'
  },
  {
    num: '03',
    title: 'Launch',
    desc: 'Build the campaign, create content and landing pages, configure analytics and conversion events, and launch with a clear testing plan.',
    align: 'right',
    rotation: 3,
    positionClass: 'lg:translate-x-[180px] lg:translate-y-16'
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'Analyze results, improve targeting and creative, scale what works, reduce wasted spend, and translate reporting into the next action.',
    align: 'left',
    rotation: -2,
    positionClass: 'lg:-translate-x-[180px] lg:translate-y-24'
  }
];

export default function Process() {
  const containerRef = useRef(null);
  
  // Track scroll position of the process section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Smooth out the scroll progress for the SVG path animation
  const scaleYSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform scroll progress to SVG path length (from 0 to 1)
  const pathLength = useTransform(scaleYSpring, [0, 0.9], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#f4f4f4] text-black pt-20 pb-36 px-6 md:px-12 grid-bg select-none overflow-hidden min-h-screen"
    >
      {/* Decorative SVG grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Header Container */}
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-black/10 bg-white/60 shadow-sm text-xs font-semibold uppercase tracking-wider mb-6 font-sans">
          <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" /> How we work
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight font-sans mb-6">
          Let me show you how I drive <br className="hidden md:inline" />
          your brand to new heights
        </h2>
        
        <p className="text-black/60 text-base max-w-xl mx-auto font-sans">
          A systematic digital marketing workflow that connects research, strategy, execution, and performance optimization.
        </p>

        {/* Hand-drawn Arrow Sketch Icon */}
        <div className="absolute right-4 md:right-12 bottom-[-40px] hidden md:block">
          <svg className="w-16 h-16 text-brand-red fill-none stroke-current stroke-2" viewBox="0 0 48 48">
            <path d="M6,18 C14,26 22,34 38,24" />
            <path d="M30,16 C34,20 38,24 38,24 C38,24 32,32 30,34" />
          </svg>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto relative flex flex-col items-center">
        
        {/* Desktop SVG S-Curve Path (Hidden on Mobile) */}
        <div className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none z-0">
          <svg className="w-full h-full" viewBox="0 0 1000 1600" fill="none">
            {/* Background static light dashed line */}
            <path
              d="M 500,0 C 500,200 900,300 900,600 C 900,900 100,900 100,1200 C 100,1500 500,1500 500,1600"
              stroke="rgba(0, 0, 0, 0.08)"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            {/* Scroll-animated dark path */}
            <motion.path
              d="M 500,0 C 500,200 900,300 900,600 C 900,900 100,900 100,1200 C 100,1500 500,1500 500,1600"
              stroke="#ff2a2a"
              strokeWidth="4"
              strokeDasharray="8 8"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* Mobile vertical line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] bg-black/5 lg:hidden z-0">
          <motion.div 
            className="w-full bg-brand-red h-full origin-top"
            style={{ scaleY: pathLength }}
          />
        </div>

        {/* Timeline Cards Container */}
        <div className="relative z-10 w-full flex flex-col space-y-16 lg:space-y-0 lg:h-[1600px] justify-between">
          {steps.map((step) => (
            <div 
              key={step.num} 
              className={`flex w-full items-center justify-start lg:justify-center ${step.positionClass}`}
            >
              {/* Card Badge */}
              <motion.div
                className="bg-white border-2 border-black/10 text-black w-full max-w-[340px] md:max-w-[380px] p-8 rounded-[2rem] shadow-lg hover:shadow-2xl hover:border-brand-red cursor-pointer relative z-10 select-none overflow-hidden transition-all duration-500"
                style={{ rotate: step.rotation }}
                whileHover={{ 
                  rotate: step.rotation > 0 ? step.rotation + 2 : step.rotation - 2,
                  scale: 1.03,
                  backgroundColor: '#ff2a2a',
                  color: '#ffffff',
                  borderColor: '#ff2a2a',
                  boxShadow: '0 20px 40px rgba(255, 42, 42, 0.35)'
                }}
              >
                {/* Hole punch detail */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#f4f4f4] rounded-full border border-black/10 shadow-inner flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-black/25 rounded-full" />
                </div>

                <div className="flex flex-col items-start text-left pt-3">
                  <span className="font-serif italic text-4xl font-extrabold tracking-tighter opacity-35 mb-2 hover:opacity-100 transition-opacity">
                    {step.num}
                  </span>
                  
                  <h3 className="text-2xl font-black uppercase tracking-tight font-sans mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed opacity-80 font-sans">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Slogan Section */}
      <div className="max-w-xl mx-auto text-center mt-28 relative z-10">
        <motion.p
          className="font-serif italic text-3xl text-brand-red font-bold inline-block transform -rotate-2 select-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to grow!
        </motion.p>
      </div>
    </section>
  );
}
