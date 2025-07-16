import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, Building2 } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/2163596482/photo/midsection-of-judge-sitting-at-table.jpg?s=612x612&w=0&k=20&c=XLP_QroPDXhOtgjvtz_zULd6m5vD2HZGUF1ApBl2LRY=")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Get in Touch</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Have questions? We're here to help. Reach out to our team for expert assistance and support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Building2 className="w-6 h-6 text-blue-600" />, value: '3+', label: 'Years of Experience' },
            { icon: <Mail className="w-6 h-6 text-blue-600" />, value: '24/7', label: 'Customer Support' },
            { icon: <Phone className="w-6 h-6 text-blue-600" />, value: '100+', label: 'Satisfied Clients' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg">{item.icon}</div>
                <div>
                  <p className="text-4xl font-bold text-blue-600">{item.value}</p>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mg:2px">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="border-l-4 border-blue-600 pl-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
              <p className="text-gray-600 mt-2">We're here to help and answer any questions you might have.</p>
            </div>

            <div className="space-y-8">
              <InfoItem icon={<MapPin className="w-6 h-6 text-blue-600" />} title="Our Location" text="Delhi, India 110001" />
              <InfoItem icon={<Phone className="w-6 h-6 text-blue-600" />} title="Phone" text="+91 82101 96040" note="Monday to Sunday, 8am – 5pm" />
              <InfoItem icon={<Mail className="w-6 h-6 text-blue-600" />} title="Email" text="info@advrubygupta.in" note="We'll respond within 1 hour" />
              <InfoItem icon={<Clock className="w-6 h-6 text-blue-600" />} title="Business Hours" text="Monday - Sunday: 8:00 AM - 5:00 PM" note="On call Support Available" />
            </div>

            <div className="mt-8 relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Office"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="border-l-4 border-blue-600 pl-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you shortly.</p>
            </div>

            <form
              action="https://formspree.io/f/xvgqobwl"
              method="POST"
              className="space-y-6"
            >
              {[
                { id: 'name', type: 'text', label: 'Full Name', placeholder: 'Enter your full name' },
                { id: 'email', type: 'email', label: 'Email Address', placeholder: 'Enter your email address' },
                { id: 'subject', type: 'text', label: 'Subject', placeholder: 'Enter the subject' },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 caret-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm rounded-none focus:outline-none"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Write your message here"
                  className="mt-1 block w-full border border-gray-300 bg-white text-gray-900 caret-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm rounded-none focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 flex justify-center items-center"
              >
                Send Message <Send className="inline-block ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, title, text, note }: { icon: React.ReactNode; title: string; text: string; note?: string }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-blue-50 p-3 rounded-lg">{icon}</div>
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-1">{text}</p>
      {note && <p className="text-sm text-gray-500">{note}</p>}
    </div>
  </div>
);

export default ContactUs;
