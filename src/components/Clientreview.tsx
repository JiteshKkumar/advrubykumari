// src/components/ClientReviews.js
import React from 'react';
import { Star } from 'lucide-react';

const clientReviews = [
  {
    name: "Amit Sharma",
    review: "Advocate Ruby Kumari handled my property dispute with great professionalism. Her dedication and knowledge were evident throughout.",
    rating: 5,
  },
  {
    name: "Neha Verma",
    review: "Ruby Kumari is a compassionate and skilled lawyer. She supported me during a very tough phase in my family case. Highly recommend!",
    rating: 5,
  },
  {
    name: "Rahul Desai",
    review: "Very impressed with the legal strategy and clarity provided by Ruby Kumari. She's reliable and result-oriented.",
    rating: 4,
  },
  {
    name: "Priya Iyer",
    review: "Ms. Kumari gave me excellent advice on corporate legal matters. Her insights saved us from major risks.",
    rating: 5,
  },
  {
    name: "Sanjay Mehta",
    review: "I appreciated the transparency and updates I got throughout my case. Ruby Kumari is truly dedicated to her clients.",
    rating: 5,
  },
  {
    name: "Kavita Reddy",
    review: "Extremely professional and kind. Ruby Kumari helped me understand my rights and got results quickly.",
    rating: 4,
  },
];

const ClientReviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here’s what our clients have to say about our legal services.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{review.name}</h3>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? 'fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
