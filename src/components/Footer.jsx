import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme, switchTheme, themes } = useTheme();

  const themeColors = [
    { name: 'green', color: 'bg-green-600', label: '🟢' },
    { name: 'blue', color: 'bg-blue-600', label: '🔵' },
    { name: 'purple', color: 'bg-purple-600', label: '🟣' },
    { name: 'red', color: 'bg-red-600', label: '🔴' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className={`h-8 w-8 ${theme.textPrimary}`} />
              <span className="text-xl font-bold">QB365 Public School</span>
            </div>
            <p className="text-gray-300">
              Excellence in Education. Shaping Future Leaders through Quality Learning and Character Building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme.textPrimary}`}>Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-300 hover:text-white transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="text-gray-300 hover:text-white transition-colors">Admissions</Link></li>
              <li><Link to="/activities" className="text-gray-300 hover:text-white transition-colors">Activities</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme.textPrimary}`}>Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">info@qb365school.edu</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-gray-300">123 Education Street, Learning City</span>
              </li>
            </ul>
          </div>

          {/* Theme Switcher */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${theme.textPrimary}`}>Theme Colors</h3>
            <div className="flex space-x-3">
              {themeColors.map((themeColor) => (
                <button
                  key={themeColor.name}
                  onClick={() => switchTheme(themeColor.name)}
                  className={`w-10 h-10 rounded-full ${themeColor.color} hover:scale-110 transition-transform flex items-center justify-center text-white font-bold`}
                  title={`Switch to ${themeColor.name} theme`}
                >
                  {themeColor.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 QB365 Public School. All rights reserved. | 
            <Link to="/mandatory-disclosure" className={`ml-2 ${theme.textPrimary} hover:underline`}>
              Mandatory Public Disclosure
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;