import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'Trailer', href: 'video-section' },
    { name: 'Contact', href: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20">
            <span className="text-white font-bold text-lg">DS</span>
          </div>
          <span className="font-bold text-xl text-white">Duck Savior</span>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-300 hover:text-white font-medium transition-colors hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className={`
          absolute top-full left-0 right-0 
          bg-gray-950 border-b border-gray-800 md:hidden
          transform transition-all duration-300 origin-top
          ${menuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
        `}>
          <ul className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

