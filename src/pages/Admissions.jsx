import React, { useState } from 'react';
import { CheckCircle, Download, Users, Calendar, DollarSign, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AnimatedSection from '../components/AnimatedSection';

const Admissions = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    studentName: '',
    class: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: ''
  });

  const admissionSteps = [
    {
      step: 1,
      title: 'Online Registration',
      description: 'Fill out the online admission form with required details and upload necessary documents.'
    },
    {
      step: 2,
      title: 'Document Verification',
      description: 'Submit all required documents for verification including birth certificate, previous school records, and photographs.'
    },
    {
      step: 3,
      title: 'Interaction Session',
      description: 'Parents and students attend an interaction session with our academic team.'
    },
    {
      step: 4,
      title: 'Fee Payment',
      description: 'Upon selection, complete the admission process by paying the required fees.'
    },
    {
      step: 5,
      title: 'Welcome to QB365',
      description: 'Receive your admission confirmation and join our school community!'
    }
  ];

  const feeStructure = [
    { class: 'Nursery - UKG', admission: '₹15,000', tuition: '₹8,000', total: '₹23,000' },
    { class: 'Class I - V', admission: '₹20,000', tuition: '₹12,000', total: '₹32,000' },
    { class: 'Class VI - VIII', admission: '₹25,000', tuition: '₹15,000', total: '₹40,000' },
    { class: 'Class IX - X', admission: '₹30,000', tuition: '₹18,000', total: '₹48,000' },
    { class: 'Class XI - XII', admission: '₹35,000', tuition: '₹22,000', total: '₹57,000' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will contact you soon.');
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Admissions Hero */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl font-bold mb-6 ${theme.primaryDark}`}>
            Admissions Open
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Join QB365 Public School and be part of an exceptional learning journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-3 ${theme.bgPrimary} ${theme.bgPrimaryHover} text-white font-semibold rounded-lg transition-all duration-300`}>
              Apply Now
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300">
              Download Prospectus
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Admission Process */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Step-by-Step Admission Guide
          </h2>
          <div className="space-y-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl">
                <div className={`flex-shrink-0 w-12 h-12 ${theme.bgPrimary} text-white rounded-full flex items-center justify-center font-bold text-lg`}>
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold mb-2 ${theme.primaryDark}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <CheckCircle className={`flex-shrink-0 ${theme.textPrimary} h-6 w-6`} />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Fee Structure */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Fee Breakdown
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className={`${theme.bgPrimary} text-white p-6`}>
              <h3 className="text-2xl font-bold text-center">Annual Fee Structure (2024-25)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Class</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Admission Fee</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Monthly Tuition</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Annual Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{fee.class}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{fee.admission}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{fee.tuition}</td>
                      <td className={`px-6 py-4 text-sm font-semibold ${theme.textPrimary}`}>{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-gray-50">
              <p className="text-sm text-gray-600">
                * Fees include tuition, library, laboratory, sports, and examination charges. Additional charges may apply for transportation and meals.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Admission Form */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Online Admission Form
          </h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${theme.borderPrimary} rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Class Applying For *
                  </label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${theme.borderPrimary} rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="1">Class I</option>
                    <option value="2">Class II</option>
                    <option value="3">Class III</option>
                    <option value="4">Class IV</option>
                    <option value="5">Class V</option>
                    <option value="6">Class VI</option>
                    <option value="7">Class VII</option>
                    <option value="8">Class VIII</option>
                    <option value="9">Class IX</option>
                    <option value="10">Class X</option>
                    <option value="11">Class XI</option>
                    <option value="12">Class XII</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${theme.borderPrimary} rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${theme.borderPrimary} rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${theme.borderPrimary} rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 ${theme.borderPrimary} rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 border-2 ${theme.borderPrimary} rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className={`px-8 py-3 ${theme.bgPrimary} ${theme.bgPrimaryHover} text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </AnimatedSection>

      {/* Important Information */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Important Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Calendar className={`${theme.textPrimary} h-12 w-12 mx-auto mb-4`} />
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                Admission Dates
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>Applications: Dec 1 - Feb 28</li>
                <li>Interactions: March 1 - 15</li>
                <li>Results: March 20</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <FileText className={`${theme.textPrimary} h-12 w-12 mx-auto mb-4`} />
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                Required Documents
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>Birth Certificate</li>
                <li>Previous School Records</li>
                <li>Passport Size Photos</li>
                <li>Address Proof</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Users className={`${theme.textPrimary} h-12 w-12 mx-auto mb-4`} />
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                Age Criteria
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>Nursery: 3+ years</li>
                <li>LKG: 4+ years</li>
                <li>UKG: 5+ years</li>
                <li>Class I: 6+ years</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Admissions;