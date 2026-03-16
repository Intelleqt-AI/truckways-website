import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/images/truckwys-logo-transparent.png"
            alt="TruckWys"
            className="h-12 mx-auto"
          />
        </div>

        {/* 404 */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold text-gray-200 mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-4">
            Page not found
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-white text-gray-700 font-medium px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <Search className="w-5 h-5" />
            Browse Blog
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-blue-600 hover:underline">
              About Us
            </Link>
            <Link href="/get-started" className="text-blue-600 hover:underline">
              Get Started
            </Link>
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact Us
            </Link>
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
