import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    livingRoom: false,
    bedroom: false,
    outdoor: false,
    office: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const closeAll = () => {
    setIsOpen(false);
    setDropdownOpen({
      livingRoom: false,
      bedroom: false,
      outdoor: false,
      office: false,
    });
  };

  return (
    <>
      {/* Flash Banner */}
      <div className="w-full text-center bg-[#F5F1E9] text-[#102A43] py-1 text-sm font-semibold animate-pulse">
        🚚 Free Delivery on All Orders!
      </div>

      {/* Main Navbar */}
      <header className="text-[#102A43] shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between flex-col">
          {/* Left Section: Mobile Menu */}
          <div className="md:hidden w-full flex justify-start items-center mb-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FF7035] p-1 focus:outline-none font-semibold"
              aria-label="Toggle Menu"
            >
              Menu
            </button>
            {isOpen && (
              <div className="absolute top-12 left-0 w-56 border border-[#102A43] shadow-xl z-50 rounded-md p-4 font-semibold bg-white">
                <ul className="space-y-4 text-left text-[#102A43]">
                  {/* ... Mobile menu items ... */}
                  <li>
                    <button
                      onClick={() => toggleDropdown("livingRoom")}
                      className="w-full text-left hover:text-[#FF7035] transition"
                    >
                      Living Room
                    </button>
                    {dropdownOpen.livingRoom && (
                      <ul className="pl-4 mt-2 space-y-2 text-[#102A43]">
                        <li>
                          <Link to="/livingroom" onClick={closeAll} className="hover:text-[#FF7035]">
                            Sofas
                          </Link>
                        </li>
                        <li>
                          <Link to="/livingroom" onClick={closeAll} className="hover:text-[#FF7035]">
                            TV Consoles
                          </Link>
                        </li>
                        <li>
                          <Link to="/livingroom" onClick={closeAll} className="hover:text-[#FF7035]">
                            Coffee Tables
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button
                      onClick={() => toggleDropdown("bedroom")}
                      className="w-full text-left hover:text-[#FF7035] transition"
                    >
                      Bedroom
                    </button>
                    {dropdownOpen.bedroom && (
                      <ul className="pl-4 mt-2 space-y-2 text-[#102A43]">
                        <li>
                          <Link to="/bedroom" onClick={closeAll} className="hover:text-[#FF7035]">
                            Beds
                          </Link>
                        </li>
                        <li>
                          <Link to="/bedroom" onClick={closeAll} className="hover:text-[#FF7035]">
                            Mirrors
                          </Link>
                        </li>
                        <li>
                          <Link to="/bedroom" onClick={closeAll} className="hover:text-[#FF7035]">
                            Bedside Cabinets
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button
                      onClick={() => toggleDropdown("outdoor")}
                      className="w-full text-left hover:text-[#FF7035] transition"
                    >
                      Outdoor Furniture
                    </button>
                    {dropdownOpen.outdoor && (
                      <ul className="pl-4 mt-2 space-y-2 text-[#102A43]">
                        <li>
                          <Link to="/outdoor" onClick={closeAll} className="hover:text-[#FF7035]">
                            Chairs
                          </Link>
                        </li>
                        <li>
                          <Link to="/outdoor" onClick={closeAll} className="hover:text-[#FF7035]">
                            Tables
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button
                      onClick={() => toggleDropdown("office")}
                      className="w-full text-left hover:text-[#FF7035] transition"
                    >
                      Office Furniture
                    </button>
                    {dropdownOpen.office && (
                      <ul className="pl-4 mt-2 space-y-2 text-[#102A43]">
                        <li>
                          <Link to="/office" onClick={closeAll} className="hover:text-[#FF7035]">
                            Desks
                          </Link>
                        </li>
                        <li>
                          <Link to="/office" onClick={closeAll} className="hover:text-[#FF7035]">
                            Chairs
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link to="/hospitality" onClick={closeAll} className="text-[#102A43] hover:text-[#FF7035] transition font-semibold">
                      Hospitality (Hotels & Airbnb)
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={closeAll} className="text-[#102A43] hover:text-[#FF7035] transition font-semibold">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Center Brand */}
          <div className="text-2xl font-bold text-[#FF7035] w-full text-center mb-2 md:mb-0">
            <Link to="/" onClick={closeAll} className="hover:text-[#D86F27] transition">
              Tangerine Furniture
            </Link>
          </div>

          {/* Right Section: Desktop Navigation */}
          <nav className="hidden md:flex flex-grow justify-end">
            <ul className="flex space-x-6 font-semibold text-lg items-center text-[#102A43]">
              <li>
                <Link to="/" className="hover:text-[#FF7035] transition">
                  Home
                </Link>
              </li>
              <li className="relative group">
                <button className="hover:text-[#FF7035] transition font-semibold cursor-default">
                  Living Room
                </button>
                <ul className="absolute hidden group-hover:block bg-white rounded shadow-lg min-w-[180px] z-30 py-2">
                  <li>
                    <Link to="/livingroom" className="block px-4 py-2 text-[#102A43] hover:text-[#FF7035]">
                      Sofas
                    </Link>
                  </li>
                  <li>
                    <Link to="/livingroom" className="block px-4 py-2 text-[#102A43] hover:text-[#FF7035]">
                      TV Consoles
                    </Link>
                  </li>
                  <li>
                    <Link to="/livingroom" className="block px-4 py-2 text-[#102A43] hover:text-[#FF7035]">
                      Coffee Tables
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <button className="hover:text-[#FF7035] transition font-semibold cursor-default">
                  Bedroom
                </button>
                <ul className="absolute hidden group-hover:block bg-white rounded shadow-lg min-w-[180px] z-30 py-2">
                  <li>
                    <Link to="/bedroom" className="block px-4 py-2 text-[#102A43] hover:text-[#FF7035]">
                      Beds
                    </Link>
                  </li>
                  <li>
                    <Link to="/bedroom" className="block px-4 py-2 text-[#102A43] hover:text-[#FF7035]">
                      Mirrors
                    </Link>
                  </li>
                  <li>
                    <Link to="/bedroom" className="block px-4 py-2 text-[#102A43] hover:text-[#FF7035]">
                      Bedside Cabinets
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <button className="hover:text-[#FF7035] transition font-semibold cursor-default">
                  Outdoor Furniture
                </button>
                <ul className="absolute hidden group-hover:block bg-white rounded shadow-lg min-w-[180px] z-30 py-2">
                  <li>
                    <Link to="/outdoor" className="block px-4 py-2 text-[#102A43] hover:text-[#FF7035]">
                      Chairs
                    </Link>
                  </li>
                  <li>
                    <Link to="/outdoor" className="block px-4 py-2 text-[#102A43] hover:text-[#FF7035]">
                      Tables
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <button className="hover:text-[#FF7035] transition font-semibold cursor-default">
                  Office Furniture
                </button>
                <ul className="absolute hidden group-hover:block bg-white rounded shadow-lg min-w-[180px] z-30 py-2">
                  <li>
                    <Link to="/office" className="block px-4 py-2 text-[#102A43] hover:text-[#FF7035]">
                      Desks
                    </Link>
                  </li>
                  <li>
                    <Link to="/office" className="block px-4 py-2 text-[#102A43] hover:text-[#FF7035]">
                      Chairs
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/hospitality" className="hover:text-[#FF7035] transition font-semibold">
                  Hospitality (Hotels & Airbnb)
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF7035] transition font-semibold">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}