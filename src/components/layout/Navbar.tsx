import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navLinks = [
    { 
      name: 'Home', 
      path: '/' 
    },
    { 
      name: 'About', 
      path: '/about',
      dropdown: [
        { name: 'Our History', path: '/about#history' },
        { name: 'Mission & Values', path: '/about#mission' },
        { name: 'Campus', path: '/about#campus' },
      ]
    },
    { 
      name: 'Academics', 
      path: '/academics',
      dropdown: [
        { name: 'Elementary', path: '/academics#elementary' },
        { name: 'Middle School', path: '/academics#middle-school' },
        { name: 'High School', path: '/academics#high-school' },
        { name: 'Curriculum', path: '/academics#curriculum' },
      ]
    },
    { 
      name: 'Faculty', 
      path: '/faculty' 
    },
    { 
      name: 'News', 
      path: '/news' 
    },
    { 
      name: 'Contact', 
      path: '/contact' 
    },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <GraduationCap size={32} className={`${isScrolled ? 'text-primary-800' : 'text-white'}`} />
          <span className={`text-xl font-serif font-bold ${isScrolled ? 'text-primary-800' : 'text-white'}`}>
            CDAC Academy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.dropdown ? (
                <div className="group">
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex items-center space-x-1 px-1 py-2 font-medium hover:text-accent-500 transition-colors ${
                      location.pathname === link.path ? 'text-accent-500' : isScrolled ? 'text-gray-800' : 'text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown size={16} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-800 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`px-1 py-2 font-medium hover:text-accent-500 transition-colors ${
                    location.pathname === link.path ? 'text-accent-500' : isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link 
            to="/contact#admissions" 
            className="btn btn-accent"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 focus:outline-none"
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container py-4 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 pb-2">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="flex items-center justify-between w-full py-2 font-medium text-gray-800"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-4 space-y-2 my-2"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                className="block py-2 text-gray-600 hover:text-primary-800"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="block py-2 font-medium text-gray-800 hover:text-primary-800"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact#admissions"
                className="block w-full text-center btn btn-accent"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;