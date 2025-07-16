import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import TopContactBar from './components/TopContactBar'
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';
import PracticeAreas from './components/Practicearea';



import CorporateLaw from './components/Pages/CorporateLaw'
import CriminalDefense from './components/Pages/CriminalDefense'
import FamilyLaw from './components/Pages/FamilyLaw';
import CivilLitigation from './components/Pages/CivilLitigation'
import PrivacyPolicy from './components/Pages/PrivacyPolicy';
import Blog from './components/Pages/Blog';
import BlogPost from './components/Pages/BlogPost'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <TopContactBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Praticearea" element={<PracticeAreas />} />
          {/* Add other routes here */}
          <Route path="/services/CorporateLaw" element={<CorporateLaw />} />
          <Route path="/services/CriminalDefense" element={<CriminalDefense />} />
          <Route path="/services/FamilyLaw" element={<FamilyLaw />} />
          <Route path="/services/CivilLitigation" element={<CivilLitigation />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} /> 

         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




// import React, { useState, useEffect } from 'react';
// import { Phone, Mail, Scale, ChevronRight, X, Building2, Gavel, Users, Briefcase, BookOpen, Award, Star, MapPin } from 'lucide-react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router components

// // Dummy components for routing
// import ContactUs from './components/ContactUs';  // Ensure to create these components as separate pages
// import GoogleMap from './components/GoogleMap';
// import FAQ from './components/FAQ';


// function App() {
//   const [showDisclaimer, setShowDisclaimer] = useState(true);
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
//     if (hasSeenDisclaimer) {
//       setShowDisclaimer(false);
//     }
//   }, []);

//   const handleAcceptDisclaimer = () => {
//     localStorage.setItem('hasSeenDisclaimer', 'true');
//     setShowDisclaimer(false);
//   };

//   const handleModalToggle = () => {
//     setShowModal(!showModal);
//   };

//   const expertiseAreas = [
//     {
//       icon: Building2,
//       title: 'Corporate Law',
//       description: 'Expert guidance in business law, mergers, and corporate governance.',
//       services: ['Company Registration', 'Mergers & Acquisitions', 'Corporate Compliance', 'Business Restructuring'],
//     },
//     {
//       icon: Gavel,
//       title: 'Criminal Defense',
//       description: 'Strong defense strategies for protecting your rights and freedom.',
//       services: ['Criminal Appeals', 'White Collar Crimes', 'Bail Matters', 'Criminal Trials'],
//     },
//     {
//       icon: Users,
//       title: 'Family Law',
//       description: 'Compassionate representation in divorce, custody, and family matters.',
//       services: ['Divorce Proceedings', 'Child Custody', 'Maintenance Cases', 'Domestic Violence'],
//     },
//     {
//       icon: Briefcase,
//       title: 'Civil Litigation',
//       description: 'Comprehensive civil litigation services for various disputes.',
//       services: ['Property Disputes', 'Contract Disputes', 'Civil Appeals', 'Recovery Suits'],
//     },
//   ];

//   const achievements = [
//     { number: '25+', text: 'Years of Experience' },
//     { number: '1000+', text: 'Cases Won' },
//     { number: '95%', text: 'Success Rate' },
//     { number: '2500+', text: 'Happy Clients' },
//   ];

//   return (
//     <Router>

//       <div className="min-h-screen flex flex-col">
//         {/* Disclaimer Popup */}
//         {showDisclaimer && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg p-8 max-w-md mx-4">
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-xl font-bold">Legal Disclaimer</h3>
//                 <button onClick={handleAcceptDisclaimer} className="text-gray-500 hover:text-gray-700">
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>
//               <p className="text-gray-600 mb-6">
//                 The information provided on this website is for general informational purposes only and should not be considered as legal advice. Each case is unique and results may vary. Contacting us does not create an attorney-client relationship.
//               </p>
//               <button
//                 onClick={handleAcceptDisclaimer}
//                 className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded font-semibold transition duration-300"
//               >
//                 I Understand
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Top Contact Bar */}
//         <div className="bg-gray-900 text-white py-2">
//           <div className="container mx-auto px-4 flex justify-between items-center">
//             <div className="flex space-x-6">
//               <a href="tel:+1234567890" className="flex items-center hover:text-gray-300">
//                 <Phone className="w-4 h-4 mr-2" />
//                 <span>+91 8210196040</span>
//               </a>
//               <a href="mailto:contact@lawfirm.com" className="flex items-center hover:text-gray-300">
//                 <Mail className="w-4 h-4 mr-2" />
//                 <span>contact@lawfirm.com</span>
//               </a>
//             </div>
//             <Link to="/consultation" className="hidden sm:flex items-center hover:text-gray-300">
//               <Star className="w-4 h-4 mr-2" />
//               <span>Free Case Evaluation</span>
//             </Link>
//           </div>
//         </div>

//         <Header />

//         {/* Main Content */}
//         <main className="flex-grow">
//           {/* Hero Section */}
//           <div className="relative h-[600px]">
//             <img
//               src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=2000&q=80"
//               alt="Law office"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70 flex items-center">
//               <div className="container mx-auto px-4">
//                 <div className="text-white max-w-3xl">
//                   <h1 className="text-5xl font-bold mb-6 leading-tight">
//                     Committed to Protecting Your Rights & Interests
//                   </h1>
//                   <p className="text-xl mb-8 text-gray-200">
//                     With over 25 years of experience, we provide expert legal representation across multiple practice areas.
//                   </p>
//                   <div className="flex flex-wrap gap-4">
//                     <button onClick={handleModalToggle} className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded font-semibold transition duration-300">
//                       Schedule Consultation
//                     </button>
//                     <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded font-semibold transition duration-300">
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Achievements Section */}
//           <section className="bg-blue-700 text-white py-12">
//             <div className="container mx-auto px-4">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//                 {achievements.map((achievement, index) => (
//                   <div key={index} className="p-4">
//                     <div className="text-4xl font-bold mb-2">{achievement.number}</div>
//                     <div className="text-gray-200">{achievement.text}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Practice Areas */}
//           <section className="py-16 bg-gray-50">
//             <div className="container mx-auto px-4">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Practice Areas</h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                   We offer comprehensive legal services across various practice areas to meet all your legal needs.
//                 </p>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {expertiseAreas.map((area, index) => (
//                   <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
//                     <div className="p-6">
//                       <area.icon className="w-12 h-12 text-blue-700 mb-4" />
//                       <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
//                       <p className="text-gray-600 mb-4">{area.description}</p>
//                       <ul className="space-y-2">
//                         {area.services.map((service, idx) => (
//                           <li key={idx} className="flex items-center text-gray-700">
//                             <ChevronRight className="w-4 h-4 text-blue-700 mr-2" />
//                             <span>{service}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Welcome Section */}
//           <section className="py-16">
//             <div className="container mx-auto px-4">
//               <div className="grid md:grid-cols-2 gap-12 items-center">
//                 <div>
//                   <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Our Law Firm</h2>
//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     We are one of the leading law firms providing comprehensive legal solutions to our clients. Our team of experienced attorneys is dedicated to delivering exceptional legal services with the highest standards of professional excellence.
//                   </p>
//                   <div className="grid grid-cols-2 gap-4 mb-8">
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <Award className="w-5 h-5 text-blue-700" />
//                       <span>Expert Attorneys</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <Scale className="w-5 h-5 text-blue-700" />
//                       <span>Fair Pricing</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <BookOpen className="w-5 h-5 text-blue-700" />
//                       <span>Free Consultation</span>
//                     </div>
//                     <div className="flex items-center space-x-2 text-gray-700">
//                       <Users className="w-5 h-5 text-blue-700" />
//                       <span>Client Focused</span>
//                     </div>
//                   </div>
//                   <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded font-semibold transition duration-300">
//                     About Our Firm
//                   </button>
//                 </div>
//                 <div className="relative">
//                   <img
//                     src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?auto=format&fit=crop&w=800&q=80"
//                     alt="Law office interior"
//                     className="rounded-lg shadow-xl"
//                   />
//                   <div className="absolute -bottom-6 -left-6 bg-blue-700 text-white p-6 rounded-lg">
//                     <div className="text-3xl font-bold mb-1">25+</div>
//                     <div className="text-sm">Years of Experience</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <ContactUs />
//           <FAQ />
//           <GoogleMap />

//           {/* Modal for Consultation Schedule */}
//           {showModal && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white rounded-lg p-8 max-w-md mx-4">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-xl font-bold">Schedule Your Consultation</h3>
//                   <button onClick={handleModalToggle} className="text-gray-500 hover:text-gray-700">
//                     <X className="w-6 h-6" />
//                   </button>
//                 </div>
//                 <form>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
//                     <input
//                       type="text"
//                       id="name"
//                       className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
//                     <input
//                       type="email"
//                       id="email"
//                       className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="john@example.com"
//                     />
//                   </div>
//                   <div className="mb-4">
//                     <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="(123) 456-7890"
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded font-semibold transition duration-300"
//                   >
//                     Confirm Consultation
//                   </button>
//                 </form>
//               </div>
//             </div>
//           )}
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;





