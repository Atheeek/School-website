import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import { Mail, Phone, MapPin, Clock, Send, User, UserCheck } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    relationship: 'Prospective Parent'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Excelsior Academy';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would send the form data to a server
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        relationship: 'Prospective Parent'
      });
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-primary-800 text-white py-24 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            We're here to answer your questions and help you learn more about Excelsior Academy.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection>
              <div className="card text-center h-full p-8">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary-800" />
                </div>
                <h3 className="text-xl font-bold mb-3">Call Us</h3>
                <p className="text-gray-600 mb-2">Main Office</p>
                <p className="text-lg font-medium text-primary-800">(555) 123-4567</p>
                <p className="text-gray-600 mt-3 mb-2">Admissions</p>
                <p className="text-lg font-medium text-primary-800">(555) 123-4568</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="card text-center h-full p-8">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary-800" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email Us</h3>
                <p className="text-gray-600 mb-2">General Inquiries</p>
                <p className="text-lg font-medium text-primary-800">info@excelsior-academy.edu</p>
                <p className="text-gray-600 mt-3 mb-2">Admissions</p>
                <p className="text-lg font-medium text-primary-800">admissions@excelsior-academy.edu</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card text-center h-full p-8">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary-800" />
                </div>
                <h3 className="text-xl font-bold mb-3">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  123 Education Lane<br />
                  Academicville, CA 90210<br />
                  United States
                </p>
                <a href="#" className="text-primary-800 font-medium hover:text-primary-600">Get Directions</a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card text-center h-full p-8">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary-800" />
                </div>
                <h3 className="text-xl font-bold mb-3">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday<br />7:30 AM - 4:30 PM</p>
                  <p>Saturday<br />9:00 AM - 12:00 PM<br />(Admissions Office Only)</p>
                  <p>Sunday<br />Closed</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <SectionHeading 
                title="Get in Touch" 
                subtitle="Have a question or want to learn more about Excelsior Academy? Fill out the form below and we'll get back to you as soon as possible."
              />

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203783554!2d-118.49424492428431!3d34.03900072569397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d74d5ea79b%3A0xcd9a111aced18f!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1695329869134!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary-800">Contact Form</h3>
                
                {formSubmitted ? (
                  <div className="bg-success-100 text-success-800 p-4 rounded-md flex items-start mb-6">
                    <UserCheck className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <p>Thank you for your message! We'll get back to you as soon as possible.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="relationship" className="label">
                      I am a:
                    </label>
                    <select
                      id="relationship"
                      name="relationship"
                      value={formData.relationship}
                      onChange={handleChange}
                      className="input"
                      required
                    >
                      <option value="Prospective Parent">Prospective Parent</option>
                      <option value="Current Parent">Current Parent</option>
                      <option value="Prospective Student">Prospective Student</option>
                      <option value="Current Student">Current Student</option>
                      <option value="Alumni">Alumni</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="input"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="section">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading 
              title="Admissions Information" 
              subtitle="Interested in joining the Excelsior Academy community? Learn about our admissions process and schedule a tour."
              centered
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="card h-full">
                <div className="p-6">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-800 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Inquire</h3>
                  <p className="text-gray-600 mb-4">
                    Complete our online inquiry form or contact the admissions office to express interest and request information.
                  </p>
                  <a href="#" className="btn btn-outline w-full">
                    Request Information
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card h-full">
                <div className="p-6">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-800 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Visit</h3>
                  <p className="text-gray-600 mb-4">
                    Schedule a campus tour to see our facilities, meet faculty members, and experience our school community.
                  </p>
                  <a href="#" className="btn btn-outline w-full">
                    Schedule a Tour
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card h-full">
                <div className="p-6">
                  <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary-800 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Apply</h3>
                  <p className="text-gray-600 mb-4">
                    Submit your application online, including all required documents and the application fee.
                  </p>
                  <a href="#" className="btn btn-primary w-full">
                    Apply Now
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              For more information about the admissions process, important dates, and financial aid opportunities, please contact our Admissions Office at (555) 123-4568 or email admissions@excelsior-academy.edu.
            </p>
            <a href="#" className="btn btn-outline">
              Download Admissions Brochure
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Find answers to common questions about Excelsior Academy."
              centered
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="card mb-4">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">What are the school hours?</h3>
                  <p className="text-gray-700">
                    School hours are 8:00 AM to 3:30 PM for all grade levels. Extended day programs are available from 7:00 AM to 6:00 PM for families who need before or after-school care.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="card mb-4">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">What is the average class size?</h3>
                  <p className="text-gray-700">
                    Our average class size is 18 students, with a student-to-teacher ratio of 12:1. This allows for personalized attention and meaningful engagement in the classroom.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card mb-4">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Do you offer financial aid?</h3>
                  <p className="text-gray-700">
                    Yes, Excelsior Academy offers need-based financial aid to qualified families. Approximately 25% of our students receive some form of financial assistance. Applications for financial aid are separate from the admissions process.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="card mb-4">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">What extracurricular activities are offered?</h3>
                  <p className="text-gray-700">
                    We offer a wide range of extracurricular activities, including competitive sports teams, performing arts groups, academic clubs, and community service opportunities. Students are encouraged to explore their interests and develop new skills outside the classroom.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="card">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">What is your approach to technology in the classroom?</h3>
                  <p className="text-gray-700">
                    Technology is integrated thoughtfully into our curriculum to enhance learning, not replace traditional teaching methods. All students in grades 6-12 participate in our 1:1 device program, while younger students have access to shared devices for appropriate educational activities.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.35} className="text-center mt-8">
              <a href="#" className="btn btn-outline">
                View All FAQs
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;