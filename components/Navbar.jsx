'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

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
          <div className="flex items-center pl-3">
            <img src="/images/truckwys-logo-transparent.png" alt="TruckWys" className="max-w-[120px] md:max-w-[180px]" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className={`text-base font-medium transition-colors ${
                navScrolled ? 'text-black hover:text-black' : 'text-black hover:text-gray-700'
              }`}
            >
              Case Studies
            </Link>
            <Link
              href="#"
              className={`text-base font-medium transition-colors ${
                navScrolled ? 'text-black hover:text-black' : 'text-black hover:text-gray-700'
              }`}
            >
              About
            </Link>
            <Link
              href="#"
              className={`text-base font-medium transition-colors ${
                navScrolled ? 'text-black hover:text-black' : 'text-black hover:text-gray-700'
              }`}
            >
              Blog
            </Link>
            <Link
              href="#"
              className={`text-base font-medium transition-colors ${
                navScrolled ? 'text-black hover:text-black' : 'text-black hover:text-gray-700'
              }`}
            >
              Pricing
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`transition-colors border border-black h-10 px-6 ${
                navScrolled ? 'text-black hover:text-black hover:bg-gray-100' : 'text-black hover:text-black hover:bg-gray-100'
              }`}
            >
              Sign in
            </Button>
            <Link href="/get-started">
              <Button
                size="sm"
                className="text-white hover:bg-blue-700 h-10 px-6 transition-colors"
                style={{ backgroundColor: 'rgb(60, 131, 246)' }}
              >
                Get started
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
              <Link href="#" className="text-base font-medium text-black hover:text-black transition-colors">
                Case Studies
              </Link>
              <Link href="#" className="text-base font-medium text-black hover:text-black transition-colors">
                About
              </Link>
              <Link href="#" className="text-base font-medium text-black hover:text-black transition-colors">
                Blog
              </Link>
              <Link href="#" className="text-base font-medium text-black hover:text-black transition-colors">
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="sm" className="text-black hover:text-black hover:bg-gray-100 w-full border border-black h-10">
                  Sign in
                </Button>
                <Link href="/get-started">
                  <Button
                    size="sm"
                    className="text-white hover:bg-blue-700 h-10 w-full transition-colors"
                    style={{ backgroundColor: 'rgb(60, 131, 246)' }}
                  >
                    Get started
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
