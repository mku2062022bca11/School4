import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Book, Palette, Laptop, Activity, Globe, Microscope } from 'lucide-react';

const Academics = () => {
  const { getThemeClasses } = useTheme();
  const theme = getThemeClasses();

  const programs = [
    {
      icon: <Book className="h-8 w-8" />,
      title: 'Core Curriculum',
      description: 'Math, Science, English, Social Studies',
      image: '/images/academics-1.avif'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Arts Program',
      description: 'Visual Arts, Music, Drama',
      image: '/images/academics-2.avif'
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: 'Technology',
      description: 'Computer Science, Robotics',
      image: '/images/academics-3.avif'
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Athletics',
      description: 'Sports Teams, Physical Education',
      image: '/images/academics-4.avif'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'World Languages',
      description: 'Spanish, French, Mandarin',
      image: '/images/academics-5.avif'
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: 'STEM Focus',
      description: 'Advanced Science & Engineering',
      image: '/images/academics-6.avif'
    }
  ];

  const extracurriculars = [
    {
      title: 'Science Club',
      description: 'Hands-on experiments',
      image: '/images/academics-7.avif'
    },
    {
      title: 'Debate Team',
      description: 'Critical thinking skills',
      image: '/images/academics-8.avif'
    },
    {
      title: 'Music Program',
      description: 'Orchestra, band, choir',
      image: '/images/academics-9.avif'
    },
    {
      title: 'Student Council',
      description: 'Leadership development',
      image: '/images/academics-10.avif'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/admission-2.avif"
            alt="Classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Academic Excellence</h1>
          <p className="text-xl md:text-2xl animate-fade-in-delay">Comprehensive Programs</p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
            Our Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in stagger-${(index % 6) + 1}`}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 bg-${theme.primary} text-white p-3 rounded-full animate-bounce-in`}>
                  {program.icon}
                </div>
                <div className="p-6 bg-white">
                  <h3 className={`text-xl font-bold text-${theme.primary} mb-2`}>{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Small Class Sizes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Small Class Sizes</h3>
              <p className="text-lg text-gray-600">
                18 students per class for personalized attention
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className={`text-4xl font-bold text-${theme.primary}`}>18:1</div>
                <div className={`text-${theme.primary}`}>Student-Teacher Ratio</div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about-2.avif"
                alt="Small classroom"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Advanced Placement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/admission-3.avif"
                alt="Advanced studies"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Advanced Placement</h3>
              <p className="text-lg text-gray-600">
                15+ AP courses for college credit
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className={`text-4xl font-bold text-${theme.primary}`}>15+</div>
                <div className={`text-${theme.primary}`}>AP Courses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extracurriculars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Beyond the Classroom
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extracurriculars.map((activity, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className={`text-lg font-bold mb-2 text-${theme.accent}`}>{activity.title}</h4>
                  <p className="text-sm">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;