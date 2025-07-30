import React from 'react';
import { Link } from 'react-router-dom';
import { useSchool } from '../context/SchoolContext';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const { schoolData } = useSchool();
  const { changeTheme, currentTheme, getThemeClasses } = useTheme();
  const theme = getThemeClasses();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className={`h-8 w-8 text-${theme.accent}`} />
              <span className="text-xl font-bold">{schoolData.name}</span>
            </div>
            <p className="text-gray-300 text-sm">
              {schoolData.tagline} since {schoolData.foundedYear}
            </p>
            <div className="flex space-x-4">
              <Facebook className={`h-5 w-5 text-${theme.primary} hover:text-${theme.primaryHover} cursor-pointer transition-colors`} />
              <Twitter className={`h-5 w-5 text-${theme.primary} hover:text-${theme.primaryHover} cursor-pointer transition-colors`} />
              <Instagram className={`h-5 w-5 text-${theme.primary} hover:text-${theme.primaryHover} cursor-pointer transition-colors`} />
              <Youtube className={`h-5 w-5 text-${theme.primary} hover:text-${theme.primaryHover} cursor-pointer transition-colors`} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 text-${theme.primary}`}>Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className={`text-gray-300 hover:text-${theme.primary} transition-colors`}>About Us</Link></li>
              <li><Link to="/admission" className={`text-gray-300 hover:text-${theme.primary} transition-colors`}>Admission</Link></li>
              <li><Link to="/academics" className={`text-gray-300 hover:text-${theme.primary} transition-colors`}>Academics</Link></li>
              <li><Link to="/faculty" className={`text-gray-300 hover:text-${theme.primary} transition-colors`}>Faculty</Link></li>
            </ul>
          </div>

          {/* Campus */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 text-${theme.primary}`}>Campus</h4>
            <ul className="space-y-2">
              <li><Link to="/facilities" className={`text-gray-300 hover:text-${theme.primary} transition-colors`}>Facilities</Link></li>
              <li><Link to="/events" className={`text-gray-300 hover:text-${theme.primary} transition-colors`}>Events</Link></li>
              <li><Link to="/gallery" className={`text-gray-300 hover:text-${theme.primary} transition-colors`}>Gallery</Link></li>
              <li><Link to="/contact" className={`text-gray-300 hover:text-${theme.primary} transition-colors`}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-4 text-${theme.primary}`}>Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className={`h-4 w-4 text-${theme.primary}`} />
                <span className="text-gray-300 text-sm">{schoolData.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className={`h-4 w-4 text-${theme.primary}`} />
                <span className="text-gray-300 text-sm">{schoolData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className={`h-4 w-4 text-${theme.primary}`} />
                <span className="text-gray-300 text-sm">{schoolData.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Color Theme Switcher */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <span className="text-gray-400 text-sm">Theme:</span>
            <div className="flex space-x-3">
              <button
                onClick={() => changeTheme('blue')}
                className={`w-8 h-8 rounded-full bg-blue-600 hover:scale-110 transition-transform duration-200 ${
                  currentTheme === 'blue' ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900' : ''
                }`}
                title="Blue Theme"
              />
              <button
                onClick={() => changeTheme('green')}
                className={`w-8 h-8 rounded-full bg-green-600 hover:scale-110 transition-transform duration-200 ${
                  currentTheme === 'green' ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900' : ''
                }`}
                title="Green Theme"
              />
              <button
                onClick={() => changeTheme('purple')}
                className={`w-8 h-8 rounded-full bg-purple-600 hover:scale-110 transition-transform duration-200 ${
                  currentTheme === 'purple' ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900' : ''
                }`}
                title="Purple Theme"
              />
              <button
                onClick={() => changeTheme('red')}
                className={`w-8 h-8 rounded-full bg-red-600 hover:scale-110 transition-transform duration-200 ${
                  currentTheme === 'red' ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-900' : ''
                }`}
                title="Red Theme"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 {schoolData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;