import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Target, ChevronRight, Trophy, Star, Medal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const { theme } = useTheme();

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Quality Education',
      description: 'CBSE affiliated curriculum with modern teaching methodologies and experienced faculty.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Holistic Development',
      description: 'Focus on academic excellence along with sports, arts, and character building activities.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Individual Attention',
      description: 'Small class sizes ensuring personalized attention to every student\'s unique needs.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence Record',
      description: 'Consistent track record of outstanding results and student achievements in various fields.'
    }
  ];

  const awards = [
    { icon: <Trophy className="h-6 w-6" />, title: 'Best CBSE School 2024', org: 'Education Excellence Awards' },
    { icon: <Star className="h-6 w-6" />, title: 'Top Academic Performance', org: 'Regional Education Board' },
    { icon: <Medal className="h-6 w-6" />, title: 'Innovation in Teaching', org: 'National Education Summit' },
    { icon: <Award className="h-6 w-6" />, title: 'Student Welfare Award', org: 'Child Development Council' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/289740/pexels-photo-289740.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            QB365 Public School
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            Excellence in Education • Shaping Future Leaders
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/admissions" 
              className={`inline-flex items-center px-8 py-4 ${theme.bgPrimary} ${theme.bgPrimaryHover} text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              Start Your Journey
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${theme.primaryDark} text-center lg:text-left`}>
                About QB365 Public School
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded with a vision to provide world-class education, QB365 Public School has been a beacon of academic excellence for over two decades. We are committed to nurturing young minds and developing future leaders who will make a positive impact on society.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our state-of-the-art facilities, experienced faculty, and comprehensive curriculum ensure that every student receives the best possible education in a supportive and inspiring environment.
              </p>
              <Link 
                to="/about" 
                className={`inline-flex items-center px-6 py-3 ${theme.bgPrimary} ${theme.bgPrimaryHover} text-white font-semibold rounded-lg transition-all duration-300`}
              >
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg" 
                alt="Students in classroom" 
                className="rounded-xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose QB365 */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Why Choose QB365 Public School?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${theme.textPrimary} mb-4`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${theme.primaryDark}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Awards & Recognition */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-200 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`${theme.textPrimary} flex justify-center mb-3`}>
                  {award.icon}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{award.title}</h3>
                <p className="text-sm text-gray-600">{award.org}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quick CTA Buttons */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-12 ${theme.primaryDark}`}>
            Ready to Join Our School Community?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/contact" 
              className={`inline-flex items-center justify-center px-8 py-4 ${theme.bgPrimary} ${theme.bgPrimaryHover} text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105`}
            >
              Contact Us
            </Link>
            <Link 
              to="/admissions" 
              className={`inline-flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105`}
            >
              Admissions
            </Link>
            <Link 
              to="/academics" 
              className={`inline-flex items-center justify-center px-8 py-4 border-2 ${theme.borderPrimary} ${theme.textPrimary} font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-50`}
            >
              Academics
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Mandatory Disclosure Link */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/mandatory-disclosure" 
            className={`inline-flex items-center text-xl font-bold ${theme.textPrimary} hover:underline transition-all duration-300`}
          >
            Mandatory Public Disclosure
            <ChevronRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;