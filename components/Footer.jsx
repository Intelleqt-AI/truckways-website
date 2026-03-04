import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-12 sm:py-16 bg-gray-100 border-t border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/50 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12">
          <div className="sm:col-span-2">
            <div className="mb-3">
              <img src="/images/truckwys-logo-transparent.png" alt="TruckWys" className="max-w-[120px] md:max-w-[180px]" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base">The financial operating system for your fleet.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black">Product</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/#quote-ai" className="hover:text-black transition-colors">
                  Quote & Book AI
                </Link>
              </li>
              <li>
                <Link href="/#fleet-performance" className="hover:text-black transition-colors">
                  Fleet Performance
                </Link>
              </li>
              <li>
                <Link href="/#invoice-cashflow" className="hover:text-black transition-colors">
                  Invoice & Cashflow
                </Link>
              </li>
              <li>
                <Link href="/#capital" className="hover:text-black transition-colors">
                  Capital
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black">Contact Us</h3>
            <ul className="space-y-3 text-gray-600 mb-4">
              <li>
                <a href="mailto:grant@truckwys.com" className="hover:text-black transition-colors">
                  grant@truckwys.com
                </a>
              </li>
              <li className="text-gray-500">South Africa</li>
            </ul>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/truckwys"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/truckwys-a8519239a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <Link
                href="/blogs"
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
                aria-label="Read our blog"
              >
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 14H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1zm0-4H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-gray-600 text-xs sm:text-sm">© 2026 TruckWys. All rights reserved.</div>
            <div className="flex gap-4 text-xs sm:text-sm text-gray-600">
              <Link href="/privacy" className="hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-black transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
