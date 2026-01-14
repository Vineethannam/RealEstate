import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Utility to handle closing menu on navigation
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Top Bar - Responsive visibility */}
      <div className="bg-black text-white py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] sm:text-xs md:text-sm">
          {/* Hidden on small mobile to avoid crowding */}
          <div className="hidden sm:flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-lime-400 cursor-pointer transition-colors">
              <Phone className="w-3 h-3 md:w-4 h-4 text-lime-500" />
              (345) 345 643 5674
            </span>
            <span className="hidden md:flex items-center gap-2 hover:text-lime-400 cursor-pointer transition-colors">
              <Mail className="w-3 h-3 md:w-4 h-4 text-lime-500" />
              houzez@favethemes.com
            </span>
          </div>
          
          {/* Always visible selectors */}
          <div className="flex gap-4 ml-auto sm:ml-0">
            <select className="bg-transparent text-white outline-none cursor-pointer hover:text-lime-400">
              <option className="text-black">USD</option>
              <option className="text-black">EUR</option>
            </select>
            <select className="bg-transparent text-white outline-none cursor-pointer hover:text-lime-400">
              <option className="text-black">Square Meters</option>
              <option className="text-black">Square Feet</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-lime-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <Home className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">houzez</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {['Home', 'About Us', 'For Rent', 'For Sale'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`;
                return (
                  <Link
                    key={item}
                    to={path}
                    className={`font-semibold text-sm uppercase tracking-wide transition-all duration-200 border-b-2 ${
                      isActive(path) 
                        ? 'text-lime-500 border-lime-500' 
                        : 'text-gray-600 border-transparent hover:text-lime-500 hover:border-lime-500'
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className="flex flex-col border-t border-gray-100 pt-4 pb-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about-us' },
                { name: 'For Rent', path: '/for-rent' },
                { name: 'For Sale', path: '/for-sale' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-3 px-2 text-base font-bold transition-colors ${
                    isActive(link.path) 
                      ? 'text-lime-500 bg-lime-50' 
                      : 'text-gray-700 hover:text-lime-500 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}