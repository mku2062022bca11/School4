import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Award, Users, Star, TrendingUp } from 'lucide-react';

const Faculty = () => {
  const { getThemeClasses } = useTheme();
  const theme = getThemeClasses();

  const stats = [
    { icon: <Users className="h-8 w-8" />, number: '150+', label: 'Teachers' },
    { icon: <Award className="h-8 w-8" />, number: '95%', label: 'Advanced Degrees' },
    { icon: <TrendingUp className="h-8 w-8" />, number: '15', label: 'Years Experience' },
    { icon: <Star className="h-8 w-8" />, number: '98%', label: 'Parent Satisfaction' }
  ];

  const leadership = [
    {
      name: 'Dr. Michael Johnson',
      position: 'Principal',
      education: 'Ph.D. Educational Leadership, Harvard',
      experience: '20+ years in education',
      image: '/images/faculty-1.avif'
    },
    {
      name: 'Sarah Williams',
      position: 'Academic Director',
      education: 'M.Ed. Curriculum & Instruction, Stanford',
      experience: '15+ years in curriculum',
      image: '/images/faculty-3.avif'
    },
    {
      name: 'James Chen',
      position: 'STEM Coordinator',
      education: 'M.S. Computer Science, MIT',
      experience: '12+ years in technology',
      image: '/images/faculty-2.avif'
    }
  ];

  const departments = [
    {
      title: 'English & Literature',
      head: 'Ms. Emily Rodriguez',
      degree: 'M.A. English Literature',
      image: '/images/faculty-3.avif'
    },
    {
      title: 'Mathematics',
      head: 'Dr. Robert Kim',
      degree: 'Ph.D. Applied Mathematics',
      image: '/images/faculty-4.avif'
    },
    {
      title: 'Science',
      head: 'Dr. Lisa Thompson',
      degree: 'Ph.D. Biology',
      image: '/images/faculty-2.avif'
    },
    {
      title: 'Social Studies',
      head: 'Mr. David Martinez',
      degree: 'M.A. History',
      image: '/images/faculty-1.avif'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/faculty-bg.avif"
            alt="Faculty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Our Faculty</h1>
          <p className="text-xl md:text-2xl animate-fade-in-delay">Dedicated Educators</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
            {stats.map((stat, index) => (
              <div key={index} className={`bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-bounce-in stagger-${index + 1}`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${theme.primaryLight} text-${theme.primary} rounded-full mb-4 animate-float`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
            Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in stagger-${index + 1}`}>
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className={`text-${theme.primary} font-semibold mb-3`}>{leader.position}</p>
                  <p className={`text-${theme.primary} text-sm mb-2`}>{leader.education}</p>
                  <p className={`text-${theme.primary} text-sm`}>{leader.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Department Heads
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className={`text-lg font-bold mb-2 text-${theme.accent}`}>{dept.title}</h3>
                  <p className={`text-sm mb-1 text-${theme.accent}`}>{dept.head}</p>
                  <p className={`text-xs text-${theme.accent}`}>{dept.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Teaching Philosophy</h2>
              <p className="text-lg text-gray-600">
                Nurturing the whole child through innovative methods and personalized attention.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Innovative Methods',
                  'Student-Centered',
                  'Collaborative Learning',
                  'Continuous Growth'
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-${theme.primary} rounded-full`}></div>
                    <span className={`text-${theme.primary}`}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/images/about-2.avif"
                alt="Teachers collaborating"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;