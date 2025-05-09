import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';

const programs = [
  {
    id: 1,
    title: 'Early Years (Ages 3-5)',
    description: 'A nurturing environment where young children develop social skills and a love for learning through play-based activities.',
    image: 'https://images.pexels.com/photos/8613933/pexels-photo-8613933.jpeg',
    link: '/academics#early-years'
  },
  {
    id: 2,
    title: 'Lower Primary (Grades 1-3)',
    description: 'Building strong foundations in literacy and numeracy while encouraging creativity and critical thinking.',
    image: 'https://images.pexels.com/photos/8613188/pexels-photo-8613188.jpeg',
    link: '/academics#lower-primary'
  },
  {
    id: 3,
    title: 'Upper Primary (Grades 4-6)',
    description: 'Developing independent learning skills and deeper subject knowledge through engaging, project-based learning.',
    image: 'https://images.pexels.com/photos/8612900/pexels-photo-8612900.jpeg',
    link: '/academics#upper-primary'
  },
  {
    id: 4,
    title: 'After-School Programs',
    description: 'Enriching activities including arts, sports, music, and academic support to complement the regular school day.',
    image: 'https://images.pexels.com/photos/8613261/pexels-photo-8613261.jpeg',
    link: '/academics#after-school'
  }
];

const Programs: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            title="Our Learning Programs"
            subtitle="Discover our comprehensive programs designed to nurture every child's unique potential and foster a love for learning."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {programs.map((program, index) => (
            <AnimatedSection key={program.id} delay={index * 0.1}>
              <div className="program-card h-full flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-48 object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{program.description}</p>
                  <Link 
                    to={program.link}
                    className="text-primary-800 font-medium hover:text-primary-600 inline-flex items-center"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link to="/academics" className="btn btn-primary">
            Explore All Programs
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Programs;