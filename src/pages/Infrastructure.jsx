import React from 'react';
import { Monitor, Microscope, BookOpen, Trophy, Bus, Wifi } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import AnimatedSection from '../components/AnimatedSection';

const Infrastructure = () => {
  const { theme } = useTheme();

  const facilities = [
    {
      title: 'Smart Classrooms',
      description: 'Interactive whiteboards, projectors, and audio-visual systems in every classroom',
      image: 'https://images.pexels.com/photos/8500697/pexels-photo-8500697.jpeg',
      icon: <Monitor className="h-8 w-8" />
    },
    {
      title: 'Science Laboratory',
      description: 'Well-equipped Physics, Chemistry, and Biology labs with modern equipment',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
      icon: <Microscope className="h-8 w-8" />
    },
    {
      title: 'Computer Lab',
      description: 'Modern computers with high-speed internet and latest software',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg',
      icon: <Monitor className="h-8 w-8" />
    },
    {
      title: 'Library',
      description: 'Vast collection of books, e-resources, and quiet study areas',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
      icon: <BookOpen className="h-8 w-8" />
    }
  ];

  const sportsAreas = [
    'Basketball Court',
    'Football Ground',
    'Cricket Pitch',
    'Badminton Court',
    'Table Tennis',
    'Athletics Track',
    'Swimming Pool',
    'Gymnasium'
  ];

  const transportRoutes = [
    { route: 'Route 1', areas: 'Central City, Main Market, Park Road' },
    { route: 'Route 2', areas: 'South Extension, Ring Road, Model Town' },
    { route: 'Route 3', areas: 'North Campus, Mall Road, Civil Lines' },
    { route: 'Route 4', areas: 'East Delhi, Laxmi Nagar, Shahdara' },
    { route: 'Route 5', areas: 'West Delhi, Rajouri Garden, Janakpuri' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Infrastructure Hero */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-5xl font-bold mb-6 ${theme.primaryDark}`}>
            World-Class Infrastructure
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Modern facilities designed to enhance learning and development
          </p>
        </div>
      </AnimatedSection>

      {/* Smart Classrooms */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`${theme.textPrimary} mb-4`}>
                <Monitor className="h-12 w-12" />
              </div>
              <h2 className={`text-4xl font-bold mb-6 ${theme.primaryDark}`}>
                Smart Classrooms
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our smart classrooms are equipped with the latest technology to make learning interactive and engaging. Each classroom features interactive whiteboards, high-definition projectors, and advanced audio-visual systems.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${theme.bgPrimary} rounded-full`}></div>
                  <span>Interactive whiteboards in all classrooms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${theme.bgPrimary} rounded-full`}></div>
                  <span>High-speed internet connectivity</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${theme.bgPrimary} rounded-full`}></div>
                  <span>Digital learning resources and e-books</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${theme.bgPrimary} rounded-full`}></div>
                  <span>Air-conditioned environment</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/8500697/pexels-photo-8500697.jpeg" 
                alt="Smart classroom" 
                className="rounded-xl shadow-2xl object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Labs Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Science & Computer Labs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg" 
                alt="Science laboratory" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className={`${theme.textPrimary} mb-4`}>
                  <Microscope className="h-10 w-10" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${theme.primaryDark}`}>
                  Science Laboratories
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Separate well-equipped laboratories for Physics, Chemistry, and Biology with modern instruments and safety equipment.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Advanced microscopes and equipment</li>
                  <li>• Safety protocols and equipment</li>
                  <li>• Hands-on experiment facilities</li>
                  <li>• Digital data recording systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg" 
                alt="Computer laboratory" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className={`${theme.textPrimary} mb-4`}>
                  <Monitor className="h-10 w-10" />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${theme.primaryDark}`}>
                  Computer Laboratory
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  State-of-the-art computer lab with high-performance systems and latest software for comprehensive digital education.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Latest computers with modern software</li>
                  <li>• High-speed fiber internet connection</li>
                  <li>• Programming and design software</li>
                  <li>• Online learning platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Library Zone */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Library & Learning Center
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className={`${theme.textPrimary} mb-4`}>
                <BookOpen className="h-12 w-12" />
              </div>
              <h3 className={`text-3xl font-bold mb-6 ${theme.primaryDark}`}>
                Knowledge Hub
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our library is the heart of learning at QB365, featuring an extensive collection of books, digital resources, and comfortable study spaces designed to foster a love for reading and research.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className={`text-xl font-bold ${theme.primaryDark}`}>Collection</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 15,000+ books across all subjects</li>
                    <li>• Reference materials and encyclopedias</li>
                    <li>• Magazines and newspapers</li>
                    <li>• Digital e-book collection</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className={`text-xl font-bold ${theme.primaryDark}`}>Facilities</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Quiet study areas</li>
                    <li>• Computer terminals</li>
                    <li>• Reading corners</li>
                    <li>• Group discussion rooms</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg" 
                alt="Library interior" 
                className="rounded-xl shadow-lg object-cover w-full h-48"
              />
              <img 
                src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg" 
                alt="Books collection" 
                className="rounded-xl shadow-lg object-cover w-full h-48"
              />
              <img 
                src="https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg" 
                alt="Reading area" 
                className="rounded-xl shadow-lg object-cover w-full h-48"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Sports Facilities */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Indoor & Outdoor Sports
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`${theme.textPrimary} mb-4`}>
                <Trophy className="h-12 w-12" />
              </div>
              <h3 className={`text-3xl font-bold mb-6 ${theme.primaryDark}`}>
                Sports Excellence
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe in the holistic development of our students through sports and physical activities. Our extensive sports facilities provide opportunities for students to excel in various games and develop teamwork, leadership, and discipline.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {sportsAreas.map((sport, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
                    <p className="font-semibold text-gray-800">{sport}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg" 
                alt="Basketball court" 
                className="rounded-xl shadow-lg object-cover w-full h-48"
              />
              <img 
                src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg" 
                alt="Football field" 
                className="rounded-xl shadow-lg object-cover w-full h-48"
              />
              <img 
                src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg" 
                alt="Swimming pool" 
                className="rounded-xl shadow-lg object-cover w-full h-48"
              />
              <img 
                src="https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg" 
                alt="Gymnasium" 
                className="rounded-xl shadow-lg object-cover w-full h-48"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Transport Facilities */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Transport Facilities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`${theme.textPrimary} mb-4`}>
                <Bus className="h-12 w-12" />
              </div>
              <h3 className={`text-3xl font-bold mb-6 ${theme.primaryDark}`}>
                Safe & Reliable Transportation
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our school transport service ensures safe and comfortable travel for students with GPS-enabled buses, trained drivers, and attendants for younger children.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                <li className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${theme.bgPrimary} rounded-full`}></div>
                  <span>GPS tracking for all buses</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${theme.bgPrimary} rounded-full`}></div>
                  <span>Experienced and verified drivers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${theme.bgPrimary} rounded-full`}></div>
                  <span>Bus attendants for primary students</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className={`w-2 h-2 ${theme.bgPrimary} rounded-full`}></div>
                  <span>Real-time tracking app for parents</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/159658/school-bus-vehicle-yellow-159658.jpeg" 
                alt="School bus" 
                className="rounded-xl shadow-2xl object-cover w-full h-96 mb-6"
              />
            </div>
          </div>
          
          {/* Bus Routes */}
          <div className="mt-12">
            <h4 className={`text-2xl font-bold text-center mb-8 ${theme.primaryDark}`}>
              Bus Route Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {transportRoutes.map((route, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h5 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                    {route.route}
                  </h5>
                  <p className="text-gray-700 text-sm">
                    <strong>Coverage Areas:</strong> {route.areas}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Additional Facilities */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 ${theme.primaryDark}`}>
            Additional Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Wifi className={`${theme.textPrimary} h-12 w-12 mx-auto mb-4`} />
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                High-Speed WiFi
              </h3>
              <p className="text-gray-700">
                Campus-wide high-speed internet connectivity for digital learning
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className={`${theme.textPrimary} text-3xl mb-4`}>🏥</div>
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                Medical Room
              </h3>
              <p className="text-gray-700">
                On-campus medical facility with qualified nurse and first aid
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className={`${theme.textPrimary} text-3xl mb-4`}>🍽️</div>
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                Cafeteria
              </h3>
              <p className="text-gray-700">
                Hygienic cafeteria serving nutritious meals and snacks
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className={`${theme.textPrimary} text-3xl mb-4`}>🔒</div>
              <h3 className={`text-xl font-bold mb-3 ${theme.primaryDark}`}>
                Security
              </h3>
              <p className="text-gray-700">
                24/7 security with CCTV monitoring and controlled access
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Infrastructure;