import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    src: "/images/tangy/living-room.jpg",
    text: "Define Your Style with Elegant Living Room Pieces",
  },
  {
    src: "/images/tangy/bed-design.jpg",
    text: "Sleep in Comfort — Curated Bedroom Designs",
  },
  {
    src: "/images/tangy/airbnb.jpg",
    text: "Airbnb Makeovers that Leave a Lasting Impression",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleShopClick = () => {
    navigate("/shop");
  };

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className={`w-full h-full bg-cover bg-center transition-all duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${slides[current].src})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#102A43] bg-opacity-60"></div>

        {/* Text content */}
        <div className="relative flex items-center justify-center h-full text-center text-white px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{slides[current].text}</h1>
          <button
            onClick={handleShopClick}
            className="mt-6 bg-[#F5F1E9] text-[#102A43] px-6 py-3 rounded shadow hover:bg-[#FF7035] transition"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Image Preloader */}
      <img
        src={slides[current].src}
        alt="Preload"
        onLoad={handleImageLoad}
        className="hidden"
      />
    </div>
  );
}
