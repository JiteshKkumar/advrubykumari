import React from 'react';
import { ChevronRight, Award, Scale, BookOpen, Users, ShieldCheck, FileText } from 'lucide-react';

const PracticeAreas = () => {
  // Updated example data for 6 practice areas
  const expertiseAreas = [
    {
      title: 'Family Law',
      icon: Award,
      description: 'Expert legal counsel for family disputes, divorce, custody, and more.',
      services: [
        'Divorce',
        'Child Custody',
        'Adoption',
        'Prenuptial Agreements',
        'Spousal Support',
        'Domestic Violence Protection',
      ],
    },
    {
      title: 'Criminal Defense',
      icon: Scale,
      description: 'Dedicated defense attorneys fighting for your rights in criminal cases.',
      services: [
        'DUI Defense',
        'Assault Charges',
        'Drug Offenses',
        'Fraud',
        'Theft',
        'Homicide Defense',
      ],
    },
    {
      title: 'Real Estate Law',
      icon: BookOpen,
      description: 'Comprehensive real estate services, from buying to disputes.',
      services: [
        'Property Purchase',
        'Landlord/Tenant Disputes',
        'Foreclosures',
        'Evictions',
        'Zoning Laws',
        'Lease Agreements',
      ],
    },
    {
      title: 'Corporate Law',
      icon: Users,
      description: 'Business-focused legal solutions, including contracts and compliance.',
      services: [
        'Business Formation',
        'Mergers & Acquisitions',
        'Intellectual Property',
        'Contract Negotiations',
        'Employment Law',
        'Tax Planning',
      ],
    },
    {
      title: 'Intellectual Property',
      icon: ShieldCheck,
      description: 'Protect your creations with expert intellectual property law.',
      services: [
        'Patents',
        'Trademarks',
        'Copyrights',
        'Licensing Agreements',
        'IP Litigation',
        'Trade Secrets',
      ],
    },
    {
      title: 'Immigration Law',
      icon: FileText,
      description: 'Comprehensive immigration services to guide you through the process.',
      services: [
        'Visa Applications',
        'Green Cards',
        'Citizenship',
        'Work Permits',
        'Deportation Defense',
        'Family Immigration',
      ],
    },
  ];

  return (
    <div>
      {/* Practice Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 border-b-4 border-blue-600 pb-2">
              Our Practice Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive legal services across various practice areas to meet all your legal needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <div className="p-6">
                  <area.icon className="w-12 h-12 text-blue-700 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ChevronRight className="w-4 h-4 text-blue-700 mr-2" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition duration-300">
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
