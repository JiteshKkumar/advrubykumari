import React from 'react';
import Civil from '../../Images/Civil.jpg'

const CivilLitigation = () => {
  return (
    <div className="civil-litigation-container">
      <header className="header">
        <h1>Civil Litigation</h1>
        <p className="subtitle">Understanding the essentials of civil litigation practices</p>
      </header>

      <section className="image-section">
        <img
          src={Civil}
          alt="Civil Litigation"
          className="main-image"
        />
      </section>

      <section className="key-areas">
        <h2>Key Areas of Civil Litigation</h2>
        <div className="card-container">
          <div className="card">
            <h3>Contract Disputes</h3>
            <p>Resolving conflicts related to the terms or performance of a contract.</p>
          </div>
          <div className="card">
            <h3>Property Disputes</h3>
            <p>Legal processes surrounding disagreements over property rights and ownership.</p>
          </div>
          <div className="card">
            <h3>Tort Claims</h3>
            <p>Seeking compensation for personal injury, negligence, or defamation cases.</p>
          </div>
        </div>
      </section>

      <section className="civil-litigation-process">
        <h2>Civil Litigation Process</h2>
        
        <div className="process-list">
          <ul>
            <li>Here’s a typical process in civil litigation cases:</li>
            <li>Initial consultation with the client to understand the dispute.</li>
            <li>Investigation and gathering of evidence to support the case.</li>
            <li>Filing the complaint and serving the defendant.</li>
            <li>Negotiations or settlement discussions before trial.</li>
            <li>Trial and judgment if no settlement is reached.</li>
          </ul>
        </div>
      </section>

      <section className="civil-litigation-services">
        <h2>Civil Litigation Services</h2>
        <ul>
          <li>Legal representation in contract disputes and breach of contract cases.</li>
          <li>Assistance in property disputes, including landlord-tenant and real estate matters.</li>
          <li>Handling tort claims, including personal injury, medical malpractice, and defamation cases.</li>
          <li>Providing counsel for class action lawsuits and consumer protection issues.</li>
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

        .civil-litigation-container {
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
          color: #e74c3c; /* A red color to represent litigation or legal dispute */
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
          width: 100%;
          height: 50vh;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        /* Key Areas Section */
        .key-areas {
          margin-bottom: 40px;
        }

        .key-areas h2 {
          font-size: 2rem;
          color: #e74c3c;
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
          color: #e74c3c;
          margin-bottom: 15px;
        }

        .card p {
          color: #555;
        }

        .card:hover {
          transform: translateY(-10px);
        }

        /* Civil Litigation Process Section */
        .civil-litigation-process {
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 40px;
        }

        .civil-litigation-process h2 {
          font-size: 1.8rem;
          color: #e74c3c;
          margin-bottom: 20px;
          text-align: center;
        }

        .process-list {
          padding-left: 20px;
        }

        .process-list ul {
          list-style-type: none;
          padding-left: 0;
        }

        .process-list li {
          background: url('https://upload.wikimedia.org/wikipedia/commons/a/a5/Green_check.svg') no-repeat left center;
          padding-left: 30px;
          margin-bottom: 12px;
          color: #666;
          font-size: 1.1rem;
        }

        /* Civil Litigation Services Section */
        .civil-litigation-services {
          margin-bottom: 40px;
        }

        .civil-litigation-services h2 {
          font-size: 2rem;
          color: #e74c3c;
          margin-bottom: 20px;
          text-align: center;
        }

        .civil-litigation-services ul {
          padding-left: 20px;
        }

        .civil-litigation-services ul li {
          margin-bottom: 10px;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default CivilLitigation;
