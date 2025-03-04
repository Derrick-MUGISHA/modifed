"use client";
import React, { useState, useEffect } from 'react';
import { FaTh, FaList, FaHeart, FaRegHeart, FaSearch, FaMapMarkerAlt } from "react-icons/fa";


const ExploreKigaliCarousel = () => {
    const imageSlides = [
        {
            src: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/experience-kigali-rwanda-umulinga-dbb2e0c2fe1ca0f3860d92e3ddfe41c2.jpg',
            caption: 'A countdown on Rwanda’s most trending events'
        },
        {
            src: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png',
            caption: 'Discover the heart of Kigali'
        },
        {
            src: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png',
            caption: 'Experience vibrant city life'
        },
        // Add more images as needed
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!isHovered) {
            interval = setInterval(() => {
                setActiveIndex(prev => (prev + 1) % imageSlides.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [isHovered, imageSlides.length]);

    const goToSlide = (index: number): void => {
      setActiveIndex(index);
    };

    return (
        <div 
            className="relative h-screen w-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {imageSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === activeIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={slide.src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="text-center text-white max-w-4xl px-4">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                                {slide.caption}
                            </h2>
                            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105">
                                Explore Events
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {imageSlides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        title={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
const HeroSection = () => {
    return (
      <section className="relative py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Discover Kigali
            </h1>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Thank you for your interest in visiting Greater Kigali. We offer numerous travel tools 
                to help plan your trip. Visit our Visitor Centers, request a Guide, or explore our 
                interactive maps to navigate the city with ease.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Need personal assistance? Contact our specialists at{" "}
                <a href="tel:+250614221662" className="text-primary hover:text-primary-dark">
                  +250 614 221 662
                </a>{" "}
                or use our AI chatbot to discover curated city experiences. Continue exploring below 
                for essential resources.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  const VisitorResources = () => {
    const [showMore, setShowMore] = useState(false);
    // const [currentImage, setCurrentImage] = useState("");
  
    const resources = [
      { id: 1, title: "Maps", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
      { id: 2, title: "Transport", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
      { id: 3, title: "DEIA", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
      { id: 4, title: "Attractions", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
      { id: 5, title: "Activities", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
      { id: 6, title: "Dining", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
      { id: 7, title: "Events", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
      { id: 8, title: "Hotels", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
      { id: 9, title: "Tours", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
      { id: 10, title: "Culture", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    ];
    // const listings = [
    //     { id: 1, name: "Visit Dublin Ohio", location: "9 S. High St.", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    //     { id: 2, name: "Experience Columbus Visitor Center - Arena District", location: "277 W. Nationwide Blvd", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    //     { id: 3, name: "Columbus Metropolitan Library", location: "96 S. Grant Ave.", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    //     // ... rest of your listings data
    //   ];
    const displayedResources = showMore ? resources : resources.slice(0, 4);
  
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Essential Visitor Resources
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedResources.map((resource) => (
              <div 
                key={resource.id}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-10">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
                <h3 className="absolute bottom-0 left-0 right-0 text-white text-xl font-semibold p-6 text-center">
                  {resource.title}
                </h3>
              </div>
            ))}
          </div>
  
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {showMore ? "Show Less Resources" : "Explore More Resources"}
            </button>
          </div>
        </div>
      </section>
    );
  };
  const listings = [
    { id: 1, name: "Visit Dublin Ohio", location: "9 S. High St.", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 2, name: "Experience Columbus Visitor Center - Arena District", location: "277 W. Nationwide Blvd", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 3, name: "Columbus Metropolitan Library", location: "96 S. Grant Ave.", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 4, name: "Experience Columbus Visitor Center - Easton", location: "188 Easton Town Center", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 5, name: "Reynoldsburg Visitor & Community Activities Bureau", location: "1580 Brice Road", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 6, name: "Visit Grove City", location: "3995 Broadway", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 7, name: "Destination Hilliard", location: "5460 Franklin Street", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 8, name: "Experience Worthington", location: "777 High St.", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
    { id: 9, name: "Visit Gahanna", location: "167 Millway", image: "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" },
  ];
  
  const FilterSidebar = () => {
    return (
      <aside className="w-full md:w-72 xl:w-80 pr-4 shrink-0 bg-white/80 backdrop-blur-lg border-r border-gray-100 py-6">
        <div className="px-4">
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200/80 bg-white/50 focus:border-primary/80 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-400"
            />
          </div>
  
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Categories</h3>
            <ul className="space-y-2">
              {["CVBs (17)", "Referral Services (5)", "Libraries (1)"].map((item) => (
                <li key={item} className="flex items-center group">
                  <label className="flex items-center w-full p-2 rounded-lg hover:bg-gray-50/80 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary/50"
                    />
                    <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
  
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Regions</h3>
            <ul className="space-y-2">
              {["Downtown (4)", "East (3)", "North (2)", "Worthington (2)"].map((item) => (
                <li key={item} className="flex items-center group">
                  <label className="flex items-center w-full p-2 rounded-lg hover:bg-gray-50/80 cursor-pointer transition-colors">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary/50"
                    />
                    <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    );
  };
  
  const ListingsGrid = () => {
    const [view, setView] = useState("grid");
    const [favorites, setFavorites] = useState<number[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
    // interface Favorite {
    //   id: number;
    // }

    const toggleFavorite = (id: number): void => {
      setFavorites((prev: number[]) =>
        prev.includes(id) ? prev.filter((fav: number) => fav !== id) : [...prev, id]
      );
    };
  
    const categories = [
      "CVBs", "Referral Services", "Libraries", 
      "Downtown", "East", "North", "Westerville"
    ];
  
    return (
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto px-4 py-8">
        <FilterSidebar />
        
        <section className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex gap-1 bg-gray-100 p-1.5 rounded-xl">
              <button
                onClick={() => setView("grid")}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 ${
                  view === "grid" 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-gray-500 hover:bg-gray-50'
                } transition-all`}
              >
                <FaTh className="w-4 h-4" />
                <span className="text-sm font-medium">Grid</span>
              </button>
              <button
                onClick={() => setView("list")}
                className={`px-4 py-2 rounded-xl flex items-center gap-2 ${
                  view === "list" 
                    ? 'bg-white text-primary shadow-sm' 
                    : 'text-gray-500 hover:bg-gray-50'
                } transition-all`}
              >
                <FaList className="w-4 h-4" />
                <span className="text-sm font-medium">List</span>
              </button>
            </div>
  
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    category === selectedCategory
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-600 shadow-sm hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
  
          <div className={`${view === "grid" ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-4'} gap-4`}>
            {listings.map((listing) => (
              <div
                key={listing.id}
                className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all ${
                  view === "grid" 
                    ? 'p-4 hover:-translate-y-1' 
                    : 'flex gap-6 p-6 items-center'
                }`}
              >
                <div className={`${
                  view === "grid" 
                    ? 'aspect-video overflow-hidden rounded-xl' 
                    : 'w-48 h-32 shrink-0 overflow-hidden rounded-xl'
                  } relative`}
                >
                  <img
                    src={listing.image}
                    alt={listing.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                </div>
  
                <div className={`${view === "grid" ? 'mt-4' : 'flex-1'}`}>
                  <h3 className="text-lg font-semibold text-gray-900">{listing.name}</h3>
                  <div className="mt-1 flex items-center text-gray-500">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                    <p className="text-sm">{listing.location}</p>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-3">
                    <button className="text-primary bg-primary/10 px-4 py-2 rounded-lg font-medium hover:bg-primary/20 transition-colors flex items-center gap-2">
                      <span>Quick View</span>
                    </button>
                    <button
                      onClick={() => toggleFavorite(listing.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                      aria-label="Add to favorites"
                    >
                      {favorites.includes(listing.id) ? (
                        <FaHeart className="w-5 h-5 fill-current" />
                      ) : (
                        <FaRegHeart className="w-5 h-5 fill-current" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
export default function page() {
  return (
    <div>
        <ExploreKigaliCarousel />
        <HeroSection />
        <VisitorResources />
        <ListingsGrid />
      <h1>expole Kigali  to do......</h1>
    </div>
  );
}