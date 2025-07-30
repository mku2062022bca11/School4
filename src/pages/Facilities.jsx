import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Building, Beaker, Book, Laptop, Dumbbell, Palette, Music, Utensils } from 'lucide-react';

const Facilities = () => {
  const { getThemeClasses } = useTheme();
  const theme = getThemeClasses();

  const facilities = [
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Modern Classrooms',
      description: 'Smart boards and flexible seating',
      image: '/images/admission-2.avif'
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: 'Science Labs',
      description: 'Fully equipped laboratories',
      image: '/images/admission-3.avif'
    },
    {
      icon: <Book className="h-8 w-8" />,
      title: 'Digital Library',
      description: 'Extensive collection and study areas',
      image: '/images/faculty-1.avif'
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: 'Technology Center',
      description: 'Latest computers and equipment',
      image: '/images/academics-3.avif'
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: 'Athletic Complex',
      description: 'Gymnasium and sports fields',
      image: '/images/academics-4.avif'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Art Studios',
      description: 'Creative spaces for all arts',
      image: '/images/academics-2.avif'
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: 'Music Rooms',
      description: 'Sound-proof practice spaces',
      image: '/images/academics-9.avif'
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: 'Dining Hall',
      description: 'Healthy, locally-sourced meals',
      image: '/images/academics-7.avif'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/faculty-bg.avif"
            alt="Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">World-Class Facilities</h1>
          <p className="text-xl md:text-2xl animate-fade-in-delay">Modern Learning Spaces</p>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Campus</h2>
              <p className="text-lg text-gray-600">
                50 acres of beautiful grounds with state-of-the-art facilities designed to inspire learning.
              </p>
              
              <div className="grid grid-cols-3 gap-6 animate-scale-in">
                <div className={`text-center p-4 bg-${theme.primaryLight} rounded-xl hover-lift stagger-1`}>
                  <div className={`text-3xl font-bold text-${theme.primary}`}>50</div>
                  <div className="text-gray-600">Acres</div>
                </div>
                <div className={`text-center p-4 bg-${theme.primaryLight} rounded-xl hover-lift stagger-2`}>
                  <div className={`text-3xl font-bold text-${theme.primary}`}>25</div>
                  <div className="text-gray-600">Buildings</div>
                </div>
                <div className={`text-center p-4 bg-${theme.primaryLight} rounded-xl hover-lift stagger-3`}>
                  <div className={`text-3xl font-bold text-${theme.primary}`}>80+</div>
                  <div className="text-gray-600">Classrooms</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <img
                src="/images/faculty-bg.avif"
                alt="Campus aerial view"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
            Explore Our Facilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in stagger-${(index % 6) + 1}`}>
                <div className="relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 bg-${theme.primary} text-white p-2 rounded-full animate-bounce-in`}>
                    {facility.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-lg font-bold text-${theme.primary} mb-2`}>{facility.title}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Outdoor Learning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Outdoor Learning Spaces</h3>
              <p className="text-lg text-gray-600">
                Garden classrooms and nature trails for environmental education.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/facilities-1.avif"
                alt="Outdoor classroom"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Maker Space */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/facilities-2.avif"
                alt="Maker space"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Maker Space</h3>
              <p className="text-lg text-gray-600">
                Innovation hub for prototyping and creative problem-solving.
              </p>
            </div>
          </div>

          {/* Wellness Center */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Wellness Center</h3>
              <p className="text-lg text-gray-600">
                Counseling and health services to support student well-being.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/facilities-3.avif"
                alt="Wellness center"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Sustainable Campus</h2>
              <p className="text-lg text-gray-600">
                Environmental responsibility through green practices.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Solar Power',
                  'Recycling Program',
                  'LEED Certified',
                  'Water Conservation'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-${theme.primary} rounded-full`}></div>
                    <span className={`text-${theme.primary}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/facilities-4.avif"
                alt="Solar panels"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;