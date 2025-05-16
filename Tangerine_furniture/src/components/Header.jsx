import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Flash Banner */}
      <div className="w-full text-center bg-[#F5F1E9] text-[#102A43] py-1 text-sm font-semibold animate-pulse">
        🚚 Free Delivery on All Orders!
      </div>

      {/* Main Navbar */}
      <header className="bg-[#102A43] text-[#F5F1E9] shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Far Left - Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FF7035] p-1 focus:outline-none"
            >
              <Menu size={28} />
            </button>

            {isOpen && (
              <div className="absolute top-12 left-0 w-56 bg-[#F5F1E9] border border-[#102A43] shadow-xl z-50 rounded-md p-4 text-[#102A43] font-semibold">
                <ul className="space-y-4">
                  <li>
                    <Link to="/living-room" onClick={() => setIsOpen(false)}>
                      Living Room
                    </Link>
                  </li>
                  <li>
                    <Link to="/bedroom" onClick={() => setIsOpen(false)}>
                      Bedroom
                    </Link>
                  </li>
                  <li>
                    <Link to="/hotels" onClick={() => setIsOpen(false)}>
                      Hotel Furnishing
                    </Link>
                  </li>
                  <li>
                    <Link to="/airbnb" onClick={() => setIsOpen(false)}>
                      Airbnb Furnishing
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Center - Brand */}
          <div className="text-2xl font-bold text-[#FF7035]">Tangerine Furniture</div>

          {/* Right - Nav Links */}
          <nav className="hidden md:flex flex-grow justify-center">
            <div className="space-x-12 font-semibold text-lg flex items-center text-[#F5F1E9]">
              <Link
                to="/"
                className="relative hover:text-[#FF7035] transition duration-300"
              >
                Home
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FF7035] scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Link>

              <Link
                to="/shop"
                className="relative hover:text-[#FF7035] transition duration-300"
              >
                Shop Now
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FF7035] scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Link>

              <Link
                to="/contact"
                className="relative hover:text-[#FF7035] transition duration-300"
              >
                Contact Us
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FF7035] scale-x-0 hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
