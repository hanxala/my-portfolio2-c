import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full py-6 px-4 md:px-8 flex justify-between items-center bg-background">
      <div className="text-2xl font-bold">Hanzala Khan</div>
      <nav className="hidden md:flex space-x-6">
        <Link href="#about" className="hover:text-secondary transition-colors">About</Link>
        <Link href="#projects" className="hover:text-secondary transition-colors">Projects</Link>
        <Link href="#skills" className="hover:text-secondary transition-colors">Skills</Link>
        <Link href="#contact" className="hover:text-secondary transition-colors">Contact</Link>
      </nav>
      <div className="md:hidden">
        {/* Mobile menu button - can be expanded later */}
        <button className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}