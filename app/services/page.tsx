import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Target, Zap, TrendingUp, Globe, Megaphone, Code, Brain } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <Link href="/" className="flex items-center justify-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            UBX
          </div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/services"
            className="text-sm font-medium hover:text-purple-400 transition-colors text-purple-400"
          >
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-400 border border-purple-500/20">
                  Our Services
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Disruptive{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
                  From strategy to execution, we provide end-to-end advertising solutions that break through the noise
                  and deliver real results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-500/10 px-3 py-1 text-sm text-pink-400 border border-pink-500/20">
                  Core Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Do Best</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3 lg:gap-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <Target className="h-12 w-12 text-purple-400 mb-4" />
                  <CardTitle className="text-white">Media Network</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Access our proprietary media network for maximum reach and targeted engagement across all channels.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Premium publisher partnerships</li>
                    <li>• Cross-platform campaign management</li>
                    <li>• Advanced audience targeting</li>
                    <li>• Real-time bid optimization</li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-purple-500/20 text-purple-400 hover:bg-purple-500/10 bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <Zap className="h-12 w-12 text-pink-400 mb-4" />
                  <CardTitle className="text-white">Creative Strategy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Data-driven creative strategies that capture attention and drive meaningful brand connections.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Brand positioning & messaging</li>
                    <li>• Creative concept development</li>
                    <li>• Multi-format content creation</li>
                    <li>• A/B testing & optimization</li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-pink-500/20 text-pink-400 hover:bg-pink-500/10 bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
                  <CardTitle className="text-white">Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Real-time analytics and optimization to ensure every campaign delivers measurable results.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Custom dashboard & reporting</li>
                    <li>• Attribution modeling</li>
                    <li>• Predictive analytics</li>
                    <li>• ROI optimization</li>
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-purple-500/20 text-purple-400 hover:bg-purple-500/10 bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-400 border border-purple-500/20">
                  Specialized Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Advanced Solutions</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cutting-edge services for brands ready to push boundaries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 lg:gap-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Brain className="h-8 w-8 text-pink-400 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">AI-Powered Optimization</h3>
                      <p className="text-gray-300">
                        Machine learning algorithms that continuously optimize campaigns for maximum performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Globe className="h-8 w-8 text-purple-400 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">Global Expansion</h3>
                      <p className="text-gray-300">Strategic market entry and localization for international growth.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Megaphone className="h-8 w-8 text-pink-400 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">Influencer Networks</h3>
                      <p className="text-gray-300">
                        Access to premium influencer partnerships and micro-influencer campaigns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Code className="h-8 w-8 text-purple-400 mt-1" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">Custom Tech Solutions</h3>
                      <p className="text-gray-300">Bespoke advertising technology and integration solutions.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-500/10 px-3 py-1 text-sm text-pink-400 border border-pink-500/20">
                  Our Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How We Work</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A proven methodology that delivers consistent results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Discovery</h3>
                <p className="text-gray-300">Deep dive into your brand, audience, and competitive landscape.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Strategy</h3>
                <p className="text-gray-300">Develop data-driven strategies tailored to your specific goals.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Execute</h3>
                <p className="text-gray-300">Launch campaigns across our network with precision targeting.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold text-white">Optimize</h3>
                <p className="text-gray-300">Continuously refine and improve performance based on real-time data.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Disrupt Your Market?</h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how our services can transform your advertising results.
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
                <Link href="/about">Learn About Us</Link>
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
  )
}
