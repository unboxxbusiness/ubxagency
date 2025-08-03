import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://ubxagency.com'),
  title: {
    default: 'UBX Agency - Modern Advertising Powerhouse | Engineering Attention for Brands',
    template: '%s | UBX Agency - Engineering Attention'
  },
  description: 'UBX Agency is a modern advertising powerhouse helping brands scale through our own media network and trusted partners. We don\'t just run ads — we engineer attention, delivering reach, relevance, and real results.',
  keywords: [
    'digital advertising agency',
    'brand scaling',
    'media network',
    'advertising powerhouse',
    'brand attention engineering',
    'digital marketing',
    'performance advertising',
    'brand growth',
    'advertising solutions',
    'media planning',
    'creative strategy',
    'advertising network'
  ],
  authors: [{ name: 'UBX Agency' }],
  creator: 'UBX Agency',
  publisher: 'UBX Agency',
  category: 'Digital Marketing',
  classification: 'Business',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ubxagency.com',
    title: 'UBX Agency - Modern Advertising Powerhouse | Engineering Attention for Brands',
    description: 'UBX Agency is a modern advertising powerhouse helping brands scale through our own media network and trusted partners. We don\'t just run ads — we engineer attention.',
    siteName: 'UBX Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UBX Agency - Engineering Attention for Brands',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UBX Agency - Modern Advertising Powerhouse',
    description: 'Engineering attention for brands through our proprietary media network. We deliver reach, relevance, and real results.',
    site: '@ubxagency',
    creator: '@ubxagency',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://ubxagency.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "UBX Agency",
              "description": "UBX Agency is a modern advertising powerhouse helping brands scale through our own media network and trusted partners. We don't just run ads — we engineer attention.",
              "url": "https://ubxagency.com",
              "logo": "https://ubxagency.com/logo.png",
              "foundingDate": "2020",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://twitter.com/ubxagency",
                "https://linkedin.com/company/ubxagency",
                "https://facebook.com/ubxagency"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Digital Advertising",
                  "description": "Comprehensive digital advertising solutions through our proprietary media network"
                },
                {
                  "@type": "Service", 
                  "name": "Brand Strategy",
                  "description": "Strategic brand positioning and creative strategy development"
                },
                {
                  "@type": "Service",
                  "name": "Media Network",
                  "description": "Access to our exclusive network of 200+ premium websites and platforms"
                }
              ]
            })
          }}
        />
        
        {/* Additional SEO Tags */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
