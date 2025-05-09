import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/8617684/pexels-photo-8617684.jpeg')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-primary-800 bg-opacity-80"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Ready to Join Our Community?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-8"
          >
            Discover the Excelsior difference. Schedule a tour, learn about our admission process, or connect with our admissions team.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/about" className="btn btn-accent">
              Explore Our Programs
            </Link>
            <Link to="/contact#admissions" className="btn bg-white text-primary-800 hover:bg-gray-100">
              Apply Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;