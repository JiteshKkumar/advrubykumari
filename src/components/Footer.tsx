import React from 'react';
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
            <br></br> 
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
                <span>advrubykumari@gmailcom</span>
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
              <li><a href="/practice/corporate" className="text-gray-400 hover:text-white">Corporate Law</a></li>
              <li><a href="/practice/family" className="text-gray-400 hover:text-white">Family Law</a></li>
              <li><a href="/practice/criminal" className="text-gray-400 hover:text-white">Criminal Defense</a></li>
              <li><a href="/practice/real-estate" className="text-gray-400 hover:text-white">Real Estate Law</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/adv-ruby-kumari-4229681a0/" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JK Creative Solution. All rights reserved.</p>
          <div className="mt-2">
            <a href="/PrivacyPolicy" className="hover:text-white">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;