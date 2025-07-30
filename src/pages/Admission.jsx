import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FileText, ClipboardCheck, CheckCircle, Calendar, Clock, Users } from 'lucide-react';

const Admission = () => {
  const { getThemeClasses } = useTheme();
  const theme = getThemeClasses();

  const steps = [
    { icon: <FileText className="h-12 w-12" />, title: 'Application', description: 'Submit online application' },
    { icon: <ClipboardCheck className="h-12 w-12" />, title: 'Assessment', description: 'Complete entrance test' },
    { icon: <CheckCircle className="h-12 w-12" />, title: 'Acceptance', description: 'Receive acceptance letter' }
  ];

  const grades = [
    {
      title: 'Elementary (K-5)',
      image: '/images/admission-1.avif',
      ages: 'Ages 5-10',
      time: '8:00 AM - 3:00 PM'
    },
    {
      title: 'Middle School (6-8)',
      image: '/images/admission-2.avif',
      ages: 'Ages 11-13',
      time: '8:00 AM - 3:30 PM'
    },
    {
      title: 'High School (9-12)',
      image: '/images/admission-1.avif',
      ages: 'Ages 14-18',
      time: '8:00 AM - 4:00 PM'
    }
  ];

  const dates = [
    { icon: <Calendar className="h-8 w-8" />, title: 'Application Opens', date: 'November 1, 2024' },
    { icon: <Calendar className="h-8 w-8" />, title: 'Application Deadline', date: 'February 15, 2025' },
    { icon: <Users className="h-8 w-8" />, title: 'Interviews', date: 'March 1-31, 2025' },
    { icon: <CheckCircle className="h-8 w-8" />, title: 'Notifications', date: 'April 15, 2025' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/admission-4.avif"
            alt="Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Join Our Community</h1>
          <p className="text-xl md:text-2xl animate-fade-in-delay">Start Your Journey Today</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
            Admission Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className={`text-center group animate-scale-in stagger-${index + 1}`}>
                <div className={`inline-flex items-center justify-center w-24 h-24 bg-${theme.primaryLight} text-${theme.primary} rounded-full mb-6 group-hover:bg-${theme.primary} group-hover:text-white transition-all duration-300 animate-float`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">
            Grade Levels
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grades.map((grade, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in stagger-${index + 1}`}>
                <img
                  src={grade.image}
                  alt={grade.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{grade.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Users className={`h-4 w-4 mr-2 text-${theme.primary}`} />
                      <span>{grade.ages}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className={`h-4 w-4 mr-2 text-${theme.primary}`} />
                      <span className={`text-${theme.primary}`}>{grade.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className={`text-3xl md:text-4xl font-bold text-${theme.primary}`}>Requirements</h2>
              <ul className="space-y-3">
                {[
                  'Completed application form',
                  'Academic transcripts',
                  'Birth certificate',
                  'Immunization records',
                  'Two recommendation letters',
                  'Application fee'
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <CheckCircle className={`h-5 w-5 text-${theme.primary} mr-3`} />
                    <span className={`text-${theme.primary}`}>{item}</span>
                  </li>
                ))}
              </ul>
              <button className={`bg-${theme.primary} hover:bg-${theme.primaryHover} text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                Download Application
              </button>
            </div>
            
            <div className="relative">
              <img
                src="/images/admission-3.avif"
                alt="Students studying"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Important Dates
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dates.map((date, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${theme.primaryLight} text-${theme.primary} rounded-full mb-4`}>
                  {date.icon}
                </div>
                <h3 className={`text-lg font-bold text-${theme.primary} mb-2`}>{date.title}</h3>
                <p className={`text-${theme.primary} font-semibold`}>{date.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;