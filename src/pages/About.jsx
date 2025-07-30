import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Lightbulb, Users, Trophy, Globe } from 'lucide-react';

const About = () => {
  const { getThemeClasses } = useTheme();
  const theme = getThemeClasses();

  const values = [
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: 'Innovation',
      description: 'Embracing new teaching methods'
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Community',
      description: 'Building strong relationships'
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: 'Excellence',
      description: 'Highest standards in education'
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Global Perspective',
      description: 'Preparing global citizens'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/about-1.avif"
            alt="School building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">About Us</h1>
          <p className="text-xl md:text-2xl animate-fade-in-delay">Excellence Since 1985</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600">
                Four decades of educational excellence, nurturing young minds and shaping future leaders.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mt-8 animate-scale-in">
                <div className={`text-center p-4 bg-${theme.primaryLight} rounded-xl hover-lift stagger-1`}>
                  <div className={`text-3xl font-bold text-${theme.primary}`}>2,500+</div>
                  <div className="text-gray-600">Students</div>
                </div>
                <div className={`text-center p-4 bg-${theme.primaryLight} rounded-xl hover-lift stagger-2`}>
                  <div className={`text-3xl font-bold text-${theme.primary}`}>150+</div>
                  <div className="text-gray-600">Faculty</div>
                </div>
                <div className={`text-center p-4 bg-${theme.primaryLight} rounded-xl hover-lift stagger-3`}>
                  <div className={`text-3xl font-bold text-${theme.primary}`}>95%</div>
                  <div className="text-gray-600">Success</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <img
                src="/images/about-2.avif"
                alt="Students collaborating"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in stagger-${index + 1}`}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-${theme.primaryLight} text-${theme.primary} rounded-full mb-6 animate-float`}>
                  {value.icon}
                </div>
                <h3 className={`text-xl font-bold text-${theme.primary} mb-3`}>{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-${theme.primaryLight} text-${theme.primary} rounded-full mb-4`}>
                <Trophy className={`h-8 w-8 text-${theme.primary}`} />
              </div>
              <h3 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Our Mission</h3>
              <p className="text-lg text-gray-600">
                Nurturing environment where every student achieves their full potential through innovative education.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/about-3.avif"
                alt="Graduation ceremony"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/images/about-4.avif"
                alt="Students in classroom"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-${theme.primaryLight} text-${theme.primary} rounded-full mb-4`}>
                <Globe className={`h-8 w-8 text-${theme.primary}`} />
              </div>
              <h3 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Our Vision</h3>
              <p className="text-lg text-gray-600">
                Leading educational institution inspiring lifelong learning and positive contribution to society.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;