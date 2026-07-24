import { motion } from 'framer-motion';
import { ArrowUpRight, ChartNoAxesCombined, Megaphone, MessagesSquare, PanelsTopLeft, Search, Smartphone } from 'lucide-react';
import rgestatePreview from '../assets/websites/rgestate.webp';
import rgGroupPreview from '../assets/websites/rggroup.webp';
import rgInteriorsPreview from '../assets/websites/rginteriors.webp';
import cleantelPreview from '../assets/websites/cleantel.webp';
import dareToComePreview from '../assets/websites/daretocome.webp';
import jaisvikPreview from '../assets/websites/jaisviksolutions.webp';
import jaimaxPreview from '../assets/websites/jaimax.webp';
import thriveWellPreview from '../assets/websites/thrivewell.webp';
import dubaiLondonPreview from '../assets/websites/dubailondonhospital.webp';
import blackInfotechPreview from '../assets/websites/blackinfotech.webp';
import redBerriesPreview from '../assets/websites/redberries.webp';
import butterflySistersPreview from '../assets/websites/butterflysisters.webp';

const websites = [
  {
    name: 'RGEstate',
    url: 'https://www.rgestate.com/',
    industry: 'Commercial Real Estate',
    location: 'Dubai, UAE',
    image: rgestatePreview,
    description: 'A commercial property platform connecting investors and businesses with real estate opportunities across the UAE.'
  },
  {
    name: 'RG Group',
    url: 'https://www.rggroup.ae/',
    industry: 'Real Estate Investment',
    location: 'Dubai, UAE',
    image: rgGroupPreview,
    description: 'A diversified commercial real estate and investment group presenting services, companies, and opportunities.'
  },
  {
    name: 'RG Interiors',
    url: 'https://www.rginteriors.ae/',
    industry: 'Interior Design & Fit-Out',
    location: 'Dubai, UAE',
    image: rgInteriorsPreview,
    description: 'Turnkey interior design and fit-out services for commercial, residential, retail, and industrial spaces.'
  },
  {
    name: 'Cleantel',
    url: 'https://cleantel.me/',
    industry: 'Cleaning Services',
    location: 'Sharjah, UAE',
    image: cleantelPreview,
    description: 'Professional residential and commercial cleaning services built around convenient booking and clear service discovery.'
  },
  {
    name: 'Dare To Come',
    url: 'https://www.daretocome.com/',
    industry: 'Digital Publishing',
    location: 'Global',
    image: dareToComePreview,
    description: 'A multi-category digital publication covering business, education, entertainment, health, travel, and current trends.'
  },
  {
    name: 'Jaisvik Solutions',
    url: 'https://www.jaisviksolutions.com/',
    industry: 'Software & IT Services',
    location: 'India',
    image: jaisvikPreview,
    description: 'Custom software development and IT services designed for digital-first businesses and modern operations.'
  },
  {
    name: 'Jaimax',
    url: 'https://www.jaimax.com/',
    industry: 'Digital Finance',
    location: 'India',
    image: jaimaxPreview,
    description: 'A digital finance and crypto ecosystem presenting token participation, platform features, and community resources.'
  },
  {
    name: 'ThriveWell Healthcare',
    url: 'https://www.thrivewell-healthcare.in/',
    industry: 'Home Healthcare',
    location: 'India',
    image: thriveWellPreview,
    description: 'A home healthcare platform for caregiving, nursing, physiotherapy, diagnostics, and medical equipment.'
  },
  {
    name: 'Dubai London Hospitals',
    url: 'https://dubailondonhospital.com/',
    industry: 'Healthcare',
    location: 'Dubai, UAE',
    image: dubaiLondonPreview,
    description: 'A healthcare network presenting clinics, specialties, doctors, health packages, and patient services across Dubai.'
  },
  {
    name: 'Black Infotech',
    url: 'https://blackinfotech.com/',
    industry: 'Digital Marketing',
    location: 'Hyderabad, India',
    image: blackInfotechPreview,
    description: 'SEO, digital marketing, creative, and performance services focused on helping businesses improve online growth.'
  },
  {
    name: 'RedBerries',
    url: 'https://redberries.ae/',
    industry: 'Digital Marketing',
    location: 'Dubai, UAE',
    image: redBerriesPreview,
    description: 'A Dubai marketing agency offering digital strategy, web, paid media, social campaigns, and creative services.'
  },
  {
    name: 'Butterfly Sisters',
    url: 'https://butterflysisters.in/',
    industry: 'Fashion E-commerce',
    location: 'India',
    image: butterflySistersPreview,
    description: 'A premium ethnic wear and saree shopping platform supported by online discovery, trust-building content, and WhatsApp-led purchase assistance.'
  }
];

const capabilities = [
  {
    icon: Search,
    title: 'SEO & Organic Growth',
    subtitle: 'Technical • On-page • Off-page',
    desc: 'Search strategies built around technical audits, keyword opportunities, content optimization, link building, and continuous Search Console analysis.',
    tech: ['Keyword Research', 'Technical SEO', 'SEO Copywriting', 'Search Console', 'Ubersuggest']
  },
  {
    icon: Megaphone,
    title: 'Performance Marketing',
    subtitle: 'Google • Meta • Bing',
    desc: 'Full campaign execution across search and paid social, with audience targeting, creative iteration, conversion measurement, and ROAS-focused optimization.',
    tech: ['Google Ads', 'Meta Ads', 'Bing Ads', 'PMax', 'Lead Generation', 'ROAS']
  },
  {
    icon: Smartphone,
    title: 'App Monetization',
    subtitle: 'Ad mediation • eCPM • Revenue',
    desc: 'Mobile app revenue management through mediation, rewarded-ad implementation, fill-rate optimization, and an experience-first in-app advertising strategy.',
    tech: ['AdMob', 'AppLovin', 'DT Exchange', 'eCPM', 'Rewarded Ads', 'Mediation']
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Analytics & Reporting',
    subtitle: 'Measure • Learn • Improve',
    desc: 'Traffic, behavior, and conversion analysis translated into clear reports and practical decisions for stakeholders, campaigns, and content teams.',
    tech: ['GA4', 'Search Console', 'Web Analytics', 'Traffic Analysis', 'Reporting']
  },
  {
    icon: MessagesSquare,
    title: 'Content & Lifecycle',
    subtitle: 'Social • Email • WhatsApp',
    desc: 'Multi-channel content and nurture programs that maintain brand consistency while moving high-intent audiences toward action.',
    tech: ['Content Strategy', 'Copywriting', 'Email', 'WhatsApp', 'Social Media', 'CRM']
  },
  {
    icon: PanelsTopLeft,
    title: 'Landing Page Conversion',
    subtitle: 'WordPress • Creative • Testing',
    desc: 'Campaign landing pages and digital creative designed for clarity, speed, and conversion, improved through structured A/B testing.',
    tech: ['WordPress', 'Landing Pages', 'A/B Testing', 'Canva', 'HTML', 'E-commerce']
  }
];

function CapabilityIcon({ icon: Icon, size = 18, className = '' }) {
  return <Icon size={size} className={className} aria-hidden="true" />;
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0e0e0e] text-white pt-24 pb-32 px-6 md:px-12 select-none overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#ff2a2a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-sm text-xs font-semibold uppercase tracking-wider mb-6 font-sans">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" /> Selected Work
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-sans">Websites I Have Worked With</h2>
          <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-white/60">
            A selection of live businesses and digital platforms where I contributed to SEO,
            content, campaigns, visibility, or broader digital growth initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {websites.map((website, index) => (
            <motion.article
              key={website.url}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141414] shadow-[0_18px_55px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red/70 hover:shadow-[0_22px_65px_rgba(255,42,42,0.12)]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
            >
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${website.name} website`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-red"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-black">
                  <img
                    src={website.image}
                    alt={`${website.name} website homepage preview`}
                    width="960"
                    height="540"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/5" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/65 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/80">Live Website</span>
                  </div>
                  <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur-md transition-colors duration-200 group-hover:border-brand-red group-hover:bg-brand-red">
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </span>
                </div>

                <div className="p-5 md:p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-1 text-[9px] font-mono uppercase tracking-[0.17em] text-brand-red">{website.industry}</p>
                      <h3 className="text-xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-brand-red">{website.name}</h3>
                    </div>
                    <span className="shrink-0 text-[9px] font-mono uppercase tracking-[0.13em] text-white/35">{website.location}</span>
                  </div>
                  <p className="min-h-[3.75rem] text-sm leading-6 text-white/60">{website.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
                    <span className="text-[9px] font-mono uppercase tracking-[0.16em] text-white/35">Digital growth contribution</span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white/75 transition-colors group-hover:text-brand-red">
                      Visit Site <ArrowUpRight size={12} aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-28 text-left mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-sm text-xs font-semibold uppercase tracking-wider mb-6 font-sans">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full" /> Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-sans">Growth Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              className="marketing-panel bg-[#111111] border border-white/5 hover:border-brand-red rounded-2xl p-6 flex flex-col justify-between h-full hover:shadow-[0_20px_45px_rgba(255,42,42,0.18)] hover:-translate-y-2 transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <span className="absolute right-5 top-4 text-[10px] font-mono tracking-widest text-white/20 group-hover:text-brand-red transition-colors">0{index + 1}</span>
                <CapabilityIcon icon={capability.icon} size={120} className="pointer-events-none absolute -right-8 top-8 text-white/[0.025] transition-all duration-500 group-hover:rotate-6 group-hover:text-brand-red/[0.07]" />
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-white/50 group-hover:bg-brand-red group-hover:text-white group-hover:shadow-[0_0_28px_rgba(255,42,42,0.3)] transition-all duration-300 mb-6">
                  <CapabilityIcon icon={capability.icon} size={19} />
                </div>
                <h3 className="text-xl font-black font-sans uppercase tracking-tight mb-2 text-white group-hover:text-brand-red transition-colors duration-300">{capability.title}</h3>
                <p className="text-xs font-mono font-medium text-brand-red/90 uppercase tracking-widest mb-4">{capability.subtitle}</p>
                <p className="text-sm text-white/70 leading-relaxed font-sans mb-6">{capability.desc}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {capability.tech.map((tag) => (
                    <span key={tag} className="text-[9px] font-mono px-2 py-0.5 bg-white/5 text-white/60 border border-white/5 rounded">{tag}</span>
                  ))}
                </div>
                <a href="#footer" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-brand-red transition-colors">
                  Discuss a Project <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
