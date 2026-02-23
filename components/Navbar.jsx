'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeModule, setActiveModule] = useState(1);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroHeight = window.innerHeight * 0.1;
          setNavScrolled(window.scrollY > heroHeight);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center pl-3">
            <img src="/images/truckwys-logo-transparent.png" alt="TruckWys" className="max-w-[120px] md:max-w-[180px]" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#pricing"
              className={`text-base font-medium transition-colors ${
                navScrolled ? 'text-black hover:text-black' : 'text-black hover:text-gray-700'
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`text-base font-medium transition-colors ${
                navScrolled ? 'text-black hover:text-black' : 'text-black hover:text-gray-700'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/blogs"
              className={`text-base font-medium transition-colors ${
                navScrolled ? 'text-black hover:text-black' : 'text-black hover:text-gray-700'
              }`}
            >
              Blog
            </Link>
          </nav>
          <div className="hidden md:flex items-center">
            <Link href="/get-started">
              <Button
                variant="ghost"
                size="sm"
                className={`transition-colors border border-black h-10 px-6 ${
                  navScrolled ? 'text-black hover:text-black hover:bg-gray-100' : 'text-black hover:text-black hover:bg-gray-100'
                }`}
              >
                Sign in
              </Button>
            </Link>
          </div>
          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 ${navScrolled ? 'text-black' : 'text-black'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden p-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link href="/#pricing" className="text-base font-medium text-black hover:text-black transition-colors">
                Pricing
              </Link>
              <Link href="/contact" className="text-base font-medium text-black hover:text-black transition-colors">
                Contact
              </Link>
              <Link href="/blogs" className="text-base font-medium text-black hover:text-black transition-colors">
                Blog
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link href="/get-started">
                  <Button variant="ghost" size="sm" className="text-black hover:text-black hover:bg-gray-100 w-full border border-black h-10">
                    Sign in
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
