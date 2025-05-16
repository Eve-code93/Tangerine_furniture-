import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

export function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-navy p-2 focus:outline-none"
      >
        <Menu size={28} />
      </button>

      {isOpen && (
        <div className="absolute top-12 left-0 w-56 bg-beige border border-navy shadow-xl z-50 rounded-md p-4">
          <ul className="space-y-4 text-dark-blue">
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
  );
}
