import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="bg-black text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <span>(345) 345 643 5674</span>
            <span>houzez@favethemes.com</span>
          </div>
          <div className="flex gap-4">
            <select className="bg-transparent text-white">
              <option>USD</option>
            </select>
            <select className="bg-transparent text-white">
              <option>Square Meters</option>
            </select>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">houzez</span>
            </Link>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive('/') ? 'text-lime-500' : 'text-gray-700 hover:text-lime-500'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  isActive('/about') ? 'text-lime-500' : 'text-gray-700 hover:text-lime-500'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/for-rent"
                className={`transition-colors ${
                  isActive('/for-rent') ? 'text-lime-500' : 'text-gray-700 hover:text-lime-500'
                }`}
              >
                For Rent
              </Link>
              <Link
                to="/for-sale"
                className={`transition-colors ${
                  isActive('/for-sale') ? 'text-lime-500' : 'text-gray-700 hover:text-lime-500'
                }`}
              >
                For Sale
              </Link>
            </nav>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive('/') ? 'text-lime-500' : 'text-gray-700 hover:text-lime-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  isActive('/about') ? 'text-lime-500' : 'text-gray-700 hover:text-lime-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/for-rent"
                className={`transition-colors ${
                  isActive('/for-rent') ? 'text-lime-500' : 'text-gray-700 hover:text-lime-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                For Rent
              </Link>
              <Link
                to="/for-sale"
                className={`transition-colors ${
                  isActive('/for-sale') ? 'text-lime-500' : 'text-gray-700 hover:text-lime-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                For Sale
              </Link>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
