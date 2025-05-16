import React from 'react';
import { Link } from 'react-router-dom';

const officeCategories = [
  {
    id: 'desks',
    name: 'Desks',
    description: 'Productivity-focused workspaces',
    items: [
      {
        id: 31,
        name: 'Navy Blue Executive Desk',
        price: 899,
        image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80'
      },
      {
        id: 32,
        name: 'Beige Standing Desk',
        price: 749,
        image: 'https://images.unsplash.com/photo-1599469803986-a6811c726ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      }
    ]
  },
  {
    id: 'chairs',
    name: 'Chairs',
    description: 'Ergonomic seating for work',
    items: [
      {
        id: 33,
        name: 'Tangerine Mesh Chair',
        price: 399,
        image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80'
      },
      {
        id: 34,
        name: 'Navy Leather Chair',
        price: 599,
        image: 'https://images.unsplash.com/photo-1505797149-43e2c03eab52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
      }
    ]
  }
];

export default function OfficePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Hero Section */}
      <div className="bg-[#0F2A43] text-[#F5F5F0] py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Office Collection</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Professional furniture in <span className="text-[#FF7035]">tangerine</span>, <span className="text-[#0F2A43]">navy</span>, and <span className="text-[#D2B48C]">beige</span>
        </p>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {officeCategories.map((category) => (
            <a 
              key={category.id}
              href={`#${category.id}`}
              className="px-6 py-3 bg-[#FF7035] text-white rounded-md hover:bg-[#E6652E] transition-colors"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>

      {/* Category Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-20">
        {officeCategories.map((category) => (
          <section key={category.id} id={category.id} className="pt-12">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-[#0F2A43]">{category.name}</h2>
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
                    <h3 className="text-xl font-semibold text-[#0F2A43]">{item.name}</h3>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-lg font-bold text-[#FF7035]">${item.price.toLocaleString()}</span>
                      <Link 
                        to={`/product/${item.id}`} 
                        className="px-4 py-2 bg-[#0F2A43] text-[#F5F5F0] rounded-md hover:bg-[#1A365D] transition-colors"
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
      <div className="bg-[#0F2A43] py-16 px-4 text-center text-[#F5F5F0]">
        <h3 className="text-2xl font-bold mb-4">Need Office Space Planning?</h3>
        <p className="max-w-2xl mx-auto mb-6">
          Our workspace experts can help design an efficient and stylish office.
        </p>
        <button className="px-6 py-3 bg-[#FF7035] text-white rounded-md hover:bg-[#E6652E] transition-colors font-medium">
          Get Office Design Consultation
        </button>
      </div>
    </div>
  );
}
