import { Users, TrendingUp, BarChart3, Handshake, DollarSign, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
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
    <div className="overflow-x-hidden">
      {/* Hero Section with Fixed Background */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 w-full max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Your Place To Live
          </h1>
          <p className="text-lg md:text-2xl mb-10 tracking-widest font-light opacity-90 uppercase">
            Exclusive Luxury Properties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/for-sale"
              className="px-10 py-4 bg-lime-500 hover:bg-lime-600 text-white font-bold rounded-full transition-all shadow-lg active:scale-95"
            >
              Browse Properties
            </Link>
            <Link
              to="/about"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-md border border-white/30 transition-all active:scale-95"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Exclusives</h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm max-w-2xl mx-auto">
              Choose from different listing templates and lay them out as lists or grids
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/for-sale"
              className="inline-block px-10 py-3 border-2 border-lime-500 text-lime-600 font-bold rounded-full hover:bg-lime-500 hover:text-white transition-all duration-300"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Finest Selection Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              className="h-72 md:h-[500px] bg-cover bg-center rounded-3xl shadow-2xl transition-transform hover:scale-[1.02] duration-500"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800)',
              }}
            ></div>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Discover Our <br className="hidden md:block" /> Finest Selection
              </h2>
              <p className="text-gray-500 mb-8 uppercase tracking-widest text-sm leading-relaxed">
                Premium real estate services tailored to your lifestyle. Find the perfect home in the most prestigious neighborhoods.
              </p>
              <Link
                to="/for-sale"
                className="inline-block px-12 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-transform active:scale-95 shadow-xl"
              >
                Discover Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Professional Services</h2>
            <div className="h-1.5 w-24 bg-lime-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <div key={index} className="group flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-lime-100">
                <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-lime-500 transition-colors duration-300">
                  <service.icon className="w-10 h-10 text-gray-800 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}