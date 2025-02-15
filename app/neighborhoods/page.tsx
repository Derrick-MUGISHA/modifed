"use client";
import Link from 'next/link';
import path from 'path';
import { useState } from "react";
function IntroH() {
  const ImageSection = [
    {
      src: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      alt: "Kigali View",
      Text: "Kigali View",
    },
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      {ImageSection.map((image, index) => (
        <div key={index} className="relative h-full w-full">
          {/* Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={image.src}
            alt={image.alt}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          {/* Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-6xl font-bold text-center">
              {image.Text}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
const HeroSection = () => {
    return (
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] bg-blue-900 text-center px-4 py-20">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629891686316-45c8d7ae7b23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Discover Kigali
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Thank you for your interest in visiting Greater KIGALI. We offer a number of travel tools to help plan your trip. Visit one of our two Visitor Centers, request a Visitors Guide, or view one of our area maps to help you get around and explore the city.
          </p>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            If you wish to speak with a visitor information specialist, call +250 614 221 662 or +250 800 354 2657 or use the chatbot feature on our website to find things to do in the city. Keep scrolling for more useful resources.
          </p>
          <Link href="/explore" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all shadow-lg">
            Explore Now
          </Link>
        </div>
      </section>
    );
  };
  
  const VisitorResources = () => {
    const [showMore, setShowMore] = useState(false);
  
    const resources = [
      { 
        id: 1, 
        title: "City Maps", 
        neighborhood: "Downtown Kigali", 
        image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
        path: "/maps" 
      },
      { 
        id: 2, 
        title: "Transport Guide", 
        neighborhood: "Gacuriro District", 
        image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
        path: "/transportation" 
      },
      { 
        id: 3, 
        title: "Cultural Sites", 
        neighborhood: "Kacyiru Sector", 
        image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
        path: "/cultural-sites" 
      },
      {
        id: 4,
        title: "Restaurants",
        neighborhood: "Kimihurura",
        image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
        path: "/restaurants"
      },
      {
        id: 5,
        title: "Shopping Centers",
        neighborhood: "Kimironko",
        image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
        path: "/shopping-centers"
      },
      {
        id: 6,
        title: "Health Facilities",
        neighborhood: "Nyarugenge",
        image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
        path: "/health-facilities"
      },
      // Add paths for other resources...
    ];
  
    const displayedResources = showMore ? resources : resources.slice(0, 3);
  
    return (
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Explore Kigali's Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedResources.map((resource) => (
              <Link
                href={resource.path}
                key={resource.id}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{resource.title}</h3>
                  <p className="text-sm font-medium text-blue-200">
                    {resource.neighborhood}
                  </p>
                </div>
              </Link>
            ))}
          </div>
  
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>
    );
  };

export default function page() {
  return (
    <div>
      <IntroH />
      <HeroSection />
      <VisitorResources />

      <h1>Things to do</h1>
    </div>
  );
}
