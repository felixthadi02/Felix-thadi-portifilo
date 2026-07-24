import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  GraduationCap,
  HeartHandshake,
  MapPin,
  UsersRound
} from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';

const highlights = [
  { value: '3.5+', label: 'Years of experience', Icon: BriefcaseBusiness },
  { value: '724+', label: 'LinkedIn followers', Icon: UsersRound },
  { value: '90%', label: 'University grade', Icon: GraduationCap },
  { value: 'Open', label: 'To new opportunities', Icon: BadgeCheck }
];

const education = [
  {
    period: '2023 - 2026',
    title: 'Acharya Nagarjuna University',
    course: 'Computer Science, Business & Commerce',
    detail: 'Guntur - Grade: 90%'
  },
  {
    period: '2016 - 2019',
    title: 'Swarnandhra College of Engineering & Technology',
    course: 'Diploma in Mechanical Engineering',
    detail: 'Narsapur, Andhra Pradesh'
  }
];

const topSkills = [
  'Digital Marketing',
  'Mobile App Monetization',
  'Google Ads',
  'SEO',
  'Social Media Management'
];

export default function Credentials() {
  return (
    <section id="credentials" className="relative overflow-hidden bg-[#f4f4f4] px-6 py-24 text-black md:px-12 md:py-32">
      <div className="pointer-events-none absolute -right-24 top-12 h-72 w-72 rounded-full bg-brand-red/15 blur-[90px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-black/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] shadow-sm">
              <BadgeCheck size={15} className="text-brand-red" aria-hidden="true" /> Profile snapshot
            </div>
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.94] tracking-tight md:text-6xl">
              Experience backed by <span className="text-brand-red">skills & education.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-black/60">
            <MapPin size={17} className="text-brand-red" aria-hidden="true" /> Hyderabad, Telangana, India
          </div>
        </motion.div>

        <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {highlights.map(({ value, label, Icon }, index) => (
            <motion.article
              key={label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group rounded-2xl border border-black/10 bg-white p-5 shadow-[0_14px_36px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:border-brand-red/40"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white transition-colors duration-300 group-hover:bg-brand-red">
                <Icon size={18} aria-hidden="true" />
              </div>
              <p className="text-3xl font-black tracking-tight md:text-4xl">{value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-black/50">{label}</p>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-[#111111] p-6 text-white shadow-2xl md:p-9"
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-red">Learning path</p>
                <h3 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-3xl">Education</h3>
              </div>
              <GraduationCap size={34} className="text-white/25" aria-hidden="true" />
            </div>

            <div className="space-y-4">
              {education.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-brand-red/50">
                  <p className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-red">{item.period}</p>
                  <h4 className="text-lg font-black leading-tight">{item.title}</h4>
                  <p className="mt-2 text-sm text-white/75">{item.course}</p>
                  <p className="mt-1 text-xs text-white/45">{item.detail}</p>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between rounded-3xl bg-brand-red p-6 text-white shadow-[0_22px_55px_rgba(255,42,42,0.25)] md:p-9"
          >
            <div>
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-red shadow-lg">
                <FaLinkedinIn size={22} aria-hidden="true" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/55">Top LinkedIn skills</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/25 bg-black/10 px-3 py-2 text-xs font-bold">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-t border-black/15 pt-6">
                <div className="flex items-start gap-3">
                  <HeartHandshake size={21} className="mt-0.5 shrink-0 text-black/65" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-black uppercase">Open to volunteering</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/80">Health, animal welfare, arts, culture, and children-focused causes.</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.linkedin.com/in/thadifelix/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black/30"
            >
              View complete profile <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
