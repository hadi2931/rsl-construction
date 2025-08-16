import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube, Wrench } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wrench className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="text-lg font-bold">RSL Construction</h3>
                <p className="text-sm text-gray-400">& Aircond Enterprise</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for construction, air-conditioning, and cleaning services across Kuala Lumpur & Selangor.
            </p>
            <p className="text-xs text-gray-400">
              Business Registration: (003742941-D)
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Air-Conditioning Service & Installation</li>
              <li>Construction & Renovation</li>
              <li>Professional Cleaning</li>
              <li>Plumbing Services</li>
              <li>Refrigerator Repair</li>
              <li>Tile Work & Painting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a
                  href="https://wa.me/60169092974"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  WhatsApp: +60 14-367 3980
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a
                  href="mailto:contact@rsl-enterprise.com"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors"
                >
                  contact@rsl-enterprise.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">
                  Kuala Lumpur & Selangor
                </span>
              </div>
            </div>
          </div>

          {/* Service Areas & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <p className="text-sm text-gray-300 mb-4">
              Kuala Lumpur, Puchong, Selangor, Klang, Sungai Buloh, Mont Kiara, 
              Petaling Jaya, Shah Alam, Subang Jaya, Seri Kembangan, Bangi, 
              Kajang, Semenyih, Cheras
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61573061632229"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@a.centerprisesandcleaningservi?si=VTViLnDQeFz5RTtp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2024 RSL Construction and Aircond Enterprise. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            24-Hour Professional Service • Business Registration: (003742941-D)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;