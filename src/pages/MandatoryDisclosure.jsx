import React from 'react';
import { FileText, Download, ExternalLink, CheckCircle, Users, Building } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AnimatedSection from '../components/AnimatedSection';

const MandatoryDisclosure = () => {
  const { theme } = useTheme();

  const schoolDetails = [
    { label: 'School Name', value: 'QB365 Public School' },
    { label: 'Affiliation Number', value: '1234567' },
    { label: 'School Code', value: '12345' },
    { label: 'Address', value: '123 Education Street, Learning City, State - 110001' },
    { label: 'Principal Name', value: 'Dr. Priya Sharma' },
    { label: 'Principal Qualification', value: 'Ph.D. in Education, M.Ed., B.Ed.' },
    { label: 'School Email', value: 'info@qb365school.edu' },
    { label: 'School Phone', value: '+91 98765 43210' },
    { label: 'Year of Establishment', value: '2000' },
    { label: 'Total Students', value: '2,000+' },
    { label: 'Total Faculty', value: '120+' }
  ];

  const documents = [
    { name: 'Affiliation Certificate', type: 'PDF', size: '2.3 MB' },
    { name: 'NOC Certificate', type: 'PDF', size: '1.8 MB' },
    { name: 'Building Safety Certificate', type: 'PDF', size: '1.5 MB' },
    { name: 'Fire Safety Certificate', type: 'PDF', size: '1.2 MB' },
    { name: 'Water & Sanitation Certificate', type: 'PDF', size: '1.7 MB' },
    { name: 'Academic Calendar', type: 'PDF', size: '0.9 MB' },
    { name: 'Fee Structure', type: 'PDF', size: '1.1 MB' },
    { name: 'List of School Managing Committee', type: 'PDF', size: '0.8 MB' }
  ];

  const academicResults = [
    { year: '2023-24', class10: '98.5%', class12: '96.8%', toppers: 12 },
    { year: '2022-23', class10: '97.2%', class12: '95.5%', toppers: 10 },
    { year: '2021-22', class10: '96.8%', class12: '94.2%', toppers: 8 },
    { year: '2020-21', class10: '95.5%', class12: '93.8%', toppers: 9 },
    { year: '2019-20', class10: '94.2%', class12: '92.5%', toppers: 7 }
  ];

  const facultyDetails = [
    { department: 'Primary Section', teachers: 35, qualification: 'B.Ed, M.Ed' },
    { department: 'Secondary Section', teachers: 45, qualification: 'M.A, M.Sc, B.Ed' },
    { department: 'Senior Secondary', teachers: 30, qualification: 'M.A, M.Sc, M.Ed' },
    { department: 'Physical Education', teachers: 5, qualification: 'B.P.Ed, M.P.Ed' },
    { department: 'Art & Music', teachers: 3, qualification: 'Fine Arts, Music' },
    { department: 'Computer Science', teachers: 2, qualification: 'MCA, B.Tech' }
  ];

  const infrastructure = [
    { facility: 'Classrooms', count: 60, details: 'Smart boards, AC, Ventilation' },
    { facility: 'Science Labs', count: 6, details: 'Physics, Chemistry, Biology (2 each)' },
    { facility: 'Computer Labs', count: 3, details: '40 computers each with internet' },
    { facility: 'Library', count: 1, details: '15,000+ books, digital resources' },
    { facility: 'Sports Facilities', count: 8, details: 'Football, Basketball, Swimming pool' },
    { facility: 'Transport Buses', count: 25, details: 'GPS enabled, trained drivers' },
    { facility: 'Playground Area', count: 1, details: '5 acres multi-sport ground' },
    { facility: 'Auditorium', count: 1, details: '500 seating capacity with AV' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Mandatory Public Disclosure
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transparency and accountability in education as per CBSE guidelines
          </p>
        </div>
      </AnimatedSection>

      {/* Basic School Details */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Basic School Information
          </h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {schoolDetails.map((detail, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                  <span className="font-semibold text-gray-700">{detail.label}:</span>
                  <span className={`${theme.textPrimary} font-medium`}>{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Documents */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Mandatory Documents
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <FileText className={`${theme.textPrimary} h-8 w-8 mt-1`} />
                  <div className="flex-grow">
                    <h3 className={`text-lg font-bold mb-2 ${theme.primaryDark}`}>
                      {doc.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {doc.type} • {doc.size}
                    </p>
                    <button className={`inline-flex items-center px-4 py-2 ${theme.bgPrimary} ${theme.bgPrimaryHover} text-white text-sm font-semibold rounded-lg transition-colors duration-300`}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Academic Results */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Academic Results (Last 5 Years)
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className={`${theme.bgPrimary} text-white p-6`}>
              <h3 className="text-2xl font-bold text-center">CBSE Board Results</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Academic Year</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Class X Pass %</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Class XII Pass %</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">District Toppers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {academicResults.map((result, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{result.year}</td>
                      <td className={`px-6 py-4 text-sm font-semibold ${theme.textPrimary}`}>{result.class10}</td>
                      <td className={`px-6 py-4 text-sm font-semibold ${theme.textPrimary}`}>{result.class12}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{result.toppers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Faculty Details */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Faculty & Staff Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyDetails.map((faculty, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className={`${theme.textPrimary} mb-4`}>
                  <Users className="h-8 w-8" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                  {faculty.department}
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Teachers:</strong> {faculty.teachers}</p>
                  <p><strong>Qualification:</strong> {faculty.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Infrastructure Summary */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Infrastructure Summary
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className={`${theme.bgPrimary} text-white p-6`}>
              <h3 className="text-2xl font-bold text-center">School Facilities</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Facility</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Count</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {infrastructure.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.facility}</td>
                      <td className={`px-6 py-4 text-sm font-semibold ${theme.textPrimary}`}>{item.count}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CBSE Links */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Official CBSE Links
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://cbse.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              CBSE Official Website
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="https://cbseacademic.nic.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              CBSE Academic Portal
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default MandatoryDisclosure;