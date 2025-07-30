import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSchool } from '../context/SchoolContext';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { schoolData } = useSchool();
  const { getThemeClasses } = useTheme();
  const theme = getThemeClasses();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/admission', label: 'Admission' },
    { path: '/academics', label: 'Academics' },
    { path: '/faculty', label: 'Faculty' },
    { path: '/facilities', label: 'Facilities' },
    { path: '/events', label: 'Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className={`h-8 w-8 text-${theme.primary}`} />
            <span className="text-xl font-bold text-gray-900">{schoolData.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? `text-${theme.primary} border-b-2 border-${theme.primary}`
                    : `text-gray-700 hover:text-${theme.primary}`
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md text-gray-700 hover:text-${theme.primary} hover:bg-gray-100`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? `text-${theme.primary} bg-${theme.primaryLight}`
                      : `text-gray-700 hover:text-${theme.primary} hover:bg-gray-50`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;