import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      {/* Flash Banner */}
      <div className="w-full text-center bg-[#F5F1E9] text-[#102A43] py-1 text-sm font-semibold animate-pulse">
        🚚 Free Delivery on All Orders!
      </div>

      {/* Main Navbar */}
      <header className="bg-[#102A43] text-[#F5F1E9] shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left - Logo */}
          <div className="text-2xl font-bold text-[#FF7035]">Tangerine Furniture</div>

          {/* Center - Nav Links */}
          <nav className="flex-grow flex justify-center">
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

