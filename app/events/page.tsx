"use client";
import React, { useState, useEffect } from "react";
import {
  Grid,
  List,
  MapPin,
  Heart,
  ChevronLeft,
  ChevronRight,
  Rss,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const CustomImageCarousel = () => {
  const imageSlides = [
    {
      src: "https://media.gettyimages.com/id/534432456/photo/a-statue-honouring-the-strength-of-rwandese-women-and-the.webp?s=2048x2048&w=gi&k=20&c=w6r9s5kMp1th8Ep2BjjxlBAPGoKMoiyko-tfYhJQG-0=",
      caption: "A countdown on Rwanda’s most trending events",
    },
    {
      src: "https://ams3.digitaloceanspaces.com/rwbuildpod/eventsbash-production/images/AGBwkfJ73DUmr4nWMRzqxJShRX5snsv5qK3hBJjO.png",
      caption: "A countdown on Rwanda’s most trending events 666",
    },
    {
      src: "https://365rwanda.com/wp-content/uploads/sites/130/2025/01/25.png",
      caption: "A countdown on Rwanda’s most trending events 666",
    },
    {
      src: "https://365rwanda.com/wp-content/uploads/sites/130/2025/01/124.jpg",
      caption: "A countdown on Rwanda’s most trending events 666",
    },
    {
      src: "https://365rwanda.com/wp-content/uploads/sites/130/2025/01/148.jpg",
      caption: "A countdown on Rwanda’s most trending events 666",
    },
    {
      src: "https://kifc.rw/wp-content/uploads/2024/10/Web-Thumbnail_IFF25-1024x597.jpg",
      caption: "Inclusive FinTech Forum 2025",
    },
    {
      src: "https://www.ktpress.rw/wp-content/uploads/2019/11/Screen-Shot-2019-11-26-at-9.14.48-AM-768x488.png",
      caption: "Global Gender Summit Kigali: The Colorful Gala Dinner",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imageSlides.length); // Loop through the images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [imageSlides.length]);

  interface GoToSlideFunction {
    (index: number): void;
  }

  const goToSlide: GoToSlideFunction = (index) => {
    setActiveIndex(index); // Manually set the active slide
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Slides */}
      {imageSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          {/* Caption and CTA */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white w-full px-4">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              {slide.caption}
            </h2>
            <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
              Explore More
            </button>
          </div>
        </div>
      ))}

      {/* Circular Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {imageSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white scale-125"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
interface CalendarProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

const Calendar = ({ selectedDate, onDateSelect }: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 1));
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  interface DateComparison {
    day: number;
    selectedDate: Date | null;
    currentMonth: Date;
  }

  const isSelected = (day: number): boolean => {
    if (!selectedDate) return false;
    return (
      day === selectedDate.getDate() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      currentMonth.getFullYear() === selectedDate.getFullYear()
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <button
          aria-label="Previous month"
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
            )
          }
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="text-lg font-semibold">
          {currentMonth.toLocaleString("default", { month: "long" })}{" "}
          {currentMonth.getFullYear()}
        </div>
        <button
          aria-label="Next month"
          onClick={() =>
            setCurrentMonth(
              new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
            )
          }
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-600"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {blanks.map((blank) => (
          <div key={`blank-${blank}`} />
        ))}
        {days.map((day) => (
          <button
            key={day}
            onClick={() =>
              onDateSelect(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth(),
                  day
                )
              )
            }
            className={`text-center p-2 rounded-full ${
              isSelected(day)
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

const Events = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 1, 5));
  const [dateRange, setDateRange] = useState("week");
  const [sortBy, setSortBy] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const events = [
    {
      id: 1,
      image:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F931396743%2F2570404762021%2F1%2Foriginal.20250109-115052?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=ef642832dd3754c332bfd7338cd48636",
      title: "14thAvenue - Kigali Live Music",
      location: "Kimihurura kn 20 ave Kigali, Kigali City",
      recurring: "Recurring daily until February 16, 2025",
    },
    {
      id: 2,
      image:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F931396743%2F2570404762021%2F1%2Foriginal.20250109-115052?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=ef642832dd3754c332bfd7338cd48636",
      title: "Wanderlights",
      location: "Downtown Columbus",
      recurring: "Recurring daily until February 16, 2025",
    },
    {
      id: 3,
      image:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F931396743%2F2570404762021%2F1%2Foriginal.20250109-115052?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=ef642832dd3754c332bfd7338cd48636",
      title: "Blues & Beyond: Micah Kesselring - FREE Happening Hour",
      location: "Natalie's Grandview",
      recurring: "Recurring daily until March 5, 2025",
    },
    {
      id: 4,
      image:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F931396743%2F2570404762021%2F1%2Foriginal.20250109-115052?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=ef642832dd3754c332bfd7338cd48636",
      title: "Columbus Improv Comedy Meetup!",
      location: "Nest Theatre",
      recurring: null,
    },
    {
      id: 5,
      image:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F931396743%2F2570404762021%2F1%2Foriginal.20250109-115052?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=ef642832dd3754c332bfd7338cd48636",
      title: "Gallery Listening Room",
      location: "Wonderlust Studio",
      recurring: null,
    },
    {
      id: 6,
      image:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F931396743%2F2570404762021%2F1%2Foriginal.20250109-115052?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=ef642832dd3754c332bfd7338cd48636",
      title: "Hot Stuff: A Sketch Comedy and Music Show",
      location: "Short North Stage",
      recurring: null,
    },
    {
      id: 7,
      image:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F931396743%2F2570404762021%2F1%2Foriginal.20250109-115052?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=ef642832dd3754c332bfd7338cd48636",
      title: "25 Reasons to Visit Columbus in 2025",
      location: "Downtown Columbus",
      recurring: "Recurring daily until February 16, 2025",
    },
    {
      id: 8,
      image:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F931396743%2F2570404762021%2F1%2Foriginal.20250109-115052?crop=focalpoint&fit=crop&w=940&auto=format%2Ccompress&q=75&sharp=10&fp-x=0.5&fp-y=0.5&s=ef642832dd3754c332bfd7338cd48636",
      title: "Columbus Improv Comedy Meetup!",
      location: "Nest Theatre",
      recurring: null,
    },
    {
      id: 9,
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Gallery Listening Room",
      location: "Wonderlust Studio",
      recurring: null,
    },
    {
      id: 10,
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Hot Stuff: A Sketch Comedy and Music Show",
      location: "Short North Stage",
      recurring: null,
    },
    {
      id: 11,
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "25 Reasons to Visit Columbus in 2025",
      location: "Downtown Columbus",
      recurring: "Recurring daily until February 16, 2025",
    },
    {
      id: 12,
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Columbus Improv Comedy Meetup!",
      location: "Nest Theatre",
      recurring: null,
    },
    // Your events data here
  ];

  // Pagination Logic
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const totalPages = Math.ceil(events.length / eventsPerPage);

  interface PageChangeHandler {
    (page: number): void;
  }

  const handlePageChange: PageChangeHandler = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-4 sm:p-8">
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-gray-50 p-4 sm:p-6 border-b lg:border-r">
          <div className="flex items-center mb-6">
            <Rss size={24} className="text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">SHOW EVENTS FOR</h2>
            <div className="grid grid-cols-2 gap-2">
              {["Day", "Week", "Weekend", "Month"].map((range) => (
                <button
                  key={range}
                  onClick={() => setDateRange(range.toLowerCase())}
                  className={`p-2 rounded-lg text-sm ${
                    dateRange === range.toLowerCase()
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">DATES</h2>
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">CATEGORIES</h2>
            <div className="space-y-2">
              {[
                "Music/Concerts",
                "Sports",
                "Arts",
                "Family",
                "Festivals",
                "Other",
                "Charity",
                "Recreation",
              ].map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-500"
                  />
                  <span className="text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">VIEW:</span>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${
                  viewMode === "grid"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${
                  viewMode === "list"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <List size={20} />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-600">SORT BY:</span>
              <button
                onClick={() => setSortBy("recommended")}
                className={`p-2 rounded-lg text-sm ${
                  sortBy === "recommended"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Recommended
              </button>
              <button
                onClick={() => setSortBy("date")}
                className={`p-2 rounded-lg text-sm ${
                  sortBy === "date"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Date
              </button>
              <button
                onClick={() => setSortBy("popularity")}
                className={`p-2 rounded-lg text-sm ${
                  sortBy === "popularity"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                Popularity
              </button>
            </div>
          </div>

          <div
            className={`grid ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            } gap-6`}
          >
            {currentEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={940} // Set the width (in pixels)
                    height={627} // Set the height (in pixels) maintaining aspect ratio
                    className="object-cover"
                  />
                  <button
                    aria-label="Add to favorites"
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md"
                  >
                    <Heart size={20} className="text-gray-600" />
                  </button>
                  <div className="absolute bottom-2 left-2 bg-white p-2 rounded-lg shadow-md">
                    <div className="text-sm text-gray-600">FEB</div>
                    <div className="text-lg font-semibold">05</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  {event.recurring && (
                    <p className="text-sm text-gray-500 mb-2">
                      {event.recurring}
                    </p>
                  )}
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <button className="mt-4 w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Quick View
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                aria-label={`Go to page ${index + 1}`}
                className={`mx-1 px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const NewsletterSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sign up for the Experience Columbus Newsletter
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Uncover Columbus Like a Local! Get the latest happenings, hidden
              gems, and travel tips delivered straight to your inbox.
            </p>
            <p className="text-lg md:text-xl font-semibold mb-8">
              Subscribe now and experience the best of Columbus today!
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Newsletter Sign Up
            </button>
          </div>

          {/* Image Container */}
          <div className="flex justify-center md:justify-end">
            <img
              className="w-full max-w-md rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png"
              alt="Newsletter"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
const FeaturedCard = ({ image, title, type }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group transform hover:scale-105 transition-all duration-300 ease-in-out">
    <img
      src={image}
      alt={title}
      className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
    />
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300 ease-in-out"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
        {type}
      </span>
      <h3 className="text-white text-2xl sm:text-3xl font-bold mt-2">
        {title}
      </h3>
    </div>
  </div>
);

const SponsoredCard = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 object-cover"
      />
      <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
        SPONSORED
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-4">{description}</p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out">
        Read More
      </button>
    </div>
  </div>
);

const FeaturedSections = () => {
  const featuredArticles = [
    {
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Can't-Miss Winter Events in Columbus",
      type: "PLAY",
    },
    {
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "25 Reasons to Visit Columbus in 2025",
      type: "VISIT",
    },
    {
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Best Hotels and Staycation Ideas: Winter in Columbus",
      type: "STAY",
    },
  ];

  const sponsoredContent = [
    {
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Visit Our Neighborhood Tavern",
      description:
        "Voted #1 best neighborhood bar in UA/Grandview in the ColumBEST awards! Find American eats and craft brews at Grandview Cafe.",
    },
    {
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      title: "Go Behind the Scenes With Tours at the Columbus Zoo",
      description:
        "Immerse in animal fun! Connect with a variety of wildlife species in an interactive environment with Jack Hanna's Animal Encounter Village Experience.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Articles Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredArticles.map((article, index) => (
          <FeaturedCard key={index} {...article} />
        ))}
      </div>

      {/* Sponsored Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {sponsoredContent.map((content, index) => (
          <SponsoredCard key={index} {...content} />
        ))}
      </div>
    </div>
  );
};
const EventCard = ({ title, description, imageUrl, sponsored = false }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
    {/* Image Section */}
    <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
      <img
        src={imageUrl || "/api/placeholder/400/300"}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      {sponsored && (
        <span className="absolute top-2 right-2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
          SPONSORED
        </span>
      )}
    </div>

    {/* Content Section */}
    <div className="p-6 bg-white">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-4">{description}</p>
      <Link
        href="/"
        className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 transition-colors duration-300 ease-in-out"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </div>
);

const EventCardsSection = () => {
  const cards = [
    {
      title: "Find the Perfect Gift at Little Sky Stone",
      description:
        "Real gemstones, timeless designs—perfect for every meaningful moment. Find your birthstone piece.",
      imageUrl:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      sponsored: true,
    },
    {
      title: "Experience the Delicious Tastes of Oaxaca",
      description:
        "Enjoy authentic Mexican food at Dos Hermanos, a local staple! Try the best tacos, burritos, & bowls.",
      imageUrl:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
      sponsored: true,
    },
    {
      title: 'Say "Yes" to the Sweetest Moments',
      description:
        "Columbus boasts some of the best pastry chefs in the Midwest.",
      imageUrl:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
    },
    {
      title: 'Say "Yes" to Fun with Fido',
      description:
        "Here you'll find dog-friendly restaurants, lodging, shopping and attractions throughout the city.",
      imageUrl:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <EventCard
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
            sponsored={card.sponsored}
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
      <Events />
      <NewsletterSection />
      <FeaturedSections />
      <EventCardsSection />
      <div>
        <h1>Events</h1>
        <p>This is the events page.ewjwkejl</p>
      </div>
    </div>
  );
}
