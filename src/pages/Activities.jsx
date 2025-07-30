import React from 'react';
import { Music, Palette, Trophy, Drama, Calendar, Camera } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AnimatedSection from '../components/AnimatedSection';

const Activities = () => {
  const { theme } = useTheme();

  const activities = [
    { name: 'Music & Dance', icon: '🎵', category: 'Cultural' },
    { name: 'Art & Craft', icon: '🎨', category: 'Creative' },
    { name: 'Drama Club', icon: '🎭', category: 'Cultural' },
    { name: 'Debate Society', icon: '🗣️', category: 'Literary' },
    { name: 'Science Club', icon: '🔬', category: 'Academic' },
    { name: 'Mathematics Olympiad', icon: '🧮', category: 'Academic' },
    { name: 'Environmental Club', icon: '🌱', category: 'Social' },
    { name: 'Photography Club', icon: '📸', category: 'Creative' },
    { name: 'Chess Club', icon: '♟️', category: 'Strategy' },
    { name: 'Robotics Club', icon: '🤖', category: 'Technology' },
    { name: 'Literary Magazine', icon: '📝', category: 'Literary' },
    { name: 'Community Service', icon: '🤝', category: 'Social' }
  ];

  const events = [
    {
      title: 'Annual Cultural Festival',
      date: 'March 15-17, 2024',
      description: 'A three-day extravaganza featuring music, dance, drama, and art exhibitions by our talented students.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
    },
    {
      title: 'Inter-House Sports Competition',
      date: 'February 20-22, 2024',
      description: 'Annual sports meet with competitions in athletics, swimming, football, basketball, and more.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg'
    },
    {
      title: 'Science Exhibition',
      date: 'January 25, 2024',
      description: 'Students showcase innovative science projects and experiments across all grades.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg'
    },
    {
      title: 'Literary Week',
      date: 'December 10-15, 2023',
      description: 'Celebrating literature with poetry recitation, storytelling, and creative writing competitions.',
      image: 'https://images.pexels.com/photos/159844/book-open-read-reading-159844.jpeg'
    }
  ];

  const eventCalendar = [
    { month: 'April', event: 'New Session Opening Ceremony' },
    { month: 'May', event: 'Summer Sports Camp' },
    { month: 'June', event: 'Art & Craft Workshop' },
    { month: 'July', event: 'Independence Day Celebration' },
    { month: 'August', event: 'Raksha Bandhan & Janmashtami' },
    { month: 'September', event: 'Teachers Day Special Program' },
    { month: 'October', event: 'Diwali Celebration & Rangoli Competition' },
    { month: 'November', event: 'Children\'s Day & Science Exhibition' },
    { month: 'December', event: 'Christmas Celebration & Literary Week' },
    { month: 'January', event: 'Republic Day & Annual Sports Day' },
    { month: 'February', event: 'Inter-House Competitions' },
    { month: 'March', event: 'Annual Cultural Festival & Farewell' }
  ];

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
      caption: 'Cultural Festival 2024'
    },
    {
      src: 'https://images.pexels.com/photos/8500702/pexels-photo-8500702.jpeg',
      caption: 'Science Fair Winners'
    },
    {
      src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      caption: 'Sports Day Champions'
    },
    {
      src: 'https://images.pexels.com/photos/8613317/pexels-photo-8613317.jpeg',
      caption: 'Art Exhibition'
    },
    {
      src: 'https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg',
      caption: 'Music Concert'
    },
    {
      src: 'https://images.pexels.com/photos/8471886/pexels-photo-8471886.jpeg',
      caption: 'Drama Performance'
    },
    {
      src: 'https://images.pexels.com/photos/8500704/pexels-photo-8500704.jpeg',
      caption: 'Academic Achievers'
    },
    {
      src: 'https://images.pexels.com/photos/8613346/pexels-photo-8613346.jpeg',
      caption: 'Community Service'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Activities Hero */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl font-bold mb-6 ${theme.primaryDark}`}>
            Co-curricular Activities
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nurturing talents and building character through diverse activities and programs
          </p>
        </div>
      </AnimatedSection>

      {/* Activities List */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Our Activity Programs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-3">{activity.icon}</div>
                <h3 className={`text-lg font-bold mb-2 ${theme.primaryDark}`}>
                  {activity.name}
                </h3>
                <span className={`inline-block px-3 py-1 text-xs font-semibold ${theme.bgPrimary} text-white rounded-full`}>
                  {activity.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Event Highlights */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Event Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className={`inline-block px-3 py-1 text-xs font-semibold ${theme.bgPrimary} text-white rounded-full mb-3`}>
                    {event.date}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                    {event.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Event Calendar */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Annual Event Calendar
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className={`${theme.bgPrimary} text-white p-6`}>
              <h3 className="text-2xl font-bold text-center">Academic Year 2024-25</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Month</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Special Events</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {eventCalendar.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className={`px-6 py-4 text-sm font-medium ${theme.textPrimary}`}>
                        {item.month}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {item.event}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Photo Gallery */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Photo Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image.src} 
                  alt={image.caption} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className={`text-sm font-semibold ${theme.primaryDark} text-center`}>
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Participation Benefits */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Benefits of Participation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className={`${theme.textPrimary} flex justify-center mb-4`}>
                <Trophy className="h-12 w-12" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                Confidence Building
              </h3>
              <p className="text-gray-700">
                Activities help students build self-confidence and overcome stage fear
              </p>
            </div>
            <div className="text-center">
              <div className={`${theme.textPrimary} flex justify-center mb-4`}>
                <Music className="h-12 w-12" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                Talent Discovery
              </h3>
              <p className="text-gray-700">
                Students discover and nurture their hidden talents and interests
              </p>
            </div>
            <div className="text-center">
              <div className={`${theme.textPrimary} flex justify-center mb-4`}>
                <Palette className="h-12 w-12" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                Creative Expression
              </h3>
              <p className="text-gray-700">
                Platform for creative expression and artistic development
              </p>
            </div>
            <div className="text-center">
              <div className={`${theme.textPrimary} flex justify-center mb-4`}>
                <Drama className="h-12 w-12" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                Social Skills
              </h3>
              <p className="text-gray-700">
                Enhanced communication and teamwork through group activities
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Join Activities CTA */}
      <AnimatedSection className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Explore Your Talents?
          </h2>
          <p className="text-xl mb-8">
            Join our diverse activity programs and discover your hidden potential!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Register for Activities
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-300">
              View Schedule
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Activities;