import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // Automatically trigger onComplete after animation completes (approx 2.2 seconds)
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-brand-red select-none overflow-hidden"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
      }}
    >
      <motion.div 
        className="relative flex items-center justify-center"
        exit={{ 
          scale: 0.85,
          opacity: 0,
          transition: { duration: 0.6, ease: "easeInOut" }
        }}
      >
        {/* Background Dark Text */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black/15 uppercase font-sans">
          Felix Thadi!
        </h1>

        {/* Foreground Water-fill White Text */}
        <motion.h1 
          className="absolute text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white uppercase font-sans"
          initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
          animate={{ 
            clipPath: [
              "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
              "polygon(0 75%, 100% 70%, 100% 100%, 0 100%)",
              "polygon(0 45%, 100% 40%, 100% 100%, 0 100%)",
              "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            ]
          }}
          transition={{ 
            duration: 1.6, 
            ease: [0.42, 0, 0.58, 1],
            times: [0, 0.4, 0.7, 1]
          }}
        >
          Felix Thadi!
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
