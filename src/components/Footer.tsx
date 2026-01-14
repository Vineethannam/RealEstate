import { Link } from 'react-router-dom';
import { Home, Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Bio */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-lime-500 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter">houzez</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Houzez is a premium WordPress theme for real estate agents and companies where modern aesthetics meet high-end functionality.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-gray-400 hover:text-lime-500 transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 text-lime-500" />
                <span className="text-xs">1515 Broadway, New York, NY 10036</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-lime-500 transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-lime-500" />
                <span className="text-xs">+1 (800) 555-0123</span>
              </div>
            </div>
          </div>

          {/* Discover Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-lime-500">Discover</h3>
            <ul className="space-y-4">
              {['Miami', 'Los Angeles', 'Chicago', 'New York'].map((city) => (
                <li key={city}>
                  <Link to="/" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lifestyle Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-lime-500">Lifestyle</h3>
            <ul className="space-y-4">
              {['Apartment', 'Single Family Home', 'Villa', 'Loft'].map((type) => (
                <li key={type}>
                  <Link to="/for-sale" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-lime-500">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Stay updated with our latest luxury property listings.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                />
              </div>
              <button className="w-full py-3 bg-lime-500 text-black font-bold text-sm rounded-lg hover:bg-lime-400 transition-colors shadow-lg shadow-lime-500/10">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-gray-500 text-xs text-center md:text-left">
              <p>© 2026 Houzez Real Estate. Built with passion for high-end living.</p>
              <div className="mt-2 flex gap-4 justify-center md:justify-start">
                <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, color: 'hover:bg-blue-600' },
                { Icon: Twitter, color: 'hover:bg-sky-500' },
                { Icon: Instagram, color: 'hover:bg-pink-600' },
                { Icon: Linkedin, color: 'hover:bg-blue-700' },
                { Icon: Youtube, color: 'hover:bg-red-600' }
              ].map(({ Icon, color }, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 ${color} hover:text-white hover:scale-110 hover:border-transparent`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}