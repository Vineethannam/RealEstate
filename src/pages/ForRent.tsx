import { Search } from 'lucide-react';
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
    <div>
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Properties For Rent</h1>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
