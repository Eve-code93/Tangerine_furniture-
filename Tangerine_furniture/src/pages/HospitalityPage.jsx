import React from "react";
import { Link } from "react-router-dom";

const hospitalityCategories = [
  {
    name: "Furniture",
    path: "/hospitality/furniture",
  },
  {
    name: "Decor",
    path: "/hospitality/decor",
  },
  {
    name: "Airbnb Furnishing",
    path: "/hospitality/airbnb-furnishing",
  },
  {
    name: "Hotel Furnishing",
    path: "/hospitality/hotel-furnishing",
  },
];

export default function HospitalityPage() {
  return (
    <div className="min-h-screen bg-beige p-6 text-[#102A43]">
      <h1 className="text-3xl font-bold mb-6">Hospitality Furnishing</h1>
      <p className="mb-4 max-w-xl">
        Explore our curated selection of furniture and decor tailored for Airbnb rentals, hotels, and other hospitality venues.
      </p>
      <ul className="space-y-4">
        {hospitalityCategories.map((category) => (
          <li key={category.path} className="text-lg font-semibold">
            <Link
              to={category.path}
              className="text-[#FF7035] hover:underline"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
