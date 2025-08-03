"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
          <Link href="/about" className="text-sm font-medium hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-purple-400 transition-colors text-purple-400">
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
                  Get In Touch
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Let's{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Disrupt
                  </span>{" "}
                  Together
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl">
                  Ready to transform your advertising results? Let's start the conversation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
                  <p className="text-gray-300">Tell us about your project and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form action="https://formsubmit.co/anujkumar7676@gmail.com" method="POST" className="space-y-4">
                    {/* Add hidden inputs for FormSubmit.co configuration */}
                    <input type="hidden" name="_subject" value="New Contact Form Submission - UBX Agency" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          required
                          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-300">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                        placeholder="Your company"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-purple-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-gray-300">hello@ubxagency.com</p>
                        <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-pink-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-gray-300">+91 8920457447</p>
                        <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM IST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-purple-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">Office</h3>
                        <p className="text-gray-300">Block F, Ground Floor</p>
                        <p className="text-gray-300">Sarita Vihar, Delhi, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-pink-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">Business Hours</h3>
                        <p className="text-gray-300">Monday - Friday: 9AM - 6PM IST</p>
                        <p className="text-gray-300">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-500/10 px-3 py-1 text-sm text-purple-400 border border-purple-500/20">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Common Questions</h2>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-2">How quickly can we get started?</h3>
                  <p className="text-gray-300">
                    We can typically begin strategy development within 48 hours of our initial consultation and have
                    campaigns live within 1-2 weeks.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-2">What's your minimum budget requirement?</h3>
                  <p className="text-gray-300">
                    We work with brands at various stages. Our minimum monthly ad spend is ₹5 lac to ensure we can
                    deliver meaningful results through our network.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-2">Do you work with international brands?</h3>
                  <p className="text-gray-300">
                    We have experience scaling brands globally and can help with market entry, localization, and
                    international campaign management.
                  </p>
                </CardContent>
              </Card>
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
