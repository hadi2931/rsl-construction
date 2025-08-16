import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wrench, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">RSL Construction</h1>
              <p className="text-xs text-gray-600">& Aircond Enterprise</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/services') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Services
            </Link>
            <Link
              to="/gallery"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/gallery') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">24/7 Service</span>
            </div>
            <a
              href="https://wa.me/60169092974"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/services') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Services
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/gallery') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium transition-colors ${
                  isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
              <a
                href="https://wa.me/60169092974"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;