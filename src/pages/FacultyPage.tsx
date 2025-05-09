import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeading from '../components/ui/SectionHeading';
import { Search, Mail } from 'lucide-react';

interface Faculty {
  id: number;
  name: string;
  title: string;
  department: string;
  education: string[];
  bio: string;
  image: string;
  email: string;
}

const facultyMembers: Faculty[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Science Department Chair",
    department: "Science",
    education: [
      "Ph.D. in Chemistry, MIT",
      "B.S. in Chemistry, Stanford University"
    ],
    bio: "Dr. Johnson has been teaching science for over 15 years and specializes in physical chemistry. She leads our award-winning science research program and has mentored numerous students who have gone on to pursue STEM fields at top universities.",
    image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg",
    email: "sjohnson@excelsior-academy.edu"
  },
  {
    id: 2,
    name: "Mr. David Rodriguez",
    title: "Mathematics Teacher",
    department: "Mathematics",
    education: [
      "M.S. in Mathematics, UCLA",
      "B.A. in Mathematics, UC Berkeley"
    ],
    bio: "Mr. Rodriguez brings real-world applications into his mathematics classroom, drawing on his previous experience as an engineer. His innovative teaching methods make complex mathematical concepts accessible and engaging for students of all levels.",
    image: "https://images.pexels.com/photos/8617852/pexels-photo-8617852.jpeg",
    email: "drodriguez@excelsior-academy.edu"
  },
  {
    id: 3,
    name: "Ms. Emily Chen",
    title: "English Department Chair",
    department: "English",
    education: [
      "M.F.A. in Creative Writing, Columbia University",
      "B.A. in English Literature, Williams College"
    ],
    bio: "Ms. Chen is a published author with a passion for both classic and contemporary literature. She encourages students to find their authentic voice through reading diverse texts and developing their writing skills across multiple genres.",
    image: "https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg",
    email: "echen@excelsior-academy.edu"
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    title: "History Teacher",
    department: "History",
    education: [
      "Ph.D. in American History, University of Chicago",
      "M.A. in History, Yale University",
      "B.A. in History, Dartmouth College"
    ],
    bio: "Dr. Brown's approach to teaching history emphasizes critical analysis of primary sources and understanding multiple perspectives. His courses challenge students to connect historical events to contemporary issues and develop informed viewpoints.",
    image: "https://images.pexels.com/photos/8617636/pexels-photo-8617636.jpeg",
    email: "mbrown@excelsior-academy.edu"
  },
  {
    id: 5,
    name: "Mrs. Sophia Williams",
    title: "Visual Arts Teacher",
    department: "Arts",
    education: [
      "M.F.A. in Studio Art, Rhode Island School of Design",
      "B.F.A. in Visual Arts, Parsons School of Design"
    ],
    bio: "Mrs. Williams is a practicing artist whose work has been exhibited in galleries across the country. She guides students in developing technical skills while encouraging creative expression and artistic growth through various media and techniques.",
    image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg",
    email: "swilliams@excelsior-academy.edu"
  },
  {
    id: 6,
    name: "Mr. James Wilson",
    title: "Physical Education Teacher",
    department: "Athletics",
    education: [
      "M.Ed. in Physical Education, Boston University",
      "B.S. in Kinesiology, University of Michigan"
    ],
    bio: "Mr. Wilson believes in promoting lifelong fitness and healthy habits. His physical education classes focus on skill development, teamwork, and personal wellness goals. He also coaches our championship soccer team.",
    image: "https://images.pexels.com/photos/6325954/pexels-photo-6325954.jpeg",
    email: "jwilson@excelsior-academy.edu"
  },
  {
    id: 7,
    name: "Dr. Robert Kim",
    title: "Computer Science Teacher",
    department: "Technology",
    education: [
      "Ph.D. in Computer Science, Georgia Tech",
      "M.S. in Computer Science, University of Washington",
      "B.S. in Computer Engineering, Purdue University"
    ],
    bio: "Dr. Kim combines his industry experience in software development with his passion for education. He established our computer science program and leads the popular robotics club, inspiring students to pursue careers in technology and engineering.",
    image: "https://images.pexels.com/photos/4342089/pexels-photo-4342089.jpeg",
    email: "rkim@excelsior-academy.edu"
  },
  {
    id: 8,
    name: "Ms. Maria Garcia",
    title: "World Languages Teacher",
    department: "Languages",
    education: [
      "M.A. in Spanish Literature, NYU",
      "B.A. in Modern Languages, Georgetown University"
    ],
    bio: "Ms. Garcia creates an immersive language learning environment that emphasizes both cultural understanding and practical communication skills. She organizes our annual international exchange program and cultural celebration events.",
    image: "https://images.pexels.com/photos/5212118/pexels-photo-5212118.jpeg",
    email: "mgarcia@excelsior-academy.edu"
  }
];

const FacultyPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [filteredFaculty, setFilteredFaculty] = useState<Faculty[]>(facultyMembers);

  useEffect(() => {
    document.title = 'Faculty | Excelsior Academy';
  }, []);

  useEffect(() => {
    let results = facultyMembers;
    
    if (searchTerm) {
      results = results.filter(faculty => 
        faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faculty.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedDepartment !== 'All') {
      results = results.filter(faculty => faculty.department === selectedDepartment);
    }
    
    setFilteredFaculty(results);
  }, [searchTerm, selectedDepartment]);

  const departments = ['All', ...Array.from(new Set(facultyMembers.map(f => f.department)))];

  return (
    <div>
      {/* Header */}
      <div className="bg-primary-800 text-white py-24 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Our Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Meet our exceptional team of educators who inspire, challenge, and support our students every day.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="md:w-1/2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, title, or keywords..."
                  className="input pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            <div className="md:w-1/2 lg:w-1/3">
              <select 
                className="input w-full"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : `${dept} Department`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Listing Section */}
      <section className="section">
        <div className="container">
          {filteredFaculty.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFaculty.map((faculty, index) => (
                <AnimatedSection key={faculty.id} delay={index * 0.1}>
                  <div className="faculty-card">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{faculty.name}</h3>
                      <p className="text-primary-600 mb-2">{faculty.title}</p>
                      <p className="text-sm text-gray-500 mb-4">{faculty.department} Department</p>
                      
                      <p className="text-gray-700 mb-4 line-clamp-3">{faculty.bio}</p>
                      
                      <div className="space-y-2 mb-4">
                        {faculty.education.map((edu, i) => (
                          <p key={i} className="text-sm text-gray-600">{edu}</p>
                        ))}
                      </div>
                      
                      <a 
                        href={`mailto:${faculty.email}`} 
                        className="inline-flex items-center text-primary-800 hover:text-primary-600"
                      >
                        <Mail size={16} className="mr-1" />
                        <span>{faculty.email}</span>
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No faculty members found matching your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('All');
                }}
                className="mt-4 btn btn-outline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Hiring Section */}
      <section className="section bg-primary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <SectionHeading 
                title="Join Our Team" 
                subtitle="We're always looking for passionate educators to join our community. Explore current openings and learn about teaching opportunities at Excelsior Academy."
                centered
              />
              
              <p className="text-gray-700 mb-8">
                Our faculty members enjoy competitive salaries, professional development opportunities, small class sizes, and a collaborative, supportive work environment.
              </p>
              
              <a href="#" className="btn btn-primary">
                View Current Openings
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;