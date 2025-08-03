import Link from "next/link"

export default function CookiesPage() {
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
                  Cookie{" "}
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

        {/* Cookie Content */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl prose prose-invert">
              <div className="space-y-8 text-gray-300">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                  <p className="mb-4">
                    This Cookie Policy explains how UBX Agency uses cookies and similar technologies on our website in
                    compliance with Indian data protection laws, including the Information Technology Act, 2000 and
                    Digital Personal Data Protection Act, 2023. By using our website, you consent to the use of cookies
                    as described in this policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. What Are Cookies?</h2>
                  <p className="mb-4">
                    Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a
                    website. They help websites remember your preferences, improve functionality, and provide analytics
                    about website usage. Cookies are widely used to make websites work more efficiently and provide
                    information to website owners.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Legal Basis for Using Cookies</h2>
                  <p className="mb-4">Under Indian law, we use cookies based on:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Consent:</strong> For non-essential cookies, we obtain your explicit consent
                    </li>
                    <li>
                      <strong>Legitimate Interest:</strong> For essential cookies necessary for website functionality
                    </li>
                    <li>
                      <strong>Contract Performance:</strong> For cookies required to provide our services
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Types of Cookies We Use</h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Essential Cookies (Strictly Necessary)</h3>
                    <p className="mb-2">
                      These cookies are essential for the website to function properly and cannot be disabled:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Session management and user authentication</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and website performance</li>
                      <li>Form submission and data processing</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Analytics Cookies</h3>
                    <p className="mb-2">These cookies help us understand how visitors interact with our website:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Google Analytics for website traffic analysis</li>
                      <li>Page views, session duration, and bounce rates</li>
                      <li>User behavior patterns and popular content</li>
                      <li>Website performance optimization</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Functional Cookies</h3>
                    <p className="mb-2">These cookies enable enhanced functionality and personalization:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Language preferences and regional settings</li>
                      <li>User interface customization</li>
                      <li>Remember login status and preferences</li>
                      <li>Chat and customer support features</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Marketing and Advertising Cookies</h3>
                    <p className="mb-2">These cookies are used for targeted advertising and marketing:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Google Ads and remarketing campaigns</li>
                      <li>Facebook Pixel for social media advertising</li>
                      <li>LinkedIn Insight Tag for professional targeting</li>
                      <li>Conversion tracking and attribution</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Cookies</h2>
                  <p className="mb-4">We use third-party services that may set cookies on our website:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Google Analytics:</strong> Website analytics and performance tracking
                    </li>
                    <li>
                      <strong>Google Ads:</strong> Advertising and remarketing campaigns
                    </li>
                    <li>
                      <strong>Facebook:</strong> Social media integration and advertising
                    </li>
                    <li>
                      <strong>LinkedIn:</strong> Professional network advertising and analytics
                    </li>
                    <li>
                      <strong>YouTube:</strong> Video content and embedded media
                    </li>
                  </ul>
                  <p className="mb-4">
                    These third parties have their own privacy policies and cookie practices, which we encourage you to
                    review.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Cookie Duration and Storage</h2>
                  <p className="mb-4">Cookies have different lifespans:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>
                      <strong>Session Cookies:</strong> Deleted when you close your browser
                    </li>
                    <li>
                      <strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 1-2 years)
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Usually expire after 2 years
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Typically expire after 30-90 days
                    </li>
                  </ul>
                  <p className="mb-4">
                    All cookies are stored locally on your device and can be managed through your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Managing Your Cookie Preferences</h2>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Browser Settings</h3>
                    <p className="mb-2">You can control cookies through your browser settings:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>Block all cookies or specific types of cookies</li>
                      <li>Delete existing cookies from your device</li>
                      <li>Set exceptions for trusted websites</li>
                      <li>Receive notifications when cookies are set</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Opt-Out Tools</h3>
                    <p className="mb-2">You can opt out of specific tracking services:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                      <li>
                        Google Analytics:{" "}
                        <a
                          href="https://tools.google.com/dlpage/gaoptout"
                          className="text-purple-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Analytics Opt-out
                        </a>
                      </li>
                      <li>
                        Google Ads:{" "}
                        <a
                          href="https://adssettings.google.com"
                          className="text-purple-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Ad Settings
                        </a>
                      </li>
                      <li>
                        Facebook:{" "}
                        <a
                          href="https://www.facebook.com/settings?tab=ads"
                          className="text-purple-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Facebook Ad Preferences
                        </a>
                      </li>
                      <li>
                        Industry Opt-out:{" "}
                        <a
                          href="http://www.aboutads.info/choices/"
                          className="text-purple-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Digital Advertising Alliance
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Impact of Disabling Cookies</h2>
                  <p className="mb-4">
                    If you choose to disable cookies, some features of our website may not function properly:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Difficulty navigating the website or accessing certain features</li>
                    <li>Loss of personalized settings and preferences</li>
                    <li>Inability to use contact forms or interactive elements</li>
                    <li>Less relevant content and advertisements</li>
                    <li>Reduced website performance and functionality</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Data Protection and Security</h2>
                  <p className="mb-4">In compliance with Indian data protection laws:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Cookie data is processed securely and in accordance with our Privacy Policy</li>
                    <li>We implement appropriate technical and organizational measures</li>
                    <li>Personal data collected through cookies is protected against unauthorized access</li>
                    <li>We regularly review and update our cookie practices</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Your Rights</h2>
                  <p className="mb-4">Under Indian data protection laws, you have the right to:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Know what cookies are being used and for what purpose</li>
                    <li>Withdraw consent for non-essential cookies at any time</li>
                    <li>Access information about cookie data collected</li>
                    <li>Request deletion of cookie data where applicable</li>
                    <li>File complaints with our grievance officer</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Updates to This Policy</h2>
                  <p className="mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in our practices, technology,
                    or legal requirements. We will notify you of significant changes through our website or direct
                    communication as required by Indian law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
                  <p className="mb-4">
                    If you have questions about our use of cookies or this Cookie Policy:
                    <br />
                    Email: hello@ubxagency.com
                    <br />
                    Phone: +91 8920457447
                    <br />
                    Address: Block F, Ground Floor, Sarita Vihar, Delhi, India
                  </p>
                  <p className="mb-4">
                    For data protection matters, you can also contact our Grievance Officer at the above details.
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
