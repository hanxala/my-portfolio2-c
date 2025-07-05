'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full py-6 px-4 md:px-8 flex justify-between items-center bg-background relative z-50">
      <div className="text-2xl font-bold">Hanzala Khan</div>
      <nav className="hidden md:flex space-x-6">
        <Link href="#about" className="hover:text-secondary transition-colors">About</Link>
        <Link href="#projects" className="hover:text-secondary transition-colors">Projects</Link>
        <Link href="#skills" className="hover:text-secondary transition-colors">Skills</Link>
        <Link href="#contact" className="hover:text-secondary transition-colors">Contact</Link>
      </nav>
      <div className="md:hidden">
        <button 
          className="p-2" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-40" 
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          {/* Menu */}
          <div className="md:hidden fixed right-0 top-0 h-full w-64 bg-background z-40 shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="pt-20 px-4">
              <nav className="flex flex-col space-y-6">
                <Link href="#about" onClick={closeMobileMenu} className="text-xl hover:text-secondary transition-colors">About</Link>
                <Link href="#projects" onClick={closeMobileMenu} className="text-xl hover:text-secondary transition-colors">Projects</Link>
                <Link href="#skills" onClick={closeMobileMenu} className="text-xl hover:text-secondary transition-colors">Skills</Link>
                <Link href="#contact" onClick={closeMobileMenu} className="text-xl hover:text-secondary transition-colors">Contact</Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </header>
  );
}