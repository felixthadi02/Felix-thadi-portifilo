import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  Pause,
  Play,
  TrendingUp,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import videoPoster from '../assets/felix-video-poster.webp';

export default function Hero() {
  const videoRef = useRef(null);
  const completedPlaysRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showStill, setShowStill] = useState(false);

  const restartIntro = async (withSound = false) => {
    const video = videoRef.current;
    if (!video) return;

    completedPlaysRef.current = 0;
    video.currentTime = 0;
    video.muted = !withSound;
    setIsMuted(!withSound);
    setShowStill(false);

    try {
      await video.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (showStill) {
      await restartIntro(!isMuted);
    } else if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
    }
  };

  const handleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (showStill) {
      await restartIntro(true);
      return;
    }

    video.muted = !video.muted;
    setIsMuted(video.muted);

    if (video.paused) {
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnded = async () => {
    const video = videoRef.current;
    if (!video) return;

    completedPlaysRef.current += 1;

    if (completedPlaysRef.current < 2) {
      video.currentTime = 0;
      try {
        await video.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    setIsPlaying(false);
    setShowStill(true);
  };

  return (
    <section id="home" className="relative flex min-h-[100dvh] w-full items-center overflow-hidden bg-[#070707] pt-24 text-white sm:pt-28 lg:pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#070707]">
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden sm:w-[78%] lg:w-[74%]">
          <video
            ref={videoRef}
            src="/felix-intro.mp4"
            poster={videoPoster}
            autoPlay
            muted={isMuted}
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex="-1"
            className={`h-full w-full object-cover object-center saturate-[0.72] brightness-[0.82] contrast-[1.04] transition-opacity duration-500 ${showStill ? 'opacity-0' : 'opacity-100'}`}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={handleVideoEnded}
          />
          <img
            src={videoPoster}
            alt=""
            width="1672"
            height="941"
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover object-center saturate-[0.72] brightness-[0.82] contrast-[1.04] transition-opacity duration-500 ${showStill ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        <div className="absolute inset-0 bg-black/45 sm:bg-black/25" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.96)_29%,rgba(0,0,0,0.76)_43%,rgba(0,0,0,0.20)_67%,rgba(0,0,0,0.08)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_38%,rgba(115,30,30,0.07),transparent_38%)]" />
        <div className="hero-grid absolute inset-0 opacity-[0.1]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 sm:pb-16 lg:px-12 xl:px-16">
        <div className="max-w-[700px] lg:max-w-[610px] xl:max-w-[680px]">
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-red/40 bg-black/45 px-3.5 py-2 backdrop-blur-md"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
            </span>
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-brand-red sm:text-[11px]">
              Digital Marketing Expert • Team Lead &amp; Freelancer • 3.5+ Years
            </p>
          </motion.div>

          <motion.h1
            className="mb-5 font-sans text-[clamp(2.75rem,6.1vw,5.9rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Hi, I'm a
            <span className="mt-2 block text-stroke hero-outline">
              Digital<br />Marketing<br />Expert
            </span>
          </motion.h1>

          <motion.p
            className="mb-7 max-w-[640px] text-sm leading-7 text-white/78 sm:text-base"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            I help businesses turn search, paid media, app monetization, content, and
            analytics into measurable growth. My work spans SEO, paid media, social
            growth, branding, lead generation, AdMob, AppLovin, and performance
            analytics across in-house roles and freelance projects.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-2.5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a href="#projects" className="hero-button hero-button-light group rounded-full bg-white px-4 py-3 text-[11px] font-bold tracking-wide text-black shadow-lg transition-transform duration-300 hover:scale-[1.03] active:scale-95 sm:px-5 sm:text-xs">
              Explore Expertise
              <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="https://www.linkedin.com/in/thadifelix/" target="_blank" rel="noopener noreferrer" className="hero-button rounded-full border border-[#0a66c2]/70 bg-[#061a30]/70 px-4 py-3 text-[11px] font-bold tracking-wide text-white backdrop-blur-md transition-colors hover:bg-[#0a66c2] sm:text-xs">
              <FaLinkedinIn size={14} /> LinkedIn
            </a>
            <a href="/Felix-Thadi-Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-button rounded-full border border-brand-red/55 bg-black/45 px-4 py-3 text-[11px] font-bold tracking-wide text-white backdrop-blur-md transition-colors hover:border-brand-red hover:bg-brand-red sm:text-xs">
              <FileText size={14} /> View Resume
            </a>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <button
              type="button"
              onClick={handleSound}
              aria-label={showStill ? 'Replay introduction with sound' : isMuted ? 'Play introduction with sound' : 'Mute introduction video'}
              aria-pressed={!isMuted}
              className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-colors duration-200 hover:border-brand-red hover:bg-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {isMuted || showStill ? <Volume2 size={16} /> : <VolumeX size={16} />}
              {showStill ? 'Replay With Sound' : isMuted ? 'Hear My Intro' : 'Sound On'}
            </button>
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={showStill ? 'Replay background introduction video' : isPlaying ? 'Pause background introduction video' : 'Play background introduction video'}
              aria-pressed={isPlaying && !showStill}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition-colors duration-200 hover:border-brand-red hover:bg-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {isPlaying && !showStill ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
            </button>
            <span className="font-mono text-[9px] uppercase tracking-[0.17em] text-white/45">
              {showStill ? 'Intro complete • replay anytime' : 'Playing twice • then portrait'}
            </span>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45 sm:text-[10px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.68 }}
          >
            <span className="flex items-center gap-2"><TrendingUp size={13} className="text-brand-red" /> Strategy to measurable growth</span>
            <span className="hidden h-px w-8 bg-white/25 sm:block" />
            <span>Hyderabad • India</span>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-t from-black to-transparent" />

      <a href="#about" className="absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center md:flex">
        <span className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">Scroll Down</span>
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={18} className="text-brand-red" />
        </motion.span>
      </a>
    </section>
  );
}
