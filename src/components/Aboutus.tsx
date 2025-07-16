import React from 'react';
import advocate from '../Images/ruby.jpg'

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 border-b-4 border-blue-600 pb-2">
          About Us
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We are committed to providing exceptional legal services, grounded in expertise, integrity, and a client-first approach.
        </p>
      </div>

      {/* About the Firm */}
      <section className="bg-gray-50 rounded-lg shadow-lg p-8 mb-12 border-t-4 border-blue-500">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h3>
        <p className="text-gray-700 text-lg mb-6">
          Our law firm is dedicated to providing high-quality legal representation and advice to individuals and businesses alike. With over 3+ years of experience, we offer expert guidance in various practice areas, including corporate law, family law, criminal defense, and more. Our mission is to fight for justice and protect our clients' interests through every legal challenge.
        </p>

        <h3 className="text-3xl font-semibold text-gray-900 mb-6">Our Values</h3>
        <ul className="list-disc pl-5 text-gray-700 text-lg space-y-4">
          <li>Client-Centered Approach</li>
          <li>Integrity and Transparency</li>
          <li>Commitment to Justice</li>
          <li>Excellence in Service</li>
        </ul>
      </section>

      {/* Advocate Details Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">About Advocate Ruby Kumari</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12 border-t-4 border-blue-500">
          {/* Larger Image */}
          <img
            src={advocate}
            alt="Advocate Ruby Kumari"
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-500"
          />
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">Advocate Ruby Kumari</h3>
          <p className="text-gray-700 text-lg mb-6 text-left">
            Advocate Ruby Kumari is a highly respected lawyer based in Delhi and Gurgaon. Leading a law firm that is committed to providing efficient, proactive, and non-conflicted advocacy, she has earned a reputation for her exceptional success in litigation with a 99% winning percentage.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            With a team of highly skilled professionals, Advocate Ruby Kumari offers expert legal representation in areas such as domestic disputes, criminal litigation, civil matters, family law, and corporate law. The firm is dedicated to providing tailored, top-quality legal services to meet the unique needs of each client.
          </p>

          <p className="text-gray-700 text-lg">
            Whether it’s a matter in Delhi High Court or other courts like Saket, Karkardooma, or Tis Hazari, the firm ensures that clients receive the best legal support to navigate their challenges effectively. Advocate Ruby Kumari believes in building lasting relationships with clients, becoming an integral part of their legal team.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
