import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Calendar, Clock, MapPin, Users, Trophy, Palette, Activity, GraduationCap, Bell, Mail, Smartphone } from 'lucide-react';

const Events = () => {
  const { getThemeClasses } = useTheme();
  const theme = getThemeClasses();

  const upcomingEvents = [
    {
      id: 1,
      title: 'Science Fair',
      description: 'Student project showcase',
      date: { month: 'MAR', day: '15' },
      time: '9:00 AM - 4:00 PM',
      location: 'Main Gymnasium',
      category: 'academic',
      image: '/images/academics-6.avif'
    },
    {
      id: 2,
      title: 'Debate Tournament',
      description: 'Regional championships',
      date: { month: 'MAR', day: '22' },
      time: '8:00 AM - 6:00 PM',
      location: 'Auditorium',
      category: 'academic',
      image: '/images/academics-8.avif'
    },
    {
      id: 3,
      title: 'Art Exhibition',
      description: 'Student artwork displays',
      date: { month: 'APR', day: '5' },
      time: '6:00 PM - 9:00 PM',
      location: 'Art Gallery',
      category: 'arts',
      image: '/images/academics-2.avif'
    },
    {
      id: 4,
      title: 'Spring Concert',
      description: 'Music performances',
      date: { month: 'APR', day: '12' },
      time: '7:00 PM - 9:00 PM',
      location: 'Concert Hall',
      category: 'arts',
      image: '/images/academics-9.avif'
    },
    {
      id: 5,
      title: 'Sports Day',
      description: 'Athletic competitions',
      date: { month: 'APR', day: '20' },
      time: '8:00 AM - 5:00 PM',
      location: 'Sports Complex',
      category: 'sports',
      image: '/images/academics-4.avif'
    },
    {
      id: 6,
      title: 'Graduation',
      description: 'Class achievements',
      date: { month: 'MAY', day: '15' },
      time: '10:00 AM - 12:00 PM',
      location: 'Main Auditorium',
      category: 'community',
      image: '/images/academics-7.avif'
    }
  ];

  const eventCategories = [
    {
      id: 'academic',
      title: 'Academic',
      description: 'Science fairs, competitions',
      icon: <Trophy className="h-8 w-8" />,
      color: theme.primary
    },
    {
      id: 'arts',
      title: 'Arts & Culture',
      description: 'Exhibitions, concerts',
      icon: <Palette className="h-8 w-8" />,
      color: theme.primary
    },
    {
      id: 'sports',
      title: 'Sports',
      description: 'Athletic competitions',
      icon: <Activity className="h-8 w-8" />,
      color: theme.primary
    },
    {
      id: 'community',
      title: 'Community',
      description: 'Family events',
      icon: <Users className="h-8 w-8" />,
      color: theme.primary
    }
  ];

  const recentHighlights = [
    {
      title: 'Winter Festival 2024',
      description: 'Cultural celebration',
      date: 'February 2024',
      image: '/images/academics-2.avif'
    },
    {
      title: 'Math Olympiad Victory',
      description: 'Regional competition',
      date: 'January 2024',
      image: '/images/admission-3.avif'
    },
    {
      title: 'Holiday Concert',
      description: 'Music performances',
      date: 'December 2023',
      image: '/images/academics-9.avif'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/home-1.avif"
            alt="School events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">School Events</h1>
          <p className="text-xl md:text-2xl animate-fade-in-delay">Join Our Activities</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-${theme.primary} mb-16 animate-fade-in`}>
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in stagger-${(index % 6) + 1}`}>
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 bg-${theme.primary} text-white p-3 rounded-lg text-center animate-bounce-in`}>
                    <div className="text-xs font-semibold">{event.date.month}</div>
                    <div className="text-lg font-bold">{event.date.day}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold text-${theme.primary} mb-2`}>{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Clock className={`h-4 w-4 mr-2 text-${theme.primary}`} />
                      <span className={`text-${theme.primary}`}>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className={`h-4 w-4 mr-2 text-${theme.primary}`} />
                      <span className={`text-${theme.primary}`}>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-${theme.primary} mb-16 animate-fade-in`}>
            Event Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventCategories.map((category, index) => (
              <div key={category.id} className={`bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in stagger-${index + 1}`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-${theme.primaryLight} text-${theme.primary} rounded-full mb-6 animate-float`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold text-${theme.primary} mb-3`}>{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-${theme.primary} mb-16 animate-fade-in`}>
            Recent Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentHighlights.map((highlight, index) => (
              <div key={index} className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in stagger-${index + 1}`}>
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className={`text-lg font-bold mb-2 text-${theme.accent}`}>{highlight.title}</h4>
                  <p className={`text-sm mb-1 text-${theme.accent}`}>{highlight.description}</p>
                  <p className={`text-xs text-${theme.accent}`}>{highlight.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Stay Updated</h2>
              <p className="text-lg text-gray-600">
                Never miss important events with our calendar system.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: <Mail className="h-5 w-5" />, text: 'Email Notifications' },
                  { icon: <Calendar className="h-5 w-5" />, text: 'Calendar Integration' },
                  { icon: <Smartphone className="h-5 w-5" />, text: 'Mobile Reminders' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`text-${theme.primary}`}>{feature.icon}</div>
                    <span className={`text-${theme.primary} font-medium`}>{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <button className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center`}>
                <Bell className="h-5 w-5 mr-2" />
                Subscribe to Updates
              </button>
            </div>
            
            <div className="relative animate-slide-in-right">
              <img
                src="/images/events-1.avif"
                alt="Calendar"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className={`absolute top-6 right-6 bg-${theme.primary} text-white p-3 rounded-full animate-bounce-in`}>
                <Calendar className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;