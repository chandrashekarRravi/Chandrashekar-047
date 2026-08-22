import React, { useEffect, useState } from 'react';
import { CSR_FORGE } from '../config/csrforge';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from 'framer-motion';

// ─── Variants ────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// ─── Word Reveal ──────────────────────────────────────────────────────────────

function WordReveal({ text, className = '' }: { text: string; className?: string }) {
  const rm = useReducedMotion();
  return (
    <span className={`inline-block ${className}`}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
          <motion.span
            className="inline-block"
            variants={rm
              ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
              : { hidden: { y: '110%', opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } } }
            }
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// ─── Ghost CTA Button ─────────────────────────────────────────────────────────

function GhostBtn({
  href, children, isExternal = false, dark = false,
}: {
  href: string; children: React.ReactNode; isExternal?: boolean; dark?: boolean;
}) {
  const base =
    'group inline-flex items-center gap-2 uppercase text-[11px] tracking-[0.12em] border rounded-[6px] px-5 py-3 font-bold transition-all duration-300';
  const light = 'border-[#d4d2d2] text-[#fcfcfc] hover:bg-[#fcfcfc] hover:text-[#080808]';
  const darkStyle = 'border-[#393939] text-[#080808] hover:bg-[#080808] hover:text-[#fcfcfc]';
  const cls = `${base} ${dark ? darkStyle : light}`;

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

// ─── Services Data ────────────────────────────────────────────────────────────

const SERVICES = [
  { n: '01', t: 'WEBSITE DEVELOPMENT' },
  { n: '02', t: 'SEO' },
  { n: '03', t: 'LOCAL SEO' },
  { n: '04', t: 'GOOGLE BUSINESS PROFILE' },
  { n: '05', t: 'GOOGLE ADS' },
  { n: '06', t: 'SOCIAL MEDIA' },
  { n: '07', t: 'DIGITAL MARKETING' },
  { n: '08', t: 'BRANDING & CREATIVE' },
];

// ─── Work Data ────────────────────────────────────────────────────────────────

const WORK = [
  { img: '/CSR-forge/Dark background.png', cat: 'WEBSITE DEVELOPMENT', title: 'Travel Website' },
  { img: '/CSR-forge/LIght background.png', cat: 'WEBSITE DEVELOPMENT', title: 'Restaurant Website' },
  { img: '/CSR-forge/Primary.png', cat: 'BRANDING DESIGN', title: 'Branding Design' },
  { img: '/CSR-forge/CSR-Forge-Wallpaper-1920x1200.png', cat: 'SEO', title: 'SEO Growth' },
];

// ─── FAQ Data ─────────────────────────────────────────────────────────────────

const FAQS = [
  { q: 'What services does CSR Forge provide?', a: 'Website development, SEO, local SEO, Google Business Profile optimization, Google Ads, social media marketing, and branding.' },
  { q: 'Does CSR Forge build business websites?', a: 'Yes — modern, responsive business websites, landing pages, e-commerce sites, and custom web applications.' },
  { q: 'Does CSR Forge provide SEO services?', a: 'Yes. Technical, on-page, and local SEO designed to improve search visibility and discoverability.' },
  { q: 'Can CSR Forge help with Google Business Profile?', a: 'Yes. We optimize and manage Google Business Profiles to help businesses build stronger local presence.' },
  { q: 'Does CSR Forge manage Google Ads?', a: 'Yes. Targeted paid search campaigns designed to connect businesses with high-intent customers.' },
  { q: 'Does CSR Forge provide social media marketing?', a: 'Yes — content strategy, creative production and social media management.' },
  { q: 'Do you work with businesses remotely?', a: 'Yes. We work with clients across India and globally through remote collaboration.' },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CsrForge() {
  const rm = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '40%']);
  const heroOp = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SEO + Schema
  useEffect(() => {
    document.title = 'CSR Forge | Digital Marketing, SEO & Web Development';
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'CSR Forge provides website development, SEO, local SEO, digital marketing, Google Ads, social media marketing and branding solutions for businesses.';
    document.head.appendChild(meta);

    const canon = document.createElement('link');
    canon.rel = 'canonical';
    canon.href = 'https://chandrashekar.vercel.app/csr-forge';
    document.head.appendChild(canon);

    const og = [
      { prop: 'og:title', content: 'CSR Forge | Digital Marketing, SEO & Web Development' },
      { prop: 'og:description', content: 'Digital marketing, SEO, web development and branding for businesses.' },
      { prop: 'og:url', content: 'https://chandrashekar.vercel.app/csr-forge' },
      { prop: 'og:type', content: 'website' },
      { prop: 'og:image', content: 'https://chandrashekar.vercel.app/CSR-forge/CSR-Forge-Wallpaper-1920x1200.png' },
    ];
    const ogEls: HTMLMetaElement[] = [];
    og.forEach(({ prop, content }) => {
      const el = document.createElement('meta');
      el.setAttribute('property', prop);
      el.content = content;
      document.head.appendChild(el);
      ogEls.push(el);
    });

    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          name: CSR_FORGE.businessName,
          description: 'Digital marketing, SEO, web development and branding for businesses.',
          url: CSR_FORGE.website,
          telephone: CSR_FORGE.phone,
          email: CSR_FORGE.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: CSR_FORGE.address,
            addressLocality: CSR_FORGE.city,
            addressRegion: CSR_FORGE.state,
            postalCode: CSR_FORGE.postalCode,
            addressCountry: CSR_FORGE.country,
          },
          sameAs: [CSR_FORGE.gbpUrl, CSR_FORGE.socials.linkedin],
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQS.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    });
    document.head.appendChild(ld);

    return () => {
      document.head.removeChild(meta);
      document.head.removeChild(canon);
      ogEls.forEach(el => document.head.removeChild(el));
      document.head.removeChild(ld);
    };
  }, []);

  return (
    <div className="bg-[#080808] text-[#fcfcfc] min-h-screen font-sans overflow-x-hidden selection:bg-[#ff4400] selection:text-white">

      {/* ── Navigation ─────────────────────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center bg-[#080808]/90 backdrop-blur-sm border-b border-[#171617]"
      >
        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition-opacity flex items-center" aria-label="CSR Forge Home">
          <img src="/CSR-forge/Monochrome white.png" alt="CSR Forge logo" className="h-8 md:h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 uppercase text-[11px] tracking-[0.1em] font-semibold text-[#d4d2d2]">
          {['#services', '#work', '#about', '#reviews', '#contact'].map((href, i) => (
            <li key={i}>
              <a href={href} className="hover:text-white transition-colors">
                {href.replace('#', '')}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>Start A Project</GhostBtn>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#fcfcfc] p-1"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-start justify-center px-8 gap-8 md:hidden"
          >
            {['services', 'work', 'about', 'reviews', 'contact'].map((s, i) => (
              <a
                key={i}
                href={`#${s}`}
                onClick={() => setMobileOpen(false)}
                className="uppercase text-[28px] font-bold tracking-wide hover:text-[#d4d2d2] transition-colors"
              >
                {s}
              </a>
            ))}
            <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>Start A Project</GhostBtn>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <motion.section
        style={rm ? {} : { y: heroY, opacity: heroOp }}
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-24 overflow-hidden z-10"
      >
        {/* Bg wallpaper */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* <img
            src="/CSR-forge/CSR-Forge-Wallpaper-1920x1200.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-[0.12]"
            loading="eager"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]" />
        </div>

        {/* Decorative circle */}
        <div className="absolute top-[15%] right-[-8vw] w-[50vw] h-[50vw] rounded-full border border-[#262525] opacity-40 pointer-events-none z-0" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="uppercase text-[11px] tracking-[0.22em] text-[#525252] mb-10 font-semibold"
          >
            CSR Forge
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-heading font-black uppercase leading-[0.88] tracking-[-0.04em]"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <span className="block text-[clamp(52px,11vw,160px)]">
              <WordReveal text="WE BUILD" />
            </span>
            <span className="block text-[clamp(52px,11vw,160px)]">
              <WordReveal text="BRANDS." />
            </span>
            {/* Editorial serif italic line */}
            <span className="block font-serif italic font-light tracking-normal text-[clamp(32px,6vw,90px)] text-[#d4d2d2] my-1 md:my-2">
              <motion.span variants={fadeUp} className="inline-block">we grow</motion.span>
            </span>
            <span className="block text-[clamp(52px,11vw,160px)]">
              <WordReveal text="BUSINESSES." />
              {/* Accent dot */}
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
                className="inline-block align-middle w-[clamp(12px,1.2vw,22px)] h-[clamp(12px,1.2vw,22px)] bg-[#ff4400] rounded-full ml-3 mb-2"
              />
            </span>
          </motion.h1>

          {/* Sub-line + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-14 md:mt-20 flex flex-col md:flex-row gap-8 md:gap-20 items-start"
          >
            <p className="text-[15px] md:text-[17px] leading-[1.65] text-[#d4d2d2] max-w-sm">
              CSR Forge helps businesses build stronger digital presences through web development, SEO, digital marketing, branding and creative solutions.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>Start A Project</GhostBtn>
              <a href="#services" className="group inline-flex items-center gap-2 uppercase text-[11px] tracking-[0.12em] text-[#d4d2d2] hover:text-white transition-colors underline underline-offset-8 decoration-[#393939]">
                Explore Services <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>

          {/* DIGITAL · CREATIVE · TECHNOLOGY */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-16 uppercase text-[10px] tracking-[0.22em] text-[#525252] font-semibold"
          >
            Digital · Creative · Technology
          </motion.p>
        </div>
      </motion.section>

      {/* ── 2. BUSINESS INTRO ──────────────────────────────────────────────── */}
      <section id="about" className="bg-[#f3efef] text-[#080808] px-6 md:px-12 py-24 md:py-32 relative z-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start"
        >
          {/* Left: large headline */}
          <motion.div variants={slideLeft} className="md:w-1/2">
            <h2 className="font-heading font-black uppercase leading-[0.92] tracking-[-0.04em] text-[clamp(44px,7vw,100px)]">
              BUILT<br />FOR{' '}
              <span className="font-serif italic font-light tracking-normal text-[#525252] text-[clamp(36px,5.5vw,80px)]">
                growth.
              </span>
            </h2>
          </motion.div>
          {/* Right: paragraph */}
          <motion.div variants={fadeUp} className="md:w-1/2 flex flex-col gap-6 justify-center">
            <p className="text-[16px] md:text-[19px] leading-[1.65] text-[#393939]">
              We combine strategy, technology and creativity to build digital experiences around real business goals.
            </p>
            <p className="text-[15px] leading-[1.65] text-[#525252]">
              From websites and SEO to digital marketing, Google Ads, social media and branding — CSR Forge is focused on helping businesses establish, improve, and grow their online presence.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 3. SERVICES ────────────────────────────────────────────────────── */}
      <section id="services" className="px-6 md:px-12 py-24 md:py-36 border-t border-[#171617] bg-[#080808] relative z-20">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Sticky left: WHAT WE BUILD */}
          <div className="lg:w-[40%] lg:sticky lg:top-28">
            <motion.h2
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="font-heading font-black uppercase leading-[0.88] tracking-[-0.05em] text-[clamp(48px,7vw,100px)]"
            >
              WHAT<br />WE<br />
              <span className="text-[#ff4400]">BUILD.</span>
            </motion.h2>
          </div>

          {/* Right: services grid */}
          <div className="lg:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="border-b border-[#171617] border-r-0 sm:even:border-l sm:even:border-[#171617] py-8 px-4 sm:px-8 flex items-start gap-4 group"
                >
                  <span className="font-serif italic text-[#525252] text-[16px] mt-[3px] shrink-0">{s.n}</span>
                  <span className="uppercase text-[14px] md:text-[15px] font-bold tracking-[0.04em] leading-snug group-hover:text-[#d4d2d2] transition-colors">
                    {s.t}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED SERVICE ────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-[#171617] bg-[#080808] relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="border border-[#ff4400] bg-[#171617] rounded-[6px] p-10 md:p-20 overflow-hidden relative"
          >
            {/* Faint bg shape */}
            <div className="absolute right-[-5%] top-[-20%] w-[50%] h-[140%] rounded-full border border-[#393939] opacity-20 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              {/* Left: headline */}
              <div className="lg:w-1/2">
                <p className="uppercase text-[10px] tracking-[0.2em] text-[#ff4400] font-semibold mb-6">Featured</p>
                <motion.h2
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="font-heading font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(40px,6vw,86px)]"
                >
                  BE FOUND<br />WHERE<br />PEOPLE<br />SEARCH.
                </motion.h2>
              </div>

              {/* Right: body + CTA */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:w-1/2 flex flex-col gap-6 justify-center">
                <p className="text-[15px] md:text-[17px] leading-[1.65] text-[#d4d2d2]">
                  We help businesses strengthen their local digital presence through website optimization, local SEO and Google Business Profile optimization.
                </p>
                <p className="text-[14px] text-[#b5b2b2] leading-[1.6]">
                  Improve visibility. Build relevance. Help customers discover your business.
                </p>
                <div className="mt-2">
                  <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>View Our Google Business Profile</GhostBtn>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. SELECTED WORK ───────────────────────────────────────────────── */}
      <section id="work" className="px-6 md:px-12 py-24 md:py-32 border-t border-[#171617] bg-[#080808] relative z-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Section title */}
          <motion.h2
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="font-heading font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(44px,8vw,110px)] mb-14 md:mb-20"
          >
            SELECTED<br />WORK
          </motion.h2>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {WORK.map((w, i) => (
              <motion.div
                key={i}
                initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
                whileInView={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, delay: i * 0.1, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-[4px] cursor-pointer"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-[#171617]">
                  <img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="uppercase text-[10px] tracking-[0.14em] text-[#ff4400] mb-1 font-semibold">{w.cat}</p>
                  <h3 className="font-bold text-[14px] uppercase tracking-wide">{w.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. PROCESS ─────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-28 border-t border-[#171617] bg-[#f3efef] text-[#080808] relative z-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

            {/* Left: stacked heading */}
            <motion.h2
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="shrink-0 font-heading font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(36px,4.5vw,72px)] lg:w-[220px]"
            >
              FROM<br />
              <span className="font-serif italic font-light tracking-normal text-[#b5b2b2] text-[clamp(30px,3.8vw,58px)]">Idea</span><br />
              TO<br />IMPACT.
            </motion.h2>

            {/* Right: horizontal timeline */}
            <div className="flex-1 w-full overflow-x-auto pb-2">

              {/* Numbers + dots + dashed connectors */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="flex items-end min-w-[480px] mb-4"
              >
                {['01', '02', '03', '04', '05'].map((n, i, arr) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center shrink-0">
                      <motion.span
                        variants={{
                          hidden: { opacity: 0, y: 16 },
                          visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.13 } },
                        }}
                        className="font-heading font-black text-[clamp(24px,3.5vw,52px)] tracking-[-0.03em] leading-none mb-3 text-[#080808]"
                      >
                        {n}
                      </motion.span>
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: { opacity: 1, scale: 1, transition: { duration: 0.35, delay: i * 0.13 + 0.18 } },
                        }}
                        className="w-[10px] h-[10px] rounded-full bg-[#ff4400] relative z-10"
                      />
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex-1 relative mx-1" style={{ bottom: '4px' }}>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.5, delay: i * 0.13 + 0.28, ease: 'easeOut' }}
                          style={{ transformOrigin: 'left' }}
                          className="w-full border-t-[2px] border-dashed border-[#ff4400] opacity-50"
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </motion.div>

              {/* Labels row */}
              <div className="flex min-w-[480px]">
                {[
                  { t: 'DISCOVER', d: 'Understand the business.' },
                  { t: 'STRATEGIZE', d: 'Define the right direction.' },
                  { t: 'BUILD', d: 'Design and develop.' },
                  { t: 'LAUNCH', d: 'Test, optimize and launch.' },
                  { t: 'GROW', d: 'Improve visibility and performance.' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.45, delay: i * 0.11 + 0.35 }}
                    className="flex-1 pr-3 last:pr-0"
                  >
                    <h3 className="text-[clamp(10px,1.1vw,13px)] font-black uppercase tracking-[0.07em] mb-1 text-[#080808]">{s.t}</h3>
                    <p className="text-[clamp(9px,0.95vw,12px)] text-[#525252] leading-[1.55]">{s.d}</p>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 7. REVIEWS ─────────────────────────────────────────────────────── */}
      <section id="reviews" className="px-6 md:px-12 py-24 md:py-32 border-t border-[#171617] bg-[#080808] relative z-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Heading */}
          <motion.h2
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="font-heading font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(44px,8vw,110px)] mb-14 md:mb-20"
          >
            WHAT<br />CLIENTS<br />
            <span className="font-serif italic font-light tracking-normal text-[#d4d2d2] text-[clamp(36px,6vw,86px)]">Say.</span>
          </motion.h2>

          {/* Review card placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="bg-[#171617] border border-[#393939] rounded-[6px] p-10 md:p-16 flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Stars + quote */}
            <div className="md:flex-1">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#ff4400] text-[18px]">★</span>
                ))}
              </div>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#d4d2d2] italic mb-8">
                "CSR Forge helped us build a stunning website and improve our online visibility. The results were beyond our expectations."
              </p>
              <p className="text-[13px] uppercase tracking-[0.1em] text-[#525252] font-semibold">— Client Name, Hosapete</p>
            </div>
            {/* CTA */}
            <div className="flex flex-col gap-3">
              <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>View All Reviews</GhostBtn>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-[#171617] bg-[#080808] relative z-20">
        <div className="max-w-[1000px] mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="font-heading font-black uppercase text-[clamp(32px,4vw,56px)] tracking-[-0.03em] mb-14"
          >
            Frequently Asked
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-[#262525]">
                  <AccordionTrigger className="text-[15px] md:text-[17px] text-left hover:text-[#d4d2d2] hover:no-underline py-6">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#d4d2d2] text-[14px] md:text-[15px] leading-[1.7] pb-6">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ────────────────────────────────────────────────────── */}
      <section id="contact" className="px-6 md:px-12 py-32 md:py-48 border-t border-[#171617] bg-[#080808] relative z-20 overflow-hidden flex items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-12"
        >
          {/* Left: headline */}
          <motion.h2
            variants={slideLeft}
            className="font-heading font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(44px,7.5vw,56px)]"
          >
            LET'S<br />
            BUILD<br />
            SOMETHING{' '}
            <span className="font-serif italic font-light tracking-normal text-[#d4d2d2] text-[clamp(36px,6.5vw,56px)] ml-1 md:ml-3">better.</span>
            <span className="inline-block w-[clamp(10px,1.5vw,18px)] h-[clamp(10px,1.5vw,18px)] bg-[#ff4400] rounded-full ml-1 md:ml-4 align-baseline relative top-[-4px]"></span>
          </motion.h2>

          {/* Right: sub + CTA */}
          <motion.div variants={fadeUp} className="md:w-1/3 flex flex-col gap-6 justify-center md:pl-10">
            <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#d4d2d2]">
              Have a business idea, website project or digital growth challenge? Let's talk.
            </p>
            <div className="mt-2">
              <a href={CSR_FORGE.gbpUrl} target="_blank" rel="noopener noreferrer" className="group uppercase text-[11px] md:text-[12px] tracking-[0.14em] font-bold text-white flex items-center gap-2">
                START A PROJECT <ArrowUpRight className="w-4 h-4 text-[#ff4400] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SCROLL TO TOP BUTTON ───────────────────────────────────────────── */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-4 bg-[#b87332] text-white rounded-full shadow-xl hover:bg-[#ff4400] transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUpRight className="w-6 h-6 -rotate-45" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-[#171617] text-[#fcfcfc] px-6 md:px-12 py-20 border-t border-[#393939] relative z-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="max-w-[1400px] mx-auto"
        >
          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between gap-12 pb-16 border-b border-[#393939]">
            {/* Brand */}
            <motion.div variants={fadeUp} className="md:w-1/3">
              <img src="/CSR-forge/Monochrome white.png" alt="CSR Forge" className="h-10 md:h-12 w-auto object-contain mb-6" loading="lazy" />
              <p className="text-[#d4d2d2] text-[13px] leading-[1.7] max-w-xs mb-4">
                {CSR_FORGE.tagline}
              </p>
              <p className="uppercase text-[10px] tracking-[0.2em] text-[#525252] font-semibold">Digital · Creative · Technology</p>
            </motion.div>

            {/* Nav links */}
            <motion.div variants={fadeUp}>
              <h4 className="uppercase text-[10px] tracking-[0.2em] text-[#525252] mb-6 font-semibold">Services</h4>
              <ul className="space-y-3 text-[13px] text-[#d4d2d2]">
                {['Website Development', 'SEO & Local SEO', 'Google Business Profile', 'Google Ads', 'Social Media', 'Branding & Creative'].map((s, i) => (
                  <li key={i} className="hover:text-white transition-colors cursor-pointer">{s}</li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp}>
              <h4 className="uppercase text-[10px] tracking-[0.2em] text-[#525252] mb-6 font-semibold">Contact</h4>
              <ul className="space-y-3 text-[13px]">
                <li><a href={`tel:${CSR_FORGE.phone}`} className="hover:text-white transition-colors text-[#d4d2d2]">+91 {CSR_FORGE.phone}</a></li>
                <li><a href={`mailto:${CSR_FORGE.email}`} className="hover:text-white transition-colors text-[#d4d2d2]">{CSR_FORGE.email}</a></li>
                <li className="text-[#d4d2d2]">{CSR_FORGE.address}<br />{CSR_FORGE.city}, {CSR_FORGE.state} {CSR_FORGE.postalCode}</li>
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div variants={fadeUp}>
              <h4 className="uppercase text-[10px] tracking-[0.2em] text-[#525252] mb-6 font-semibold">Connect</h4>
              <ul className="space-y-3 text-[13px]">
                <li>
                  <a href={CSR_FORGE.gbpUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-[#d4d2d2]">
                    Google Business <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href={CSR_FORGE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 text-[#d4d2d2]">
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom row */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-[#525252]">
              © {new Date().getFullYear()} CSR Forge. All rights reserved.
            </p>
            <Link to="/" className="text-[12px] text-[#525252] hover:text-white transition-colors">
              Back to Portfolio ↗
            </Link>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

