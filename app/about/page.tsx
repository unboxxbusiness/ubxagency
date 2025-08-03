import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
          <Link href="/services" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-purple-400 transition-colors text-purple-400">
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
                  About UBX Agency
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Redefining{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Advertising
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
                  We're not just another agency. We're the disruptors who engineer attention and deliver results that
                  matter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-pink-500/10 px-3 py-1 text-sm text-pink-400 border border-pink-500/20">
                    Our Story
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Born from Disruption</h2>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    UBX Agency was founded on the belief that traditional advertising was broken. We saw brands
                    struggling to cut through the noise, wasting budgets on outdated strategies that delivered mediocre
                    results.
                  </p>
                  <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    So we built something different. A modern advertising powerhouse that combines cutting-edge
                    technology, data-driven insights, and creative excellence to engineer attention and deliver real
                    results.
                  </p>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 sm:w-full relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-purple-900/30 animate-pulse"></div>

                    {/* Interactive floating elements */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-70 group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-300 opacity-70 group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-500 opacity-60 group-hover:scale-150 transition-transform duration-300"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-bounce delay-700 opacity-60 group-hover:scale-150 transition-transform duration-300"></div>

                    {/* Central pulsing logo */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                        UBX
                      </div>
                    </div>

                    {/* Orbiting elements */}
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2">
                      <div
                        className="absolute top-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-spin origin-bottom transform -translate-x-1/2"
                        style={{ animationDuration: "3s" }}
                      ></div>
                      <div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-spin origin-top transform -translate-x-1/2"
                        style={{ animationDuration: "4s" }}
                      ></div>
                      <div
                        className="absolute left-0 top-1/2 w-1 h-1 bg-purple-300 rounded-full animate-spin origin-right transform -translate-y-1/2"
                        style={{ animationDuration: "5s" }}
                      ></div>
                      <div
                        className="absolute right-0 top-1/2 w-1 h-1 bg-pink-300 rounded-full animate-spin origin-left transform -translate-y-1/2"
                        style={{ animationDuration: "6s" }}
                      ></div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Interactive text that appears on hover */}
                    <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm text-gray-300">Built to Disrupt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-400 border border-purple-500/20">
                  Our Values
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Drives Us</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our core values shape everything we do, from strategy to execution.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Zap className="h-12 w-12 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Innovation First</h3>
                  <p className="text-center text-gray-300">
                    We constantly push boundaries, embracing new technologies and creative approaches to stay ahead of
                    the curve.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Target className="h-12 w-12 text-pink-400" />
                  <h3 className="text-xl font-bold text-white">Results Obsessed</h3>
                  <p className="text-center text-gray-300">
                    Every campaign is measured, optimized, and refined to deliver maximum ROI and meaningful business
                    impact.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Partnership Mindset</h3>
                  <p className="text-center text-gray-300">
                    We don't just work for our clients—we work with them as true partners in their growth journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-pink-500/10 px-3 py-1 text-sm text-pink-400 border border-pink-500/20">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Empowering Brands</h2>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="relative bg-gray-900/50 border border-gray-800 rounded-xl p-8 md:p-12 overflow-hidden group">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-purple-900/20 animate-pulse"></div>

                {/* Floating animated numbers */}
                <div className="absolute top-4 left-4 text-purple-400/30 text-6xl font-bold animate-bounce opacity-50">
                  1
                </div>
                <div className="absolute top-8 right-8 text-pink-400/30 text-4xl font-bold animate-bounce delay-300 opacity-50">
                  M
                </div>
                <div className="absolute bottom-4 left-8 text-purple-300/30 text-3xl font-bold animate-bounce delay-500 opacity-50">
                  +
                </div>

                {/* Orbiting elements */}
                <div className="absolute top-1/2 left-1/2 w-40 h-40 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div
                    className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-spin origin-bottom transform -translate-x-1/2 opacity-60"
                    style={{ animationDuration: "8s" }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-spin origin-top transform -translate-x-1/2 opacity-60"
                    style={{ animationDuration: "10s" }}
                  ></div>
                </div>

                {/* Main mission content */}
                <div className="relative z-10 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:scale-105 transition-transform duration-300">
                      Mission
                    </h3>
                  </div>

                  <div className="text-center space-y-4">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      To empower{" "}
                      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                        1 million
                      </span>{" "}
                      brands by delivering bold, data-driven advertising through our powerful media ecosystem and
                      partner networks — turning attention into lasting impact.
                    </p>
                  </div>

                  {/* Animated progress indicators */}
                  <div className="flex justify-center space-x-8 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 animate-pulse">Bold</div>
                      <div className="text-sm text-gray-400">Strategies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400 animate-pulse delay-300">Data-Driven</div>
                      <div className="text-sm text-gray-400">Insights</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 animate-pulse delay-500">Lasting</div>
                      <div className="text-sm text-gray-400">Impact</div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Join the Disruption?</h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's engineer attention for your brand and deliver the results you deserve.
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
  )
}
