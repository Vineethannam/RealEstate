import { Bed, Bath, Car, Maximize, Heart, Eye } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  price: string;
  type: string;
  status: 'For Rent' | 'For Sale';
  featured?: boolean;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  area: number;
  image: string;
}

export default function PropertyCard({
  title,
  price,
  type,
  status,
  featured = false,
  bedrooms,
  bathrooms,
  garage,
  area,
  image,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {featured && (
            <span className="px-3 py-1 bg-lime-500 text-white text-xs font-semibold rounded">
              FEATURED
            </span>
          )}
          <span className="px-3 py-1 bg-gray-800 text-white text-xs font-semibold rounded">
            {status.toUpperCase()}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-10 h-10 bg-white rounded flex items-center justify-center hover:bg-lime-500 hover:text-white transition-colors">
            <Eye className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-white rounded flex items-center justify-center hover:bg-lime-500 hover:text-white transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-2xl font-bold text-gray-900 mb-2">{price}</p>
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">{type}</p>

        <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-gray-600">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{bedrooms}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{bathrooms}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Car className="w-4 h-4" />
            <span className="text-sm">{garage}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Maximize className="w-4 h-4" />
            <span className="text-sm">{area} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}
