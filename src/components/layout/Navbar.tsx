'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Mission', href: '/#mission' },
    { name: 'Approach', href: '/#approach' },
    { name: 'Services', href: '/#services' },
    { name: 'Careers', href: '/#careers' },
  ];

  const bgColor =
    isScrolled || !isHome ? 'bg-white shadow-lg' : 'bg-transparent';
  const textColor =
    isHome && !isScrolled ? 'text-white' : 'text-[var(--color-charcoal)]';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${bgColor}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/#home" className="flex-shrink-0 flex items-center">
            <span
              className={`font-heading font-light tracking-[0.2em] uppercase text-xl ${textColor}`}
            >
              PRYME{' '}
              <span className="text-[var(--color-bronze)]">STRATEGIES</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-heading tracking-widest uppercase transition-colors hover:text-[var(--color-bronze)] ${textColor}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="px-6 py-3 bg-[var(--color-bronze)] text-white font-heading tracking-widest uppercase text-sm hover:bg-[var(--color-bronze-light)] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${textColor} hover:text-[var(--color-bronze)]`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg"
          >
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-4 text-sm font-heading tracking-widest uppercase border-b border-gray-100 ${
                    pathname === link.href && link.href === '/#home'
                      ? 'text-[var(--color-bronze)]'
                      : 'text-[var(--color-charcoal)]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-[var(--color-bronze)] text-white font-heading tracking-widest uppercase text-sm hover:bg-[var(--color-bronze-light)] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
