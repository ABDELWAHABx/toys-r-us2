import { Menu, X } from 'lucide-react';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const navLinks = ['Home', 'Product', 'Process', 'Packaging', 'Creator'];

  const scrollToSection = (section: string) => {
    const id = section.toLowerCase() === 'home' ? 'hero' : section.toLowerCase();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">DS</span>
          </div>
          <span className="font-bold text-xl text-gray-900">Duck Savior</span>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`
          absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto
          bg-white md:bg-transparent shadow-lg md:shadow-none
          ${menuOpen ? 'block' : 'hidden md:block'}
        `}>
          <ul className="flex flex-col md:flex-row gap-1 md:gap-8 p-4 md:p-0">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollToSection(link)}
                  className="w-full text-left md:w-auto px-4 md:px-0 py-2 md:py-0 text-gray-700 hover:text-primary-500 font-medium transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
