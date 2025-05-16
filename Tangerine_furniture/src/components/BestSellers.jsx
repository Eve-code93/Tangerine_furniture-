import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const products = {
  'living-room': [
    { id: 1, name: "Tangerine Velvet Sofa", price: 1299, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" },
    { id: 2, name: "Navy Blue Sectional", price: 1599, image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" },
    { id: 3, name: "Glass Coffee Table", price: 459, image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" }
  ],
  'bedroom': [
    { id: 4, name: "Canopy Bed Frame", price: 899, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" },
    { id: 5, name: "Beige Dresser", price: 649, image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" },
    { id: 6, name: "Nightstand Set", price: 399, image: "https://images.unsplash.com/photo-1583845112203-454c1b1a1c2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80" }
  ],
  'outdoor': [
    { id: 7, name: "Patio Dining Set", price: 1299, image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" },
    { id: 8, name: "Sun Lounger", price: 599, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" }
  ],
  'office': [
    { id: 9, name: "Executive Desk", price: 899, image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" },
    { id: 10, name: "Ergonomic Chair", price: 399, image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80" }
  ],
  'hospitality': [
    { id: 11, name: "Hotel Lobby Sofa", price: 1899, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" },
    { id: 12, name: "Restaurant Dining Set", price: 1499, image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" }
  ]
};

export function BestSellers() {
  const [activeCategory, setActiveCategory] = useState('living-room');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lovedItems, setLovedItems] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentProducts = products[activeCategory] || [];

  useEffect(() => {
    setCurrentIndex(0); // Reset to first product when category changes
  }, [activeCategory]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, activeCategory]);

  const handleNext = () => {
    if (currentProducts.length <= 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % currentProducts.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (currentProducts.length <= 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + currentProducts.length) % currentProducts.length);
      setIsTransitioning(false);
    }, 300);
  };

  const toggleLove = (id) => {
    setLovedItems(prev => prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]);
  };

  const addToCart = (product) => {
    // Implement your cart logic here
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A43] mb-6">Our Best Sellers</h2>
        
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(products).map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full capitalize font-medium transition-colors ${
                activeCategory === category 
                  ? 'bg-[#FF7035] text-white' 
                  : 'bg-[#F5F5F0] text-[#0F2A43] hover:bg-[#E8E8E0]'
              }`}
            >
              {category.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {currentProducts.length > 0 ? (
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Product Display */}
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="relative w-full md:w-1/2 h-96 md:h-auto">
              <img
                src={currentProducts[currentIndex]?.image}
                alt={currentProducts[currentIndex]?.name}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              />
              
              {/* Navigation Arrows */}
              {currentProducts.length > 1 && (
                <>
                  <button 
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition"
                  >
                    <FaArrowLeft className="text-[#0F2A43]" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition"
                  >
                    <FaArrowRight className="text-[#0F2A43]" />
                  </button>
                </>
              )}
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0F2A43] mb-2">
                {currentProducts[currentIndex]?.name}
              </h3>
              <p className="text-xl font-bold text-[#FF7035] mb-6">
                ${currentProducts[currentIndex]?.price.toLocaleString()}
              </p>
              <p className="text-gray-600 mb-8">
                This best-selling {activeCategory.replace('-', ' ')} piece combines style and comfort for your space.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => addToCart(currentProducts[currentIndex])}
                  className="flex-1 bg-[#0F2A43] text-white py-3 px-6 rounded-lg hover:bg-[#1A365D] transition flex items-center justify-center gap-2"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button
                  onClick={() => toggleLove(currentProducts[currentIndex]?.id)}
                  className={`p-3 rounded-lg border flex items-center justify-center ${
                    lovedItems.includes(currentProducts[currentIndex]?.id) 
                      ? 'bg-[#FF7035] text-white border-[#FF7035]' 
                      : 'bg-white text-[#0F2A43] border-[#0F2A43] hover:bg-[#F5F5F0]'
                  }`}
                >
                  <FaHeart />
                </button>
              </div>

              <Link 
                to={`/${activeCategory}`} 
                className="mt-6 text-[#0F2A43] font-medium hover:text-[#FF7035] transition flex items-center justify-center gap-1"
              >
                View all {activeCategory.replace('-', ' ')} products →
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found in this category.</p>
        </div>
      )}
    </section>
  );
}