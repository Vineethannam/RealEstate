import { Users, TrendingUp, BarChart3, Handshake, DollarSign, Scale } from 'lucide-react';

export default function About() {
  const services = [
    { icon: Users, title: 'Property Management', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
    { icon: TrendingUp, title: 'Capital Improvements', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
    { icon: BarChart3, title: 'Financial Reporting', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
    { icon: Handshake, title: 'Business Development', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
    { icon: DollarSign, title: 'Finance Real Estate', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
    { icon: Scale, title: 'Recover Asset Value', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy' },
  ];

  const team = [
    { name: 'Kathryn Wallace', role: 'Chair Manager', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Jerry Edwards', role: 'Sales Manager', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Virginia Holland', role: 'Real Estate Agent', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Donald Douglas', role: 'Marketing Strategist', image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400' },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Welcome to Houzez Real Estate Theme</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <service.icon className="w-16 h-16 text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 uppercase tracking-wide text-sm">
              You are only an email away from our support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">From Our Blog</h2>
            <p className="text-gray-600 uppercase tracking-wide text-sm">
              You are only an email away from our support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={`https://images.pexels.com/photos/${1571460 + item}/pexels-photo-${1571460 + item}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt="Blog post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span>March 9, 2016</span>
                    <span>Real Estate</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    10 Quick Tips About Business Development
                  </h3>
                  <p className="text-sm text-gray-600">by Martin Moore</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
