// src/components/ClientReviews.js
import React, { useRef } from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';

const clientReviews = [
  {
    name: "John Doe",
    review: "Advocate Ruby Kumari provided exceptional legal guidance during my case. Her professionalism and dedication are unmatched. Highly recommended!",
    rating: 5,
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg", // Client Image URL
  },
  {
    name: "Jane Smith",
    review: "Ruby Kumari is an outstanding lawyer who truly cares about her clients. She helped me through a difficult time with compassion and expertise.",
    rating: 4,
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg", // Client Image URL
  },
  {
    name: "Rajeev Kumar",
    review: "I am very grateful to Advocate Ruby Kumari for her support in my business litigation. She was transparent and delivered great results.",
    rating: 5,
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg", // Client Image URL
  },
  {
    name: "Rupesh",
    review: "I am very grateful to Advocate Ruby Kumari for her support in my business litigation. She was transparent and delivered great results.",
    rating: 5,
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg", // Client Image URL
  },
  {
    name: "Rupesh",
    review: "I am very grateful to Advocate Ruby Kumari for her support in my business litigation. She was transparent and delivered great results.",
    rating: 5,
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg", // Client Image URL
  },
];

const ClientReviews = () => {
  const reviewContainerRef = useRef(null);

  // Scroll the container to the next review
  const scrollNext = () => {
    if (reviewContainerRef.current) {
      reviewContainerRef.current.scrollBy({
        left: 320, // Scroll to the next item (adjust width of item + gap)
        behavior: 'smooth',
      });
    }
  };

  // Scroll the container to the previous review
  const scrollPrev = () => {
    if (reviewContainerRef.current) {
      reviewContainerRef.current.scrollBy({
        left: -320, // Scroll to the previous item (negative value)
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here’s what our clients have to say about our legal services.
          </p>
        </div>

        {/* Scrollable Container for Reviews */}
        <div className="relative">
          <div
            ref={reviewContainerRef}
            className="overflow-x-auto pb-4 scrollbar-hide" // Hide scrollbar using custom class
          >
            <div className="flex gap-8">
              {clientReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 w-80 flex-shrink-0"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={review.imageUrl}
                      alt={review.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                      <div className="flex items-center text-yellow-500">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.review}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Arrow Button */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
