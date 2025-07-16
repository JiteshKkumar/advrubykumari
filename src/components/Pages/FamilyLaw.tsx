import React from 'react';
import Familylaw from '../../Images/family.jpg'


const FamilyLaw = () => {
  return (
    <div className="family-law-container">
      <header className="header">
        <h1>Family Law</h1>
        <p className="subtitle">Understanding the essential components of family legal practices</p>
      </header>

      <section className="image-section">
        <img
          src={Familylaw}
          alt="Family Law"
          className="main-image"
        />
      </section>

      <section className="key-areas">
        <h2>Key Areas of Family Law</h2>
        <div className="card-container">
          <div className="card">
            <h3>Divorce and Separation</h3>
            <p>Legal representation for individuals seeking to end a marriage or separation.</p>
          </div>
          <div className="card">
            <h3>Child Custody and Support</h3>
            <p>Guiding families through the process of child custody arrangements and child support issues.</p>
          </div>
          <div className="card">
            <h3>Adoption</h3>
            <p>Assisting in the legal procedures involved in adopting a child or family member.</p>
          </div>
        </div>
      </section>

      <section className="family-law-process">
        <h2>Family Law Process</h2>
        
        <div className="process-list">
          <ul>
            <li>Here’s a typical process in family law cases:</li>
            <li>Initial consultation to understand the client's needs and objectives.</li>
            <li>Negotiating and mediating disputes regarding custody, property division, or support.</li>
            <li>Filing court petitions for divorce, child custody, or adoption.</li>
            <li>Attending hearings and finalizing legal agreements or court orders.</li>
          </ul>
        </div>
      </section>

      <section className="family-law-services">
        <h2>Family Law Services</h2>
        <ul>
          <li>Assisting with divorce and legal separation proceedings.</li>
          <li>Handling child custody and visitation rights matters.</li>
          <li>Providing legal counsel for alimony and child support issues.</li>
          <li>Assisting with adoption and surrogacy procedures.</li>
        </ul>
      </section>

      <style jsx>{`
        /* General Styling */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7fc;
          color: #333;
        }

        .family-law-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        /* Header Styling */
        .header {
          text-align: center;
          margin-bottom: 40px;
        }

        h1 {
          font-size: 2.5rem;
          color: #2980b9; /* A calming blue color for family law */
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #666;
        }

        /* Image Section */
        .image-section {
          margin-bottom: 40px;
        }

        .main-image {
          width: 100%; /* Full width */
          height: 50vh; /* 50% of the viewport height */
          object-fit: cover; /* Ensures the image covers the area while maintaining its aspect ratio */
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        /* Key Areas Section */
        .key-areas {
          margin-bottom: 40px;
        }

        .key-areas h2 {
          font-size: 2rem;
          color: #2980b9;
          margin-bottom: 20px;
          text-align: center;
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          justify-items: center;
        }

        .card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          transition: transform 0.3s ease-in-out;
        }

        .card h3 {
          font-size: 1.5rem;
          color: #2980b9;
          margin-bottom: 15px;
        }

        .card p {
          color: #555;
        }

        .card:hover {
          transform: translateY(-10px);
        }

        /* Family Law Process Section */
        .family-law-process {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }

        .family-law-process h2 {
          font-size: 1.8rem;
          color: #2980b9;
          margin-bottom: 20px;
          text-align: center;
        }

        .process-list {
          padding-left: 20px;
        }

        .process-list ul {
          list-style-type: none; /* Remove default list styles */
          padding-left: 0;
        }

        .process-list li {
          background: url('https://upload.wikimedia.org/wikipedia/commons/a/a5/Green_check.svg') no-repeat left center;
          padding-left: 30px;
          margin-bottom: 12px;
          color: #666;
          font-size: 1.1rem;
        }

        /* Family Law Services Section */
        .family-law-services {
          margin-bottom: 40px;
        }

        .family-law-services h2 {
          font-size: 2rem;
          color: #2980b9;
          margin-bottom: 20px;
          text-align: center;
        }

        .family-law-services ul {
          padding-left: 20px;
        }

        .family-law-services ul li {
          margin-bottom: 10px;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default FamilyLaw;
