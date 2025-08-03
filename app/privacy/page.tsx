import Link from "next/link"

export default function PrivacyPage() {
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
                  Privacy{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Policy
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl prose prose-invert">
              <div className="space-y-8 text-gray-300">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                  <p className="mb-4">
                    UBX Agency ("we," "our," or "us") is committed to protecting your privacy in compliance with Indian
                    data protection laws, including the Information Technology Act, 2000, Information Technology
                    (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules,
                    2011, and the Digital Personal Data Protection Act, 2023.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Data Controller Information</h2>
                  <p className="mb-4">
                    UBX Agency is the data controller for personal information collected through our services:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Registered Office: Block F, Ground Floor, Sarita Vihar, Delhi, India</li>
                    <li>Contact: +91 8920457447</li>
                    <li>Email: hello@ubxagency.com</li>
                    <li>Data Protection Officer: Available upon request</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Information We Collect</h2>
                  <p className="mb-4">We collect the following types of personal data:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Contact Information:</strong> Name, email address, phone number, company details
                    </li>
                    <li>
                      <strong>Business Information:</strong> Company size, industry, marketing requirements
                    </li>
                    <li>
                      <strong>Communication Data:</strong> Messages, feedback, and correspondence
                    </li>
                    <li>
                      <strong>Technical Data:</strong> IP address, browser type, device information
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Website interaction, page views, session duration
                    </li>
                    <li>
                      <strong>Marketing Data:</strong> Campaign performance, analytics, preferences
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Legal Basis for Processing</h2>
                  <p className="mb-4">We process personal data based on:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Consent:</strong> When you provide explicit consent for specific purposes
                    </li>
                    <li>
                      <strong>Contract Performance:</strong> To fulfill our service agreements
                    </li>
                    <li>
                      <strong>Legitimate Interest:</strong> For business operations and service improvement
                    </li>
                    <li>
                      <strong>Legal Compliance:</strong> To comply with Indian laws and regulations
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. How We Use Your Information</h2>
                  <p className="mb-4">We use personal data for:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Providing and maintaining our advertising and marketing services</li>
                    <li>Processing transactions and managing client relationships</li>
                    <li>Communicating about services, updates, and support</li>
                    <li>Analyzing and improving our services and website performance</li>
                    <li>Complying with legal obligations and regulatory requirements</li>
                    <li>Preventing fraud and ensuring security</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Data Sharing and Disclosure</h2>
                  <p className="mb-4">We may share your information with:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Service Providers:</strong> Trusted third parties who assist in service delivery
                    </li>
                    <li>
                      <strong>Legal Authorities:</strong> When required by Indian law or court orders
                    </li>
                    <li>
                      <strong>Business Partners:</strong> With your explicit consent for joint services
                    </li>
                    <li>
                      <strong>Professional Advisors:</strong> Lawyers, auditors, and consultants under confidentiality
                    </li>
                  </ul>
                  <p className="mb-4">
                    We do not sell, rent, or trade personal information to third parties for marketing purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Data Security</h2>
                  <p className="mb-4">
                    We implement reasonable security practices and procedures as required under Indian law:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and vulnerability testing</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection and security</li>
                    <li>Incident response procedures for data breaches</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Data Retention</h2>
                  <p className="mb-4">We retain personal data for as long as necessary to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Provide our services and maintain client relationships</li>
                    <li>Comply with legal and regulatory requirements</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Generally, client data is retained for 7 years as per Indian business practices</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Your Rights</h2>
                  <p className="mb-4">Under Indian data protection laws, you have the right to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Access:</strong> Request information about personal data we hold
                    </li>
                    <li>
                      <strong>Correction:</strong> Request correction of inaccurate or incomplete data
                    </li>
                    <li>
                      <strong>Erasure:</strong> Request deletion of personal data in certain circumstances
                    </li>
                    <li>
                      <strong>Portability:</strong> Request transfer of data in a structured format
                    </li>
                    <li>
                      <strong>Withdraw Consent:</strong> Withdraw consent for processing where applicable
                    </li>
                    <li>
                      <strong>Grievance Redressal:</strong> File complaints with our grievance officer
                    </li>
                  </ul>
                  <p className="mb-4">To exercise these rights, contact us at hello@ubxagency.com</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Cross-Border Data Transfer</h2>
                  <p className="mb-4">If we transfer personal data outside India, we ensure:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Compliance with Indian data localization requirements</li>
                    <li>Adequate protection through appropriate safeguards</li>
                    <li>Explicit consent where required by law</li>
                    <li>Contractual protections with international service providers</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Cookies and Tracking</h2>
                  <p className="mb-4">We use cookies and similar technologies in compliance with Indian IT Rules:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand user behavior</li>
                    <li>Marketing cookies for personalized advertising</li>
                    <li>You can manage cookie preferences through browser settings</li>
                  </ul>
                  <p className="mb-4">
                    See our{" "}
                    <Link href="/cookies" className="text-purple-400 hover:underline">
                      Cookie Policy
                    </Link>{" "}
                    for detailed information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Children's Privacy</h2>
                  <p className="mb-4">
                    Our services are not intended for children under 18 years. We do not knowingly collect personal
                    information from children. If we become aware of such collection, we will delete the information
                    immediately and notify parents/guardians as required by Indian law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">13. Grievance Redressal</h2>
                  <p className="mb-4">As per Indian IT Rules, we have appointed a Grievance Officer:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Email: hello@ubxagency.com</li>
                    <li>Phone: +91 8920457447</li>
                    <li>Address: Block F, Ground Floor, Sarita Vihar, Delhi, India</li>
                    <li>Response time: Within 30 days of receiving complaint</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">14. Changes to This Policy</h2>
                  <p className="mb-4">
                    We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will
                    notify you of significant changes through our website or direct communication as required by Indian
                    law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">15. Contact Us</h2>
                  <p className="mb-4">
                    For questions about this Privacy Policy or data protection matters:
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
