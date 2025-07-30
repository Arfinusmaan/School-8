import React from 'react';
import { BookOpen, Users, Award, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AnimatedSection from '../components/AnimatedSection';

const Academics = () => {
  const { theme } = useTheme();

  const subjects = [
    { name: 'English', grades: 'I-XII', icon: '📖' },
    { name: 'Mathematics', grades: 'I-XII', icon: '🔢' },
    { name: 'Science', grades: 'I-XII', icon: '🔬' },
    { name: 'Social Studies', grades: 'I-XII', icon: '🌍' },
    { name: 'Hindi', grades: 'I-XII', icon: '🇮🇳' },
    { name: 'Computer Science', grades: 'VI-XII', icon: '💻' },
    { name: 'Physical Education', grades: 'I-XII', icon: '⚽' },
    { name: 'Art & Craft', grades: 'I-XII', icon: '🎨' }
  ];

  const syllabus = [
    { class: 'Classes I-V', focus: 'Foundation Building', subjects: 'English, Hindi, Mathematics, EVS, Art, PE' },
    { class: 'Classes VI-VIII', focus: 'Skill Development', subjects: 'English, Hindi, Mathematics, Science, Social Studies, Computer, Art, PE' },
    { class: 'Classes IX-X', focus: 'Board Preparation', subjects: 'English, Hindi, Mathematics, Science, Social Studies, Computer/FIT' },
    { class: 'Classes XI-XII', focus: 'Stream Specialization', subjects: 'Science/Commerce/Humanities streams with electives' }
  ];

  const calendar = [
    { month: 'April', events: 'New Academic Session Begins, Admission Process' },
    { month: 'May', events: 'Summer Camp, Teacher Training Programs' },
    { month: 'June', events: 'Regular Classes, Parent Orientation' },
    { month: 'July', events: 'First Term Exams, Sports Day Preparation' },
    { month: 'August', events: 'Independence Day Celebration, Cultural Programs' },
    { month: 'September', events: 'Teachers Day, Second Term Begins' },
    { month: 'October', events: 'Diwali Celebration, Parent-Teacher Meeting' },
    { month: 'November', events: 'Annual Sports Day, Science Exhibition' },
    { month: 'December', events: 'Winter Break, Christmas Celebration' },
    { month: 'January', events: 'Third Term Begins, Republic Day' },
    { month: 'February', events: 'Annual Function, Final Exams Preparation' },
    { month: 'March', events: 'Final Exams, Results Declaration' }
  ];

  const approaches = [
    {
      title: 'Interactive Learning',
      description: 'Smart boards, multimedia content, and hands-on activities make learning engaging and effective.',
      icon: '💡'
    },
    {
      title: 'Personalized Attention',
      description: 'Small class sizes ensure every student receives individual guidance and support.',
      icon: '👥'
    },
    {
      title: 'Project-Based Learning',
      description: 'Real-world projects and case studies help students apply theoretical knowledge practically.',
      icon: '🎯'
    },
    {
      title: 'Assessment & Feedback',
      description: 'Regular assessments and constructive feedback help track and improve student progress.',
      icon: '📊'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Academics Hero */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl font-bold mb-6 ${theme.primaryDark}`}>
            Academic Excellence
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            CBSE Affiliated Curriculum with Modern Teaching Methodologies
          </p>
        </div>
      </AnimatedSection>

      {/* Curriculum Summary */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${theme.primaryDark}`}>
                Our Curriculum
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                QB365 Public School follows the CBSE curriculum, ensuring our students receive education that meets national standards while fostering critical thinking, creativity, and holistic development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className={`${theme.textPrimary} h-6 w-6 mt-1`} />
                  <p className="text-gray-700">CBSE affiliated with school code: 12345678</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className={`${theme.textPrimary} h-6 w-6 mt-1`} />
                  <p className="text-gray-700">National Education Policy (NEP) 2020 aligned</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className={`${theme.textPrimary} h-6 w-6 mt-1`} />
                  <p className="text-gray-700">Continuous and Comprehensive Evaluation (CCE)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className={`${theme.textPrimary} h-6 w-6 mt-1`} />
                  <p className="text-gray-700">Activity-based learning approach</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8500704/pexels-photo-8500704.jpeg" 
                alt="Students studying" 
                className="rounded-xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Class-wise Syllabus */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            CBSE Class-wise Syllabus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {syllabus.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className={`text-2xl font-bold mb-4 ${theme.primaryDark}`}>
                  {item.class}
                </h3>
                <p className={`text-lg font-semibold mb-3 ${theme.textPrimary}`}>
                  Focus: {item.focus}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Subjects:</strong> {item.subjects}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Academic Calendar */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Academic Year Calendar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calendar.map((month, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                  {month.month}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {month.events}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Subjects Grid */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Subjects Offered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{subject.icon}</div>
                <h3 className={`text-xl font-bold mb-2 ${theme.primaryDark}`}>
                  {subject.name}
                </h3>
                <p className={`${theme.textPrimary} font-semibold`}>
                  {subject.grades}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Teaching Approach */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Our Teaching Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="text-3xl">{approach.icon}</div>
                <div>
                  <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                    {approach.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CBSE Affiliation */}
      <AnimatedSection className={`py-20 ${theme.bgPrimary} text-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl font-bold mb-6">
            CBSE Affiliation
          </h2>
          <p className="text-xl mb-8">
            QB365 Public School is proudly affiliated with the Central Board of Secondary Education (CBSE), New Delhi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Affiliation Number</h3>
              <p className="text-2xl font-mono">1234567</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">School Code</h3>
              <p className="text-2xl font-mono">12345</p>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://cbse.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Visit CBSE Official Website
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Academics;