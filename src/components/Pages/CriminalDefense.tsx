import React from 'react';
import Criminal from '../../Images/Criminal.jpg'

const CriminalDefense = () => {
  return (
    <div className="criminal-defense-container">
      <header className="header">
        <h1>Criminal Defense Law</h1>
        <p className="subtitle">Understanding the essential components of criminal defense practices</p>
      </header>

      <section className="image-section">
        <img
          src={Criminal}
          alt="Criminal Defense"
          className="main-image"
        />
      </section>

      <section className="key-areas">
        <h2>Key Areas of Criminal Defense</h2>
        <div className="card-container">
          <div className="card">
            <h3>Felony Defense</h3>
            <p>Defending individuals accused of serious crimes punishable by more than a year in prison.</p>
          </div>
          <div className="card">
            <h3>Misdemeanor Defense</h3>
            <p>Legal representation for individuals charged with less severe crimes that typically result in shorter sentences.</p>
          </div>
          <div className="card">
            <h3>Drug Offenses</h3>
            <p>Defending clients against drug-related charges such as possession, trafficking, and distribution.</p>
          </div>
        </div>
      </section>

      <section className="criminal-defense-process">
        <h2>Criminal Defense Process</h2>
        
        <div className="process-list">
          <ul>
            <li>Here’s a typical process in criminal defense law:</li>
            <li>Consultation with the defendant and investigation of the case details.</li>
            <li>Development of a defense strategy and negotiating plea deals if appropriate.</li>
            <li>Trial preparation and presenting the defense case in court.</li>
            <li>Post-trial motions, appeals, and sentencing procedures if necessary.</li>
          </ul>
        </div>
      </section>

      <section className="criminal-defense-services">
        <h2>Criminal Defense Services</h2>
        <ul>
          <li>Defending clients against criminal charges in various courts.</li>
          <li>Negotiating plea deals and minimizing penalties.</li>
          <li>Conducting investigations and gathering evidence for the defense.</li>
          <li>Handling post-conviction matters, including appeals and expungement.</li>
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

        .criminal-defense-container {
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
          color: #c0392b; /* A strong red color for the criminal defense theme */
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
          color: #c0392b;
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
          color: #c0392b;
          margin-bottom: 15px;
        }

        .card p {
          color: #555;
        }

        .card:hover {
          transform: translateY(-10px);
        }

        /* Criminal Defense Process Section */
        .criminal-defense-process {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }

        .criminal-defense-process h2 {
          font-size: 1.8rem;
          color: #c0392b;
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

        /* Criminal Defense Services Section */
        .criminal-defense-services {
          margin-bottom: 40px;
        }

        .criminal-defense-services h2 {
          font-size: 2rem;
          color: #c0392b;
          margin-bottom: 20px;
          text-align: center;
        }

        .criminal-defense-services ul {
          padding-left: 20px;
        }

        .criminal-defense-services ul li {
          margin-bottom: 10px;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default CriminalDefense;
