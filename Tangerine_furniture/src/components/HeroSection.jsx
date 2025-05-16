import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    text: "Luxurious Living Room Collections",
    category: "living-room",
    buttonText: "Shop Sofas & More",
    highlight: "Sectionals • Coffee Tables • Entertainment Centers"
  },
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    text: "Dream Bedroom Designs",
    category: "bedroom",
    buttonText: "Browse Bedroom Sets",
    highlight: "Beds • Nightstands • Dressers"
  },
  {
    src: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    text: "Stylish Outdoor Living",
    category: "outdoor",
    buttonText: "View Patio Furniture",
    highlight: "Dining Sets • Loungers • Accents"
  },
  {
    src: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    text: "Productive Workspaces",
    category: "office",
    buttonText: "Shop Office Furniture",
    highlight: "Desks • Chairs • Storage"
  },
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    text: "Hospitality Excellence",
    category: "hospitality",
    buttonText: "Explore Solutions",
    highlight: "Hotels • Airbnb • Restaurants"
  }
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleShopClick = () => {
    navigate(`/${slides[current].category}`);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Lighter Overlay */}
      <div
        className={`w-full h-full bg-cover bg-center transition-all duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        style={{ backgroundImage: `url(${slides[current].src})` }}
      >
        {/* Subtle Overlay - Less Dimming */}
        <div className="absolute inset-0 bg-[#102A43] bg-opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/40 via-transparent to-transparent"></div>

        {/* Text Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
          <div className="max-w-3xl transform transition-all duration-500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
              {slides[current].text}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md font-medium">
              {slides[current].highlight}
            </p>
            <button
              onClick={handleShopClick}
              className="mt-2 bg-[#FF7035] hover:bg-[#E6652E] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium text-lg hover:scale-105"
            >
              {slides[current].buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-[#FF7035] w-6" : "bg-white/70"
            }`}
            aria-label={`Go to ${slides[index].category}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#102A43]/20 z-10">
        <div
          className="h-full bg-[#FF7035] transition-all duration-5000 ease-linear"
          style={{
            width: isTransitioning ? "100%" : "0%",
            transitionDuration: isTransitioning ? "500ms" : "5500ms"
          }}
        />
      </div>

      {/* Image Preloader */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt=""
          onLoad={index === 0 ? () => setLoaded(true) : undefined}
          className="hidden"
        />
      ))}
    </div>
  );
}