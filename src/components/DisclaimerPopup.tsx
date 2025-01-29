import React, { useState } from 'react';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(true);  // Open modal by default

  const closeModal = () => {
    setIsOpen(false);  // Close the modal
  };

  return (
    <div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-1/2 max-w-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclaimer ⚖️</h2>
            <p className="text-lg text-gray-700 mb-6">
              As per the rules of the Bar Council of India, Law Firms are not permitted for advertisement and solicitation. 
              By clicking the button “I Agree”, the user accepts and accesses this website and seeks information of his own accord 
              and no form of solicitation has taken place by the Firm or its members. This information is provided in order to offer 
              general understanding of some of the legal scenarios and is not to be considered as legal advice. The contents of this website 
              are for informational purposes and not for any other purpose. The communication with us through the website is only a mode of 
              getting in touch with Advocate Ruby Gupta. Ruby Gupta & Associates does not make claims, promises, 
              guarantees or provide any warranty or assume any legal liability for the accuracy and/or usefulness of any information provided 
              or disclosed in the website.
            </p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisclaimerPopup;
