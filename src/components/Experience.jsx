import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Digital Marketing Expert',
    company: 'JAIMAX SOFTWARE SOLUTIONS PRIVATE LIMITED',
    type: 'Full-time • On-site • Hyderabad',
    period: 'Mar 2026 – Present',
    desc: 'Leading digital marketing performance across SEO, paid acquisition, social growth, content, and lead generation while shaping mobile app monetization and revenue optimization strategy.',
    tech: ['Digital Marketing', 'Team Leadership', 'Mobile App Monetization', 'SEO', 'Google Ads', 'Meta Ads', 'Performance Marketing']
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'JAIMAX SOFTWARE SOLUTIONS PRIVATE LIMITED',
    type: 'Full-time • On-site • Hyderabad',
    period: 'Apr 2025 – Mar 2026',
    desc: 'Managed mobile app monetization using AdMob, AppLovin, and DT Exchange, optimizing eCPM, fill rates, rewarded ads, and revenue while supporting cross-channel campaign execution and reporting.',
    tech: ['AdMob', 'AppLovin', 'DT Exchange', 'eCPM', 'Rewarded Ads', 'GA4', 'Reporting']
  },
  {
    role: 'Digital Marketing Specialist',
    company: 'RGESTATE.COM BY RIVERIA GLOBAL GROUPS',
    type: 'Dubai Real Estate Marketing • Full-time',
    period: 'Sep 2024 – Apr 2025',
    desc: 'Executed SEO, social media advertising, and international lead-generation campaigns for Dubai real estate audiences. Improved landing pages, audience targeting, traffic analysis, and CRM nurture journeys.',
    tech: ['Dubai Real Estate', 'SEO', 'Social Media Ads', 'Lead Generation', 'Ubersuggest', 'Traffic Analysis', 'CRM']
  },
  {
    role: 'Digital Marketing Executive',
    company: 'RGESTATE.COM BY RIVERIA GLOBAL GROUPS',
    type: 'Full-time • On-site • Hyderabad',
    period: 'Jan 2023 – Sep 2024',
    desc: 'Created and managed website, blog, email, newsletter, and social content; executed keyword research and link building; ran paid search; and produced campaign and stakeholder performance reports.',
    tech: ['Newsletters', 'Google Search Console', 'Content Marketing', 'Google Ads', 'Bing Ads', 'SEO', 'Analytics']
  },
  {
    role: 'Digital Marketing Intern',
    company: 'RGESTATE.COM BY RIVERIA GLOBAL GROUPS',
    type: 'Internship • On-site • Hyderabad',
    period: 'Sep 2022 – Aug 2023',
    desc: 'Supported campaign development across SEO, SEM, email, social media, and web content. Conducted keyword research, created awareness content, and helped track core marketing metrics.',
    tech: ['Social Media', 'Web Content Writing', 'SEO Research', 'SEM', 'Google Analytics', 'Reporting']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#0b0b0b] text-white pt-24 pb-32 px-6 md:px-12 select-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-left mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-sm text-xs font-semibold uppercase tracking-wider mb-6 font-sans">
            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" /> Journey
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-sans">Professional Experience</h2>
        </div>
        <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-6 md:pl-12 space-y-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.role}-${experience.period}`}
              className="relative group text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 bg-[#0b0b0b] border-2 border-brand-red rounded-full group-hover:bg-brand-red transition-colors duration-300 z-10 shadow-lg" />
              <div className="marketing-panel bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-brand-red hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(255,42,42,0.12)] transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black font-sans uppercase tracking-tight text-white group-hover:text-brand-red transition-colors">{experience.role}</h3>
                    <p className="text-sm font-semibold tracking-wide text-white/60">
                      {experience.company} &bull; <span className="text-xs font-mono font-medium text-brand-red/90">{experience.type}</span>
                    </p>
                  </div>
                  <span className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10 text-xs font-mono font-bold text-white tracking-wider">{experience.period}</span>
                </div>
                <p className="text-sm md:text-base text-white/80 leading-relaxed font-sans mb-6">{experience.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.tech.map((tag) => (
                    <span key={tag} className="text-[10px] md:text-xs font-mono px-3 py-1 bg-white/5 text-white/70 border border-white/5 rounded-md hover:border-brand-red hover:text-white transition-colors cursor-default">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
