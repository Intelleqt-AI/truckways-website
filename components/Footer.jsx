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
                <Link href="#" className="hover:text-black transition-colors">
                  Quote & Book AI
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Fleet Performance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Invoice & Cashflow
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Capital
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black">Company</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="text-gray-600 text-xs sm:text-sm">© 2025 TruckWys. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
