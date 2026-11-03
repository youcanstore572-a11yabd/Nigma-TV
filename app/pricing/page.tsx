// app/pricing/page.tsx
// ✅ Server Component — no "use client". Static content server-rendered.
// Client interactivity isolated to <PricingSection />, <FAQItem />, <ShareButtons />.

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PricingSection from '../components/PricingSection';
import ShareButtons from '../components/ShareButtons';
import FAQItem from './FAQItem';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';
import { CONSTANTS } from '@/lib/seo';
import {
  ShieldCheck,
  Zap,
  CreditCard,
  Award,
  Globe,
  Server,
  Trophy,
  Tv,
  Film,
  MonitorPlay,
  Wifi,
  Calendar,
  Lock,
  ThumbsUp,
  Sparkles,
  Headphones,
} from 'lucide-react';

const BRAND = CONSTANTS.BRAND_NAME;

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: `Streaming Plans & Pricing — 4K Subscriptions | ${BRAND}`,
  description:
    'Compare IPTV Subscription plans: 36,000+ live channels, 120,000+ movies and shows in 4K. USD pricing, no lock-in contract, trial, chat setup.',
  openGraph: {
    title: `Streaming Plans & Pricing | ${BRAND}`,
    description:
      'Pick a 3, 6 or 12 month IPTV Subscription plan. Instant activation, edge servers, 4K streaming on every device.',
    type: 'website',
  },
};

// ---------------------------------------------------------------------------
// SVG Flag Badges — US, CA, UK, AU (Clean, correct colors, no tint overlay)
// ---------------------------------------------------------------------------
const FlagUS = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-sm shrink-0 border border-black/10"
    viewBox="0 0 32 32"
    role="img"
    aria-label="United States"
  >
    <clipPath id="p-fl-us">
      <rect width="32" height="32" rx="0" />
    </clipPath>
    <g clipPath="url(#p-fl-us)">
      <rect width="32" height="32" fill="#B22234" />
      {[2.46, 7.38, 12.3, 17.22, 22.14, 27.06].map((y, i) => (
        <rect key={i} y={y} width="32" height="2.46" fill="#FFFFFF" />
      ))}
      <rect width="12.8" height="14.77" fill="#3C3B6E" />
    </g>
  </svg>
);

const FlagCA = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-sm shrink-0 border border-black/10"
    viewBox="0 0 32 32"
    role="img"
    aria-label="Canada"
  >
    <clipPath id="p-fl-ca">
      <rect width="32" height="32" rx="0" />
    </clipPath>
    <g clipPath="url(#p-fl-ca)">
      <rect width="32" height="32" fill="#FFFFFF" />
      <rect width="8" height="32" fill="#FF0000" />
      <rect x="24" width="8" height="32" fill="#FF0000" />
      <path
        fill="#FF0000"
        d="M16 7l1.2 2.4 2.6-.6-.9 2.5 2.3 1.3-2.1 1.5.8 2.5-2.5-.7L16 18l-1.4-2.1-2.5.7.8-2.5-2.1-1.5 2.3-1.3-.9-2.5 2.6.6L16 7z"
      />
    </g>
  </svg>
);

const FlagUK = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-sm shrink-0 border border-black/10"
    viewBox="0 0 32 32"
    role="img"
    aria-label="United Kingdom"
  >
    <clipPath id="p-fl-uk">
      <rect width="32" height="32" rx="0" />
    </clipPath>
    <g clipPath="url(#p-fl-uk)">
      <rect width="32" height="32" fill="#012169" />
      <path stroke="#FFFFFF" strokeWidth="6" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#C8102E" strokeWidth="3" d="M0 0l32 32M32 0L0 32" />
      <path stroke="#FFFFFF" strokeWidth="10" d="M16 0v32M0 16h32" />
      <path stroke="#C8102E" strokeWidth="6" d="M16 0v32M0 16h32" />
    </g>
  </svg>
);

const FlagAU = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 rounded-none shadow-sm shrink-0 border border-black/10"
    viewBox="0 0 32 32"
    role="img"
    aria-label="Australia"
  >
    <clipPath id="p-fl-au">
      <rect width="32" height="32" rx="0" />
    </clipPath>
    <g clipPath="url(#p-fl-au)">
      <rect width="32" height="32" fill="#012169" />
      <path stroke="#FFFFFF" strokeWidth="4" d="M0 0l16 16M16 0L0 16" />
      <path stroke="#C8102E" strokeWidth="2" d="M0 0l16 16M16 0L0 16" />
      <path stroke="#FFFFFF" strokeWidth="6" d="M8 0v16M0 8h16" />
      <path stroke="#C8102E" strokeWidth="3" d="M8 0v16M0 8h16" />
      <path
        fill="#FFFFFF"
        d="M8 19.2l.65 1.95h2.05l-1.65 1.2.63 1.95L8 23.1l-1.68 1.2.63-1.95-1.65-1.2h2.05z"
      />
      <path
        fill="#FFFFFF"
        d="M24 4.6l.5 1.5h1.55l-1.25.9.48 1.5L24 7.6l-1.28.9.48-1.5-1.25-.9h1.55z"
      />
      <path
        fill="#FFFFFF"
        d="M24 24l.5 1.5h1.55l-1.25.9.48 1.5L24 27l-1.28.9.48-1.5-1.25-.9h1.55z"
      />
      <path
        fill="#FFFFFF"
        d="M28 14l.5 1.5h1.55l-1.25.9.48 1.5L28 17l-1.28.9.48-1.5-1.25-.9h1.55z"
      />
      <path
        fill="#FFFFFF"
        d="M20 14l.5 1.5h1.55l-1.25.9.48 1.5L20 17l-1.28.9.48-1.5-1.25-.9h1.55z"
      />
      <path
        fill="#FFFFFF"
        d="M23.2 18.6l.3.9h.95l-.77.56.3.9-.78-.55-.78.55.3-.9-.77-.56h.95z"
      />
    </g>
  </svg>
);

// ---------------------------------------------------------------------------
// Static data — module-scope, computed once at build time
// ---------------------------------------------------------------------------
const HERO_GRID_STYLE = {
  backgroundImage: `
    linear-gradient(to right, #0B2347 1px, transparent 1px),
    linear-gradient(to bottom, #0B2347 1px, transparent 1px)
  `,
  backgroundSize: '50px 50px',
} as const;

const FEATURES = [
  { icon: Tv, title: '36,000+ Live Channels', desc: `Sport, entertainment, and international broadcasters from over 50 countries on ${BRAND}.` },
  { icon: Film, title: '120,000+ Movies & TV Shows', desc: `The latest movies, complete series, and documentaries updated daily on the ${BRAND} VOD library.` },
  { icon: MonitorPlay, title: '4K & 60FPS Quality', desc: `Crystal clear streaming on compatible channels and devices without buffering through ${BRAND}.` },
  { icon: Wifi, title: 'Anti Freeze Technology', desc: 'Buffer free viewing thanks to advanced stream optimisation and dedicated global load balancers.' },
  { icon: Calendar, title: 'Full EPG TV Guide', desc: '7 day interactive electronic program guide covering all regional and international channels.' },
  { icon: Trophy, title: 'PPV Events Included', desc: 'All major UFC, boxing, football, and Main Event Pay Per View matches at no extra cost on your subscription.' },
  { icon: Globe, title: 'Global Coverage', desc: 'Dedicated edge servers in major data centers for minimal latency on live sports broadcasts.' },
  { icon: Server, title: '99.9% Server Uptime', desc: 'Enterprise infrastructure with redundant backup servers for guaranteed streaming stability.' },
] as const;

const COMPARISON_ROWS = [
  { feature: 'Live Channels', basic: '36,000+', pro: '36,000+ VIP', premium: '36,000+' },
  { feature: 'Movies & TV Shows', basic: '120,000+', pro: '120,000+ (Daily Updates)', premium: '120,000+' },
  { feature: '4K & 60FPS Streaming', basic: 'Yes', pro: 'Yes (Ultra Bitrate)', premium: 'Yes' },
  { feature: 'Live Sport & PPV', basic: 'Included', pro: 'All PPV + VIP Feeds', premium: 'Included' },
  { feature: 'EPG & Catch Up', basic: 'Standard EPG', pro: '7 Day Catch Up + EPG', premium: 'Full EGP' },
  { feature: 'Anti Freeze Technology', basic: 'Standard', pro: 'VIP Priority Routing', premium: 'Advanced' },
  { feature: 'VPN Compatible', basic: 'Yes (Not Required)', pro: '100% Compatible', premium: 'Yes' },
  { feature: 'Number of Screens', basic: '1 or 2 Screens', pro: '1, 2, or 3 Screens', premium: '1 or 2 Screens' },
  { feature: 'Customer Support', basic: 'Chat Support', pro: '24/7 VIP Priority', premium: 'Priority Support' },
] as const;

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    body: 'Encrypted transactions via Credit Card, PayPal, and Crypto with 256 bit SSL protection.',
  },
  {
    icon: Zap,
    title: 'Chat Guided Setup',
    body: 'Our team walks you through the whole install on chat, step by step until you are watching.',
  },
  {
    icon: CreditCard,
    title: 'Trial First',
    body: 'Test the service on your own device and internet before you pay a cent. No lock in, no pressure.',
  },
  {
    icon: Headphones,
    title: '24/7 Chat Support',
    body: 'Real people on hand around the clock to help with setup, streaming, or anything else you need.',
  },
] as const;

const PAGE_FAQS = [
  {
    question: `Which payment methods does ${BRAND} accept?`,
    answer: `${BRAND} accepts all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrencies (Bitcoin, Ethereum, USDT). All prices are in US dollars and every payment is processed via encrypted 256 bit SSL connections.`,
  },
  {
    question: 'Can I upgrade or modify my subscription later?',
    answer:
      'Yes, you can upgrade at any time to add more screens or switch to a longer period. Just message our chat help desk and we will adjust your account straight away.',
  },
  {
    question: 'Am I tied to a contract or automatic renewal?',
    answer:
      'No, absolutely not. There are no long term contracts and no automatic renewals. Every plan is a prepaid one time payment that stops on its own when the period ends.',
  },
  {
    question: 'What happens when my subscription expires?',
    answer:
      'We will send you a reminder before your subscription ends. You can renew easily through chat. If you decide not to renew, the service stops automatically with no further obligation.',
  },
  {
    question: 'Do you offer a trial before I commit?',
    answer:
      'Yes. Message us on chat and we will set you up with a trial so you can test the 4K picture quality and channel lineup on your own device and internet connection. Upgrade to a paid plan only when you are happy.',
  },
  {
    question: 'Can I use the service on multiple devices at the same time?',
    answer:
      'Yes, depending on your chosen plan. You can pick 1, 2, or 3 simultaneous screens during checkout to watch in multiple rooms at once. Everyone in the household can watch what they want.',
  },
  {
    question: 'Are there discounts for longer subscriptions?',
    answer:
      'Yes. The 12 month plans offer the highest savings, up to 50% off compared to the shorter terms. That is the best value option for a household that knows they will stick with it.',
  },
  {
    question: 'Do I need a VPN to use your streaming service?',
    answer:
      'No VPN is required. Our servers are optimised to deliver smooth, buffer free streaming on your home connection.',
  },
] as const;

// ---------------------------------------------------------------------------
// MAIN PRICING PAGE
// ---------------------------------------------------------------------------
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0B2347] via-[#040D1C] to-black text-[#FDFDFD]">
        <div className="absolute inset-0 z-0 opacity-10" style={HERO_GRID_STYLE} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2AD1A1]/20 blur-[150px] rounded-none pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center">
          <FadeInStagger className="flex flex-col items-center justify-center text-center">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-black/60 px-4 py-2 rounded-none mb-6 shadow-md border border-[#FFD700]/40">
                <Sparkles className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
                <span className="text-[#FDFDFD] font-black text-xs uppercase tracking-widest">
                  Best Value Streaming Plans 2026
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-5xl md:text-7xl font-black text-[#FDFDFD] tracking-tighter uppercase mb-6 leading-none text-center drop-shadow-md">
                STREAMING PLANS &amp; <br />
                <span className="text-[#FFD700]">BEST PRICING</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-lg md:text-xl text-[#FDFDFD]/90 font-bold max-w-2xl mx-auto leading-relaxed px-2 text-center mb-6">
                Stream 36,000+ live channels and 120,000+ movies and TV shows in 4K on any device. Try it first, get set up on chat, and pay in USD with no lock in contract.
              </p>
            </FadeInItem>

            <FadeInItem>
              <div className="w-full flex items-center justify-center mb-8">
                <div className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-3 px-5 py-2.5 rounded-none bg-[#FDFDFD] border border-[#0B2347]/20 shadow-xl">
                  <div className="flex items-center gap-2"><FlagUS /><span className="text-xs font-black uppercase text-[#0B2347]">USA</span></div>
                  <span className="text-[#0B2347]/30 text-xs font-black">•</span>
                  <div className="flex items-center gap-2"><FlagCA /><span className="text-xs font-black uppercase text-[#0B2347]">Canada</span></div>
                  <span className="text-[#0B2347]/30 text-xs font-black">•</span>
                  <div className="flex items-center gap-2"><FlagUK /><span className="text-xs font-black uppercase text-[#0B2347]">UK</span></div>
                  <span className="text-[#0B2347]/30 text-xs font-black">•</span>
                  <div className="flex items-center gap-2"><FlagAU /><span className="text-xs font-black uppercase text-[#0B2347]">Australia</span></div>
                </div>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-wrap justify-center gap-6 text-[#FDFDFD]/80 text-xs md:text-sm font-black uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#FFD700]" aria-hidden="true" /> No Lock In Contract
                </span>
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#FFD700]" aria-hidden="true" /> Chat Guided Setup
                </span>
                <span className="flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-[#FFD700]" aria-hidden="true" /> Trial First
                </span>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* PRICING CARDS — PricingSection owns the #pricing-section anchor */}
      <div className="w-full relative z-20 bg-[#FDFDFD] py-12">
        <PricingSection />
      </div>

      {/* FEATURES GRID */}
      <section className="py-24 bg-[#0B2347]/5 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0B2347] mb-4 uppercase tracking-tighter leading-none">
              Everything Included In <span className="text-[#2AD1A1]">Every Plan</span>
            </h2>
            <p className="text-[#0B2347]/80 text-lg font-bold max-w-2xl mx-auto mt-4">
              All {BRAND} plans come with these premium features as standard.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-[#FDFDFD] border-2 border-[#0B2347]/15 rounded-none p-6 hover:border-[#2AD1A1] shadow-sm transition-all group"
                >
                  <div className="w-12 h-12 rounded-none bg-[#2AD1A1]/10 flex items-center justify-center mb-4 group-hover:bg-[#2AD1A1]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#2AD1A1]" aria-hidden="true" />
                  </div>
                  <h3 className="font-black text-[#0B2347] uppercase tracking-wide text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#0B2347]/80 text-sm font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 bg-gradient-to-b from-[#0B2347] to-[#040D1C] border-y border-white/10 w-full text-[#FDFDFD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#FDFDFD] mb-4 uppercase tracking-tighter drop-shadow-md">
              Compare <span className="text-[#FFD700]">{BRAND} Plans</span>
            </h2>
            <p className="text-[#FDFDFD]/80 text-base font-bold uppercase tracking-widest mt-2">
              Find the perfect streaming plan for your entertainment needs
            </p>
          </FadeIn>

          <div className="overflow-x-auto bg-[#0B2347] text-white border-2 border-[#2AD1A1]/30 rounded-none p-4 md:p-6 shadow-2xl">
            <table className="w-full border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b-2 border-white/10 bg-[#040D1C]">
                  <th className="text-left p-4 text-white font-black uppercase tracking-wider text-base md:text-lg">
                    Specification
                  </th>
                  <th className="text-center p-4 text-white font-black uppercase tracking-wider text-base md:text-lg">
                    3 Months
                  </th>
                  <th className="text-center p-4 text-black font-black uppercase tracking-wider text-base md:text-lg bg-[#FFD700] rounded-none shadow-sm">
                    12 Months (VIP)
                  </th>
                  <th className="text-center p-4 text-white font-black uppercase tracking-wider text-base md:text-lg">
                    6 Months
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 text-white font-black uppercase text-sm">{row.feature}</td>
                    <td className="p-4 text-center text-white/80 font-bold text-sm">{row.basic}</td>
                    <td className="p-4 text-center text-[#2AD1A1] font-black text-sm bg-black/20">{row.pro}</td>
                    <td className="p-4 text-center text-white/80 font-bold text-sm">{row.premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-24 bg-[#FDFDFD] w-full relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0B2347] mb-4 uppercase tracking-tighter">
              Why Choose <span className="text-[#2AD1A1]">{BRAND}</span>
            </h2>
            <p className="text-[#0B2347]/80 text-lg font-bold max-w-2xl mx-auto mt-4">
              Trusted by thousands of happy viewers right across the globe.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_BADGES.map((badge, i) => {
              const BadgeIcon = badge.icon;
              return (
                <FadeInItem
                  key={i}
                  className="flex flex-col items-center text-center p-6 bg-[#0B2347]/5 border-2 border-[#0B2347]/15 rounded-none shadow-sm hover:border-[#2AD1A1] hover:-translate-y-1 transition-all"
                >
                  <div className="w-16 h-16 rounded-none bg-[#2AD1A1]/10 flex items-center justify-center mb-4">
                    <BadgeIcon className="w-8 h-8 text-[#2AD1A1]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-black text-[#0B2347] mb-2 uppercase tracking-wide">
                    {badge.title}
                  </h3>
                  <p className="text-[#0B2347]/80 text-sm font-medium">{badge.body}</p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* TRIAL BANNER */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#FDFDFD] w-full">
        <div className="bg-[#0B2347]/5 border-2 border-[#0B2347]/15 rounded-none p-8 md:p-10 text-center shadow-md">
          <div className="inline-flex items-center gap-2 bg-[#2AD1A1] text-[#0B2347] px-4 py-2 rounded-none mb-4 shadow-sm">
            <Award className="w-4 h-4 text-[#0B2347]" aria-hidden="true" />
            <span className="text-[#0B2347] font-black text-xs uppercase tracking-widest">
              Try Before You Pay
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-[#0B2347] uppercase tracking-tight mb-3">
            Trial First
          </h2>
          <p className="text-[#0B2347]/80 max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed">
            Message us on chat and we will set you up with a trial. Test the 4K picture, check the sport lineup, and make sure everything runs smooth on your device and internet connection. Upgrade to a paid plan only when you are happy.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#0B2347]/5 py-24 relative overflow-hidden border-t border-[#0B2347]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0B2347] mb-6 uppercase tracking-tighter">
              Frequently Asked <span className="text-[#2AD1A1]">Questions</span>
            </h2>
            <p className="text-[#0B2347]/80 font-bold text-lg">
              Everything you need to know about our streaming service, pricing, and setup.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-4 relative z-10">
            {PAGE_FAQS.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* SHARE BUTTONS */}
      <div className="w-full flex justify-center items-center py-12 bg-[#FDFDFD]">
        <ShareButtons />
      </div>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-[#0B2347] border-t-4 border-[#FFD700] w-full relative overflow-hidden text-[#FDFDFD] shadow-2xl">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2AD1A1]/10 blur-[140px] rounded-none pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-[#FDFDFD] mb-4 uppercase tracking-tight drop-shadow-md">
              Ready To Start Streaming?
            </h2>
            <p className="text-[#FDFDFD]/90 font-bold text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of happy viewers globally. Pick your plan, message us on chat, and test everything on a trial first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
              <Link
                href="#pricing-section"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-none bg-[#FFD700] text-black font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 shadow-md border border-[#FFD700]"
              >
                Choose Your Plan
              </Link>
              <Link
                href="/setup"
                className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-none bg-black text-[#FFD700] font-black uppercase tracking-widest text-sm transition-transform hover:scale-105 border border-[#FFD700]/50"
              >
                Setup Guide
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-[#FDFDFD]/80 text-xs font-black uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#FFD700]" aria-hidden="true" /> Chat Guided Setup
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#FFD700]" aria-hidden="true" /> Secure Checkout
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-[#FFD700]" aria-hidden="true" /> Card, PayPal &amp; Crypto
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}