import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Home from './Home';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import TopContactBar from './components/TopContactBar';
import Footer from './components/Footer';
import AboutUs from './components/Aboutus';
import PracticeAreas from './components/Practicearea';

import CorporateLaw from './components/services/CorporateLaw';
import CriminalDefense from './components/services/CriminalDefense';
import FamilyLaw from './components/services/FamilyLaw';
import CivilLitigation from './components/services/CivilLitigation';
import PrivacyPolicy from './components/services/PrivacyPolicy';
import Blog from './components/services/Blog';
import BlogPost from './components/services/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <TopContactBar />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/Praticearea" element={<PracticeAreas />} />

            <Route path="/services/corporate-law" element={<CorporateLaw />} />
            <Route path="/services/criminal-defense" element={<CriminalDefense />} />
            <Route path="/services/family-law" element={<FamilyLaw />} />
            <Route path="/services/civil-litigation" element={<CivilLitigation />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;