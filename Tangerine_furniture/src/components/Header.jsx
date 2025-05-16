import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeAll = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const categories = [
    {
      name: "Living Room",
      path: "/living-room",
      subcategories: [
        { name: "Sofas", path: "/living-room#sofas" },
        { name: "TV Consoles", path: "/living-room#tv-consoles" },
        { name: "Coffee Tables", path: "/living-room#coffee-tables" }
      ]
    },
    {
      name: "Bedroom",
      path: "/bedroom",
      subcategories: [
        { name: "Beds", path: "/bedroom#beds" },
        { name: "Dressers", path: "/bedroom#dressers" },
        { name: "Nightstands", path: "/bedroom#nightstands" }
      ]
    },
    {
      name: "Hospitality",
      path: "/hospitality"
    },
    {
      name: "Outdoor",
      path: "/outdoor"
    },
    {
      name: "Office",
      path: "/office"
    }
  ];

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center py-2 text-sm font-bold">
        🎉 Limited Time: Free Shipping on All Orders Over $99 🎉
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-orange-500 p-2 rounded-md"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                onClick={closeAll}
                className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 hover:from-amber-500 hover:to-orange-500 transition-all duration-300"
              >
                Tangerine
              </Link>
              <span className="ml-1 text-xl font-bold text-gray-800">Furniture</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {categories.map((category) => (
                <div key={category.name} className="relative group">
                  {category.subcategories ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(category.name)}
                        className="flex items-center text-gray-800 hover:text-orange-500 font-medium transition-colors"
                      >
                        {category.name}
                        <FiChevronDown className={`ml-1 transition-transform ${activeDropdown === category.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === category.name && (
                        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-gray-200 py-1 z-50 animate-fadeIn">
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              onClick={closeAll}
                              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={category.path}
                      className="text-gray-800 hover:text-orange-500 font-medium transition-colors"
                    >
                      {category.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="text-gray-800 hover:text-orange-500 font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-700 hover:text-orange-500">
                <FiSearch size={20} />
              </button>
              <button className="p-2 text-gray-700 hover:text-orange-500">
                <FiUser size={20} />
              </button>
              <button className="p-2 text-gray-700 hover:text-orange-500 relative">
                <FiShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 mt-16 overflow-y-auto animate-slideIn">
            <div className="px-4 py-2 space-y-1">
              {categories.map((category) => (
                <div key={category.name} className="border-b border-gray-200 py-2">
                  {category.subcategories ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(category.name)}
                        className="w-full flex justify-between items-center px-3 py-3 text-lg font-medium text-gray-800 hover:text-orange-500"
                      >
                        {category.name}
                        <FiChevronDown className={`transition-transform ${activeDropdown === category.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === category.name && (
                        <div className="pl-4 space-y-2 mt-2 animate-fadeIn">
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              onClick={closeAll}
                              className="block px-3 py-2 text-gray-700 hover:text-orange-500"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={category.path}
                      onClick={closeAll}
                      className="block px-3 py-3 text-lg font-medium text-gray-800 hover:text-orange-500"
                    >
                      {category.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={closeAll}
                className="block px-3 py-3 text-lg font-medium text-gray-800 hover:text-orange-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}