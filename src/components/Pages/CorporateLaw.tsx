import React from 'react';
import Corporate from '../../Images/CorporateLaw.png'

const CorporateLaw = () => {
  return (
    <div className="corporate-law-container">
      <header className="header">
        <h1>Corporate Law</h1>
        <p className="subtitle">Understanding the key aspects of corporate legal practices</p>
      </header>

      <section className="image-section">
        <img
          src={Corporate}
          alt="Corporate Law"
          className="main-image"
        />
      </section>

      <section className="key-areas">
        <h2>Key Areas of Corporate Law</h2>
        <div className="card-container">
          <div className="card">
            <h3>Business Formation</h3>
            <p>Establishing a legal entity for business operations.</p>
          </div>
          <div className="card">
            <h3>Corporate Governance</h3>
            <p>Rules, practices, and processes by which a company is directed and controlled.</p>
          </div>
          <div className="card">
            <h3>Mergers & Acquisitions</h3>
            <p>Legal processes involved when companies merge or one company acquires another.</p>
          </div>
        </div>
      </section>

      <section className="corporate-law-process">
        <h2>Corporate Law Process</h2>
        
        <div className="process-list">
          <ul>
            <li>Here’s a typical process involved in corporate law:</li>
            <li>Formation of the corporation or business entity.</li>
            <li>Establishing a corporate structure, including the board of directors.</li>
            <li>Ongoing compliance with legal regulations and tax filings.</li>
            <li>Managing mergers, acquisitions, or liquidation if necessary.</li>
          </ul>
        </div>
      </section>

      <section className="corporate-law-services">
        <h2>Corporate Law Services</h2>
        <ul>
          <li>Legal counsel for business formation and compliance.</li>
          <li>Advising on mergers, acquisitions, and restructuring.</li>
          <li>Litigation and dispute resolution services.</li>
          <li>Drafting contracts and agreements, including shareholder agreements and employment contracts.</li>
        </ul>
      </section>

      <style jsx> {`
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

        .corporate-law-container {
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
          color: #2d5e9c;
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
          height: 100%; /* 50% of the viewport height */
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
          color: #2d5e9c;
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
          color: #2d5e9c;
          margin-bottom: 15px;
        }

        .card p {
          color: #555;
        }

        .card:hover {
          transform: translateY(-10px);
        }

        /* Corporate Law Process Section */
        .corporate-law-process {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }

        .corporate-law-process h2 {
          font-size: 1.8rem;
          color: #2d5e9c;
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

        /* Corporate Law Services Section */
        .corporate-law-services {
          margin-bottom: 40px;
        }

        .corporate-law-services h2 {
          font-size: 2rem;
          color: #2d5e9c;
          margin-bottom: 20px;
          text-align: center;
        }

        .corporate-law-services ul {
          padding-left: 20px;
        }

        .corporate-law-services ul li {
          margin-bottom: 10px;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default CorporateLaw;
