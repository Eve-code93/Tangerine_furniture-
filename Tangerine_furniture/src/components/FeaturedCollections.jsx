import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function FeaturedCollections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const collections = [
    {
      name: "Coastal Living",
      description: "Light & airy beach-inspired furniture",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "/outdoor", // Linking to outdoor category
      blogContent: "Create your coastal retreat with weather-resistant pieces perfect for Kenyan beach houses.",
      customerStory: "Perfect for my Malindi vacation home! - Ali, Malindi"
    },
    {
      name: "Safari Lounge",
      description: "Wilderness-inspired living room sets",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      link: "/living-room", // Linking to living room category
      blogContent: "How to blend Maasai-inspired patterns with modern furniture in your Nairobi home.",
      customerStory: "Guests always compliment our lounge set - Wambui, Karen"
    },
    {
      name: "Urban Bedroom",
      description: "Space-saving bedroom solutions",
      image: "https://unsplash.com/photos/black-platform-bed-with-white-mattress-inside-bedroom-DhFHtkECn7Q",
      link: "/bedroom", // Linking to bedroom category
      blogContent: "Maximizing small bedrooms in Nairobi apartments with multifunctional furniture.",
      customerStory: "Saved so much space in my Westlands studio - Brian, Nairobi"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === collections.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? collections.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#F5F5F0] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A43] mb-4">
            Featured Collections
          </h2>
          <div className="w-20 h-1 bg-[#FF7035] mx-auto mb-6"></div>
          <p className="text-lg text-[#0F2A43]/80 max-w-3xl mx-auto">
            Beautifully coordinated sets for Kenyan homes
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {collections.map((collection, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row h-full">
                  {/* Responsive Image Container */}
                  <div className="md:w-1/2 h-64 md:h-96">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{
                        objectPosition: 'center',
                        width: '100%',
                        height: '100%',
                        maxHeight: '400px'
                      }}
                    />
                  </div>
                  
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0F2A43] mb-2">{collection.name}</h3>
                      <p className="text-[#FF7035] font-medium mb-4">{collection.description}</p>
                      <p className="text-[#0F2A43]/80 mb-4">{collection.blogContent}</p>
                      <div className="bg-[#F5F5F0] p-4 rounded-lg mb-4">
                        <p className="text-[#0F2A43] italic">"{collection.customerStory}"</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Link
                        to={collection.link}
                        className="bg-[#FF7035] hover:bg-[#E6652E] text-white px-6 py-2 rounded-lg flex items-center transition-colors"
                      >
                        Shop Collection
                      </Link>
                      <Link
                        to={`/blog/${collection.name.toLowerCase().replace(' ', '-')}`}
                        className="border border-[#0F2A43] text-[#0F2A43] hover:bg-[#0F2A43] hover:text-white px-6 py-2 rounded-lg transition-colors"
                      >
                        Read Styling Tips
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 ml-2"
            aria-label="Previous collection"
          >
            <FiChevronLeft className="text-[#0F2A43] text-xl" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 mr-2"
            aria-label="Next collection"
          >
            <FiChevronRight className="text-[#0F2A43] text-xl" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {collections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#FF7035]' : 'bg-[#0F2A43]/30'}`}
              aria-label={`View ${collections[index].name} collection`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/collections"
            className="inline-block bg-[#0F2A43] hover:bg-[#1A365D] text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all font-medium"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}