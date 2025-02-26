// app/events/page.tsx
"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function KigaliEvents() {
  // Animation states
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const featuredArtists = [
    {
      name: "John Legend",
      role: "Headline Artist",
      bio: "12-time Grammy Award winner known for hits like 'All of Me' and 'Ordinary People'. His Move Afrika tour aims to promote cultural exchange across the continent.",
      image: "https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg",
    },
    {
      name: "Inyamibwa Cultural Troupe",
      role: "Traditional Performers",
      bio: "Rwanda's premier cultural ensemble preserving Intore warrior dance and traditional musical forms through contemporary interpretations.",
      image: "https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg",
    },
    {
      name: "Bruce Melodie",
      role: "Local Artist",
      bio: "Rwanda's top R&B artist known for his unique blend of Afrobeats and traditional sounds, bringing local flavor to the international stage.",
      image: "https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg",
    },
    {
      name: "Meddy",
      role: "Special Guest",
      bio: "Rwandan-American R&B singer who has gained international recognition with hits that bridge African and Western musical styles.",
      image: "https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg",
    },
  ];

  const ticketTypes = [
    {
      name: "VIP Experience",
      price: "250,000 RWF",
      includes: [
        "Front row seats",
        "Meet & greet",
        "Exclusive merchandise",
        "VIP lounge access",
      ],
    },
    {
      name: "Premium Admission",
      price: "180,000 RWF",
      includes: [
        "Priority seating",
        "Welcome drink",
        "Event program",
        "Fast-track entry",
      ],
    },
    {
      name: "General Admission",
      price: "120,000 RWF",
      includes: [
        "Standard seating",
        "Event program",
        "Food & drink vendors access",
      ],
    },
  ];

  const sponsors = [
    "https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg",
    "https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg",
    "https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg",
    "https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg",
    "https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg",
    "https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg",
  ];

  const februaryEvents = [
    {
      day: "21",
      name: "Move Afrika Tour",
      location: "BK Arena",
      time: "7PM - 11PM",
    },
    {
      day: "24",
      name: "Kigali Jazz Junction",
      location: "Kigali Convention Center",
      time: "6PM - 10PM",
    },
    {
      day: "28",
      name: "Rwanda Film Festival",
      location: "Century Cinema",
      time: "3PM - 9PM",
    },
  ];

  const marchEvents = [
    {
      day: "05",
      name: "Kigali Fashion Week",
      location: "Kigali Conference Center",
      time: "4PM - 9PM",
    },
    {
      day: "12",
      name: "Tech Summit Rwanda",
      location: "Norrsken House",
      time: "9AM - 5PM",
    },
    {
      day: "19",
      name: "Cultural Dance Festival",
      location: "Amahoro Stadium",
      time: "2PM - 6PM",
    },
    {
      day: "25",
      name: "Rwanda Coffee Exhibition",
      location: "Kigali Heights",
      time: "10AM - 4PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with animation */}
      <motion.div
        className="relative h-72 sm:h-96 md:h-[500px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg"
          alt="Kigali Events"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50">
          <div className="container mx-auto px-4 h-full flex items-end pb-8 sm:pb-12">
            <motion.div
              className="text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-2 sm:mb-4">
                Featured Event
              </Badge>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                John Legend - Move Africa Tour
              </h1>
              <p className="text-base md:text-xl">
                February 21, 2025 | BK Arena
              </p>
              <Button className="mt-3 sm:mt-6 bg-amber-600 hover:bg-amber-700">
                Get Tickets
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Featured Artists */}
      <motion.section
        className="container mx-auto px-4 py-10 md:py-16"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Featured Artists
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8"
          variants={staggerContainer}
        >
          {featuredArtists.map((artist, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="p-4 md:p-6 h-full">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="relative w-full sm:w-24 md:w-32 h-40 sm:h-24 md:h-32 flex-shrink-0 mx-auto sm:mx-0">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg md:text-xl font-bold">
                      {artist.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{artist.role}</p>
                    <p className="text-sm md:text-base text-gray-600">
                      {artist.bio}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Event Schedule Tabs */}
      <motion.section
        className="container mx-auto px-4 py-10 md:py-16"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <Tabs defaultValue="february" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-6 sm:mb-8">
            <TabsTrigger value="february">February</TabsTrigger>
            <TabsTrigger value="march">March</TabsTrigger>
            <TabsTrigger value="upcoming">All Events</TabsTrigger>
          </TabsList>

          <TabsContent value="february">
            <motion.div
              className="space-y-3 sm:space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {februaryEvents.map((event, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <div className="p-4 sm:p-6 bg-white rounded-lg shadow">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                      <div className="text-center sm:text-left bg-amber-100 p-2 rounded-lg sm:rounded-none">
                        <div className="text-xl sm:text-2xl font-bold">
                          {event.day}
                        </div>
                        <div className="text-xs sm:text-sm">FEB</div>
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-semibold">
                          {event.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {event.location} | {event.time}
                        </p>
                      </div>
                      <Button className="sm:ml-auto mt-2 sm:mt-0 bg-amber-600 hover:bg-amber-700 w-full sm:w-auto">
                        Remind Me
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="march">
            <motion.div
              className="space-y-3 sm:space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {marchEvents.map((event, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <div className="p-4 sm:p-6 bg-white rounded-lg shadow">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                      <div className="text-center sm:text-left bg-amber-100 p-2 rounded-lg sm:rounded-none">
                        <div className="text-xl sm:text-2xl font-bold">
                          {event.day}
                        </div>
                        <div className="text-xs sm:text-sm">FEB</div>
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl font-semibold">
                          {event.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {event.location} | {event.time}
                        </p>
                      </div>
                      <Button className="sm:ml-auto mt-2 sm:mt-0 bg-amber-600 hover:bg-amber-700 w-full sm:w-auto">
                        Remind Me
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="p-6 text-center text-gray-500">
              All upcoming events will appear here
            </div>
          </TabsContent>
        </Tabs>
      </motion.section>

      {/* Ticket Pricing */}
      <motion.section
        className="bg-green-50 py-10 md:py-16"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-amber-400">
            Ticket Packages
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={staggerContainer}
          >
            {ticketTypes.map((ticket, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="p-4 sm:p-6 text-center h-full flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">
                    {ticket.name}
                  </h3>
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-3 sm:mb-4">
                    {ticket.price}
                  </div>
                  <Separator className="mb-4" />
                  <ul className="space-y-2 text-left flex-grow">
                    {ticket.includes.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm sm:text-base"
                      >
                        <FiCheck className="text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 sm:mt-6 bg-amber-600 hover:bg-amber-700">
                    Purchase Now
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Sponsors Carousel */}
      <motion.section
        className="container mx-auto px-4 sm:px-12 lg:px-20 py-10 md:py-16"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
          Official Partners
        </h2>
        <Carousel className="mx-auto max-w-5xl">
          <CarouselContent>
            {sponsors.map((logo, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 p-2"
              >
                <div className="relative h-24 sm:h-32">
                  <Image
                    src={logo}
                    alt={`Sponsor ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </motion.section>

      {/* Travel Information */}
      <motion.section
        className="container mx-auto px-4 py-10 md:py-16"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
          Plan Your Visit
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <Card className="p-4 sm:p-6 h-full">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                🏨 Accommodation
              </h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                Recommended hotels near BK Arena:
              </p>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>Kigali Marriott Hotel - 1.2km</li>
                <li>Radisson Blu Hotel - 0.8km</li>
                <li>Ubumwe Grande Hotel - 2.1km</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="p-4 sm:p-6 h-full">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                🚌 Transportation
              </h3>
              <p className="text-sm sm:text-base">Venue access options:</p>
              <ul className="space-y-2 mt-2 text-sm sm:text-base">
                <li>Free shuttle buses from city center</li>
                <li>Secure parking available</li>
                <li>Taxi pick-up zones</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="p-4 sm:p-6 h-full">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                ℹ️ Visitor Info
              </h3>
              <Accordion
                type="single"
                collapsible
                className="text-sm sm:text-base"
              >
                <AccordionItem value="visa">
                  <AccordionTrigger>Visa Requirements</AccordionTrigger>
                  <AccordionContent>
                    Rwanda offers visa-free entry to all African nationals and
                    visa-on-arrival for other visitors.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="health">
                  <AccordionTrigger>Health Protocols</AccordionTrigger>
                  <AccordionContent>
                    COVID-19 vaccination certificate required for indoor events.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="currency">
                  <AccordionTrigger>Currency & Payments</AccordionTrigger>
                  <AccordionContent>
                    The Rwandan Franc (RWF) is the official currency. Major
                    cards accepted at the venue.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* News Section */}
      <motion.section
        className="bg-blue-50 py-10 md:py-16"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Latest Updates
          </h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="p-4 sm:p-6 h-full">
                <div className="relative h-40 sm:h-48 mb-3 sm:mb-4">
                  <Image
                    src="https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg"
                    alt="Tour Preparation"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                  Tour Preparation Underway
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  John Legend arrives in Kigali early for cultural immersion and
                  tour preparations. Includes collaboration with local artists.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="p-4 sm:p-6 h-full">
                <div className="relative h-40 sm:h-48 mb-3 sm:mb-4">
                  <Image
                    src="https://i.postimg.cc/T12VmpYH/pexels-madknoxxdeluxe-30487817.jpg"
                    alt="FinTech Forum"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                  FinTech Innovation Awards
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  New startup competition announced with $1M prize pool for
                  African financial inclusion solutions.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        className="container mx-auto px-4 py-10 md:py-16 text-center"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={fadeIn}
      >
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
            Stay Updated
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Subscribe for event announcements, ticket releases, and exclusive
            offers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 sm:p-3 rounded-lg border"
            />
            <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
