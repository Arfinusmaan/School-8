import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      details: '123 Education Street, Learning City, State - 110001',
      subtext: 'Near City Mall, Sector 15'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Numbers',
      details: '+91 98765 43210 (Main)',
      subtext: '+91 98765 43211 (Admissions)'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Addresses',
      details: 'info@qb365school.edu',
      subtext: 'admissions@qb365school.edu'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Office Hours',
      details: 'Monday - Friday: 8:00 AM - 4:00 PM',
      subtext: 'Saturday: 8:00 AM - 12:00 PM'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Contact Hero */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl font-bold mb-6 ${theme.primaryDark}`}>
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're here to help and answer any questions you might have
          </p>
        </div>
      </AnimatedSection>

      {/* Contact Information */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className={`${theme.textPrimary} flex justify-center lg:justify-start mb-4`}>
                  {info.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                  {info.title}
                </h3>
                <p className="text-gray-800 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-gray-600 text-sm">
                  {info.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Map and Contact Form */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`${theme.bgPrimary} text-white p-4`}>
                <h3 className="text-xl font-bold text-center">Find Us Here</h3>
              </div>
              <div className="aspect-w-16 aspect-h-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8450621874833!2d77.3507!3d28.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1647834398056!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                ></iframe>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-sm text-gray-600 text-center">
                  Click on the map to get directions to our school
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-8">
                <MessageCircle className={`${theme.textPrimary} h-12 w-12 mx-auto mb-4`} />
                <h3 className={`text-2xl font-bold ${theme.primaryDark}`}>
                  Send us a Message
                </h3>
                <p className="text-gray-600 mt-2">
                  We'll respond within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 ${theme.borderPrimary} rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 ${theme.borderPrimary} rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academic">Academic Information</option>
                      <option value="fees">Fee Related</option>
                      <option value="transport">Transport Inquiry</option>
                      <option value="complaint">Complaint/Grievance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 border-2 ${theme.borderPrimary} rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                    placeholder="Please describe your inquiry in detail..."
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className={`inline-flex items-center px-8 py-3 ${theme.bgPrimary} ${theme.bgPrimaryHover} text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Quick Contact */}
      <AnimatedSection className={`py-16 ${theme.bgPrimary}  text-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8">
            For urgent matters, please call us directly or visit our campus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <a 
              href="mailto:info@qb365school.edu"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;