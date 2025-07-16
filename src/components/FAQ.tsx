import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What areas of law do you specialize in?",
      answer: "We specialize in various areas of law including Family Law, Criminal Defense, Civil Litigation, Corporate Law, and Real Estate Law. Our team has extensive experience in handling complex cases across these practice areas."
    },
    {
      question: "How much do your legal services cost?",
      answer: "Our fees vary depending on the complexity of your case and the type of legal service required. We offer an initial consultation where we can discuss your specific needs and provide a detailed fee structure. We believe in transparent pricing and will always provide clear information about costs upfront."
    },
    {
      question: "How long will my case take?",
      answer: "The duration of your case depends on various factors including its complexity, court schedules, and the cooperation of all parties involved. During our initial consultation, we can provide an estimated timeline based on our experience with similar cases."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer an initial consultation to discuss your case and understand your legal needs. This allows us to evaluate your situation and provide you with the best possible legal strategy moving forward."
    },
    {
      question: "What should I bring to my first meeting?",
      answer: "For your first meeting, please bring any relevant documents related to your case such as contracts, correspondence, court documents, and any other paperwork that might help us understand your situation better. Also, prepare a brief timeline of events and list of questions you'd like to discuss."
    },
    {
      question: "Can you represent me in court?",
      answer: "Yes, our experienced attorneys are qualified to represent you in all levels of court proceedings. We have extensive experience in litigation and will vigorously advocate for your interests throughout the legal process."
    },
    {
      question: "Do you handle international legal matters?",
      answer: "Yes, we have experience in handling international legal matters and can assist with cross-border transactions, international business law, and immigration cases. We maintain a network of international legal partners to ensure comprehensive coverage."
    },
    {
      question: "What is your success rate?",
      answer: "While each case is unique and past results don't guarantee future outcomes, we maintain a strong track record of successful resolutions for our clients. We're proud of our reputation for achieving favorable outcomes through both negotiation and litigation."
    },
    {
      question: "How do I stay informed about my case?",
      answer: "We provide regular updates on your case through your preferred communication method. You'll have direct access to your legal team, and we schedule periodic review meetings to discuss progress and strategy. We also offer a secure client portal for accessing case documents."
    },
    {
      question: "What if I need emergency legal assistance?",
      answer: "We understand that legal emergencies can occur at any time. We maintain a 24/7 emergency contact line for urgent legal matters, and our team is prepared to respond quickly when immediate legal assistance is required."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-6 md:p-8"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E
          %3Ctext x='40' y='50' font-size='36' text-anchor='middle' fill='rgba(0,0,0,0.03)'%3E⚖️%3C/text%3E
          %3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundColor: '#f8fafc',
      }}
    >
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-lg overflow-hidden transition-colors duration-200 ${openIndex === index ? 'border-black bg-blue-700' : 'border-blue-700 bg-blue-700'}`}
            >
              <button
                className={`w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none transition-colors duration-200 ${openIndex === index ? 'bg-black text-white' : 'bg-blue-700 text-white'}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-white flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white flex-shrink-0" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px',
                  overflow: 'hidden',
                }}
              >
                <p className="px-6 pb-4 text-green-600 bg-green-100 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
