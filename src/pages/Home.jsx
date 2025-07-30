import React from 'react';
import { Link } from 'react-router-dom';
import { useSchool } from '../context/SchoolContext';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, Users, Award, Building } from 'lucide-react';

const Home = () => {
  const { schoolData } = useSchool();
  const { getThemeClasses } = useTheme();
  const theme = getThemeClasses();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home-1.avif"
            alt="Students in classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to {schoolData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            {schoolData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link
              to="/admission"
              className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-bounce-in`}
            >
              Apply Now
            </Link>
            <Link
              to="/about"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 animate-bounce-in stagger-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
            Explore Our School
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Admission Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 animate-scale-in stagger-1">
              <img
                src="/images/home-2.avif"
                alt="Admission"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Users className={`h-12 w-12 mb-4 text-${theme.primary} animate-float`} />
                <h3 className="text-2xl font-bold mb-2">Admission</h3>
                <p className="mb-4">Join our community</p>
                <Link
                  to="/admission"
                  className={`inline-flex items-center text-${theme.primary} hover:text-${theme.primaryHover} font-semibold`}
                >
                  Learn More <ArrowRight className={`ml-2 h-4 w-4 text-${theme.primary}`} />
                </Link>
              </div>
            </div>

            {/* Faculty Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 animate-scale-in stagger-2">
              <img
                src="/images/home-3.avif"
                alt="Faculty"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Award className={`h-12 w-12 mb-4 text-${theme.primary} animate-float stagger-1`} />
                <h3 className="text-2xl font-bold mb-2">Faculty</h3>
                <p className="mb-4">Expert educators</p>
                <Link
                  to="/faculty"
                  className={`inline-flex items-center text-${theme.primary} hover:text-${theme.primaryHover} font-semibold`}
                >
                  Learn More <ArrowRight className={`ml-2 h-4 w-4 text-${theme.primary}`} />
                </Link>
              </div>
            </div>

            {/* Facilities Card */}
            <div className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-105 animate-scale-in stagger-3">
              <img
                src="/images/home-4.avif"
                alt="Facilities"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Building className={`h-12 w-12 mb-4 text-${theme.primary} animate-float stagger-2`} />
                <h3 className="text-2xl font-bold mb-2">Facilities</h3>
                <p className="mb-4">Modern campus</p>
                <Link
                  to="/facilities"
                  className={`inline-flex items-center text-${theme.primary} hover:text-${theme.primaryHover} font-semibold`}
                >
                  Learn More <ArrowRight className={`ml-2 h-4 w-4 text-${theme.primary}`} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Excellence in Education */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-fade-in">
            <div className="space-y-6 animate-slide-in-left">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Excellence in Education
              </h3>
              <p className="text-lg text-gray-600">
                Comprehensive curriculum for success
              </p>
              <Link
                to="/academics"
                className={`inline-flex items-center bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}
              >
                Explore Programs <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="/images/home-5.avif"
                alt="Students studying"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Modern Learning */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="relative order-2 lg:order-1 animate-slide-in-left">
              <img
                src="/images/home-6.avif"
                alt="Modern classroom"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2 animate-slide-in-right">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                Modern Learning Environment
              </h3>
              <p className="text-lg text-gray-600">
                State-of-the-art facilities for innovation
              </p>
              <Link
                to="/facilities"
                className={`inline-flex items-center bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}
              >
                Tour Campus <ArrowRight className="ml-2 h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 bg-${theme.primary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white animate-fade-in">
            <div className="space-y-2 animate-bounce-in stagger-1">
              <div className={`text-4xl md:text-5xl font-bold text-${theme.accent}`}>{schoolData.stats.students}</div>
              <div className={`text-${theme.accent}`}>Students</div>
            </div>
            <div className="space-y-2 animate-bounce-in stagger-2">
              <div className={`text-4xl md:text-5xl font-bold text-${theme.accent}`}>{schoolData.stats.faculty}</div>
              <div className={`text-${theme.primary}-200`}>Faculty</div>
            </div>
            <div className="space-y-2 animate-bounce-in stagger-3">
              <div className={`text-4xl md:text-5xl font-bold text-${theme.accent}`}>{schoolData.stats.successRate}</div>
              <div className={`text-${theme.primary}-200`}>Success Rate</div>
            </div>
            <div className="space-y-2 animate-bounce-in stagger-4">
              <div className={`text-4xl md:text-5xl font-bold text-${theme.accent}`}>{schoolData.stats.years}</div>
              <div className={`text-${theme.primary}-200`}>Years</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;