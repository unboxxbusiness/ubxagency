import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | UBX Agency',
  description: 'The page you are looking for could not be found. Return to UBX Agency homepage for our advertising services.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800" role="banner">
        <Link href="/" className="flex items-center justify-center" aria-label="UBX Agency Home">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            UBX Agency
          </h1>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                404
              </h1>
              <h2 className="text-3xl font-bold tracking-tighter">
                Page Not Found
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                The page you're looking for doesn't exist. Let's get you back to exploring our advertising solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                asChild
              >
                <Link href="/" aria-label="Return to UBX Agency homepage">
                  Back to Home
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                asChild
              >
                <Link href="/services" aria-label="View our advertising services">
                  View Services
                </Link>
              </Button>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>Looking for something specific? <Link href="/contact" className="text-purple-400 hover:underline">Contact us</Link> and we'll help you find it.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          © 2025 UBX Agency. Modern advertising powerhouse engineering attention for brands.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="/privacy" className="text-xs hover:text-purple-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs hover:text-purple-400 transition-colors">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}
