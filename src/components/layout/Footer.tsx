import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container">
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and About */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap size={32} />
                <span className="text-xl font-serif font-bold">Excelsior Academy</span>
              </div>
              <p className="text-gray-300">
                Providing exceptional education and nurturing future leaders since 1985.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="hover:text-accent-500 transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-accent-500 transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-accent-500 transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-accent-500 transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-accent-500 transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/academics" className="text-gray-300 hover:text-accent-500 transition-colors">Academics</Link>
                </li>
                <li>
                  <Link to="/faculty" className="text-gray-300 hover:text-accent-500 transition-colors">Faculty</Link>
                </li>
                <li>
                  <Link to="/news" className="text-gray-300 hover:text-accent-500 transition-colors">News & Events</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-accent-500 transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">Parent Portal</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">Student Resources</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">Campus Map</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">Calendar</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">Library</a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin size={20} className="flex-shrink-0 mt-1" />
                  <span>123 Education Lane, Academicville, CA 90210</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={20} />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={20} />
                  <span>info@excelsior-academy.edu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700 text-center md:flex md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} Excelsior Academy. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;