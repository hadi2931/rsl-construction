import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Users, 
  Award, 
  MapPin, 
  Wind, 
  Hammer, 
  Sparkles,
  ChevronRight,
  Star
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 58, 138, 0.9)), url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Trusted Partner for Construction, 
            <span className="text-blue-300"> Air-Cond</span>, and 
            <span className="text-blue-300"> Cleaning</span> Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional 24/7 service for homes and offices across 
            <strong> Kuala Lumpur & Selangor</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/60169092974"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              WhatsApp Us for a Free Quote
            </a>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RSL Enterprise?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional service with reliability you can trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">24-Hour Doorstep Service</h3>
              <p className="text-gray-600">Available round the clock for emergency services and urgent repairs</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Experienced Professionals</h3>
              <p className="text-gray-600">Skilled technicians with years of experience in all service areas</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Special Membership Discounts</h3>
              <p className="text-gray-600">Exclusive offers and priority service for regular customers</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Wide Service Area</h3>
              <p className="text-gray-600">Covering all major areas in Kuala Lumpur and Selangor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all your home and commercial service needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Air-Conditioning Card */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&w=800)'
                }}
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Wind className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Air-Conditioning</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Complete AC services including cleaning, repair, installation, and maintenance with special RM85 promotion.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    From RM85
                  </span>
                  <Link
                    to="/services"
                    className="flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Construction & Renovation Card */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800)'
                }}
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Hammer className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Construction & Renovation</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Quality upgrades including plumbing, tile work, home painting, epoxy flooring, and refrigerator repair.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                    Custom Quote
                  </span>
                  <Link
                    to="/services"
                    className="flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                  >
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Professional Cleaning Card */}
            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/4239141/pexels-photo-4239141.jpeg?auto=compress&cs=tinysrgb&w=800)'
                }}
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Sparkles className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Professional Cleaning</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Chemical Washing for homes, offices, and post-renovation spaces. Full package solutions available.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                    From RM160
                  </span>
                  <Link
                    to="/services"
                    className="flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                  >
                    Learn More <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial/Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                "RSL Enterprise has been our trusted service partner for over 2 years. Their 24-hour service 
                and professional approach make them our go-to choice for all maintenance needs."
              </blockquote>
              <div className="text-gray-600">
                <p className="font-semibold">Satisfied Customer</p>
                <p>Mont Kiara, Kuala Lumpur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're available 24/7 to serve you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/60169092974"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp for Free Quote
            </a>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;