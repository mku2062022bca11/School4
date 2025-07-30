import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Eye } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { getThemeClasses } = useTheme();
  const theme = getThemeClasses();

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'campus', label: 'Campus Life' },
    { id: 'academics', label: 'Academics' },
    { id: 'sports', label: 'Sports' },
    { id: 'events', label: 'Events' },
    { id: 'arts', label: 'Arts' }
  ];

  const photos = [
    {
      id: 1,
      category: 'campus',
      title: 'Main Campus',
      description: 'Beautiful architecture',
      image: '/images/home-2.avif'
    },
    {
      id: 2,
      category: 'academics',
      title: 'Interactive Learning',
      description: 'Modern classrooms',
      image: '/images/admission-2.avif'
    },
    {
      id: 3,
      category: 'sports',
      title: 'Athletic Excellence',
      description: 'Sports competitions',
      image: '/images/academics-4.avif'
    },
    {
      id: 4,
      category: 'events',
      title: 'Science Fair',
      description: 'Student innovations',
      image: '/images/home-1.avif'
    },
    {
      id: 5,
      category: 'arts',
      title: 'Creative Expression',
      description: 'Art classes',
      image: '/images/admission-3.avif'
    },
    {
      id: 6,
      category: 'academics',
      title: 'Science Laboratory',
      description: 'Hands-on experiments',
      image: '/images/academics-5.avif'
    },
    {
      id: 7,
      category: 'campus',
      title: 'Digital Library',
      description: 'Study spaces',
      image: '/images/faculty-1.avif'
    },
    {
      id: 8,
      category: 'arts',
      title: 'Music Concert',
      description: 'Student performances',
      image: '/images/academics-9.avif'
    },
    {
      id: 9,
      category: 'events',
      title: 'Graduation Day',
      description: 'Student achievements',
      image: '/images/academics-7.avif'
    },
    {
      id: 10,
      category: 'academics',
      title: 'Technology Center',
      description: 'Digital learning',
      image: '/images/academics-3.avif'
    },
    {
      id: 11,
      category: 'campus',
      title: 'Student Collaboration',
      description: 'Working together',
      image: '/images/about-2.avif'
    },
    {
      id: 12,
      category: 'sports',
      title: 'Basketball Team',
      description: 'Championship victory',
      image: '/images/academics-10.avif'
    },
    {
      id: 13,
      category: 'events',
      title: 'Academic Bowl',
      description: 'Competition winners',
      image: '/images/home-3.avif'
    },
    {
      id: 14,
      category: 'arts',
      title: 'Theater Production',
      description: 'Drama performance',
      image: '/images/academics-8.avif'
    },
    {
      id: 15,
      category: 'campus',
      title: 'Outdoor Classroom',
      description: 'Learning in nature',
      image: '/images/facilities-1.avif'
    },
    {
      id: 16,
      category: 'academics',
      title: 'Debate Competition',
      description: 'Critical thinking',
      image: '/images/events-1.avif'
    }
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="images/about-2.avif"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Photo Gallery</h1>
          <p className="text-xl md:text-2xl animate-fade-in-delay">Capturing Memories</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? `bg-${theme.primary} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${(photo.id % 8) * 0.1}s` }}
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className={`h-8 w-8 text-${theme.accent} animate-bounce-in`} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className={`font-bold mb-1 text-${theme.accent}`}>{photo.title}</h4>
                  <p className={`text-sm text-${theme.accent}`}>{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Virtual Campus Tour</h2>
              <p className="text-lg text-gray-600">
                Explore our facilities with interactive 360° views.
              </p>
              
              <div className="space-y-3">
                {[
                  '360° Views',
                  'Interactive Elements',
                  'Mobile Friendly'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-${theme.primary} rounded-full`}></div>
                    <span className={`text-${theme.primary}`}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                Start Virtual Tour
              </button>
            </div>
            
            <div className="relative">
              <img
                src="/images/gallery-1.avif"
                alt="Virtual tour"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;