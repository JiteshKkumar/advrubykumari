import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Scale, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <Scale className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Adv. Ruby Kumari</span>
            </div>
            <p className="text-gray-400">
              Providing outstanding legal services with integrity and commitment since 2021. 
              <br /> 
              Dedicated to achieving the best outcomes for our clients through expertise and professionalism.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span>(+91)  82101 96040</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span>advrubykumari@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <span>Delhi High Court, Delhi 201009</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/corporate-law"
                  className="text-gray-400 hover:text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  to="/services/family-law"
                  className="text-gray-400 hover:text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Family Law
                </Link>
              </li>
              <li>
                <Link
                  to="/services/criminal-defense"
                  className="text-gray-400 hover:text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Criminal Defense
                </Link>
              </li>
              <li>
                <Link
                  to="/services/civil-litigation"
                  className="text-gray-400 hover:text-white"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Civil Litigation
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/adv-ruby-kumari-4229681a0/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JK Creative Solution. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/PrivacyPolicy" className="hover:text-white" onClick={() => window.scrollTo(0, 0)}>
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link to="/terms" className="hover:text-white" onClick={() => window.scrollTo(0, 0)}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
