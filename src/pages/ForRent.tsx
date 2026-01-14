import { SlidersHorizontal } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

export default function ForRent() {
  const properties = [
    {
      id: 1,
      title: 'Modern Apartment On The Bay',
      price: '$4,500/mo',
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
      title: 'Modern Day Apartment',
      price: '$3,750/mo',
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
      id: 3,
      title: 'Amazing Oceanfront Apartment',
      price: '$1,890/mo',
      type: 'Apartment',
      status: 'For Rent' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: 'Contemporary Apartment',
      price: '$3,600/mo',
      type: 'Apartment',
      status: 'For Rent' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: 'Relaxing Apartment Bay View',
      price: '$2,800/mo',
      type: 'Apartment',
      status: 'For Rent' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: 'Confortable And Ample Apartment',
      price: '$1,600/mo',
      type: 'Apartment',
      status: 'For Rent' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 7,
      title: 'Penthouse Apartment',
      price: '$9,000/mo',
      type: 'Apartment',
      status: 'For Rent' as const,
      featured: true,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 8,
      title: 'Luxury Apartment With Pool',
      price: '$5,600/mo',
      type: 'Apartment',
      status: 'For Rent' as const,
      bedrooms: 4,
      bathrooms: 2,
      garage: 1,
      area: 1200,
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header - Fixed Background */}
      <section
        className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Our Properties For Rent</h1>
          <p className="text-lg md:text-xl uppercase tracking-[0.25em] font-light opacity-90">
            Discover exclusive places to live
          </p>
        </div>
      </section>

      {/* Results & Sorting */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-6">
            <div className="flex items-center gap-3 text-gray-800">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                <SlidersHorizontal className="w-5 h-5 text-lime-600" />
              </div>
              <p className="font-bold text-lg">
                <span className="text-lime-600">{properties.length}</span> Properties Available
              </p>
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-wider hidden md:block">
                Sort by:
              </label>
              <select className="w-full sm:w-56 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-lime-500 shadow-sm transition-all cursor-pointer">
                <option value="default">Default Order</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="transition-all duration-300 hover:-translate-y-2">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-20">
            <nav className="flex items-center gap-3 bg-white p-2.5 rounded-2xl shadow-md border border-gray-100">
              <button className="w-12 h-12 flex items-center justify-center bg-lime-500 text-white rounded-xl font-bold shadow-lg shadow-lime-500/30 transition-transform active:scale-95">
                1
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-white text-gray-500 hover:text-lime-600 hover:bg-lime-50 rounded-xl font-bold transition-all active:scale-95">
                2
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-white text-gray-500 hover:text-lime-600 hover:bg-lime-50 rounded-xl font-bold transition-all active:scale-95">
                3
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}