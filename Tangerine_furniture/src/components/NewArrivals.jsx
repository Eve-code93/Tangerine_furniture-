import React, { useState, useEffect } from "react";

const newArrivalsData = [
  {
    id: 1,
    name: "Modern Living Room Sofa",
    price: "$799",
    image: "/images/tangy/cute sofa.jpg",
  },
  {
    id: 2,
    name: "Elegant Bedroom Set",
    price: "$899",
    image: "/images/tangy/livin.jpg",
  },
  {
    id: 3,
    name: "Cozy Airbnb Chair",
    price: "$299",
    image: "/images/tangy/outdoor nice.jpg",
  },
];

export function NewArrivals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newArrivalsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = newArrivalsData[currentIndex];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-72 relative overflow-hidden rounded-md shadow-md">
        <img
          src={currentItem.image}
          alt={currentItem.name}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-navy">{currentItem.name}</h3>
      <p className="text-tangerine font-bold text-lg">{currentItem.price}</p>
      <button
        className="mt-4 bg-tangerine text-beige px-5 py-2 rounded hover:bg-orange-600 transition"
        onClick={() => alert(`Added "${currentItem.name}" to cart!`)}
      >
        Add to Cart
      </button>
      <div className="mt-4 flex space-x-3">
        {newArrivalsData.map((item, idx) => (
          <button
            key={item.id}
            className={`w-4 h-4 rounded-full ${
              idx === currentIndex ? "bg-tangerine" : "bg-beige"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
