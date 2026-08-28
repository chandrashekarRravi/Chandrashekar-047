import React, { useEffect, useState } from 'react';
import { CSR_FORGE } from '../config/csrforge';
import {
  ArrowUpRight, Menu, X, Globe, Search, MapPin, Star,
  Megaphone, Share2, TrendingUp, Palette,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  motion, useReducedMotion, AnimatePresence,
  type Variants,
} from 'framer-motion';

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

// ─── Ghost Button ─────────────────────────────────────────────────────────────

function GhostBtn({
  href, children, isExternal = false, dark = false, className = '',
}: {
  href: string; children: React.ReactNode; isExternal?: boolean; dark?: boolean; className?: string;
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 uppercase text-[11px] tracking-[0.12em] border rounded-[6px] px-5 py-3 font-bold transition-all duration-300';
  const light = 'border-[#d4d2d2] text-[#fcfcfc] hover:bg-[#fcfcfc] hover:text-[#080808]';
  const darkStyle = 'border-[#393939] text-[#080808] hover:bg-[#080808] hover:text-[#fcfcfc]';
  const cls = `${base} ${dark ? darkStyle : light} ${className}`.trim();
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      </a>
    );
  }
  return (
    <Link to={href} className={cls}>
      {children}
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
    </Link>
  );
}

// ─── Services Data ─────────────────────────────────────────────────────────────

const SERVICES = [
  {
    n: '01', icon: Globe, title: 'Website Development',
    short: 'Modern, fast, conversion-focused websites built for real business goals.',
    bullets: ['Custom responsive design (mobile-first)', 'E-commerce & landing pages', 'Performance & Core Web Vitals optimised', 'CMS integration (WordPress, custom)', 'Ongoing maintenance & support'],
  },
  {
    n: '02', icon: Search, title: 'SEO',
    short: 'Technical and on-page SEO that improves rankings and drives organic traffic.',
    bullets: ['Full technical SEO audit & fixes', 'Keyword research & content strategy', 'On-page optimisation', 'Schema markup & structured data', 'Monthly reporting & analysis'],
  },
  {
    n: '03', icon: MapPin, title: 'Local SEO',
    short: 'Dominate local search results so nearby customers find you first.',
    bullets: ['Local keyword targeting', 'Citation building & cleanup', 'Google Maps ranking improvement', 'Review generation strategy', 'Location page optimisation'],
  },
  {
    n: '04', icon: Star, title: 'Google Business Profile',
    short: 'Fully optimised GBP to build trust, visibility and local authority.',
    bullets: ['Profile setup & verification', 'Category & attribute optimisation', 'Photo & post management', 'Q&A and review management', 'Insights & performance tracking'],
  },
  {
    n: '05', icon: Megaphone, title: 'Google Ads',
    short: 'Targeted paid search campaigns that connect your brand with high-intent customers.',
    bullets: ['Campaign strategy & setup', 'Keyword & audience targeting', 'Ad copy writing & testing', 'Bid management & optimisation', 'Conversion tracking & reporting'],
  },
  {
    n: '06', icon: Share2, title: 'Social Media',
    short: 'Content strategy and management that builds audience, engagement and brand trust.',
    bullets: ['Platform strategy (Instagram, LinkedIn, FB)', 'Content calendar & creative production', 'Community management', 'Paid social campaigns', 'Analytics & growth reporting'],
  },
  {
    n: '07', icon: TrendingUp, title: 'Digital Marketing',
    short: 'Full-funnel digital marketing strategy built around measurable growth.',
    bullets: ['Integrated channel strategy', 'Email marketing & automation', 'Funnel design & CRO', 'Analytics & performance tracking', 'Competitor analysis'],
  },
  {
    n: '08', icon: Palette, title: 'Branding & Creative',
    short: 'Visual identity and creative assets that set you apart from the competition.',
    bullets: ['Logo & brand identity design', 'Brand guidelines & style system', 'Social media templates', 'Marketing collateral', 'Brand audit & refresh'],
  },
];

const FAQS = [
  { q: 'How long does a project typically take?', a: 'Website projects usually take 2-6 weeks depending on scope. SEO shows measurable results within 3-6 months. Google Ads campaigns can start driving traffic within days of going live.' },
  { q: 'Do you work with small businesses?', a: 'Absolutely. Our services are designed and priced to help small and medium businesses grow online without enterprise-level overhead.' },
  { q: 'Can I combine multiple services?', a: 'Yes — most clients benefit from bundling services. Website + SEO, or Ads + Social Media, for example, create compounding results that perform far better together.' },
  { q: 'Do you provide monthly reports?', a: 'Yes. All ongoing services include monthly performance reports with clear metrics tied to your business goals.' },
  { q: 'How do I get started?', a: "Reach out via our Google Business Profile, email, or phone. We'll schedule a free discovery call to understand your goals and recommend the right approach." },
];

// ─── Main Component ────────────────────────────────────────────────────────────

export default function CsrForgeServices() {
  const rm = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Services | CSR Forge — Digital Marketing & Web Development';
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Explore CSR Forge services: Website Development, SEO, Local SEO, Google Business Profile, Google Ads, Social Media, Digital Marketing and Branding.';
    document.head.appendChild(meta);
    const canon = document.createElement('link');
    canon.rel = 'canonical';
    canon.href = 'https://chandrashekar.vercel.app/csr-forge/services';
    document.head.appendChild(canon);
    return () => {
      document.head.removeChild(meta);
      document.head.removeChild(canon);
    };
  }, []);

  return (
    <div className="bg-[#080808] text-[#fcfcfc] min-h-screen font-sans overflow-x-hidden selection:bg-[#ff4400] selection:text-white">

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center bg-[#080808]/90 backdrop-blur-sm border-b border-[#171617]"
      >
        <Link to="/csr-forge" className="hover:opacity-80 transition-opacity flex items-center" aria-label="CSR Forge Home">
          <img src="/CSR-forge/Monochrome white.png" alt="CSR Forge logo" className="h-8 md:h-10 w-auto object-contain" />
        </Link>
        <ul className="hidden md:flex items-center gap-8 uppercase text-[11px] tracking-[0.1em] font-semibold text-[#d4d2d2]">
          {[
            { label: 'Home', href: '/csr-forge' },
            { label: 'Services', href: '/csr-forge/services' },
            { label: 'Work', href: '/csr-forge#work' },
            { label: 'About', href: '/csr-forge#about' },
            { label: 'Contact', href: '/csr-forge#contact' },
          ].map((item, i) => (
            <li key={i}>
              <Link to={item.href} className={`hover:text-white transition-colors ${item.label === 'Services' ? 'text-[#ff4400]' : ''}`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>Start A Project</GhostBtn>
        </div>
        <button className="md:hidden text-[#fcfcfc] p-1" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-start justify-center px-8 gap-8 md:hidden"
          >
            {[
              { label: 'Home', href: '/csr-forge' },
              { label: 'Services', href: '/csr-forge/services' },
              { label: 'Work', href: '/csr-forge#work' },
              { label: 'About', href: '/csr-forge#about' },
              { label: 'Contact', href: '/csr-forge#contact' },
            ].map((item, i) => (
              <Link key={i} to={item.href} onClick={() => setMobileOpen(false)}
                className="uppercase text-[28px] font-bold tracking-wide hover:text-[#d4d2d2] transition-colors">
                {item.label}
              </Link>
            ))}
            <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>Start A Project</GhostBtn>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-24 pb-20 md:pb-28">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#080808]" />
          <div className="absolute right-0 top-0 w-[70%] h-full bg-[radial-gradient(ellipse_55%_70%_at_80%_30%,rgba(180,50,10,0.30)_0%,rgba(120,30,5,0.12)_55%,transparent_80%)]" />
          <motion.svg
            aria-hidden="true" className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg"
            animate={rm ? {} : { y: [0, -6, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          >
            {[...Array(10)].map((_, i) => {
              const d = i / 9;
              const op = 0.22 - d * 0.12;
              const sw = 1.2 - d * 0.6;
              const spd = 7 + i * 1.1;
              const amp = 12 - d * 7;
              const del = i * 0.4;
              return (
                <motion.path
                  key={i}
                  d={`M${-80 + i * 35},600 C${280 + i * 22},${400 - i * 18} ${860 - i * 28},${200 + i * 20} ${1560 + i * 22},${-30 + i * 12}`}
                  stroke="#ff4400" strokeWidth={sw} strokeOpacity={op}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={rm ? { opacity: op } : { pathLength: 1, opacity: op, y: [0, -amp, 0, amp * 0.5, 0] }}
                  transition={{
                    pathLength: { duration: 1.2, delay: del, ease: 'easeOut' },
                    opacity: { duration: 0.7, delay: del },
                    y: { duration: spd, repeat: Infinity, ease: 'easeInOut', delay: del * 0.5 },
                  }}
                />
              );
            })}
          </motion.svg>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="uppercase text-[11px] tracking-[0.22em] text-[#525252] mb-6 font-semibold"
          >
            <Link to="/csr-forge" className="hover:text-[#ff4400] transition-colors">CSR Forge</Link>
            <span className="mx-2 text-[#393939]">/</span>Services
          </motion.p>

          <motion.h1 variants={stagger} initial="hidden" animate="visible"
            className="font-heading font-black uppercase leading-[0.88] tracking-[-0.04em]"
          >
            <motion.span variants={fadeUp} className="block text-[clamp(48px,9vw,130px)]">OUR</motion.span>
            <motion.span variants={fadeUp} className="block text-[clamp(48px,9vw,130px)]">
              SERVICES
              <motion.span
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                className="inline-block align-middle w-[clamp(10px,1.2vw,20px)] h-[clamp(10px,1.2vw,20px)] bg-[#ff4400] rounded-full ml-3 mb-1"
              />
            </motion.span>
            <motion.span variants={fadeUp}
              className="block font-serif italic font-light tracking-normal text-[clamp(26px,4.5vw,64px)] text-[#d4d2d2] mt-2">
              built for growth.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-8 text-[15px] md:text-[17px] text-[#b5b2b2] max-w-xl leading-[1.65]"
          >
            Everything a business needs to establish, grow, and dominate online — under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>Start A Project</GhostBtn>
            <a href="#services-grid"
              className="group inline-flex items-center gap-2 uppercase text-[11px] tracking-[0.12em] text-[#ff4400] hover:text-white transition-colors font-bold">
              See All Services <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────────────── */}
      <section id="services-grid" className="px-6 md:px-12 py-20 md:py-28 border-t border-[#171617] bg-[#080808]">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="uppercase text-[10px] tracking-[0.22em] text-[#525252] mb-12 font-semibold"
          >
            What We Do
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#171617]">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              const isActive = activeService === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
                  className="bg-[#080808] relative group overflow-hidden cursor-pointer"
                  onClick={() => setActiveService(isActive ? null : i)}
                >
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ff4400]"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isActive ? 1 : 0 }}
                    style={{ originY: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                  <div className="p-8 md:p-10 lg:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-serif italic text-[#525252] text-[16px]">{svc.n}</span>
                      <motion.div
                        animate={{ rotate: isActive ? 45 : 0, color: isActive ? '#ff4400' : '#525252' }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                    </div>
                    <h2 className="font-heading font-black uppercase leading-[0.92] tracking-[-0.03em] text-[clamp(24px,3vw,40px)] mb-4 group-hover:text-[#ff4400] transition-colors duration-300">
                      {svc.title}
                    </h2>
                    <p className="text-[14px] text-[#b5b2b2] leading-[1.65] max-w-sm">{svc.short}</p>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.ul
                          key="bullets"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 pt-6 border-t border-[#171617] space-y-2">
                            {svc.bullets.map((b, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.07, duration: 0.35 }}
                                className="flex items-start gap-3 text-[13px] text-[#d4d2d2] leading-[1.5]"
                              >
                                <span className="w-[6px] h-[6px] rounded-full bg-[#ff4400] mt-[6px] shrink-0" />
                                {b}
                              </motion.li>
                            ))}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="pt-4">
                              <GhostBtn href={CSR_FORGE.gbpUrl} isExternal className="!text-[10px] !px-4 !py-2.5">Get Started</GhostBtn>
                            </motion.div>
                          </div>
                        </motion.ul>
                      )}
                    </AnimatePresence>

                    <motion.p animate={{ opacity: isActive ? 0 : 0.4 }} className="mt-5 text-[11px] uppercase tracking-[0.1em] text-[#525252] font-semibold">
                      {isActive ? '' : 'Click to expand →'}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CSR FORGE ────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#f3efef] text-[#080808] border-t border-[#e0dcdc]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col md:flex-row gap-12 md:gap-24 items-start"
          >
            <motion.div variants={slideLeft} className="md:w-[45%]">
              <p className="uppercase text-[10px] tracking-[0.22em] text-[#525252] mb-6 font-semibold">Why Choose Us</p>
              <h2 className="font-heading font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(40px,6.5vw,88px)]">
                RESULTS,<br />NOT<br />
                <span className="font-serif italic font-light tracking-normal text-[#525252] text-[clamp(32px,5vw,70px)]">promises.</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="md:w-[55%] flex flex-col gap-10">
              {[
                { n: '01', t: 'Business-First Approach', d: 'Every strategy starts with your business goals — not generic templates or cookie-cutter plans.' },
                { n: '02', t: 'Full-Stack Capability', d: 'From design and development to marketing and branding — you get one team, one voice, one direction.' },
                { n: '03', t: 'Transparent Reporting', d: 'Clear, honest performance reports tied to real metrics. No vanity numbers, just what matters.' },
                { n: '04', t: 'Lean & Responsive', d: 'Small enough to care, experienced enough to deliver. Fast communication, no corporate delays.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 items-start border-b border-[#d4d2d2] pb-8 last:border-0 last:pb-0"
                >
                  <span className="font-serif italic text-[#b5b2b2] text-[15px] shrink-0 mt-1">{item.n}</span>
                  <div>
                    <h3 className="font-bold uppercase tracking-[0.06em] text-[14px] mb-2">{item.t}</h3>
                    <p className="text-[14px] text-[#525252] leading-[1.65]">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#080808] border-t border-[#171617]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
            <motion.p variants={fadeUp} className="uppercase text-[10px] tracking-[0.22em] text-[#525252] mb-6 font-semibold">Our Process</motion.p>
            <motion.h2 variants={slideLeft}
              className="font-heading font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(40px,7vw,100px)] mb-16 md:mb-20"
            >
              FROM{' '}
              <span className="font-serif italic font-light tracking-normal text-[#525252] text-[clamp(32px,5.5vw,80px)]">idea</span>
              <br />TO IMPACT.
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#171617]">
            {[
              { n: '01', t: 'Discover', d: 'We learn about your business, goals, audience and competitive landscape.' },
              { n: '02', t: 'Strategize', d: 'We define the right direction — channels, messaging and priority actions.' },
              { n: '03', t: 'Build', d: 'We design, develop and produce everything needed to execute the plan.' },
              { n: '04', t: 'Launch', d: 'We test, optimise, and take everything live with precision.' },
              { n: '05', t: 'Grow', d: 'We monitor, iterate and continuously improve performance over time.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#080808] p-8 md:p-10 group hover:bg-[#0d0d0d] transition-colors"
              >
                <span className="block font-heading font-black text-[clamp(36px,4vw,60px)] tracking-[-0.04em] leading-none text-[#171617] group-hover:text-[#ff4400] transition-colors duration-300 mb-6">
                  {step.n}
                </span>
                <h3 className="font-black uppercase tracking-[0.05em] text-[13px] mb-3">{step.t}</h3>
                <p className="text-[13px] text-[#525252] leading-[1.6]">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#f3efef] text-[#080808] border-t border-[#e0dcdc]">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <motion.div
            variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            className="lg:w-[38%] lg:sticky lg:top-28"
          >
            <p className="uppercase text-[10px] tracking-[0.22em] text-[#525252] mb-6 font-semibold">FAQ</p>
            <h2 className="font-heading font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(40px,6vw,80px)]">
              COMMON<br />
              <span className="font-serif italic font-light tracking-normal text-[#525252] text-[clamp(32px,4.5vw,64px)]">questions.</span>
            </h2>
          </motion.div>
          <div className="lg:w-[62%] flex flex-col divide-y divide-[#d4d2d2]">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-4 py-6 group"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-bold text-[14px] md:text-[16px] uppercase tracking-[0.04em] group-hover:text-[#525252] transition-colors">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.25 }}
                    className="shrink-0 w-6 h-6 flex items-center justify-center text-[#ff4400] text-[20px] font-light"
                  >+</motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[14px] text-[#525252] leading-[1.7]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-[#080808] border-t border-[#171617] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(180,50,10,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center text-center gap-8">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="uppercase text-[10px] tracking-[0.22em] text-[#525252] font-semibold">Ready to grow?</motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-heading font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(44px,8vw,110px)]"
          >
            LET'S BUILD<br />
            <span className="font-serif italic font-light tracking-normal text-[#d4d2d2] text-[clamp(34px,6vw,84px)]">something great.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>Start A Project</GhostBtn>
            <Link to="/csr-forge"
              className="group inline-flex items-center gap-2 uppercase text-[11px] tracking-[0.12em] text-[#d4d2d2] hover:text-white transition-colors font-bold underline underline-offset-8 decoration-[#393939]">
              View Full Agency <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-10 border-t border-[#171617] bg-[#080808]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <Link to="/csr-forge" className="hover:opacity-70 transition-opacity">
            <img src="/CSR-forge/Monochrome white.png" alt="CSR Forge" className="h-7 w-auto object-contain" />
          </Link>
          <p className="text-[12px] text-[#393939] uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} CSR Forge · All rights reserved
          </p>
          <a href={`mailto:${CSR_FORGE.email}`} className="text-[12px] text-[#525252] uppercase tracking-[0.08em] hover:text-white transition-colors">
            {CSR_FORGE.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
