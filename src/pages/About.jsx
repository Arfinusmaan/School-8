import React from 'react';
import { Users, Target, Heart, Lightbulb } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const { theme } = useTheme();

  const team = [
    {
      name: 'Dr. Priya Sharma',
      position: 'Principal',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      description: 'Educational leader with 25+ years of experience in academic excellence.'
    },
    {
      name: 'Mr. Rajesh Kumar',
      position: 'Vice Principal',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      description: 'Expert in curriculum development and student welfare programs.'
    },
    {
      name: 'Ms. Anita Patel',
      position: 'Academic Coordinator',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      description: 'Specialist in innovative teaching methodologies and assessment systems.'
    },
    {
      name: 'Mr. Vikram Singh',
      position: 'Sports Director',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg',
      description: 'Former national-level athlete dedicated to physical education excellence.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* About Hero */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className={`text-5xl font-bold mb-6 ${theme.primaryDark}`}>
              About QB365 Public School
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A Legacy of Excellence in Education Since 2000
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${theme.primaryDark}`}>Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                QB365 Public School was established in 2000 with a dream to create an educational institution that would nurture young minds and prepare them for the challenges of tomorrow. What started as a small school with 50 students has grown into a prestigious institution serving over 2,000 students.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our journey has been marked by continuous innovation in teaching methodologies, infrastructure development, and student welfare programs. We believe that education is not just about academic achievement but about developing well-rounded individuals who can contribute positively to society.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg" 
                alt="School building" 
                className="rounded-xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision & Mission */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <div className={`${theme.textPrimary} mb-4`}>
                <Target className="h-10 w-10" />
              </div>
              <h2 className={`text-3xl font-bold mb-6 ${theme.primaryDark}`}>Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a globally recognized educational institution that empowers students with knowledge, values, and skills to become compassionate leaders and responsible global citizens who will shape a better tomorrow.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
              <div className={`${theme.textPrimary} mb-4`}>
                <Heart className="h-10 w-10" />
              </div>
              <h2 className={`text-3xl font-bold mb-6 ${theme.primaryDark}`}>Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide holistic education that nurtures intellectual curiosity, critical thinking, creativity, and moral values. We are committed to creating an inclusive learning environment where every student can discover their potential and achieve excellence.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Principal's Message */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold mb-4 ${theme.primaryDark}`}>Principal's Welcome Message</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
                alt="Principal Dr. Priya Sharma" 
                className="rounded-xl shadow-lg object-cover w-full h-96"
              />
            </div>
            <div className="lg:col-span-2 space-y-6">
              <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                "Dear Students, Parents, and Visitors, Welcome to QB365 Public School, where we believe that every child is unique and has the potential to achieve greatness. Our commitment goes beyond academic excellence; we strive to nurture confident, creative, and compassionate individuals."
              </blockquote>
              <p className="text-lg text-gray-700 leading-relaxed">
                As the Principal of this esteemed institution, I am proud to lead a team of dedicated educators who are passionate about making a difference in the lives of our students. We provide a supportive and challenging environment where students can explore their interests, develop their talents, and prepare for future success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Together, we will continue to uphold our tradition of excellence while embracing innovation and adapting to the changing needs of education in the 21st century.
              </p>
              <div className="pt-4">
                <p className={`font-bold text-lg ${theme.primaryDark}`}>Dr. Priya Sharma</p>
                <p className="text-gray-600">Principal, QB365 Public School</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Management Team */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${theme.primaryDark}`}>
                    {member.name}
                  </h3>
                  <p className={`${theme.textPrimary} font-semibold mb-3`}>
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className={`${theme.textPrimary} flex justify-center mb-4`}>
                <Lightbulb className="h-12 w-12" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>Innovation</h3>
              <p className="text-gray-700">Embracing new ideas and creative approaches to learning and teaching.</p>
            </div>
            <div className="text-center">
              <div className={`${theme.textPrimary} flex justify-center mb-4`}>
                <Heart className="h-12 w-12" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>Compassion</h3>
              <p className="text-gray-700">Fostering empathy, kindness, and understanding in all our interactions.</p>
            </div>
            <div className="text-center">
              <div className={`${theme.textPrimary} flex justify-center mb-4`}>
                <Target className="h-12 w-12" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>Excellence</h3>
              <p className="text-gray-700">Striving for the highest standards in academics, character, and achievement.</p>
            </div>
            <div className="text-center">
              <div className={`${theme.textPrimary} flex justify-center mb-4`}>
                <Users className="h-12 w-12" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>Community</h3>
              <p className="text-gray-700">Building strong relationships and fostering a sense of belonging for all.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;