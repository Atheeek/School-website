import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Excelsior Academy provided my children with an exceptional education. The teachers are outstanding and truly care about each student's success. The rigorous curriculum prepared my daughter well for college, and she received multiple scholarship offers.",
    name: "Jennifer Anderson",
    role: "Parent of Alumni",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
  },
  {
    id: 2,
    text: "As an alumnus, I can confidently say that my time at Excelsior Academy shaped who I am today. The school nurtured not only my academic abilities but also instilled important values and leadership skills that have been invaluable in my career.",
    name: "Michael Ramirez",
    role: "Class of 2015",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    id: 3,
    text: "The faculty at Excelsior Academy is second to none. They challenged me to think critically and pushed me to achieve more than I thought possible. The school's emphasis on both academic excellence and personal growth created a truly transformative educational experience.",
    name: "Sarah Johnson",
    role: "Current Student",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-primary-800 text-white">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            title="What Our Community Says"
            subtitle="Don't just take our word for it. Hear from our students, parents, and alumni about their experiences at Excelsior Academy."
            centered
            light
          />
        </AnimatedSection>

        <div className="mt-12 relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <div className="md:w-1/3">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-64 md:h-full object-cover" 
                />
              </div>
              <div className="p-8 md:w-2/3 relative">
                <Quote className="text-accent-500 w-12 h-12 mb-4 opacity-50" />
                <p className="text-lg md:text-xl mb-6">
                  {testimonials[currentIndex].text}
                </p>
                <div>
                  <p className="font-bold text-xl">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-300">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors focus:outline-none ${
                    index === currentIndex ? 'bg-accent-500' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;