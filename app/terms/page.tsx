import Link from "next/link"

export default function TermsPage() {
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
                  Legal
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Terms of{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Service
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl prose prose-invert">
              <div className="space-y-8 text-gray-300">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p className="mb-4">
                    By accessing and using UBX Agency's website and services, you accept and agree to be bound by these
                    terms and conditions. These terms are governed by the laws of India and subject to the jurisdiction
                    of Indian courts. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Company Information</h2>
                  <p className="mb-4">UBX Agency is a digital advertising and marketing company registered in India:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Registered Office: Block F, Ground Floor, Sarita Vihar, Delhi, India</li>
                    <li>Contact: +91 8920457447</li>
                    <li>Email: hello@ubxagency.com</li>
                    <li>Governed by Indian laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Services Description</h2>
                  <p className="mb-4">
                    UBX Agency provides digital advertising, marketing, and media services including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Digital advertising campaign management</li>
                    <li>Creative strategy and content development</li>
                    <li>Media planning and buying</li>
                    <li>Performance analytics and reporting</li>
                    <li>Brand strategy consulting</li>
                    <li>Social media marketing and management</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Client Obligations</h2>
                  <p className="mb-4">Clients agree to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Provide accurate and complete information necessary for service delivery</li>
                    <li>Make timely payments according to agreed terms in Indian Rupees (INR)</li>
                    <li>Comply with all applicable Indian laws and regulations including IT Act 2000</li>
                    <li>Respect intellectual property rights as per Indian Copyright Act</li>
                    <li>Provide necessary approvals and feedback within agreed timeframes</li>
                    <li>Ensure content complies with Indian advertising standards and guidelines</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                  <p className="mb-4">Payment terms as per Indian business practices:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>All payments to be made in Indian Rupees (INR)</li>
                    <li>Invoices are due within 30 days of receipt</li>
                    <li>GST will be charged as applicable under Indian tax laws</li>
                    <li>Late payments may incur interest charges as per RBI guidelines</li>
                    <li>Services may be suspended for non-payment after due notice</li>
                    <li>Refunds subject to Indian consumer protection laws</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                  <p className="mb-4">As per Indian Copyright Act, 1957 and Trademark Act, 1999:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>UBX Agency retains ownership of proprietary methodologies and tools</li>
                    <li>Client-specific creative work becomes client property upon full payment</li>
                    <li>Both parties respect each other's intellectual property rights</li>
                    <li>Any disputes resolved as per Indian IP laws</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Data Protection & Privacy</h2>
                  <p className="mb-4">
                    In compliance with Information Technology Act, 2000 and Digital Personal Data Protection Act, 2023:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>We protect client data as per Indian data protection laws</li>
                    <li>Data processing consent obtained as required</li>
                    <li>Data stored and processed within India or approved jurisdictions</li>
                    <li>Clients have rights to access, correct, and delete personal data</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                  <p className="mb-4">As per Indian Contract Act, 1872 and Consumer Protection Act, 2019:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Liability limited to the amount paid for services in the preceding 12 months</li>
                    <li>Not liable for indirect, incidental, or consequential damages</li>
                    <li>Consumer rights protected as per Indian consumer protection laws</li>
                    <li>Force majeure events as recognized under Indian law</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
                  <p className="mb-4">
                    Either party may terminate services with 30 days written notice. UBX Agency reserves the right to
                    terminate immediately for breach of terms or non-payment, subject to Indian contract law provisions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law & Jurisdiction</h2>
                  <p className="mb-4">
                    These terms are governed by the laws of India. Any disputes will be subject to the exclusive
                    jurisdiction of courts in Delhi, India. Alternative dispute resolution through arbitration as per
                    Arbitration and Conciliation Act, 2015 may be pursued.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Compliance</h2>
                  <p className="mb-4">Our services comply with:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Information Technology Act, 2000</li>
                    <li>Digital Personal Data Protection Act, 2023</li>
                    <li>Consumer Protection Act, 2019</li>
                    <li>Advertising Standards Council of India (ASCI) guidelines</li>
                    <li>Foreign Exchange Management Act (FEMA) for international transactions</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
                  <p className="mb-4">
                    For questions about these Terms of Service:
                    <br />
                    Email: hello@ubxagency.com
                    <br />
                    Phone: +91 8920457447
                    <br />
                    Address: Block F, Ground Floor, Sarita Vihar, Delhi, India
                  </p>
                </div>
              </div>
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
