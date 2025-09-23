import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaUserGraduate } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaUserGraduate className="text-3xl text-blue-400" />
              <span className="text-2xl font-bold">EduMaster</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Hamare saath apni learning journey ko naye mukam tak le jayein. 
              World-class courses aur expert instructors ke saath apni skills ko upgrade karein.
            </p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {['Home', 'Courses', 'About Us', 'Contact', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📧 info@edumaster.com</li>
              <li>📞 +92 300 1234567</li>
              <li>📍 Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EduMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;