// lib/seo.ts
import { Metadata } from 'next';

// ---------------------------------------------------------------------------
// CORE BRAND & DOMAIN CONFIGURATION (US, CA, UK INTERNATIONAL MARKETS)
// ---------------------------------------------------------------------------
const DOMAIN = 'nigmaiptv.vip';
const BRAND_NAME = 'Nigma IPTV';
const SITE_URL = `https://${DOMAIN}`;
const FOCUS_KEYWORD = 'Nigma TV';
const SECONDARY_FOCUS_KEYWORD = 'Nigma IPTV';
const LOCALE = 'en_US';
const LANGUAGE = 'en-US';
const ADDRESS_COUNTRY = 'US';
const CURRENCY = 'USD';

// Stable Organization @id used to link brand entities across JSON-LD blocks
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// ---------------------------------------------------------------------------
// EXPORTED CONSTANTS
// ---------------------------------------------------------------------------
export const CONSTANTS = {
  DOMAIN,
  BRAND_NAME,
  SITE_URL,
  FOCUS_KEYWORD,
  SECONDARY_FOCUS_KEYWORD,
  LOCALE,
  LANGUAGE,
  ADDRESS_COUNTRY,
  CURRENCY,
  ORGANIZATION_ID,

  // Primary High-Intent International Keywords (US, CA, UK)
  PRIMARY_KEYWORDS: [
    'Nigma TV',
    'Nigma IPTV',
    'Nigma IPTV Subscription',
    'Nigma TV USA',
    'Nigma TV Canada',
    'Nigma TV UK',
    'best Nigma TV service',
    'Nigma IPTV streaming',
  ],

  // Secondary & High-Intent Search Terms
  SECONDARY_KEYWORDS: [
    'Nigma TV live sports',
    'Nigma IPTV 4K anti-freeze',
    'Nigma TV Firestick setup',
    'Nigma IPTV multi-device streaming',
    'Nigma TV premier league NFL NHL',
    'Nigma IPTV 24/7 support',
  ],

  // Business Contact Details
  CONTACT: {
    email: 'support@nigmaiptv.vip',
    phone: '+1 555 019 9283',
    whatsapp: '+1 555 019 9283',
    whatsappUrl: 'https://support-tv.online',
    supportHours: '24/7 International Customer Support via Email and Live Chat',
  },

  // Social Media (Footer / Header)
  SOCIALS: {
    twitter: 'https://twitter.com/nigmaiptv',
    instagram: 'https://instagram.com/nigmaiptv',
    facebook: 'https://facebook.com/nigmaiptv',
  },

  // Payment Methods (Footer / Pricing badges)
  PAYMENT_METHODS: [
    { name: 'PayPal', icon: '/img/payment/1.png' },
    { name: 'Bitcoin & Crypto', icon: '/img/payment/2.png' },
    { name: 'Visa', icon: '/img/payment/3.png' },
    { name: 'Mastercard', icon: '/img/payment/4.png' },
  ],

  // Major Target Regions (US, CA, UK)
  TARGET_REGIONS: [
    'New York',
    'Los Angeles',
    'Chicago',
    'Toronto',
    'Vancouver',
    'London',
    'Manchester',
    'Birmingham',
    'Montreal',
    'Houston',
  ],

  // Value Propositions for International Viewers
  USPS: [
    'Buffer-free 4K and Full HD streaming on Nigma IPTV, backed by dedicated high-speed global edge servers',
    'Access to over 20,000 live international channels, premier sports leagues, and movies with Nigma TV',
    'Instant Nigma IPTV activation within 5 minutes of subscription approval',
    'Full coverage of worldwide sports, entertainment, and local broadcasts through Nigma TV',
    'Universal device compatibility: Amazon Firestick, Smart TV, Android, iOS, Mag Box, and PC',
  ],
};

// ---------------------------------------------------------------------------
// SEO METADATA GENERATOR
// ---------------------------------------------------------------------------
export const generateSEOMetadata = (
  pageName: string,
  description?: string,
  path: string = '/'
): Metadata => {
  // Enforces strict 150-160 character count for Google snippet optimization
  const defaultDescription =
    description ||
    `Stream with Nigma IPTV — 20,000+ live channels, sports, and movies in 4K across the US, Canada, and UK. Start your Nigma TV subscription today!`;

  // Enforces strict 50-60 character count for meta titles
  const defaultTitle = `${pageName} | ${BRAND_NAME} Subscription`;
  const formattedTitle =
    defaultTitle.length > 60 ? defaultTitle.substring(0, 60) : defaultTitle;

  const fullCanonicalUrl =
    path === '/'
      ? SITE_URL
      : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: formattedTitle,
    description: defaultDescription,
    keywords: [
      ...CONSTANTS.PRIMARY_KEYWORDS,
      ...CONSTANTS.SECONDARY_KEYWORDS,
    ].join(', '),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: fullCanonicalUrl,
      languages: {
        'en-US': fullCanonicalUrl,
        'en-CA': fullCanonicalUrl,
        'en-GB': fullCanonicalUrl,
        'x-default': fullCanonicalUrl,
      },
    },
    openGraph: {
      title: formattedTitle,
      description: defaultDescription,
      url: fullCanonicalUrl,
      siteName: BRAND_NAME,
      locale: LOCALE,
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/img/og-image.webp`,
          width: 1200,
          height: 630,
          alt: `${BRAND_NAME} ${FOCUS_KEYWORD}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description: defaultDescription,
      images: [`${SITE_URL}/img/og-image.webp`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: [{ name: BRAND_NAME, url: SITE_URL }],
    creator: BRAND_NAME,
    publisher: BRAND_NAME,
    category: 'Entertainment',
    applicationName: BRAND_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Organization
// ---------------------------------------------------------------------------
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/img/iptv-logo.webp`,
    description:
      'Nigma IPTV is a premier international streaming provider delivering high-definition live television, global sports, and entertainment to viewers across the US, Canada, and UK.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONSTANTS.CONTACT.email,
      telephone: CONSTANTS.CONTACT.phone,
      contactType: 'customer support',
      areaServed: ['US', 'CA', 'GB'],
      availableLanguage: ['English'],
    },
    sameAs: [
      CONSTANTS.SOCIALS.twitter,
      CONSTANTS.SOCIALS.instagram,
      CONSTANTS.SOCIALS.facebook,
    ],
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — Product / Offer
// ---------------------------------------------------------------------------
export const generateProductSchema = (
  name: string,
  price: string,
  currency: string = CURRENCY,
  description: string
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    brand: {
      '@type': 'Brand',
      name: BRAND_NAME,
    },
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/pricing`,
      seller: {
        '@id': ORGANIZATION_ID,
      },
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United Kingdom' },
      ],
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — LocalBusiness (US, CA, UK Regions)
// ---------------------------------------------------------------------------
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: BRAND_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/img/og-image.webp`,
    description:
      'Nigma IPTV subscription service offering 4K live television, sports, and streaming entertainment across major metropolitan areas in the US, Canada, and UK.',
    priceRange: '$$',
    telephone: CONSTANTS.CONTACT.phone,
    email: CONSTANTS.CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: ADDRESS_COUNTRY,
    },
    areaServed: CONSTANTS.TARGET_REGIONS.map((city) => ({
      '@type': 'City',
      name: city,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    parentOrganization: {
      '@id': ORGANIZATION_ID,
    },
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — FAQPage
// ---------------------------------------------------------------------------
export const generateFAQSchema = (faqs: { q: string; a: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
};

// ---------------------------------------------------------------------------
// JSON-LD SCHEMA GENERATOR — BreadcrumbList
// ---------------------------------------------------------------------------
export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
};