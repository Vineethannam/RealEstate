import { Search } from 'lucide-react';
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
    <div>
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Properties For Sale</h1>
          <p className="text-xl uppercase tracking-wide">Discover exclusive place to live</p>
        </div>
      </section>

      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search properties..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded"
              />
              <button className="px-8 py-3 bg-lime-500 text-white rounded hover:bg-lime-600 transition-colors flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">{properties.length} Properties</p>
            <select className="px-4 py-2 border border-gray-300 rounded">
              <option>Default Order</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600 transition-colors">
                1
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                4
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Property Type</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-lime-500">Apartment</span>
                <span className="text-gray-500">(30)</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-lime-500">Single Family Home</span>
                <span className="text-gray-500">(11)</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-lime-500">Villa</span>
                <span className="text-gray-500">(10)</span>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-lime-500">Loft</span>
                <span className="text-gray-500">(1)</span>
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
