import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-12 md:pt-32 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Where Learning Comes to Life
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            At Thajul Ulama English Medium School, we create a nurturing environment where young minds grow, explore, and thrive through engaging, hands-on learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/about" className="btn btn-accent">
              Discover Our School
            </Link>
            <Link to="/contact#admissions" className="btn btn-outline border-white text-white hover:bg-white/10">
              Apply Now
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-12 md:mt-20"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">35+</p>
            <p className="text-gray-200">Years of Excellence</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">15:1</p>
            <p className="text-gray-200">Student-Teacher Ratio</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">25+</p>
            <p className="text-gray-200">Enrichment Programs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">98%</p>
            <p className="text-gray-200">Parent Satisfaction</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="text-sm font-medium">Scroll Down</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
