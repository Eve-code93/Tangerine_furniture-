import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export  default function WelcomeSection() {
  return (
    <section className="bg-[#F5F5F0] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A43] mb-4">
            Kenyan Craftsmanship, Global Standards
          </h2>
          <div className="w-20 h-1 bg-[#FF7035] mx-auto mb-6"></div>
          <p className="text-lg text-[#0F2A43]/80 max-w-2xl mx-auto">
            Handcrafted furniture blending African heritage with modern design
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Gallery - Larger and more vibrant */}
          <div className="grid grid-cols-1 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-80 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Nairobi Showroom"
                className="w-full h-full object-cover brightness-90 hover:brightness-100 transition duration-500"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F2A43] to-transparent p-4">
                <p className="text-white font-medium flex items-center">
                  <FiMapPin className="mr-2" /> Nairobi Design Center
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-80 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Mombasa Workshop"
                className="w-full h-full object-cover brightness-90 hover:brightness-100 transition duration-500"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F2A43] to-transparent p-4">
                <p className="text-white font-medium flex items-center">
                  <FiMapPin className="mr-2" /> Mombasa Craft Workshop
                </p>
              </div>
            </div>
          </div>

          {/* Story Content - Brief and impactful */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#0F2A43] mb-3">Our Story</h3>
              <p className="text-[#0F2A43]/90 mb-4">
                Founded in 2012, we bridge traditional Kenyan woodworking with contemporary design. 
                Each piece tells a story of skilled hands and sustainable materials.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#FF7035] font-bold mr-2">•</span>
                  <span>2 showrooms across Kenya</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7035] font-bold mr-2">•</span>
                  <span>50+ master craftsmen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF7035] font-bold mr-2">•</span>
                  <span>100% sustainably sourced materials</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#0F2A43] mb-3">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FiPhone className="text-[#FF7035] mr-3 text-xl" />
                  <span className="text-[#0F2A43]">+254 700 123456</span>
                </div>
                <div className="flex items-center">
                  <FiMail className="text-[#FF7035] mr-3 text-xl" />
                  <span className="text-[#0F2A43]">hello@tangerinefurniture.co.ke</span>
                </div>
              </div>
            </div>

            <Link 
              to="/contact" 
              className="inline-block mt-4 bg-[#FF7035] hover:bg-[#E6652E] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}