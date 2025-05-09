import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Excelsior Academy Students Win Regional Science Competition",
    excerpt: "Our talented students took first place in the regional science fair with their innovative renewable energy project.",
    content: "We are proud to announce that a team of Excelsior Academy students has won first place in the Regional Science Competition with their innovative renewable energy project. The team, consisting of seniors Alex Chen, Maya Rodriguez, and Jamie Kim, developed a solar-powered water filtration system that can be deployed in areas with limited access to clean water. Their project combined principles of engineering, environmental science, and social impact, impressing judges with both its technical sophistication and practical applications. The team will now advance to the National Science Competition in Washington, D.C. this spring.",
    date: "October 15, 2023",
    category: "Achievement",
    image: "https://images.pexels.com/photos/8926548/pexels-photo-8926548.jpeg"
  },
  {
    id: 2,
    title: "New Arts Center Opening This Fall",
    excerpt: "We're excited to announce the opening of our state-of-the-art performing arts center, enhancing our visual and performing arts programs.",
    content: "Excelsior Academy is thrilled to announce the upcoming opening of our new Performing Arts Center this fall. This state-of-the-art facility will include a 350-seat theater, music practice rooms, dance studios, and visual arts spaces. The center represents the culmination of our five-year capital campaign and reflects our commitment to providing exceptional arts education. The opening celebration will feature performances by current students and alumni, showcasing the diverse talents within our community. We invite all families to join us for the ribbon-cutting ceremony on September 28.",
    date: "September 28, 2023",
    category: "Campus",
    image: "https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg"
  },
  {
    id: 3,
    title: "Annual College Fair Coming Next Month",
    excerpt: "Representatives from over 50 colleges and universities will be on campus to meet with students and parents.",
    content: "Mark your calendars for Excelsior Academy's annual College Fair, scheduled for October 15 from 6:00 to 8:30 PM in the gymnasium. Representatives from over 50 colleges and universities will be available to speak with students and parents about admissions requirements, academic programs, financial aid, and campus life. This event is open to all high school students, with a special focus on juniors and seniors. The evening will also include workshops on college essays, financial aid applications, and navigating the admissions process. Our college counseling team will be available to answer questions and provide guidance throughout the event.",
    date: "September 5, 2023",
    category: "Event",
    image: "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg"
  },
  {
    id: 4,
    title: "Middle School Robotics Team Qualifies for State Championship",
    excerpt: "Our middle school robotics team has secured a spot in the state championship after an impressive performance in the regional competition.",
    content: "Congratulations to our middle school robotics team, the ExcelBots, who have qualified for the State Robotics Championship! The team of seven students, led by faculty advisor Dr. Robert Kim, competed against 24 other schools in the regional qualifier last weekend. Their robot, 'Innovator,' successfully completed all the challenge tasks, earning high scores for both design and performance. The team has been meeting three times a week since September to design, build, and program their robot. The state championship will be held on November 18-19 at the State University Engineering Center.",
    date: "August 22, 2023",
    category: "Achievement",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
  },
  {
    id: 5,
    title: "Excelsior Academy Welcomes New Head of School",
    excerpt: "We are pleased to announce the appointment of Dr. Jonathan Pierce as our new Head of School, effective July 1.",
    content: "The Board of Trustees is delighted to announce the appointment of Dr. Jonathan Pierce as the next Head of School at Excelsior Academy, effective July 1, 2023. Dr. Pierce brings over 25 years of experience in education, most recently serving as Associate Head of School at Westridge Academy in Colorado. He holds a doctorate in Educational Leadership from Harvard University and has a proven track record of fostering academic excellence and innovation. The appointment follows an extensive national search and selection process that involved input from faculty, staff, parents, and students. Dr. Pierce will be on campus for several transition visits this spring and looks forward to meeting members of the community.",
    date: "July 15, 2023",
    category: "Announcement",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg"
  },
  {
    id: 6,
    title: "Class of 2023 College Acceptances Announced",
    excerpt: "Our graduating seniors have been accepted to some of the nation's most prestigious colleges and universities.",
    content: "We are proud to announce the impressive college acceptance results for the Class of 2023. Our 98 graduating seniors have received a total of 487 acceptances to 127 different colleges and universities across the country and abroad. The class earned over $5.2 million in merit scholarships, with 15% of students receiving full or significant partial scholarships. Acceptances include 12 Ivy League offers, 23 offers from top-ranked liberal arts colleges, and 45 offers from flagship state universities. Students will be pursuing diverse fields of study, from engineering and computer science to visual arts and humanities. We congratulate our seniors on their achievements and look forward to celebrating their successes at graduation next month.",
    date: "May 10, 2023",
    category: "Achievement",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
  }
];

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Parent-Teacher Conferences",
    date: "October 25-26, 2023",
    time: "2:00 PM - 8:00 PM",
    location: "Main Campus",
    description: "Fall semester parent-teacher conferences. Sign-up links will be emailed to parents two weeks before the conferences."
  },
  {
    id: 2,
    title: "Fall Concert Series",
    date: "November 10, 2023",
    time: "7:00 PM",
    location: "Performing Arts Center",
    description: "Join us for performances by our choral and instrumental ensembles, featuring music from around the world."
  },
  {
    id: 3,
    title: "Homecoming Game & Dance",
    date: "November 18, 2023",
    time: "Game: 5:00 PM, Dance: 8:00 PM",
    location: "Athletic Field & Gymnasium",
    description: "Cheer on our varsity teams and celebrate at the annual homecoming dance. Tickets for the dance will be available through the student activities office."
  },
  {
    id: 4,
    title: "College Application Workshop",
    date: "December 2, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Library Media Center",
    description: "A workshop for seniors to receive assistance with college applications, essays, and financial aid forms. Lunch will be provided."
  },
  {
    id: 5,
    title: "Winter Art Exhibition",
    date: "December 12, 2023",
    time: "5:30 PM - 7:30 PM",
    location: "Visual Arts Center",
    description: "An exhibition showcasing student artwork from the fall semester. Refreshments will be served."
  },
  {
    id: 6,
    title: "Winter Break",
    date: "December 20, 2023 - January 3, 2024",
    time: "All Day",
    location: "No School",
    description: "School closed for winter break. Classes resume on January 4, 2024."
  }
];

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(newsItems);
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'News & Events | Excelsior Academy';
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredNews(newsItems);
    } else {
      setFilteredNews(newsItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  const categories = ['All', ...Array.from(new Set(newsItems.map(item => item.category)))];

  const toggleEventDetails = (id: number) => {
    if (expandedEventId === id) {
      setExpandedEventId(null);
    } else {
      setExpandedEventId(id);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-primary-800 text-white py-24 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">News & Events</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Stay informed about the latest happenings, achievements, and upcoming events at Excelsior Academy.
          </p>
        </div>
      </div>

      {/* News Section */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading 
              title="Latest News" 
              subtitle="Stay updated with the latest achievements, announcements, and happenings at Excelsior Academy."
              centered
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredNews.map((news, index) => (
              <AnimatedSection key={news.id} delay={index * 0.1}>
                <div className="card overflow-hidden h-full flex flex-col">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <Calendar size={16} className="text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">{news.date}</span>
                      <span className="mx-2 text-gray-300">|</span>
                      <Tag size={16} className="text-gray-500 mr-2" />
                      <span className="text-sm text-gray-500">{news.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{news.excerpt}</p>
                    
                    <a href={`/news/${news.id}`} className="text-primary-800 font-medium hover:text-primary-600 inline-flex items-center mt-auto">
                      Read More
                      <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="section bg-gray-50">
        <div className="container">
          <AnimatedSection>
            <SectionHeading 
              title="Upcoming Events" 
              subtitle="Mark your calendar for these important dates and events in the school community."
              centered
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto mt-8">
            {upcomingEvents.map((event, index) => (
              <AnimatedSection key={event.id} delay={index * 0.1}>
                <div className="card mb-4 overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleEventDetails(event.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <div className="flex items-center text-gray-600 mb-1">
                          <Calendar size={16} className="mr-2" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                      <div className="mt-3 md:mt-0">
                        <div className="flex items-center text-gray-600 mb-1">
                          <Clock size={16} className="mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="text-gray-600">{event.location}</div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <ChevronRight 
                          size={20} 
                          className={`transform transition-transform ${expandedEventId === event.id ? 'rotate-90' : ''}`} 
                        />
                      </div>
                    </div>
                    
                    {expandedEventId === event.id && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-700">{event.description}</p>
                        <div className="mt-3">
                          <a 
                            href={`#event-${event.id}`} 
                            className="text-primary-800 font-medium hover:text-primary-600 inline-flex items-center"
                          >
                            Add to Calendar
                            <ChevronRight size={16} className="ml-1" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <a href="#" className="btn btn-primary">
              View Full Calendar
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section">
        <div className="container">
          <div className="bg-primary-50 rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-800">Subscribe to Our Newsletter</h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Stay informed about school news, events, and important announcements by subscribing to our monthly newsletter.
                </p>
                
                <form className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="input flex-grow"
                      required
                    />
                    <button type="submit" className="btn btn-primary whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;