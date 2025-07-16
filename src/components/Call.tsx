import React from 'react';

// Floating Button Styles
const floatingButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const buttonStyle = {
  backgroundColor: '#007BFF',  // Primary blue color
  border: 'none',
  color: 'white',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s ease, transform 0.2s ease', // Smooth hover effect
};

// Button Hover Style
const buttonHoverStyle = {
  backgroundColor: '#0056b3', // Darker blue for hover effect
  transform: 'scale(1.1)', // Slightly enlarge on hover
};

const Call = () => {
  return (
    <div>
      {/* Floating icons */}
      <div style={floatingButtonStyle}>
        <a
          href="tel:+91 8210196040"
          style={buttonStyle}
          aria-label="Call Us"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
        >
          ✆
        </a>
        <a
          href="mailto:info@example.com"
          style={buttonStyle}
          aria-label="Email Us"
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007BFF'}
        >
          ✉️
        </a>
      </div>
    </div>
  );
};

export default Call;
