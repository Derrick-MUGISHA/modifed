"use client"
import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
    const images = [
      {
        src: "https://static.vecteezy.com/system/resources/previews/034/899/406/non_2x/rwanda-heroes-day-illustration-on-february-1-with-rwandan-flag-and-soldier-memorial-who-struggled-in-national-holiday-cartoon-background-vector.jpg",
        text: "A Land of Heroes, Resilience, and Rich Culture.",
      },
      {
        src: "https://d1bvpoagx8hqbg.cloudfront.net/originals/experience-kigali-rwanda-umulinga-dbb2e0c2fe1ca0f3860d92e3ddfe41c2.jpg",
        text: "Experience Kigali from Every Angle",
      },
      {
        src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/0a/60/3c.jpg",
        text: "Where Kigali Comes to Life",
      },
      {
        src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/1b/74/55/caption.jpg?w=1000&h=-1&s=1",
        text: "Your Ultimate Kigali View",
      },
      {
        src: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/19/08/99.jpg",
        text: "Discover Kigali's Hidden Gems",
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    return (
      <div className="relative h-screen w-full overflow-hidden">
        {/* Image Container */}
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={`Carousel ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-4xl text-white font-bold text-center max-w-4xl px-4 md:text-6xl">
                  {image.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
  
        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
              }`}
              title={`View slide ${index + 1}`}
              aria-label={`View slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };


  export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-[#00A9E0] via-[#FCD116] to-[#007847]">
      <h1 className="text-4xl font-bold mb-4 text-white">KIGALI VIEW</h1> {/* Text color set to white */}
        <ImageCarousel />
      </div>
    );
  }