import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Target, Zap, TrendingUp, Users, Globe, BarChart3, Rocket } from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UBX Agency - Modern Advertising Powerhouse | Engineering Attention for Brands',
  description: 'UBX Agency is a modern advertising powerhouse helping brands scale through our own media network and trusted partners. We don\'t just run ads — we engineer attention, delivering reach, relevance, and real results.',
  openGraph: {
    title: 'UBX Agency - Modern Advertising Powerhouse',
    description: 'Engineering attention for brands through our proprietary media network of 200+ premium websites. We deliver reach, relevance, and real results.',
    images: ['/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://ubxagency.com',
  },
}

export default function UBXAgencyLanding() {
  return (
    <>
      {/* Structured Data for WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "UBX Agency",
            "alternateName": "UBX",
            "url": "https://ubxagency.com",
            "description": "Modern advertising powerhouse engineering attention for brands",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://ubxagency.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": "UBX Agency"
            }
          })
        }}
      />
      
      {/* Structured Data for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "UBX Agency",
            "description": "Modern advertising powerhouse helping brands scale through our own media network and trusted partners",
            "url": "https://ubxagency.com",
            "telephone": "+1-XXX-XXX-XXXX",
            "priceRange": "$$$$",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            },
            "serviceType": "Digital Advertising Agency",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "UBX Agency Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Media Network Advertising",
                    "description": "Access to our proprietary network of 200+ premium websites"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Creative Strategy",
                    "description": "Data-driven creative strategies that capture attention"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Performance Analytics",
                    "description": "Real-time analytics and optimization for measurable results"
                  }
                }
              ]
            }
          })
        }}
      />
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800" role="banner">
        <Link href="/" className="flex items-center justify-center" aria-label="UBX Agency Home">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            UBX Agency
          </h1>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6" role="navigation" aria-label="Main navigation">
          <Link href="/services" className="text-sm font-medium hover:text-purple-400 transition-colors" aria-label="Our Services">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-purple-400 transition-colors" aria-label="About UBX Agency">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-purple-400 transition-colors" aria-label="Contact Us">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-400 border border-purple-500/20">
                  Modern Advertising Powerhouse
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Engineering Attention for{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Modern Brands
                  </span>
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
                  UBX Agency is a modern advertising powerhouse helping brands scale through our own media network and trusted
                  partners. We don't just run ads — we engineer attention, delivering reach, relevance, and real results.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  asChild
                >
                  <Link href="/contact" aria-label="Contact UBX Agency to start your advertising campaign">
                    Start Your Campaign
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                  asChild
                >
                  <Link href="/services" aria-label="View UBX Agency advertising services">Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-pink-500/10 px-3 py-1 text-sm text-pink-400 border border-pink-500/20">
                    Our Approach
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Engineering Attention, Delivering Results
                  </h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We combine cutting-edge technology with creative strategy to deliver reach, relevance, and real
                    results. Our proprietary media network and trusted partnerships ensure your brand gets the attention
                    it deserves.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 sm:w-full relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Animated beam lines */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
                    <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse delay-300"></div>
                    <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse delay-700"></div>

                    {/* Connection nodes */}
                    <div className="absolute top-1/2 left-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-200"></div>
                    <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-500"></div>
                    <div className="absolute top-1/2 right-4 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-700"></div>

                    {/* Center hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>

                    {/* Floating particles */}
                    <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-purple-300 rounded-full animate-bounce"></div>
                    <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-pink-300 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-400 border border-purple-500/20">
                  Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Disruptive Solutions</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From strategy to execution, we provide end-to-end advertising solutions that break through the noise.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Target className="h-12 w-12 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Media Network</h3>
                  <p className="text-center text-gray-300">
                    Access our proprietary media network for maximum reach and targeted engagement across all channels.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Zap className="h-12 w-12 text-pink-400" />
                  <h3 className="text-xl font-bold text-white">Creative Strategy</h3>
                  <p className="text-center text-gray-300">
                    Data-driven creative strategies that capture attention and drive meaningful brand connections.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <TrendingUp className="h-12 w-12 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Performance Analytics</h3>
                  <p className="text-center text-gray-300">
                    Real-time analytics and optimization to ensure every campaign delivers measurable results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Digital Network */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-500/10 px-3 py-1 text-sm text-pink-400 border border-pink-500/20">
                  Proprietary Network
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Digital Network Reach</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our exclusive network of 200 premium websites and blog platforms delivers unmatched reach and
                  engagement for your brand.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-2">
                <Globe className="h-8 w-8 text-purple-400" />
                <div className="text-4xl font-bold text-white">200</div>
                <p className="text-sm text-gray-300">Website Network</p>
                <p className="text-xs text-gray-400">Blog platforms & websites</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Users className="h-8 w-8 text-pink-400" />
                <div className="text-4xl font-bold text-white">2,00,000</div>
                <p className="text-sm text-gray-300">Daily Visitors</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <BarChart3 className="h-8 w-8 text-purple-400" />
                <div className="text-4xl font-bold text-white">60,00,000</div>
                <p className="text-sm text-gray-300">Monthly Visitors</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <TrendingUp className="h-8 w-8 text-pink-400" />
                <div className="text-4xl font-bold text-white">864M</div>
                <p className="text-sm text-gray-300">Yearly Visitors</p>
              </div>
            </div>

            {/* Network Features */}
            <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Target className="h-8 w-8 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Premium Placements</h3>
                  <p className="text-center text-gray-300 text-sm">
                    Strategic ad placements across high-traffic websites and influential blog platforms.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Zap className="h-8 w-8 text-pink-400" />
                  <h3 className="text-lg font-bold text-white">Targeted Audiences</h3>
                  <p className="text-center text-gray-300 text-sm">
                    Reach specific demographics and interests through our curated network of niche websites.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Rocket className="h-8 w-8 text-purple-400" />
                  <h3 className="text-lg font-bold text-white">Exclusive Access</h3>
                  <p className="text-center text-gray-300 text-sm">
                    Proprietary network unavailable through traditional ad platforms for maximum competitive advantage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section
          id="results"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-900/20 to-pink-900/20"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Delivery Strength</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our extensive delivery network ensures your campaigns reach every corner with precision and scale.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-2">
                <Users className="h-8 w-8 text-purple-400" />
                <div className="text-4xl font-bold text-white">200</div>
                <p className="text-sm text-gray-300">Amazon Delivery Boys</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Globe className="h-8 w-8 text-pink-400" />
                <div className="text-4xl font-bold text-white">10,000</div>
                <p className="text-sm text-gray-300">Daily Delivery</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <BarChart3 className="h-8 w-8 text-purple-400" />
                <div className="text-4xl font-bold text-white">3,00,000</div>
                <p className="text-sm text-gray-300">Monthly Delivery</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Rocket className="h-8 w-8 text-pink-400" />
                <div className="text-4xl font-bold text-white">36,00,000</div>
                <p className="text-sm text-gray-300">Yearly Delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Disrupt Your Industry?</h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the brands that are already scaling with UBX Agency. Let's engineer attention for your business.
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                asChild
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                asChild
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} UBX Agency. Built to Disrupt.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/terms" className="text-xs hover:text-purple-400 transition-colors">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-xs hover:text-purple-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="text-xs hover:text-purple-400 transition-colors">
            Cookie Policy
          </Link>
        </nav>
      </footer>
    </div>
    </>
  )
}
