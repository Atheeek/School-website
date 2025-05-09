import React, { useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import { BookOpen, MessageCircle, Users, Award, ArrowRight } from 'lucide-react';

const AcademicsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Academics | Excelsior Academy';
  }, []);

  const programs = [
    {
      id: 'elementary',
      name: 'Elementary School (K-5)',
      description: 'Our elementary program builds strong academic foundations while nurturing curiosity and a love of learning.',
      features: [
        'Project-based learning approach',
        'Strong focus on literacy and numeracy',
        'Science and social studies integration',
        'Arts and physical education',
        'Character development'
      ],
      courses: [
        'Language Arts', 'Mathematics', 'Science', 'Social Studies',
        'Art', 'Music', 'Physical Education', 'Spanish'
      ],
      image: 'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg'
    },
    {
      id: 'middle-school',
      name: 'Middle School (6-8)',
      description: 'Middle school students explore diverse subjects while developing critical thinking skills and personal responsibility.',
      features: [
        'Core academic subjects with increased depth',
        'Advisory program for personal development',
        'Expanded elective options',
        'Introduction to STEM and humanities tracks',
        'Leadership opportunities'
      ],
      courses: [
        'English', 'Mathematics', 'Science', 'History', 'World Languages',
        'Physical Education', 'Performing Arts', 'Visual Arts', 'Technology'
      ],
      image: 'https://images.pexels.com/photos/5211430/pexels-photo-5211430.jpeg'
    },
    {
      id: 'high-school',
      name: 'High School (9-12)',
      description: 'Our rigorous high school curriculum prepares students for college success through challenging academics and leadership opportunities.',
      features: [
        'College preparatory curriculum',
        'Advanced Placement (AP) and Honors courses',
        'Independent research opportunities',
        'College counseling program',
        'Internship and service learning requirements'
      ],
      courses: [
        'English Literature', 'Calculus', 'Physics', 'Chemistry', 'Biology',
        'World History', 'U.S. History', 'Government', 'Economics',
        'Spanish', 'French', 'Computer Science', 'Studio Art', 'Music Theory'
      ],
      image: 'https://images.pexels.com/photos/8617866/pexels-photo-8617866.jpeg'
    },
    {
      id: 'summer',
      name: 'Summer Programs',
      description: 'Enriching summer experiences that combine academic growth with fun activities to keep students engaged year-round.',
      features: [
        'Academic enrichment courses',
        'STEM and arts programs',
        'Sports camps and outdoor adventures',
        'College prep workshops',
        'Service learning opportunities'
      ],
      courses: [
        'Creative Writing', 'Robotics', 'Environmental Science',
        'Digital Media', 'Theater Arts', 'Sports Camps',
        'SAT/ACT Prep', 'College Essay Workshop'
      ],
      image: 'https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg'
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-primary-800 text-white py-24 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Academic Excellence</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Our comprehensive academic programs are designed to challenge, inspire, and prepare students for success in college and beyond.
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <SectionHeading 
                title="Our Educational Philosophy" 
                subtitle="At Excelsior Academy, we believe that education should develop the whole person—intellectually, socially, physically, and ethically."
              />
              <p className="text-gray-700 mb-4">
                Our approach to education combines academic rigor with experiential learning, encouraging students to apply knowledge to real-world situations and develop critical thinking skills. We recognize that each student is unique, with different strengths, interests, and learning styles.
              </p>
              <p className="text-gray-700">
                Through personalized attention, diverse teaching methods, and a supportive community, we help students discover their passions, develop their talents, and achieve their full potential. Our goal is to prepare students not just for college, but for a lifetime of learning, leadership, and meaningful contribution to society.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <BookOpen className="h-8 w-8 text-primary-800 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Academic Excellence</h3>
                  <p className="text-gray-700">Rigorous curriculum that challenges students to excel</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <MessageCircle className="h-8 w-8 text-primary-800 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Critical Thinking</h3>
                  <p className="text-gray-700">Developing analytical skills and independent thought</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <Users className="h-8 w-8 text-primary-800 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Collaboration</h3>
                  <p className="text-gray-700">Teamwork and collaborative problem-solving</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <Award className="h-8 w-8 text-primary-800 mb-3" />
                  <h3 className="font-bold text-lg mb-2">Character Development</h3>
                  <p className="text-gray-700">Cultivating integrity, empathy, and responsibility</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading 
              title="Our Academic Programs" 
              subtitle="From elementary to high school, our carefully designed programs nurture intellectual growth and personal development at every stage."
              centered
            />
          </AnimatedSection>

          {programs.map((program, index) => (
            <div id={program.id} key={program.id} className={`mb-16 ${index !== programs.length - 1 ? 'pb-16 border-b border-gray-200' : ''}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <AnimatedSection className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-800">{program.name}</h2>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  
                  <h3 className="font-bold text-lg mb-3">Program Features:</h3>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="font-bold text-lg mb-3">Sample Courses:</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.courses.map((course, i) => (
                      <span key={i} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                  
                  <a href="#" className="btn btn-primary">
                    Request Program Details
                  </a>
                </AnimatedSection>
                <AnimatedSection delay={0.2} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img 
                    src={program.image} 
                    alt={program.name} 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </AnimatedSection>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="section">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading 
              title="Curriculum Highlights" 
              subtitle="Our curriculum balances breadth and depth, providing students with both foundational knowledge and opportunities for specialized study."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="card h-full">
                <h3 className="text-xl font-bold mb-4 text-primary-800">STEM Excellence</h3>
                <p className="text-gray-700 mb-4">
                  Our STEM curriculum integrates science, technology, engineering, and mathematics, encouraging students to apply these disciplines to solve real-world problems. Advanced courses include AP Physics, Computer Science, and Robotics.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Hands-on laboratory experiences</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Coding and programming skills</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Engineering design challenges</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card h-full">
                <h3 className="text-xl font-bold mb-4 text-primary-800">Humanities & Social Sciences</h3>
                <p className="text-gray-700 mb-4">
                  Our humanities curriculum develops critical reading, writing, and analytical skills through the study of literature, history, philosophy, and the social sciences. Students learn to interpret texts, analyze historical events, and understand human cultures.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Literature across cultures and time periods</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced writing and research</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Global perspectives in history</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card h-full">
                <h3 className="text-xl font-bold mb-4 text-primary-800">Arts & Creative Expression</h3>
                <p className="text-gray-700 mb-4">
                  Our arts program encourages creative expression and artistic literacy through visual arts, music, theater, and dance. Students develop technical skills, aesthetic understanding, and the ability to express ideas through different media.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Studio art and portfolio development</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Instrumental and vocal music</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-secondary-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Theater production and performance</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-primary-800 text-white">
        <div className="container text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Learn More?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our admissions team to schedule a tour, request detailed program information, or begin the application process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="btn bg-white text-primary-800 hover:bg-gray-100">
                Request Information
              </a>
              <a href="/contact#admissions" className="btn btn-accent">
                Apply Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;