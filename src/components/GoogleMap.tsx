import React from 'react';
import { MapPin } from 'lucide-react';

const GoogleMap = () => {
  // Coordinates for Tis Hazari Court (Civil Side)
  const lat = 28.667045;
  const lng = 77.199158;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-blue-600 text-white flex items-center space-x-2">
        <MapPin className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Our Location</h2>
      </div>
      <div className="aspect-video w-full">
        <iframe
          src={`https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
          className="w-full h-full"
        />
      </div>
      <div className="p-4 bg-gray-50">
        <p className="text-gray-600 mb-2">
          <strong>Address:</strong> Chamber No. 401, Civil Side, Tis Hazari Court, Delhi 110054
        </p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
