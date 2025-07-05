import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 md:px-8 bg-secondary/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <div className="font-semibold text-lg">Hanzala Khan</div>
          <div className="text-text-secondary text-sm">Software / Android App Developer</div>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="#about" className="hover:text-secondary transition-colors">About</Link>
          <Link href="#projects" className="hover:text-secondary transition-colors">Projects</Link>
          <Link href="#skills" className="hover:text-secondary transition-colors">Skills</Link>
          <Link href="#contact" className="hover:text-secondary transition-colors">Contact</Link>
        </nav>
        
        <div className="text-text-secondary text-sm">
          © {currentYear} Hanzala Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}