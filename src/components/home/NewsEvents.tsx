import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeading from '../ui/SectionHeading';
import { Calendar, Clock } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: "Excelsior Academy Students Win Regional Science Competition",
    excerpt: "Our talented students took first place in the regional science fair with their innovative renewable energy project.",
    date: "October 15, 2023",
    category: "Achievement",
    image: "https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg"
  },
  {
    id: 2,
    title: "New Arts Center Opening This Fall",
    excerpt: "We're excited to announce the opening of our state-of-the-art performing arts center, enhancing our visual and performing arts programs.",
    date: "September 28, 2023",
    category: "Campus",
    image: "https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg"
  },
  {
    id: 3,
    title: "Annual College Fair Coming Next Month",
    excerpt: "Representatives from over 50 colleges and universities will be on campus to meet with students and parents.",
    date: "September 5, 2023",
    category: "Event",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Parent-Teacher Conferences",
    date: "October 25-26, 2023",
    time: "2:00 PM - 8:00 PM",
    location: "Main Campus"
  },
  {
    id: 2,
    title: "Fall Concert Series",
    date: "November 10, 2023",
    time: "7:00 PM",
    location: "Performing Arts Center"
  },
  {
    id: 3,
    title: "Homecoming Game & Dance",
    date: "November 18, 2023",
    time: "Game: 5:00 PM, Dance: 8:00 PM",
    location: "Athletic Field & Gymnasium"
  },
  {
    id: 4,
    title: "College Application Workshop",
    date: "December 2, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Library Media Center"
  }
];

const NewsEvents: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <SectionHeading
                title="Latest News"
                subtitle="Stay updated with the latest achievements, announcements, and happenings at Excelsior Academy."
              />
            </AnimatedSection>

            <div className="space-y-8 mt-8">
              {newsItems.map((news, index) => (
                <AnimatedSection key={news.id} delay={index * 0.1}>
                  <div className="card flex flex-col md:flex-row gap-6 overflow-hidden">
                    <div className="md:w-1/3">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-48 md:h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full mb-2">
                        {news.category}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                      <p className="text-gray-600 mb-3">{news.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar size={16} className="mr-1" />
                        <span>{news.date}</span>
                      </div>
                      <Link
                        to={`/news/${news.id}`}
                        className="text-primary-800 font-medium hover:text-primary-600 inline-flex items-center"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-8">
              <Link to="/news" className="btn btn-outline">
                View All News
              </Link>
            </AnimatedSection>
          </div>

          {/* Events Section */}
          <div>
            <AnimatedSection delay={0.2}>
              <SectionHeading title="Upcoming Events" />
            </AnimatedSection>

            <div className="mt-8 space-y-4">
              {upcomingEvents.map((event, index) => (
                <AnimatedSection key={event.id} delay={0.3 + index * 0.1}>
                  <div className="card hover:border-l-4 hover:border-accent-500 transition-all">
                    <h4 className="font-bold text-lg mb-2">{event.title}</h4>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-1">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-8">
              <Link to="/news#events" className="btn btn-outline">
                View All Events
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;