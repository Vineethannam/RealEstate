import { SlidersHorizontal, ChevronRight } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

export default function ForSale() {
  const properties = [
    {
      id: 1,
      title: 'Amazing Home For Family',
      price: '$890,000',
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
      id: 2,
      title: 'Luxury Home For Sale',
      price: '$459,000',
      type: 'Single Family Home',
      status: 'For Sale' as const,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'Guaranteed Modern Home',
      price: '$590,000',
      type: 'Single Family Home',
      status: 'For Sale' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Amazing Apartment For Family',
      price: '$890,000',
      type: 'Apartment',
      status: 'For Sale' as const,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
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
    {
      id: 6,
      title: 'Ample Apartment At Last Floor',
      price: '$456,000',
      type: 'Apartment',
      status: 'For Sale' as const,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 7,
      title: 'Penthouse Apartment',
      price: '$876,000',
      type: 'Apartment',
      status: 'For Sale' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 8,
      title: 'Design Place Apartment',
      price: '$967,000',
      type: 'Apartment',
      status: 'For Sale' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Header - Fixed Background */}
      <section
        className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Our Properties For Sale</h1>
          <p className="text-lg md:text-xl uppercase tracking-[0.25em] font-light opacity-90">
            Invest in your future home
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Header Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <SlidersHorizontal className="w-5 h-5 text-lime-600" />
              </div>
              <p className="font-bold text-lg text-gray-800">
                Showing <span className="text-lime-600">{properties.length}</span> Exclusive Listings
              </p>
            </div>
            
            <div className="w-full sm:w-auto">
              <select className="w-full sm:w-56 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-lime-500 shadow-sm transition-all cursor-pointer">
                <option>Default Order</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {properties.map((property) => (
              <div key={property.id} className="transition-all duration-300 hover:-translate-y-2">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mb-20">
            <nav className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-md border border-gray-100">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold transition-all ${
                    num === 1 
                    ? 'bg-lime-500 text-white shadow-lg shadow-lime-500/30' 
                    : 'bg-white text-gray-500 hover:text-lime-600 hover:bg-lime-50'
                  }`}
                >
                  {num}
                </button>
              ))}
            </nav>
          </div>

          {/* Sidebar-style Category Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-lime-500 rounded-full"></span>
                  Property Type
                </h3>
                <div className="space-y-2">
                  {[
                    { label: 'Apartment', count: 30 },
                    { label: 'Single Family Home', count: 11 },
                    { label: 'Villa', count: 10 },
                    { label: 'Loft', count: 1 }
                  ].map((item) => (
                    <button 
                      key={item.label}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-lime-50 group transition-all"
                    >
                      <span className="text-gray-600 group-hover:text-lime-700 font-medium flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {item.label}
                      </span>
                      <span className="bg-gray-100 text-gray-500 text-xs font-bold px-2 py-1 rounded-md group-hover:bg-lime-100 group-hover:text-lime-700 transition-colors">
                        {item.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Call to Action or Advertisement space */}
            <div className="lg:col-span-2 bg-lime-600 rounded-2xl p-8 md:p-12 flex items-center justify-between text-white overflow-hidden relative shadow-xl">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Looking to sell?</h2>
                <p className="text-lime-100 mb-8 max-w-md">List your property with us and reach thousands of potential buyers every day.</p>
                <button className="px-8 py-3 bg-white text-lime-700 font-bold rounded-lg hover:bg-lime-50 transition-colors">
                  Get Started
                </button>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
                <SlidersHorizontal size={300} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}