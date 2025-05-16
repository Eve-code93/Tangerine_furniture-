import React from 'react';
import { Link } from 'react-router-dom';

const livingRoomCategories = [
  {
    id: 'sofas',
    name: 'Sofas & Sectionals',
    description: 'Luxurious seating for your living space',
    items: [
      {
        id: 1,
        name: 'Tangerine Velvet Sofa',
        price: 1499,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      },
      {
        id: 2,
        name: 'Navy Blue Chesterfield',
        price: 1899,
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      }
    ]
  },
  {
    id: 'tv-consoles',
    name: 'TV Consoles',
    description: 'Stylish media storage solutions',
    items: [
      {
        id: 3,
        name: 'Modern Navy Console',
        price: 799,
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80'
      },
      {
        id: 4,
        name: 'Beige Wooden Unit',
        price: 649,
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      }
    ]
  },
  {
    id: 'coffee-tables',
    name: 'Coffee Tables',
    description: 'Centerpiece tables for your living room',
    items: [
      {
        id: 5,
        name: 'Tangerine Glass Table',
        price: 459,
        image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      },
      {
        id: 6,
        name: 'Navy Blue Ottoman',
        price: 399,
        image: 'https://images.unsplash.com/photo-1583845112203-454c1b1a1c2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80'
      }
    ]
  }
];

export default function LivingRoomPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]"> {/* Light beige background */}
      {/* Hero Section */}
      <div className="bg-[#0F2A43] text-[#F5F5F0] py-20 px-4 text-center"> {/* Navy blue */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Living Room Collection</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Curated pieces in <span className="text-[#FF7035]">tangerine</span>, <span className="text-[#0F2A43]">navy</span>, and <span className="text-[#D2B48C]">beige</span> to elevate your space
        </p>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {livingRoomCategories.map((category) => (
            <a 
              key={category.id}
              href={`#${category.id}`}
              className="px-6 py-3 bg-[#FF7035] text-white rounded-md hover:bg-[#E6652E] transition-colors" // Tangerine
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>

      {/* Category Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">
        {livingRoomCategories.map((category) => (
          <section key={category.id} id={category.id} className="pt-12">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-[#0F2A43]">{category.name}</h2> {/* Navy blue */}
              <p className="text-lg text-[#6B7280] mt-2">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#0F2A43]">{item.name}</h3> {/* Navy blue */}
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-lg font-bold text-[#FF7035]">${item.price.toLocaleString()}</span> {/* Tangerine */}
                      <Link 
                        to={`/product/${item.id}`} 
                        className="px-4 py-2 bg-[#0F2A43] text-[#F5F5F0] rounded-md hover:bg-[#1A365D] transition-colors" // Navy blue
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[#0F2A43] py-16 px-4 text-center text-[#F5F5F0]"> {/* Navy blue */}
        <h3 className="text-2xl font-bold mb-4">Need Personal Styling Advice?</h3>
        <p className="max-w-2xl mx-auto mb-6">
          Our design experts can help you create the perfect living room combination.
        </p>
        <button className="px-6 py-3 bg-[#FF7035] text-white rounded-md hover:bg-[#E6652E] transition-colors font-medium"> {/* Tangerine */}
          Schedule a Free Consultation
        </button>
      </div>
    </div>
  );
}