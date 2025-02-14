"use client";
import React, { useState, useEffect } from 'react';
const CustomImageCarousel = () => {
  const imageSlides = [
    {
      src: 'https://media.gettyimages.com/id/534432456/photo/a-statue-honouring-the-strength-of-rwandese-women-and-the.webp?s=2048x2048&w=gi&k=20&c=w6r9s5kMp1th8Ep2BjjxlBAPGoKMoiyko-tfYhJQG-0=',
      caption: 'A countdown on Rwanda’s most trending events',
    },
    {
      src: 'https://ams3.digitaloceanspaces.com/rwbuildpod/eventsbash-production/images/AGBwkfJ73DUmr4nWMRzqxJShRX5snsv5qK3hBJjO.png',
      caption: 'A countdown on Rwanda’s most trending events 666',
    },
    {
      src: 'https://365rwanda.com/wp-content/uploads/sites/130/2025/01/25.png',
      caption: 'A countdown on Rwanda’s most trending events 666',
    },
    {
      src: 'https://365rwanda.com/wp-content/uploads/sites/130/2025/01/124.jpg',
      caption: 'A countdown on Rwanda’s most trending events 666',
    },
    {
      src: 'https://365rwanda.com/wp-content/uploads/sites/130/2025/01/148.jpg',
      caption: 'A countdown on Rwanda’s most trending events 666',
    },
    {
      src: 'https://kifc.rw/wp-content/uploads/2024/10/Web-Thumbnail_IFF25-1024x597.jpg',
      caption: 'Inclusive FinTech Forum 2025',
    },
    {
      src: 'https://www.ktpress.rw/wp-content/uploads/2019/11/Screen-Shot-2019-11-26-at-9.14.48-AM-768x488.png',
      caption: 'Global Gender Summit Kigali: The Colorful Gala Dinner',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imageSlides.length); // Loop through the images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [imageSlides.length]);

  const goToSlide = (index) => {
    setActiveIndex(index); // Manually set the active slide
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-2xl">
      {/* Carousel Slides */}
      {imageSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          {/* Caption */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white w-full px-4">
            <h2 className="text-3xl font-bold mb-2">{slide.caption}</h2>
          </div>
        </div>
      ))}

      {/* Circular Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {imageSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-white scale-125'
                : 'bg-gray-500 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

    export default function EventsRoute() {
        return (
          <div>
            <CustomImageCarousel />
            <div>
              <h1>Events</h1>
              <p>This is the events page.ewjwkejl</p>
            </div>
          </div>
        );
      }