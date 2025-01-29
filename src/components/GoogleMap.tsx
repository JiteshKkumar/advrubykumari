import React from 'react';
import { MapPin } from 'lucide-react';

const GoogleMap = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-blue-600 text-white flex items-center space-x-2">
        <MapPin className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Our Location</h2>
      </div>
      <div className="aspect-video w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.544008544033!2d77.37731287538927!3d28.6164684275645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5df0bd9d931%3A0x3c23757d6d22eec!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1709667547039!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
          className="w-full h-full"
        />
      </div>
      <div className="p-4 bg-gray-50">
        <p className="text-gray-600">
          <strong>Address:</strong> Sector 62, Noida, Uttar Pradesh 201309
        </p>
      </div>
    </div>
  );
};

export default GoogleMap;