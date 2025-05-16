import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, FaInstagram, FaTwitter, FaPinterest, 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, 
  FaHeadset, FaCcVisa, FaCcMastercard, FaTruck,
  FaCreditCard, FaShieldAlt, FaMobileAlt
} from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-[#0F2A43] text-white pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Showrooms */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FF7035] flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Our Showrooms
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Nairobi Flagship</h4>
                <p className="text-gray-300">ABC Place, Waiyaki Way</p>
                <p className="text-gray-300">Open: Mon-Sat 9AM-6PM</p>
              </div>
              <div>
                <h4 className="font-medium">Mombasa Workshop</h4>
                <p className="text-gray-300">Nyali Centre, Mombasa Rd</p>
                <p className="text-gray-300">Open: Mon-Fri 8AM-5PM</p>
              </div>
              <button className="mt-2 bg-[#FF7035] hover:bg-[#E6652E] text-white px-4 py-2 rounded flex items-center text-sm">
                <FaClock className="mr-2" /> View Holiday Hours
              </button>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FF7035] flex items-center">
              <FaHeadset className="mr-2" /> Customer Care
            </h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
              <li><Link to="/faqs" className="text-gray-300 hover:text-white transition">FAQs</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white transition">Returns & Exchanges</Link></li>
              <li><Link to="/warranty" className="text-gray-300 hover:text-white transition">Warranty Information</Link></li>
              <li><Link to="/design-services" className="text-gray-300 hover:text-white transition">Design Consultation</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FF7035]">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition">Blog & Inspiration</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition">Project Gallery</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition">Customer Stories</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition">Careers</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FF7035]">Connect With Us</h3>
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <FaPhone className="text-[#FF7035] mr-2" />
                <span>+254 700 123456</span>
              </div>
              <div className="flex items-center mb-3">
                <FaEnvelope className="text-[#FF7035] mr-2" />
                <span>hello@tangerinefurniture.co.ke</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="text-gray-300 hover:text-[#FF7035] text-xl transition">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" className="text-gray-300 hover:text-[#FF7035] text-xl transition">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" className="text-gray-300 hover:text-[#FF7035] text-xl transition">
                  <FaTwitter />
                </a>
                <a href="https://pinterest.com" className="text-gray-300 hover:text-[#FF7035] text-xl transition">
                  <FaPinterest />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-l text-gray-800 w-full focus:outline-none"
                />
                <button className="bg-[#FF7035] hover:bg-[#E6652E] px-4 py-2 rounded-r">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges & Payments */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
              <div className="flex items-center text-sm">
                <FaTruck className="text-[#FF7035] mr-2" />
                <span>Free Delivery Nationwide</span>
              </div>
              <div className="flex items-center text-sm">
                <FaCreditCard className="text-[#FF7035] mr-2" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center text-sm">
                <FaShieldAlt className="text-[#FF7035] mr-2" />
                <span>5-Year Warranty</span>
              </div>
            </div>

            <div className="flex space-x-4 text-2xl items-center">
              {/* M-Pesa with mobile icon and label */}
              <div className="flex flex-col items-center" title="M-Pesa">
                <FaMobileAlt className="text-green-500 text-3xl" />
                <span className="text-xs mt-1 text-gray-300">M-Pesa</span>
              </div>
              
              {/* Other payment methods */}
        
              <FaCcVisa className="text-blue-300" title="Visa" />
              <FaCcMastercard className="text-red-400" title="Mastercard" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Tangerine Furniture Kenya. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-white transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}