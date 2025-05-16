import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const bestSellers = [
  { id: 1, name: "Luxury Sofa", price: "$899", image: "/images/tangy/living-room.jpg" },
  { id: 2, name: "Modern TV Console", price: "$499", image: "/images/tangy/livin.jpg" },
  { id: 3, name: "Elegant Coffee Table", price: "$299", image: "/images/tangy/vibrant-dining.jpg" },
  { id: 4, name: "Queen Bed Frame", price: "$799", image: "/images/tangy/bed-design.jpg" },
  { id: 5, name: "Vintage Mirror", price: "$199", image: "/images/tangy/dining-room-furn.jpg" },
  { id: 6, name: "Classic Bedside Cabinet", price: "$159", image: "/images/tangy/cute-sofa.jpg" },
];

export function BestSellers() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [lovedItems, setLovedItems] = useState([]);

  // Auto transition every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % bestSellers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const addToCart = (item) => {
    alert(`Added "${item.name}" to the cart!`);
  };

  const toggleLove = (item) => {
    setLovedItems((prevLoved) =>
      prevLoved.includes(item.id) ? prevLoved.filter((id) => id !== item.id) : [...prevLoved, item.id]
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-navy-blue mb-10 text-center">Here are our best sellers</h2>

      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h3 className="text-3xl font-bold text-navy-blue mb-6">Featured Items</h3>

        <div className="relative w-full h-96 mx-auto overflow-hidden rounded-md shadow-md mb-4 flex justify-center items-center">
          <img
            src={bestSellers[carouselIndex].image}
            alt={bestSellers[carouselIndex].name}
            className="object-cover w-full h-full transition-opacity duration-700 ease-in-out"
          />

          {/* Icons Overlaid on Image */}
          <div className="absolute top-2 right-2 flex space-x-3">
            <button
              onClick={() => addToCart(bestSellers[carouselIndex])}
              className="text-white bg-navy-blue p-2 rounded-full hover:bg-dark-navy-blue transition"
            >
              <FaShoppingCart size={20} />
            </button>
            <button
              onClick={() => toggleLove(bestSellers[carouselIndex])}
              className={`p-2 rounded-full transition ${
                lovedItems.includes(bestSellers[carouselIndex].id) ? "bg-navy-blue text-white" : "bg-[#F5F1E9] text-navy-blue"
              }`}
            >
              <FaHeart size={20} />
            </button>
          </div>
        </div>

        <h4 className="text-2xl font-semibold text-navy-blue">
          {bestSellers[carouselIndex].name}
        </h4>
        <p className="text-xl font-bold text-navy-blue mb-4">
          {bestSellers[carouselIndex].price}
        </p>
      </div>
    </section>
  );
}