import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-navy p-2 focus:outline-none"
        aria-label="Toggle sidebar menu"
      >
        <Menu size={28} />
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 w-56 bg-beige border border-navy shadow-xl z-50 rounded-md p-4">
          <ul className="space-y-4 text-dark-blue font-semibold">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
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
              <Link to="/outdoor" onClick={() => setIsOpen(false)}>
                Outdoor
              </Link>
            </li>
            <li>
              <Link to="/office" onClick={() => setIsOpen(false)}>
                Office
              </Link>
            </li>
            <li>
              <Link to="/hotels" onClick={() => setIsOpen(false)}>
                Hotels
              </Link>
            </li>
            <li>
              <Link to="/airbnb" onClick={() => setIsOpen(false)}>
                Airbnbs
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
