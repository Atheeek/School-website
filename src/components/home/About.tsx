import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    'Engaging, hands-on learning environment',
    'Dedicated, experienced teachers',
    'Small class sizes for individual attention',
    'Creative arts and music programs',
    'Safe and nurturing atmosphere',
    'Regular outdoor activities'
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/8613165/pexels-photo-8613165.jpeg" 
                alt="Children Learning" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-lg font-bold">Established 2000</p>
                <p>Nurturing Young Minds</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <SectionHeading
              title="Why Choose Cdac Academy"
              subtitle="We create a joyful learning environment where children develop curiosity, confidence, and a love for learning that lasts a lifetime."
            />

            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;