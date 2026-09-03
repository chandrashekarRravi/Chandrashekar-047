import React, { useEffect, useState } from 'react';
import { CSR_FORGE } from '../config/csrforge';
import { ArrowUpRight, Menu, X, Home, LayoutGrid, Phone, Folder, MapPin, Mail, Star } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence, type Variants } from 'framer-motion';
import { useGoogleReviews } from '@/hooks/useGoogleReviews';

// ─── Variants ────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const slideLeft: Variants = {
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

// ─── Services Data ────────────────────────────────────────────────────────────

const SERVICES = [
  { n: '01', t: 'WEBSITE DEVELOPMENT',      href: '/csr-forge/services#website-development' },
  { n: '02', t: 'SEO',                       href: '/csr-forge/services#seo' },
  { n: '03', t: 'LOCAL SEO',                 href: '/csr-forge/services#local-seo' },
  { n: '04', t: 'GOOGLE BUSINESS PROFILE',   href: '/csr-forge/services#google-business-profile' },
  { n: '05', t: 'GOOGLE ADS',                href: '/csr-forge/services#google-ads' },
  { n: '06', t: 'SOCIAL MEDIA',              href: '/csr-forge/services#social-media' },
  { n: '07', t: 'DIGITAL MARKETING',         href: '/csr-forge/services#digital-marketing' },
  { n: '08', t: 'BRANDING & CREATIVE',       href: '/csr-forge/services#branding-creative' },
];

// ─── Work Data ────────────────────────────────────────────────────────────────

const WORK = [

  { img: '/clients/krishik-preview.png', cat: 'E-COMMERCE', title: 'KRISHIK AGRI BUSINESS HUB', blurb: 'Full-stack e-commerce platform built for university agri marketplace', href: 'https://krishik-agri-business-hub.onrender.com/products' },
  { img: '/clients/redcoastal-preview.png', cat: 'WEBSITE DEVELOPMENT ,SEO & ADS', title: 'RED COASTAL TAXI MANGALORE', blurb: 'Site rebuild + technical SEO audit and fixes', href: 'https://redcoastaltravels.com/' },
  { img: '/clients/roopatours-preview.png', cat: 'SEO & ADS', title: 'ROOPA TOURS & TRAVELS', blurb: 'Brand refresh + SEO audit for Mangalore travel agency', href: 'https://www.roopatoursandtravels.com/' },
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

// ─── Reviews Section ──────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-[#ff4400] fill-[#ff4400]' : 'text-[#393939]'}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: { authorName: string; authorPhoto: string | null; authorUri: string | null; rating: number; text: string; relativePublishTimeDescription: string }; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="bg-[#111111] border border-[#262525] rounded-[8px] p-8 flex flex-col gap-4 hover:border-[#ff4400]/30 transition-colors duration-300"
    >
      <StarRating rating={review.rating} />
      <p className="text-[15px] md:text-[16px] leading-[1.75] text-[#d4d2d2] italic flex-1">
        "{review.text}"
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-[#262525]">
        {review.authorPhoto ? (
          <img
            src={review.authorPhoto}
            alt={review.authorName}
            className="w-9 h-9 rounded-full object-cover border border-[#393939]"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-[#ff4400]/20 flex items-center justify-center text-[#ff4400] font-bold text-sm border border-[#ff4400]/20">
            {review.authorName.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="text-[13px] font-semibold text-white">{review.authorName}</p>
          {review.relativePublishTimeDescription && (
            <p className="text-[11px] text-[#525252] uppercase tracking-widest">{review.relativePublishTimeDescription}</p>
          )}
        </div>
        {/* Google G badge */}
        <div className="ml-auto">
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google review">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function ReviewSkeleton() {
  return (
    <div className="bg-[#111111] border border-[#262525] rounded-[8px] p-8 flex flex-col gap-4 animate-pulse">
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 rounded-sm bg-[#262525]" />)}
      </div>
      <div className="space-y-2 flex-1">
        <div className="h-3 bg-[#262525] rounded w-full" />
        <div className="h-3 bg-[#262525] rounded w-5/6" />
        <div className="h-3 bg-[#262525] rounded w-4/6" />
      </div>
      <div className="flex items-center gap-3 pt-2 border-t border-[#262525]">
        <div className="w-9 h-9 rounded-full bg-[#262525]" />
        <div className="space-y-1">
          <div className="h-3 w-24 bg-[#262525] rounded" />
          <div className="h-2 w-16 bg-[#1a1a1a] rounded" />
        </div>
      </div>
    </div>
  );
}

function ReviewsSection() {
  const { data, loading, error } = useGoogleReviews();

  return (
    <section id="reviews" className="px-6 md:px-12 py-24 md:py-32 border-t border-[#171617] bg-[#080808] relative z-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <motion.h2
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="font-heading font-black uppercase leading-[0.9] tracking-[-0.04em] text-[clamp(44px,8vw,110px)]"
          >
            WHAT<br />CLIENTS<br />
            <span className="font-serif italic font-light tracking-normal text-[#d4d2d2] text-[clamp(36px,6vw,86px)]">Say.</span>
          </motion.h2>

          {/* Overall rating badge */}
          {data && data.rating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-start md:items-end gap-1 shrink-0"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-[clamp(48px,6vw,80px)] font-black leading-none">{data.rating.toFixed(1)}</span>
                <span className="text-[#525252] text-sm font-semibold uppercase tracking-widest">/ 5</span>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className={`w-5 h-5 ${star <= Math.round(data.rating!) ? 'text-[#ff4400] fill-[#ff4400]' : 'text-[#393939]'}`} />
                ))}
              </div>
              <p className="text-[#525252] text-[12px] uppercase tracking-widest mt-1">
                {data.userRatingCount} Google {data.userRatingCount === 1 ? 'review' : 'reviews'}
              </p>
            </motion.div>
          )}
        </div>

        {/* Review cards */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => <ReviewSkeleton key={i} />)}
          </div>
        )}

        {error && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#111111] border border-[#262525] rounded-[8px] p-10 text-center"
          >
            <p className="text-[#525252] text-[15px] mb-6">Could not load reviews right now.</p>
            <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>View All Google Reviews</GhostBtn>
          </motion.div>
        )}

        {data && !loading && (
          <>
            {data.reviews.length === 0 ? (
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[#525252] text-[15px]"
              >
                No reviews yet. Be the first!
              </motion.p>
            ) : (
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {data.reviews.map((review, i) => (
                  <ReviewCard key={i} review={review} index={i} />
                ))}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex justify-center"
            >
              <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>View All Google Reviews</GhostBtn>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

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
          <li><Link to="/csr-forge/services" className="hover:text-white transition-colors">services</Link></li>
          {['#work', '#about', '#reviews', '#contact'].map((href, i) => (
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
            {/* Services — route link */}
            <Link
              to="/csr-forge/services"
              onClick={() => setMobileOpen(false)}
              className="uppercase text-[28px] font-bold tracking-wide hover:text-[#d4d2d2] transition-colors"
            >
              Services
            </Link>

            {/* Hash anchor links — close menu first, then scroll */}
            {(['work', 'about', 'reviews', 'contact'] as const).map((s, i) => (
              <button
                key={i}
                onClick={() => {
                  setMobileOpen(false);
                  setTimeout(() => {
                    const el = document.getElementById(s);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 320);
                }}
                className="uppercase text-[28px] font-bold tracking-wide hover:text-[#d4d2d2] transition-colors text-left"
              >
                {s}
              </button>
            ))}

            {/* Social icons row */}
            <div className="flex items-center gap-5 pt-2">
              {/* Instagram */}
              <a
                href={CSR_FORGE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CSR Forge on Instagram"
                className="text-[#d4d2d2] hover:text-[#ff4400] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href={CSR_FORGE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CSR Forge on LinkedIn"
                className="text-[#d4d2d2] hover:text-[#ff4400] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Google Business */}
              <a
                href={CSR_FORGE.gbpUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CSR Forge on Google Business"
                className="text-[#d4d2d2] hover:text-[#ff4400] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>

            <GhostBtn href={CSR_FORGE.gbpUrl} isExternal>Start A Project</GhostBtn>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <motion.section
        style={rm ? {} : { y: heroY, opacity: heroOp }}
        className="relative min-h-screen flex items-center overflow-hidden z-10"
      >
        {/* ── Background: red-orange radial glow behind photo ── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#080808]" />
          {/* Warm radial glow */}
          <div className="absolute right-0 top-0 w-[65%] h-full bg-[radial-gradient(ellipse_60%_80%_at_70%_40%,rgba(180,50,10,0.38)_0%,rgba(120,30,5,0.18)_50%,transparent_80%)]" />
          {/* SVG abstract wave lines — 3D animated */}
          <motion.svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={rm ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          >
            {[...Array(14)].map((_, i) => {
              // Perspective: lines further back (higher i) are dimmer + thinner
              const depthFactor = i / 13; // 0 = front, 1 = far back
              const opacity = 0.28 - depthFactor * 0.16;      // 0.28 → 0.12
              const strokeW = 1.4 - depthFactor * 0.8;         // 1.4 → 0.6
              const speed = 6 + i * 0.9;                        // near lines move faster
              const amplitude = 14 - depthFactor * 9;           // near lines shift more
              const delay = i * 0.35;
              return (
                <motion.path
                  key={i}
                  d={`M${-100 + i * 30},900 C${300 + i * 20},${600 - i * 15} ${900 - i * 25},${300 + i * 18} ${1600 + i * 20},${-50 + i * 10}`}
                  stroke="#ff4400"
                  strokeWidth={strokeW}
                  strokeOpacity={opacity}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={rm ? { opacity } : {
                    pathLength: 1,
                    opacity,
                    y: [0, -amplitude, 0, amplitude * 0.6, 0],
                  }}
                  transition={{
                    pathLength: { duration: 1.4, delay, ease: 'easeOut' },
                    opacity:    { duration: 0.8, delay },
                    y: {
                      duration: speed,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: delay * 0.5,
                    },
                  }}
                />
              );
            })}
          </motion.svg>
          {/* Fade to black at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
        </div>

        {/* ── Far-left: vertical social icons ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="absolute left-5 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-center gap-5"
        >
          {/* Instagram */}
          <a href={CSR_FORGE.socials.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-[#525252] hover:text-[#ff4400] transition-colors"
            aria-label="LinkedIn">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          {/* GitHub */}
          <a href={CSR_FORGE.socials.github} target="_blank" rel="noopener noreferrer"
            className="text-[#525252] hover:text-[#ff4400] transition-colors"
            aria-label="GitHub">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          {/* Vertical line */}
          <div className="w-px h-16 bg-[#262525] mt-2" />
        </motion.div>

        {/* ── Main layout: left content + right photo ── */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:pl-20 md:pr-0 pt-28 pb-24 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0 items-center min-h-screen">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-center gap-0 md:pr-8">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="uppercase text-[11px] tracking-[0.22em] text-[#525252] mb-8 font-semibold"
            >
              CSR Forge · Digital Agency
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="font-heading font-black uppercase leading-[0.88] tracking-[-0.04em]"
            >
              <span className="block text-[clamp(44px,8vw,120px)]">
                <WordReveal text="DIGITAL" />
              </span>
              <span className="block text-[clamp(44px,8vw,120px)]">
                <WordReveal text="GROWTH" />
              </span>
              <span className="block font-serif italic font-light tracking-normal text-[clamp(28px,5vw,72px)] text-[#d4d2d2] my-1">
                <motion.span variants={fadeUp} className="inline-block">for real</motion.span>
              </span>
              <span className="block text-[clamp(44px,8vw,120px)]">
                <WordReveal text="BUSINESSES" />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
                  className="inline-block align-middle w-[clamp(10px,1vw,18px)] h-[clamp(10px,1vw,18px)] bg-[#ff4400] rounded-full ml-2 mb-1"
                />
              </span>
            </motion.h1>

            {/* MOBILE PHOTO + STATS (hidden on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="md:hidden mt-8 w-full bg-[#171617] border border-[#262525] rounded-[8px] overflow-hidden relative aspect-[4/5] flex flex-col justify-start p-4"
            >
              {/* Stats pills — top right */}
              <div className="absolute top-4 right-4 flex flex-col gap-3 z-20">
                <div className="bg-[#080808]/80 backdrop-blur-sm border border-[#262525] rounded-[6px] px-4 py-3 text-right">
                  <p className="font-heading font-black text-[24px] tracking-[-0.03em] leading-none">0.9</p>
                  <p className="text-[10px] text-[#525252] uppercase tracking-[0.1em] mt-1">Years Experience</p>
                </div>
                <div className="bg-[#080808]/80 backdrop-blur-sm border border-[#262525] rounded-[6px] px-4 py-3 text-right">
                  <p className="font-heading font-black text-[24px] tracking-[-0.03em] leading-none">20+</p>
                  <p className="text-[10px] text-[#525252] uppercase tracking-[0.1em] mt-1">Happy Clients</p>
                </div>
              </div>

              {/* Photo */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,rgba(255,68,0,0.15)_0%,transparent_70%)] z-10 pointer-events-none" />
              <img
                src="/chandrar.png"
                alt="Chandrashekar — CSR Forge"
                className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
                loading="eager"
                draggable="false"
              />
              {/* fade to bg at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#171617] to-transparent z-20 pointer-events-none" />
            </motion.div>

            {/* Mobile Scroll Indicator (Orange dot) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="md:hidden mt-8 w-2 h-2 rounded-full bg-[#ff4400] shadow-[0_0_8px_rgba(255,68,0,0.6)]"
            />

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-6 md:mt-10 flex flex-col md:flex-row flex-wrap gap-5 md:gap-4 items-center md:items-start w-full"
            >
              <GhostBtn href={CSR_FORGE.gbpUrl} isExternal className="w-full md:w-auto">Start A Project</GhostBtn>
              <a href="#services"
                className="group inline-flex items-center gap-2 uppercase text-[11px] md:text-[11px] tracking-[0.12em] text-[#ff4400] md:text-[#d4d2d2] hover:text-white transition-colors md:underline underline-offset-8 decoration-[#393939] font-bold">
                Explore Services <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.3, duration: 0.8, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
              className="hidden md:block mt-10 mb-8 w-full max-w-md h-px bg-[#262525]"
            />

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="hidden md:block text-[13px] md:text-[14px] leading-[1.7] text-[#b5b2b2] max-w-xs"
            >
              Web development, SEO, Google Ads — everything a business needs to grow online.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.7 }}
              className="hidden md:flex flex-col items-center gap-2 mt-16 self-start"
            >
              <div className="w-px h-6 bg-[#ff4400] opacity-60" />
              <div className="w-px h-10 bg-[#393939]" />
              <ArrowUpRight className="w-4 h-4 text-[#525252] rotate-90" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: stats pill (top) + photo */}
          <div className="hidden md:flex flex-col items-end justify-end self-stretch relative">

            {/* Stat pills — top right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="absolute top-28 right-8 flex flex-col gap-4 z-20"
            >
              <div className="bg-[#171617]/80 backdrop-blur-sm border border-[#262525] rounded-[6px] px-5 py-4 text-right">
                <p className="font-heading font-black text-[28px] tracking-[-0.03em] leading-none">0.9</p>
                <p className="text-[11px] text-[#525252] uppercase tracking-[0.1em] mt-1">Years Experience</p>
              </div>
              <div className="bg-[#171617]/80 backdrop-blur-sm border border-[#262525] rounded-[6px] px-5 py-4 text-right">
                <p className="font-heading font-black text-[28px] tracking-[-0.03em] leading-none">20+</p>
                <p className="text-[11px] text-[#525252] uppercase tracking-[0.1em] mt-1">Happy Clients</p>
              </div>
            </motion.div>

            {/* Portrait photo */}
            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.1, ease: 'easeOut' }}
              className="relative h-[90vh] max-h-[820px] w-[clamp(280px,30vw,460px)] self-end"
            >
              {/* subtle inner glow ring */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_80%,rgba(255,68,0,0.22)_0%,transparent_70%)] z-10 pointer-events-none" />
              <img
                src="/chandrar.png"
                alt="Chandrashekar — CSR Forge"
                className="w-full h-full object-cover object-top"
                loading="eager"
                draggable="false"
              />
              {/* fade to bg at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#080808] to-transparent z-20 pointer-events-none" />
            </motion.div>
          </div>
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
            <div className="w-12 h-1 bg-[#ff4400] mt-6 lg:hidden" />
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
                >
                  <Link
                    to={s.href}
                    className="flex items-center md:items-start justify-between gap-4 group py-5 md:py-8 px-4 sm:px-8 border border-[#171617] md:border-b md:border-t-0 md:border-r-0 md:border-l-0 sm:even:border-l sm:even:border-[#171617] mb-3 md:mb-0 rounded-[6px] md:rounded-none bg-[#0a0a0a] md:bg-transparent hover:bg-[#111111] md:hover:bg-transparent transition-colors cursor-pointer"
                  >
                    <div className="flex items-center md:items-start gap-4">
                      <span className="font-heading md:font-serif md:italic font-black md:font-normal text-[#ff4400] md:text-[#525252] text-[14px] md:text-[16px] md:mt-[3px] shrink-0">{s.n}</span>
                      <span className="uppercase text-[12px] md:text-[15px] font-bold tracking-[0.04em] leading-snug text-[#d4d2d2] group-hover:text-white transition-colors">
                        {s.t}
                      </span>
                    </div>
                    {/* Arrow — always visible on mobile, appears on hover on desktop */}
                    <ArrowUpRight className="w-4 h-4 text-[#525252] group-hover:text-[#ff4400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </Link>
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

          {/* Grid — single column on mobile, 4 cols on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4">
            {WORK.map((w, i) => {
              const isExternal = w.href.startsWith('http');
              const CardWrapper = ({ children }: { children: React.ReactNode }) =>
                isExternal ? (
                  <a href={w.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                    {children}
                  </a>
                ) : (
                  <Link to={w.href} className="block h-full">
                    {children}
                  </Link>
                );
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
                  className="group relative overflow-hidden rounded-[6px] cursor-pointer"
                >
                  <CardWrapper>
                    {/* Mobile: landscape 16/9 — Desktop: portrait 4/5 */}
                    <div className="aspect-[16/9] md:aspect-[4/5] relative overflow-hidden bg-[#171617]">
                      <img
                        src={w.img}
                        alt={w.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/20 to-transparent" />
                    </div>
                    {/* Card text — inside on desktop, below image on mobile */}
                    <div className="md:absolute md:bottom-0 md:left-0 md:right-0 p-4 bg-[#111111] md:bg-transparent">
                      <p className="uppercase text-[10px] tracking-[0.14em] text-[#ff4400] mb-1 font-semibold">{w.cat}</p>
                      <h3 className="font-bold text-[15px] md:text-[14px] uppercase tracking-wide leading-tight">{w.title}</h3>
                      <p className="text-[12px] md:text-[11px] text-[#b5b2b2] mt-1 leading-snug line-clamp-2">{w.blurb}</p>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
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

            {/* Desktop: horizontal timeline */}
            <div className="hidden md:block flex-1 w-full overflow-x-auto pb-2">

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

            {/* Mobile: vertical timeline */}
            <div className="md:hidden flex-1 w-full flex flex-col gap-10 relative pl-4 mt-6">
              {/* Vertical dashed line */}
              <div className="absolute left-[31px] top-6 bottom-8 w-[2px] border-l-[2px] border-dashed border-[#ff4400] opacity-50 z-0" />

              {[
                { n: '01', t: 'DISCOVER', d: 'Understand the business.' },
                { n: '02', t: 'STRATEGIZE', d: 'Define the right direction.' },
                { n: '03', t: 'BUILD', d: 'Design and develop.' },
                { n: '04', t: 'LAUNCH', d: 'Test, optimize and launch.' },
                { n: '05', t: 'GROW', d: 'Improve visibility and performance.' },
              ].map((s, i) => (
                <div key={i} className="relative z-10 flex items-start gap-6">
                  {/* Number pill */}
                  <div className="bg-[#fcfcfc] rounded-full pl-2 pr-4 py-1.5 flex items-center border-l-[3px] border-[#ff4400] shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                    <span className="font-heading font-black text-[20px] tracking-[-0.03em] leading-none text-[#080808]">
                      {s.n}
                    </span>
                  </div>
                  {/* Text */}
                  <div className="flex flex-col pt-1">
                    <h3 className="text-[13px] font-black uppercase tracking-[0.07em] mb-1 text-[#080808]">{s.t}</h3>
                    <p className="text-[12px] text-[#525252] leading-[1.55]">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. REVIEWS ─────────────────────────────────────────────────────── */}
      <ReviewsSection />

      {/* ── 8. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-t border-[#171617] bg-[#080808] relative z-20">
        <div className="max-w-[1000px] mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="font-heading font-black uppercase text-[clamp(36px,4vw,56px)] leading-[0.9] tracking-[-0.03em] mb-8 md:mb-14"
          >
            FREQUENTLY<br className="md:hidden" />
            <span className="text-[#ff4400] md:text-white md:ml-3">ASKED</span>
          </motion.h2>
          <div className="w-12 h-1 bg-[#ff4400] mb-8 lg:hidden" />
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
      <footer className="bg-[#171617] text-[#fcfcfc] px-6 md:px-12 pt-20 pb-28 md:py-20 border-t border-[#393939] relative z-20">
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
              <h4 className="uppercase text-[12px] md:text-[10px] tracking-[0.2em] text-[#ff4400] md:text-[#525252] mb-6 font-bold md:font-semibold">Services</h4>
              <ul className="space-y-3 text-[13px] text-[#d4d2d2]">
                {['Website Development', 'SEO & Local SEO', 'Google Business Profile', 'Google Ads', 'Social Media', 'Branding & Creative'].map((s, i) => (
                  <li key={i} className="hover:text-white transition-colors cursor-pointer">{s}</li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp}>
              <h4 className="uppercase text-[12px] md:text-[10px] tracking-[0.2em] text-[#ff4400] md:text-[#525252] mb-6 font-bold md:font-semibold">Contact</h4>
              <ul className="space-y-4 md:space-y-3 text-[13px]">
                <li><a href={`tel:${CSR_FORGE.phone}`} className="hover:text-white transition-colors text-[#d4d2d2] flex items-center gap-3"><Phone className="w-4 h-4 text-[#ff4400] md:hidden shrink-0" />+91 {CSR_FORGE.phone}</a></li>
                <li><a href={`mailto:${CSR_FORGE.email}`} className="hover:text-white transition-colors text-[#d4d2d2] flex items-center gap-3"><Mail className="w-4 h-4 text-[#ff4400] md:hidden shrink-0" />{CSR_FORGE.email}</a></li>
                <li className="text-[#d4d2d2] flex items-start gap-3"><MapPin className="w-4 h-4 text-[#ff4400] md:hidden mt-0.5 shrink-0" /><div>{CSR_FORGE.address}<br />{CSR_FORGE.city}, {CSR_FORGE.state} {CSR_FORGE.postalCode}</div></li>
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div variants={fadeUp}>
              <h4 className="uppercase text-[12px] md:text-[10px] tracking-[0.2em] text-[#ff4400] md:text-[#525252] mb-6 font-bold md:font-semibold">Connect</h4>
              <ul className="space-y-4 text-[13px]">
                {/* Instagram */}
                <li>
                  <a
                    href={CSR_FORGE.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-3 text-[#d4d2d2] group"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#262525] group-hover:bg-[#ff4400]/20 flex items-center justify-center transition-colors shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    </span>
                    Instagram
                    <ArrowUpRight className="w-3 h-3 ml-auto opacity-50 group-hover:opacity-100 group-hover:text-[#ff4400] transition-all" />
                  </a>
                </li>
                {/* LinkedIn */}
                <li>
                  <a
                    href={CSR_FORGE.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-3 text-[#d4d2d2] group"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#262525] group-hover:bg-[#ff4400]/20 flex items-center justify-center transition-colors shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </span>
                    LinkedIn
                    <ArrowUpRight className="w-3 h-3 ml-auto opacity-50 group-hover:opacity-100 group-hover:text-[#ff4400] transition-all" />
                  </a>
                </li>
                {/* Google Business */}
                <li>
                  <a
                    href={CSR_FORGE.gbpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-3 text-[#d4d2d2] group"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#262525] group-hover:bg-[#ff4400]/20 flex items-center justify-center transition-colors shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </span>
                    Google Business
                    <ArrowUpRight className="w-3 h-3 ml-auto opacity-50 group-hover:opacity-100 group-hover:text-[#ff4400] transition-all" />
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

      {/* ── MOBILE BOTTOM NAVIGATION ──────────────────────────────────────────
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#080808] border-t border-[#171617] z-50 px-6 py-4 pb-safe">
        <div className="flex justify-between items-center max-w-sm mx-auto">
          <a href="#" className="flex flex-col items-center gap-1.5 group text-[#ff4400]">
            <Home className="w-5 h-5" />
            <span className="text-[9px] uppercase tracking-wider font-bold">Home</span>
          </a>
          <a href="#services" className="flex flex-col items-center gap-1.5 group text-[#d4d2d2] hover:text-[#ff4400] transition-colors">
            <LayoutGrid className="w-5 h-5" />
            <span className="text-[9px] uppercase tracking-wider font-bold">Services</span>
          </a>
          <a href="#contact" className="flex flex-col items-center gap-1.5 group text-[#d4d2d2] hover:text-[#ff4400] transition-colors">
            <Phone className="w-5 h-5" />
            <span className="text-[9px] uppercase tracking-wider font-bold">Contact</span>
          </a>
          <a href="#work" className="flex flex-col items-center gap-1.5 group text-[#d4d2d2] hover:text-[#ff4400] transition-colors">
            <Folder className="w-5 h-5" />
            <span className="text-[9px] uppercase tracking-wider font-bold">Portfolio</span>
          </a>
        </div>
      </div> */}
    </div>
  );
}
