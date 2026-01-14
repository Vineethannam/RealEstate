import { Link } from 'react-router-dom';
import { Home, Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">houzez</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin.
              Donec non odio neque. Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Discover</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-lime-500 transition-colors flex items-center gap-2">
                  <span>Miami</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-lime-500 transition-colors flex items-center gap-2">
                  <span>Los Angeles</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-lime-500 transition-colors flex items-center gap-2">
                  <span>Chicago</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-lime-500 transition-colors flex items-center gap-2">
                  <span>New York</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Lifestyle</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/for-sale" className="text-gray-400 hover:text-lime-500 transition-colors flex items-center gap-2">
                  <span>Apartment</span>
                </Link>
              </li>
              <li>
                <Link to="/for-sale" className="text-gray-400 hover:text-lime-500 transition-colors flex items-center gap-2">
                  <span>Single Family Home</span>
                </Link>
              </li>
              <li>
                <Link to="/for-sale" className="text-gray-400 hover:text-lime-500 transition-colors flex items-center gap-2">
                  <span>Villa</span>
                </Link>
              </li>
              <li>
                <Link to="/for-sale" className="text-gray-400 hover:text-lime-500 transition-colors flex items-center gap-2">
                  <span>Loft</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Enter your email</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white text-black rounded"
              />
              <button className="px-6 py-2 bg-lime-500 text-white rounded hover:bg-lime-600 transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © Houzez - All rights reserved
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-lime-500 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
