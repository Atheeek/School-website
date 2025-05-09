import React, { useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import { Check, Award, Users, BookOpen } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Excelsior Academy';
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="bg-primary-800 text-white py-24 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">About Excelsior Academy</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Discover our rich history, mission, and the values that guide everything we do.
          </p>
        </div>
      </div>

      {/* History Section */}
      <section id="history" className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <SectionHeading 
                title="Our History" 
                subtitle="Founded in 1985, Excelsior Academy has grown from a small school with just 50 students to one of the region's most respected educational institutions."
              />
              <p className="text-gray-700 mb-4">
                What began as a vision to provide an alternative to traditional education has evolved into a comprehensive academic program that serves students from kindergarten through 12th grade. Our founder, Dr. Eleanor Mitchell, believed in creating a school that combined academic rigor with character development and real-world experiences.
              </p>
              <p className="text-gray-700 mb-4">
                Throughout our history, we've remained committed to our founding principles while adapting to meet the changing needs of students in an increasingly complex world. Our graduates have gone on to attend prestigious universities and become leaders in their fields.
              </p>
              <p className="text-gray-700">
                Today, Excelsior Academy continues to build on its strong foundation, embracing innovation while honoring tradition as we prepare students for the challenges and opportunities of the 21st century.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg" 
                  alt="Historic campus building" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 right-4 bg-white p-4 rounded shadow-md">
                  <span className="text-primary-800 font-bold">Since 1985</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section id="mission" className="section bg-gray-50">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading 
              title="Our Mission & Values" 
              subtitle="We are dedicated to providing an exceptional education that empowers students to become thoughtful, ethical, and engaged citizens."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection delay={0.1}>
              <div className="card h-full flex flex-col items-center text-center p-8">
                <Award className="w-12 h-12 text-primary-800 mb-4" />
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We set high standards and support our students in reaching their full potential academically, artistically, athletically, and personally.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card h-full flex flex-col items-center text-center p-8">
                <BookOpen className="w-12 h-12 text-primary-800 mb-4" />
                <h3 className="text-xl font-bold mb-4">Curiosity</h3>
                <p className="text-gray-600">
                  We foster a love of learning, encouraging students to ask questions, think critically, and explore diverse perspectives.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card h-full flex flex-col items-center text-center p-8">
                <Users className="w-12 h-12 text-primary-800 mb-4" />
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <p className="text-gray-600">
                  We build meaningful relationships and create an inclusive environment where each person is valued and respected.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="card h-full flex flex-col items-center text-center p-8">
                <Check className="w-12 h-12 text-primary-800 mb-4" />
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We cultivate ethical decision-making, honesty, and responsibility in all aspects of school life.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Campus Section */}
      <section id="campus" className="section">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading 
              title="Our Campus" 
              subtitle="Situated on 25 beautiful acres, our campus provides an ideal environment for learning, exploration, and growth."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <AnimatedSection>
              <div className="card overflow-hidden h-full">
                <img 
                  src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg" 
                  alt="Academic building" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Academic Facilities</h3>
                  <p className="text-gray-600">
                    Our classrooms, labs, and learning spaces are designed to support collaborative and innovative teaching methods. Each space is equipped with the latest technology and resources to enhance the learning experience.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card overflow-hidden h-full">
                <img 
                  src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg" 
                  alt="Library" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Library & Media Center</h3>
                  <p className="text-gray-600">
                    Our state-of-the-art library houses an extensive collection of books, digital resources, and multimedia materials. It serves as a hub for research, reading, and collaborative projects.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card overflow-hidden h-full">
                <img 
                  src="https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg" 
                  alt="Athletic facilities" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Athletic Facilities</h3>
                  <p className="text-gray-600">
                    Our comprehensive athletic facilities include a gymnasium, fitness center, tennis courts, and fields for various sports. These spaces support our physical education program and competitive athletics.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="card overflow-hidden h-full">
                <img 
                  src="https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg" 
                  alt="Arts center" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Arts Center</h3>
                  <p className="text-gray-600">
                    Our dedicated arts center features studios for visual arts, music practice rooms, a dance studio, and a theater for performances. These spaces nurture creativity and artistic expression.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center">
            <a href="#" className="btn btn-primary">
              Schedule a Campus Tour
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimatedSection className="max-w-3xl mx-auto mb-12">
            <SectionHeading 
              title="School Leadership" 
              subtitle="Our experienced leadership team is committed to upholding our mission and guiding our school community."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="card text-center overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg" 
                  alt="Dr. Jonathan Pierce" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Jonathan Pierce</h3>
                  <p className="text-primary-600 mb-4">Head of School</p>
                  <p className="text-gray-600">
                    With over 25 years in education, Dr. Pierce brings a wealth of experience and a passion for fostering excellence in teaching and learning.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card text-center overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg" 
                  alt="Dr. Maya Rodriguez" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Dr. Maya Rodriguez</h3>
                  <p className="text-primary-600 mb-4">Academic Dean</p>
                  <p className="text-gray-600">
                    Dr. Rodriguez leads our academic programs with expertise in curriculum development and educational innovation.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card text-center overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6325973/pexels-photo-6325973.jpeg" 
                  alt="Mr. David Chen" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Mr. David Chen</h3>
                  <p className="text-primary-600 mb-4">Director of Student Life</p>
                  <p className="text-gray-600">
                    Mr. Chen oversees student activities, community service, and leadership development programs.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;