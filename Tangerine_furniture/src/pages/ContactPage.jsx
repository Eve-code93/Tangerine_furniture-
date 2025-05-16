import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Hero Section */}
      <div className="bg-[#0F2A43] text-[#F5F5F0] py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl max-w-2xl mx-auto">
          We'd love to hear from you! Reach out for inquiries, support, or design consultations.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#0F2A43] mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF7035] focus:border-[#FF7035]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF7035] focus:border-[#FF7035]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF7035] focus:border-[#FF7035]"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="design">Design Consultation</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF7035] focus:border-[#FF7035]"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#FF7035] text-white font-medium rounded-md hover:bg-[#E6652E] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0F2A43] mb-6">Get in Touch</h2>
              <p className="text-gray-700">
                Have questions about our furniture collections or need design advice? Our team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#FF7035] p-3 rounded-full text-white">
                  <FiMail size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#0F2A43]">Email Us</h3>
                  <p className="text-gray-600">info@tangerinefurniture.com</p>
                  <p className="text-gray-600">support@tangerinefurniture.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#FF7035] p-3 rounded-full text-white">
                  <FiPhone size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#0F2A43]">Call Us</h3>
                  <p className="text-gray-600">Sales: (123) 456-7890</p>
                  <p className="text-gray-600">Support: (123) 456-7891</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#FF7035] p-3 rounded-full text-white">
                  <FiMapPin size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#0F2A43]">Visit Us</h3>
                  <p className="text-gray-600">123 Furniture Avenue</p>
                  <p className="text-gray-600">Design District, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#FF7035] p-3 rounded-full text-white">
                  <FiClock size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-[#0F2A43]">Business Hours</h3>
                  <p className="text-gray-600">Monday-Friday: 9am - 6pm</p>
                  <p className="text-gray-600">Saturday: 10am - 4pm</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
              <iframe
                title="Store Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?q=123%20Furniture%20Avenue,%20Design%20District,%20CA%2090210&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#0F2A43] py-16 px-4 text-center text-[#F5F5F0]">
        <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
        <p className="max-w-2xl mx-auto mb-6">
          Our customer service team is available to help with any questions about your order or our products.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:1234567890"
            className="px-6 py-3 bg-[#FF7035] text-white rounded-md hover:bg-[#E6652E] transition-colors font-medium"
          >
            Call Now: (123) 456-7890
          </a>
          <a
            href="mailto:support@tangerinefurniture.com"
            className="px-6 py-3 bg-white text-[#0F2A43] rounded-md hover:bg-gray-100 transition-colors font-medium"
          >
            Email Support
          </a>
        </div>
      </div>
    </div>
  );
}