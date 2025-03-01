"use client";
import React, { useState, useEffect } from "react";
import { Share2, Heart, MapPin, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function HotelIntro() {
  const imageSlides = [
    {
      src: "https://d1bvpoagx8hqbg.cloudfront.net/originals/experience-kigali-rwanda-umulinga-dbb2e0c2fe1ca0f3860d92e3ddfe41c2.jpg",
      caption: "A countdown on Rwanda’s most trending events",
    },
    // Add more images here if needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imageSlides.length); // Loop through the images
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [imageSlides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Image Slide */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <Image
          src={imageSlides[activeIndex].src}
          alt="Carousel"
          layout="fill"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Caption */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
          {imageSlides[activeIndex].caption}
        </h2>
      </div>
    </div>
  );
}
const HotelLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Share Button */}
        <div className="flex justify-end mb-8">
          <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
            <Share2 className="mr-2 h-5 w-5" />
            Share
          </button>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          City Hotels
        </h1>

        {/* Content Text */}
        <div className="space-y-4 text-gray-600 mb-12">
          <p>
            Looking for the perfect place to stay? Start your hotel search here.
            Whether you prefer one of our 5,000 downtown hotel rooms in the
            heart of the action, or a suburban property, we&apos;ve got you
            covered. If you&apos;re just not a hotel person, check into one of
            our outstanding alternative properties, like{" "}
            <Link
              href="/"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              The Riverside Lodge
            </Link>
            .
          </p>

          <p>
            All properties in the downtown core are easily accessible on foot,
            as shown on our{" "}
            <Link
              href="/"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              map of downtown hotels
            </Link>
            . The diverse selection of brands includes offerings for all price
            points and groups of any size.
          </p>
        </div>

        {/* Promo Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side */}
            <div className="bg-blue-500 p-6 md:p-8 flex items-center justify-center">
              <div className="text-white text-lg font-semibold">
                REWARDS CLUB
              </div>
            </div>

            {/* Right Side */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                TRAVEL SHOULD BE REWARDING.
              </h2>
              <p className="text-gray-600 mb-6">
                Join our Rewards Program for free today and earn points toward
                travel, upgrades and more. Program Rules apply. Terms and
                conditions apply.
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                JOIN TODAY →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
const HotelListings = () => {
  const [viewType, setViewType] = useState("grid");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showMap, setShowMap] = useState(false);
  const [quickViewHotel, setQuickViewHotel] = useState<Hotel | null>(null);

  const hotels = [
    {
      name: "Courtyard By Marriott/Worthington",
      address: "7411 Vantage Drive",
      rating: 4.2,
      reviews: 182,
      featured: true,
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
    },
    {
      name: "Hilton Columbus Downtown",
      address: "402 N. High St.",
      rating: 4.5,
      reviews: 2402,
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
    },
    {
      name: "Hilton Columbus Downtown",
      address: "402 N. High St.",
      rating: 4.5,
      reviews: 2402,
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
    },
    {
      name: "Hilton Columbus Downtown",
      address: "402 N. High St.",
      rating: 4.5,
      reviews: 2402,
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
    },
    {
      name: "Hilton Columbus Downtown",
      address: "402 N. High St.",
      rating: 4.5,
      reviews: 2402,
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
    },
    {
      name: "Hilton Columbus Downtown",
      address: "402 N. High St.",
      rating: 4.5,
      reviews: 2402,
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
    },
    // Add more hotels as needed
  ];

  const exploreOptions = [
    {
      title: "Packages",
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
    },
    {
      title: "Near Ohio State University",
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
    },
    {
      title: "Downtown",
      image:
        "https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png",
    },
  ];

  interface Hotel {
    name: string;
    address: string;
    rating: number;
    reviews: number;
    featured?: boolean;
    image: string;
  }

  const toggleFavorite = (hotel: Hotel): void => {
    setFavorites((prevFavorites: string[]) =>
      prevFavorites.includes(hotel.name)
        ? prevFavorites.filter((fav: string) => fav !== hotel.name)
        : [...prevFavorites, hotel.name]
    );
  };

  interface ViewType {
    view: "grid" | "list";
  }

  const toggleView = (view: ViewType["view"]): void => {
    setViewType(view);
  };

  const openQuickView = (hotel: Hotel): void => {
    setQuickViewHotel(hotel);
  };

  const closeQuickView = () => {
    setQuickViewHotel(null);
  };

  const toggleMapView = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Promo Section */}
      <div className="bg-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Book a two-night stay with us and you&apos;ll get the choice of:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png"
                alt="Delta Airlines"
                width={64} // Intrinsic width of the image
                height={64}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                $100 Delta Air Lines Voucher
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png"
                alt="Franklin Park"
                width={64} // Intrinsic width of the image
                height={64}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                Two Tickets to Franklin Park Conservatory and Botanical Gardens
              </h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png"
                alt="Lyft"
                width={64} // Intrinsic width of the image
                height={64}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                $25-$50 Lyft Credit
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and View Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <span className="text-gray-700">VIEW:</span>
            <button
              className={`px-4 py-2 rounded-lg ${
                viewType === "grid"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => toggleView("grid")}
            >
              Grid
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                viewType === "list"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => toggleView("list")}
            >
              List
            </button>
          </div>
          <button
            className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
            onClick={toggleMapView}
          >
            <MapPin className="mr-2 h-5 w-5" />
            <span>Show Map</span>
          </button>
        </div>

        {/* Hotel Grid */}
        <div
          className={`grid ${
            viewType === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          } gap-6`}
        >
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48 sm:h-56">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  width={64} // Intrinsic width of the image
                  height={64}
                  className="w-full h-full object-cover"
                />
                {hotel.featured && (
                  <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    FEATURED
                  </div>
                )}
                <button
                  className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => toggleFavorite(hotel)}
                  title={`Add ${hotel.name} to favorites`}
                  aria-label={`Add ${hotel.name} to favorites`}
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(hotel.name)
                        ? "text-red-500"
                        : "text-gray-700"
                    }`}
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {hotel.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{hotel.address}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-yellow-400">
                      {"★".repeat(Math.floor(hotel.rating))}
                    </div>
                    <span className="ml-2 text-gray-700">
                      ({hotel.reviews} reviews)
                    </span>
                  </div>
                  <button
                    className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300"
                    onClick={() => openQuickView(hotel)}
                  >
                    <Eye className="h-5 w-5 mr-2" />
                    <span>Quick View</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick View Modal */}
        {quickViewHotel && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {quickViewHotel.name}
              </h3>
              <Image
                src={quickViewHotel.image}
                alt={quickViewHotel.name}
                width={64} // Intrinsic width of the image
                height={64}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-4">{quickViewHotel.address}</p>
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                onClick={closeQuickView}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Explore More Section */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            EXPLORE MORE LODGING OPTIONS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {exploreOptions.map((option, index) => (
              <div
                key={index}
                className="relative h-48 sm:h-64 rounded-lg overflow-hidden"
              >
                <Image
                  src={option.image}
                  alt={option.title}
                  width={64} // Intrinsic width of the image
                  height={64}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white">
                    {option.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map View */}
        {showMap && (
          <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Map View (This is just a placeholder)
            </h2>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-600">Map will be displayed here.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default function page() {
  return (
    <div>
      <HotelIntro />
      <HotelLanding />
      <HotelListings />
      <h1>Things to do</h1>
    </div>
  );
}
