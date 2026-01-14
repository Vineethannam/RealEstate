import { Search, Users, TrendingUp, BarChart3, Handshake, DollarSign, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  const [searchType, setSearchType] = useState('All');

  const featuredProperties = [
    {
      id: 1,
      title: 'Amazing Oceanfront Apartment',
      price: '$1,890/mo',
      type: 'Apartment',
      status: 'For Rent' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Guaranteed Modern Home',
      price: '$590,000',
      type: 'Single Family Home',
      status: 'For Sale' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Contemporary Apartment',
      price: '$3,600/mo',
      type: 'Apartment',
      status: 'For Rent' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Renovated Apartment',
      price: '$540,000',
      type: 'Apartment',
      status: 'For Sale' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const services = [
    { icon: Users, title: 'Property Management', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
    { icon: TrendingUp, title: 'Capital Improvements', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
    { icon: BarChart3, title: 'Financial Reporting', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
    { icon: Handshake, title: 'Business Development', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
    { icon: DollarSign, title: 'Finance Real Estate', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
    { icon: Scale, title: 'Recover Asset Value', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
  ];

  return (
    <div>
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Your Place To Live</h1>
          <p className="text-xl mb-8">GET STARTED IN FEW CLICKS</p>

          <div className="bg-white rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSearchType('All')}
                className={`px-6 py-2 rounded transition-colors ${
                  searchType === 'All' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSearchType('For Rent')}
                className={`px-6 py-2 rounded transition-colors ${
                  searchType === 'For Rent' ? 'bg-lime-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                For Rent
              </button>
              <button
                onClick={() => setSearchType('For Sale')}
                className={`px-6 py-2 rounded transition-colors ${
                  searchType === 'For Sale' ? 'bg-lime-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                For Sale
              </button>
            </div>

            <div className="flex gap-4">
              <select className="flex-1 px-4 py-3 border border-gray-300 rounded text-gray-700">
                <option>All Cities</option>
                <option>Miami</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>
              <input
                type="text"
                placeholder="Enter keyword..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded text-gray-700"
              />
              <button className="px-8 py-3 bg-lime-500 text-white rounded hover:bg-lime-600 transition-colors flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Featured Exclusives</h2>
            <p className="text-gray-600 uppercase tracking-wide text-sm">
              Choose from different listing templates and lay them out as lists or grids, full-width or boxed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/for-sale"
              className="inline-block px-8 py-3 border-2 border-lime-500 text-lime-500 rounded hover:bg-lime-500 hover:text-white transition-colors"
            >
              Load More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="h-96 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800)',
              }}
            ></div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Discover Our Finest Selection
              </h2>
              <p className="text-gray-600 mb-6 uppercase tracking-wide text-sm">
                Choose from different listing templates and lay them out as lists or grids, full-width or boxed
              </p>
              <Link
                to="/for-sale"
                className="inline-block px-8 py-3 border-2 border-lime-500 text-lime-500 rounded hover:bg-lime-500 hover:text-white transition-colors"
              >
                Discover
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <service.icon className="w-12 h-12 text-gray-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
