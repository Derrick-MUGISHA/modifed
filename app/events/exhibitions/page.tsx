"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import Link from "next/link";

const events = [
  {
    year: 2024,
    title: "IRONMAN 70.3 Rwanda Triathlon",
    date: "August 4, 2024",
    location: "Rubavu",
    description: "Swim, bike, and run segments in the beautiful Rubavu region.",
    image:
      "https://cyclingflash.ams3.cdn.digitaloceanspaces.com/9820/responsive-images/01JGBKJKHNAS3B8VF6Z1AMBTHP___logo_600_600.webp",
    link: "#",
    sportType: "Triathlon",
  },
  {
    year: 2024,
    title: "FERWAHAND U17 League",
    date: "May 4–5, 2024",
    location: "Kiziguro SS and ES Kigoma",
    description: "Volleyball league for under-17 teams.",
    image:
      "https://cyclingflash.ams3.cdn.digitaloceanspaces.com/9820/responsive-images/01JGBKJKHNAS3B8VF6Z1AMBTHP___logo_600_600.webp",
    link: "#",
    sportType: "Volleyball",
  },
  {
    year: 2025,
    title: "UCI Road World Championships",
    date: "September 21–28, 2025",
    location: "Kigali",
    description: "The first-ever UCI Road World Championships in Africa.",
    image:
      "https://cyclingflash.ams3.cdn.digitaloceanspaces.com/9820/responsive-images/01JGBKJKHNAS3B8VF6Z1AMBTHP___logo_600_600.webp",
    link: "#",
    sportType: "Cycling",
  },
  {
    year: 2025,
    title: "Ultra X Rwanda",
    date: "January 2025",
    location: "Burera and Musanze",
    description: "Rwanda's first multi-stage ultra marathon.",
    image:
      "https://cyclingflash.ams3.cdn.digitaloceanspaces.com/9820/responsive-images/01JGBKJKHNAS3B8VF6Z1AMBTHP___logo_600_600.webp",
    link: "#",
    sportType: "Running",
  },
  {
    year: 2024,
    title: "Kwibuka Women T20 International Tournament",
    date: "May 30 – June 8, 2024",
    location: "Gahanga Cricket Stadium",
    description:
      "Women's T20 cricket tournament organized by the Rwanda Cricket Association.",
    image:
      "https://cyclingflash.ams3.cdn.digitaloceanspaces.com/9820/responsive-images/01JGBKJKHNAS3B8VF6Z1AMBTHP___logo_600_600.webp",
    link: "#",
    sportType: "Cricket",
  },
  {
    year: 2024,
    title: "Global Noncommunicable Diseases (NCD) Alliance Forum",
    date: "October 2024",
    location: "Kigali",
    description:
      "A global forum on noncommunicable diseases, organized by the NCD Alliance.",
    image:
      "https://cyclingflash.ams3.cdn.digitaloceanspaces.com/9820/responsive-images/01JGBKJKHNAS3B8VF6Z1AMBTHP___logo_600_600.webp",
    link: "#",
    sportType: "Conference",
  },
  {
    year: 2025,
    title: "Basketball Africa League (BAL)",
    date: "April 5, 2025",
    location: "Kigali",
    description:
      "The 2025 BAL season begins, with Rwanda hosting the group phase.",
    image:
      "https://cyclingflash.ams3.cdn.digitaloceanspaces.com/9820/responsive-images/01JGBKJKHNAS3B8VF6Z1AMBTHP___logo_600_600.webp",
    link: "#",
    sportType: "Basketball",
  },
  {
    year: 2025,
    title: "Rwanda Premier League 2024–2025",
    date: "August 15, 2024 – May 19, 2025",
    location: "Various Stadiums",
    description: "The 48th season of the Rwanda Premier League.",
    image:
      "https://cyclingflash.ams3.cdn.digitaloceanspaces.com/9820/responsive-images/01JGBKJKHNAS3B8VF6Z1AMBTHP___logo_600_600.webp",
    link: "#",
    sportType: "Football",
  },
];

const popularSports = [
  {
    id: "football",
    name: "Football",
    description: "Experience the thrill of Rwanda's premier football league.",
    icon: "⚽",
    url: "/sports",
  },
  {
    id: "basketball",
    name: "Basketball",
    description:
      "Watch the best African teams compete in the Basketball Africa League.",
    icon: "🏀",
    url: "/sports/basketball",
  },
  {
    id: "cycling",
    name: "Cycling",
    description: "Join the UCI Road World Championships in Kigali.",
    icon: "🚴",
    url: "/sports/cycling",
  },
  {
    id: "volleyball",
    name: "Volleyball",
    description:
      "Enjoy exciting volleyball matches at local and international levels.",
    icon: "🏐",
    url: "/sports/volleyball",
  },
  {
    id: "running",
    name: "Running",
    description: "Participate in marathons and ultra-marathons across Rwanda.",
    icon: "🏃",
    url: "/sports/running",
  },
  {
    id: "cricket",
    name: "Cricket",
    description:
      "Cheer for Rwanda's national cricket team in international tournaments.",
    icon: "🏏",
    url: "/sports/cricket",
  },
];

const testimonials = [
  {
    name: "John Doe",
    comment:
      "The IRONMAN 70.3 in Rubavu was an unforgettable experience! Highly recommended.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "Jane Smith",
    comment:
      "Rwanda's sports events are world-class. I can't wait to come back for the UCI Championships!",
    image: "/images/testimonial2.jpg",
  },
  {
    name: "Bob Johnson",
    comment:
      "I had the opportunity to visit Rwanda and it was incredible! The sports events were amazing.",
    image: "/images/testimonial3.jpg",
  },
];

const sportTypes = [
  "All",
  "Triathlon",
  "Volleyball",
  "Cycling",
  "Football",
  "Basketball",
  "Running",
  "Cricket",
  "Conference",
];

interface Event {
  year: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  link: string;
  sportType: string;
}

// interface Sport {
//   id: string;
//   name: string;
//   description: string;
//   icon: string;
//   url: string;
// }

export default function Sports() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedSport, setSelectedSport] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  //   const router = useRouter();

  // Filter events based on year, sport, and search query
  useEffect(() => {
    let result = events;

    if (selectedYear !== "all") {
      result = result.filter((event) => event.year === parseInt(selectedYear));
    }

    if (selectedSport !== "All") {
      result = result.filter((event) => event.sportType === selectedSport);
    }

    if (searchQuery) {
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredEvents(result);
  }, [selectedYear, selectedSport, searchQuery]);

  // Countdown timer for events
  const calculateCountdown = (eventDate: string): string => {
    const now: Date = new Date();
    const target: Date = new Date(eventDate);
    const difference: number = target.getTime() - now.getTime();

    if (difference > 0) {
      const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours: number = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      return `${days}d ${hours}h`;
    } else {
      return "Event has passed";
    }
  };

  // Open event details modal
  const openEventModal = (event: Event): void => {
    setSelectedEvent(event);
  };

  // Close event details modal
  const closeEventModal = () => {
    setSelectedEvent(null);
  };

  // Navigate to sport page
  //   const handleSportClick = (url: string): void => {
  //     router.push(url);
  //   };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center bg-gradient-to-r from-cyan-900 via-amber-400 to-blue-600">
        <div className="absolute inset-0">
          <Image
            src="https://cyclingflash.ams3.cdn.digitaloceanspaces.com/9820/responsive-images/01JGBKJKHNAS3B8VF6Z1AMBTHP___logo_600_600.webp"
            alt="Rwanda Sports Events"
            fill
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming Sports Events in Rwanda
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore the most exciting sports events happening in Rwanda.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          {/* Year Filter */}
          <select
            aria-label="Filter events by year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="all">All Years</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>

          {/* Sport Filter */}
          <select
            aria-label="Filter events by sport type"
            value={selectedSport}
            onChange={(e) => setSelectedSport(e.target.value)}
            className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {sportTypes.map((sport, index) => (
              <option key={index} value={sport}>
                {sport}
              </option>
            ))}
          </select>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 w-full md:w-64"
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openEventModal(event)}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {event.title}
                  </h2>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <p className="text-gray-600 mb-4">{event.location}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <div className="text-sm text-gray-600">
                    Time left: {calculateCountdown(event.date)}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-xl text-gray-600">
                No events found matching your criteria.
              </p>
            </div>
          )}
        </div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {selectedEvent.title}
              </h2>
              <p className="text-gray-600 mb-2">{selectedEvent.date}</p>
              <p className="text-gray-600 mb-4">{selectedEvent.location}</p>
              <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
              <button
                onClick={closeEventModal}
                className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-300"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}

        {/* Popular Sports Section */}
        <div className="mb-20 pt-10 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Popular Sports in Rwanda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularSports.map((sport, index) => (
              <Link href={sport.url} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full"
                >
                  <div className="text-5xl mb-5">{sport.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {sport.name}
                  </h3>
                  <p className="text-gray-600">{sport.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16 pt-10 border-t border-gray-200">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                </div>
                <p className="text-gray-600 italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
