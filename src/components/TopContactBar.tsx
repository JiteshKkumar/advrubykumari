import React from 'react';
import { Phone, Mail, Star } from 'lucide-react';
import { Link } from 'react-router-dom'; // Ensure you have 'react-router-dom' installed

const TopContactBar: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <a href="tel:+1234567890" className="flex items-center hover:text-gray-300">
            <Phone className="w-4 h-4 mr-2" />
            <span>+91 8210196040</span>
          </a>
          <a href="mailto:contact@lawfirm.com" className="flex items-center hover:text-gray-300">
            <Mail className="w-4 h-4 mr-2" />
            <span>contact@lawfirm.com</span>
          </a>
        </div>
        <Link to="/consultation" className="hidden sm:flex items-center hover:text-gray-300">
          <Star className="w-4 h-4 mr-2" />
          <span>Free Case Evaluation</span>
        </Link>
      </div>
    </div>
  );
};

export default TopContactBar;
