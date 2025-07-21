import React, { useState, useEffect } from 'react';
import { Scale, ChevronRight, X, Building2, Gavel, Users, Briefcase, BookOpen, Award, Star, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

// Dummy components for routing
import ContactUs from './components/ContactUs';  // Ensure to create these components as separate pages
import GoogleMap from './components/GoogleMap';
import FAQ from './components/FAQ';
import ClientReviews from './components/Clientreview';
import Call from './components/Call';
import DisclaimerPopup from './components/DisclaimerPopup'
import advocate from './Images/ruby.jpg'


function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (hasSeenDisclaimer) {
      setShowDisclaimer(false);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setShowDisclaimer(false);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const expertiseAreas = [
    {
      icon: Building2,
      title: 'Corporate Law',
      description: 'Expert guidance in business law, mergers, and corporate governance.',
      services: ['Company Registration', 'Mergers & Acquisitions', 'Corporate Compliance', 'Business Restructuring'],
    },
    {
      icon: Gavel,
      title: 'Criminal Defense',
      description: 'Strong defense strategies for protecting your rights and freedom.',
      services: ['Criminal Appeals', 'White Collar Crimes', 'Bail Matters', 'Criminal Trials'],
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Compassionate representation in divorce, custody, and family matters.',
      services: ['Divorce Proceedings', 'Child Custody', 'Maintenance Cases', 'Domestic Violence'],
    },
    {
      icon: Briefcase,
      title: 'Civil Litigation',
      description: 'Comprehensive civil litigation services for various disputes.',
      services: ['Property Disputes', 'Contract Disputes', 'Civil Appeals', 'Recovery Suits'],
    },
  ];

  const achievements = [
    { number: '3+', text: 'Years of Experience' },
    { number: '500+', text: 'Cases Won' },
    { number: '95%', text: 'Success Rate' },
    { number: '1000+', text: 'Happy Clients' },
  ];

  return (

        
      <div className="min-h-screen flex flex-col">

       <Helmet>
        <title>Advocate Ruby Kumari | Top Lawyer in Delhi | Family, Criminal & Corporate Law</title>
        <meta name="description" content="Advocate Ruby Kumari, Delhi's trusted legal expert specializing in Family Law, Criminal Defense, and Corporate Law. Over 3 years of experience with 500+ cases won." />
        <meta name="keywords" content="Best Advocate in Delhi, Advocate in Delhi, Family Lawyer Delhi, Criminal Defense Lawyer, Corporate Law Expert, Divorce Lawyer Saket Court" />
        <meta name="author" content="Advocate Ruby Kumari" />
        <meta property="og:title" content="Advocate Ruby Kumari - Delhi's Leading Lawyer for Family, Criminal, Corporate Cases" />
        <meta property="og:description" content="Expert legal services in Family Law, Criminal Defense, Corporate Compliance, and Civil Litigation. Trusted by 1000+ clients in Delhi." />
        <meta property="og:image" content={advocate} />
        <meta property="og:url" content="https://advrubygupta.in/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
        
        {/* Disclaimer Popup */}
        {showDisclaimer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md mx-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Legal Disclaimer</h3>
                <button onClick={handleAcceptDisclaimer} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-600 mb-6">
                The information provided on this website is for general informational purposes only and should not be considered as legal advice. Each case is unique and results may vary. Contacting us does not create an attorney-client relationship.
              </p>
              <button
                onClick={handleAcceptDisclaimer}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded font-semibold transition duration-300"
              >
                I Understand
              </button>
            </div>
          </div>
        )}

        

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <div className="relative h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=2000&q=80"
              alt="Law office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 flex items-center">
              <div className="container mx-auto px-4">
                <div className="text-white max-w-3xl">
                  <h1 className="text-5xl font-bold mb-6 leading-tight">
                    Committed to Protecting Your Rights & Interests
                  </h1>
                  <p className="text-xl mb-8 text-gray-200">
                    With over 3+ years of experience, we provide expert legal representation across multiple practice areas.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={handleModalToggle} className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded font-semibold transition duration-300">
                      Schedule Consultation
                    </button>
                    <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded font-semibold transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <section className="bg-blue-700 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-4">
                    <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                    <div className="text-gray-200">{achievement.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practice Areas */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Practice Areas</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We offer comprehensive legal services across various practice areas to meet all your legal needs.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {expertiseAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Welcome Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About Advocate</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                  Advocate Ruby Kumari is a highly skilled lawyer based in Delhi with 3 years of experience at Saket Court. Specializing in divorce and family law, she is known for her fair, transparent, and result-oriented approach. Ruby Kumari has a proven track record in handling cases involving cheque forgery, criminal offenses, and corporate disputes. She is dedicated, compassionate, and upholds the highest ethical standards in her practice. For expert legal representation in family law, corporate disputes, or criminal matters, Advocate Ruby Kumari is a top choice in Delhi.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Award className="w-5 h-5 text-blue-700" />
                      <span>Expert Attorneys</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Scale className="w-5 h-5 text-blue-700" />
                      <span>Fair Pricing</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <BookOpen className="w-5 h-5 text-blue-700" />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-700">
                      <Users className="w-5 h-5 text-blue-700" />
                      <span>Client Focused</span>
                    </div>
                  </div>
                  <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded font-semibold transition duration-300">
                    About Our Firm
                  </button>
                </div>
                <div className="relative">
                  <img
                    src={advocate}
                    alt="Law office interior"
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white p-6 rounded-lg">
                    <div className="text-3xl font-bold mb-1">3+</div>
                    <div className="text-sm">Years of Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Call />
          <ClientReviews />
          <FAQ />
          <GoogleMap />

          {/* Modal for Consultation Schedule */}
          {showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-8 max-w-md mx-4 w-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">Schedule Your Consultation</h3>
        <button onClick={handleModalToggle} className="text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* ✅ Formspree-powered form */}
      <form
        action="https://formspree.io/f/xvgqobwl"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 caret-blue-600 text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 caret-blue-600 text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="+91 82101 96040"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 caret-blue-600 text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Describe your legal issue..."
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 caret-blue-600 text-gray-900"
          ></textarea>
        </div>

        {/* Optional: Redirect after submission */}
        {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" /> */}

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded font-semibold transition duration-300"
        >
          Confirm Consultation
        </button>
      </form>
    </div>
  </div>
)}

        </main>
      </div>
  );
}

export default App;


