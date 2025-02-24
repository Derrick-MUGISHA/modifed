"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Menu,
  Search,
  Twitter,
  X,
  Youtube,
  ChevronDown,
  Globe,
  MapPin,
  Utensils,
  Calendar,
  Mountain,
  Compass,
  Home,
  Hotel,
  Map,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Updated import to use next/navigation instead of next/router

// Map icons to categories
const categoryIcons = {
  events: <Calendar size={16} />,
  thingsToDo: <Compass size={16} />,
  restaurants: <Utensils size={16} />,
  hotels: <Hotel size={16} />,
  neighborhoods: <Map size={16} />,
  exploreKigali: <Globe size={16} />,
};

// Format navigation item keys for display
const formatNavLabel = (key) => {
  // Handle special cases
  if (key === "thingsToDo") return "Things To Do";
  if (key === "exploreKigali") return "Explore Kigali";

  // General formatting: capitalize first letter of each word
  return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");
};

const navItems = {
  events: [
    { label: "Cultural Festivals", link: "/upcoming" },
    { label: "KigaliUp", link: "/festivals" },
    { label: "Music Concerts", link: "/concerts" },
    { label: "Sports Events", link: "/exhibitions" },
    { label: "Food Festivals", link: "/art-shows" },
    { label: "Art Exhibitions", link: "/film-festivals" },
    { label: "Theatre & Comedy", link: "/concerts" },
    { label: "Networking Events", link: "/music-festivals" },
    { label: "Film Festivals", link: "/theater-shows" },
  ],
  thingsToDo: [
    { label: "Visit the Kigali Genocide Memorial", link: "/attractions" },
    { label: "Explore Nyamirambo Neighborhood", link: "/museums" },
    { label: "Tour the Inema Arts Center", link: "/outdoor" },
    { label: "Hike Mount Kigali", link: "/shopping" },
    { label: "Visit the Kimironko Market", link: "/hotel" },
    { label: "Relax at Lake Kivu (day trip)", link: "/museums" },
    { label: "See the Kandt House Museum", link: "/zoo" },
    { label: "Enjoy local food at Heaven Restaurant", link: "/museums" },
    { label: "Shop at Caplaki Craft Village", link: "/events" },
    { label: "Visit the Rwanda Art Museum", link: "/events" },
  ],
  restaurants: [
    { label: "Heaven Restaurant & Boutique Hotel", link: "/fine-dining" },
    { label: "The Hut", link: "/casual" },
    { label: "Bourbon Coffee", link: "/local-food" },
    { label: "La Bonne Adresse", link: "/cafes" },
    { label: "Repub Lounge", link: "/cafes" },
    { label: "Brachetto Restaurant", link: "/cafes" },
    { label: "Khmer Restaurant", link: "/cafes" },
    { label: "Soleluna", link: "/cafes" },
    { label: "Indian Kadhai Restaurant", link: "/cafes" },
    { label: "The Pot Restaurant", link: "/cafes" },
  ],
  hotels: [
    { label: "Kigali Serena Hotel", link: "/luxury" },
    { label: "Radisson Blu Hotel & Convention Centre", link: "/boutique" },
    { label: "The Retreat by Heaven", link: "/budget" },
    { label: "Hotel des Mille Collines", link: "/resorts" },
    { label: "Gorillas Golf Hotel", link: "/resorts" },
    { label: "Park Inn by Radisson Kigali", link: "/budget" },
    { label: "Hôtel La Palisse Nyandungu", link: "/budget" },
    { label: "Iris Guest House", link: "/budget" },
    { label: "M Hotel Kigali", link: "/budget" },
  ],
  neighborhoods: [
    { label: "Nyamirambo", link: "/downtown" },
    { label: "Kimironko", link: "/suburbs" },
    { label: "Nyarutarama", link: "/historic" },
    { label: "Kigali City Centre", link: "/upcoming" },
    { label: "Remera", link: "/upcoming" },
    { label: "Kabuye", link: "/upcoming" },
    { label: "Gikondo", link: "/upcoming" },
    { label: "Kibagabaga", link: "/upcoming" },
    { label: "Biryogo", link: "/upcoming" },
    { label: "Kigali Heights", link: "/upcoming" },
  ],
  exploreKigali: [
    { label: "The Rwanda Art Museum", link: "/city-guide" },
    {
      label: "The Kandt House Museum of Natural History",
      link: "/transportation",
    },
    { label: "Waka Waka Café", link: "/culture" },
    { label: "Sabyinyo Silverback Lodge", link: "/history" },
    { label: "Norr Hotel", link: "/history" },
    { label: "Ubumwe Grande Hotel", link: "/nature" },
    { label: "Gisozi Hill", link: "/nature" },
    { label: "Art World Gallery", link: "/nature" },
    { label: "The Rwanda Cultural Village", link: "/nature" },
    { label: "The New Remera Park", link: "/nature" },
  ],
};

const secondaryLinks = [
  { label: "Meeting Planners", href: "/meeting-planners" },
  { label: "Tour & Reunion Planners", href: "/tour-planners" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog-nav" },
];

const mainLinks = [
  { label: "Home", href: "/", icon: <Home size={16} /> },
  { label: "Discover", href: "/discover", icon: <Compass size={16} /> },
  { label: "Plan Your Trip", href: "/plan", icon: <Map size={16} /> },
  { label: "Travel Guide", href: "/guide", icon: <Mountain size={16} /> },
  { label: "Contact", href: "/contact", icon: <MapPin size={16} /> },
];

const socialIcons = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Youtube, label: "YouTube" },
];

export default function Navigation() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  // Modified navigation progress handling for Next.js 13+
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleStart = () => {
        setIsNavigating(true);
        setProgress(10);
      };

      const handleComplete = () => {
        setProgress(100);
        setTimeout(() => {
          setIsNavigating(false);
          setProgress(0);
        }, 500);
      };

      // Use the newer navigation events API or a custom approach
      document.addEventListener("nextjs:route-change-start", handleStart);
      document.addEventListener("nextjs:route-change-complete", handleComplete);

      return () => {
        document.removeEventListener("nextjs:route-change-start", handleStart);
        document.removeEventListener(
          "nextjs:route-change-complete",
          handleComplete
        );
      };
    }
  }, []);

  // Add progress bar animation
  useEffect(() => {
    let interval;
    if (isNavigating && progress < 90) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90));
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isNavigating, progress]);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [favorites, setFavorites] = useState(0);
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);

  // Client-side only code
  useEffect(() => {
    // Track scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Add event listener only on client side
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicks outside search container to close it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target) &&
        isSearching
      ) {
        setIsSearching(false);
      }
    };

    // Add event listener only on client side
    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleOutsideClick);
      return () =>
        document.removeEventListener("mousedown", handleOutsideClick);
    }
  }, [isSearching]);

  // Handle dropdown menu toggle for mobile
  const handleDropdownToggle = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearching && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearching]);

  // Search functionality
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Flatten all nav items to search through them
    const allItems = Object.entries(navItems).flatMap(([category, items]) =>
      items.map((item) => ({
        ...item,
        category,
        formattedCategory: formatNavLabel(category),
      }))
    );

    // Filter items based on search query
    const results = allItems.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
  };

  // Add to favorites
  const addToFavorites = () => {
    setFavorites((prev) => prev + 1);
  };

  // Use this check to prevent hydration errors
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Return null on first render to avoid hydration mismatch
  }

  return (
    <>
      {/* Top Navigation Bar */}
      <div
        className={`w-full ${
          isScrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-gray-900"
        } text-white fixed top-0 z-50 transition-all duration-300 pb-3`} // Added pb-2 to add padding at the bottom
      >
        <div className="container mx-auto px-4">
          {/* Secondary Navigation, Social Icons, Search */}
          <div className="flex justify-between items-center h-12 md:h-10 text-sm">
            {/* Left side - Social Icons */}
            <div className="hidden md:flex items-center space-x-3">
              {socialIcons.map(({ Icon, label }, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* Secondary Links */}
            <div className="hidden md:flex items-center space-x-4 text-xs font-bold">
              {secondaryLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-amber-400 transition-colors whitespace-nowrap text-gray-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Top Bar Icons */}
            <div className="flex items-center space-x-3 md:hidden">
              {socialIcons.slice(0, 3).map(({ Icon, label }, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition-colors ml-6"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Favorites (visible on all screen sizes) */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                aria-label={`Favorites (${favorites})`}
                onClick={addToFavorites}
                className="relative hover:text-amber-400 text-gray-200 h-8 px-2"
              >
                <Heart size={16} />
                {favorites > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {favorites}
                  </span>
                )}
                <span className="ml-1.5 hidden md:inline text-xs">
                  Favorites
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-r from-gray-900 via-gray-800 to-black"
        } text-white fixed top-12 md:top-10 z-40 transition-all duration-300 border-b border-gray-800 min-h-24`} // Changed h-6 to min-h-12
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-20 md:h-20 relative">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <img
              src="https://i.postimg.cc/RF3645kp/kigali-view-high-resolution-logo-removebg-preview.png"
              alt="Kigali View"
              className={`transition-all duration-300 ${
                isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
              }`}
            />
          </Link>

          {/* Desktop Main Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-6">
            {mainLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-3 py-2 text-white hover:text-amber-400 font-medium transition-colors flex items-center space-x-1.5"
              >
                <span className="text-amber-400">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Category Navigation */}
          <div className="hidden lg:flex items-center flex-1 justify-center max-w-4xl">
            <div className="flex items-center justify-center space-x-6">
              {Object.keys(navItems).map((key) => (
                <div key={key} className="relative group">
                  <button
                    className="flex items-center space-x-1 text-white group-hover:text-amber-400 text-sm font-medium transition-colors duration-200"
                    onMouseEnter={() => setOpenDropdown(key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    aria-expanded={openDropdown === key}
                  >
                    <span>{formatNavLabel(key)}</span>
                    <ChevronDown
                      size={14}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </button>

                  {/* Mega Dropdown Menu */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-gray-800 text-white rounded-lg shadow-xl py-3 px-2
                      transition-all duration-200 z-50 border border-gray-700
                      ${
                        openDropdown === key
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    onMouseEnter={() => setOpenDropdown(key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="grid gap-1 max-h-96 overflow-y-auto">
                      {navItems[key].map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-700 rounded-md transition-colors group"
                        >
                          <span className="text-amber-400">
                            {categoryIcons[key] || <Globe size={16} />}
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="relative" ref={searchContainerRef}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearching(!isSearching)}
                aria-label="Search"
                className="hover:text-amber-400 text-gray-200"
              >
                <Search size={20} />
              </Button>

              {/* Search Dropdown */}
              {isSearching && (
                <div className="absolute right-0 mt-2 w-64 md:w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50">
                  <form onSubmit={handleSearch} className="p-2">
                    <div className="flex border border-gray-700 rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-amber-400">
                      <Input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search Kigali View..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 border-0 bg-gray-900 text-white focus-visible:ring-0 focus-visible:ring-offset-0 h-9"
                      />
                      {searchQuery && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9 text-gray-400 hover:text-white"
                          onClick={() => setSearchQuery("")}
                        >
                          <X size={16} />
                        </Button>
                      )}
                      <Button
                        type="submit"
                        variant="default"
                        className="h-9 rounded-none bg-amber-500 hover:bg-amber-600 text-black"
                      >
                        <Search size={16} />
                      </Button>
                    </div>
                  </form>

                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="max-h-64 overflow-y-auto border-t border-gray-700">
                      <div className="p-2 text-xs text-gray-400">
                        Found {searchResults.length} results
                      </div>
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.link}
                          className="flex items-start space-x-2 p-2 hover:bg-gray-700 transition-colors"
                          onClick={clearSearch}
                        >
                          <div className="mt-0.5 text-amber-400">
                            {categoryIcons[result.category] || (
                              <Globe size={14} />
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              {result.label}
                            </div>
                            <div className="text-xs text-gray-400">
                              {result.formattedCategory}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* No Results State */}
                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-4 text-center text-gray-400 text-sm">
                      <p>No results found. Try a different search term.</p>
                    </div>
                  )}

                  {/* Empty State */}
                  {!searchQuery && (
                    <div className="p-3 text-xs text-gray-400">
                      <p>Popular searches: museums, restaurants, hiking</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden text-white"
                  aria-label="Open Menu"
                >
                  <Menu size={28} />
                </Button>
              </SheetTrigger>

              {/* Mobile Menu Content */}
              <SheetContent
                side="right"
                className="w-full max-w-md bg-gradient-to-b from-gray-900 to-black text-white border-l border-gray-800 p-0"
              >
                <SheetHeader className="p-4 border-b border-gray-800">
                  <div className="flex justify-between items-center">
                    <img
                      src="https://i.postimg.cc/RF3645kp/kigali-view-high-resolution-logo-removebg-preview.png"
                      alt="Kigali View"
                      className="h-12"
                    />
                    <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                      {/* <X className="h-5 w-5 text-white" /> */}
                      <span className="sr-only">Close</span>
                    </SheetClose>
                  </div>
                  <SheetTitle className="text-amber-400 mt-2">
                    Discover Kigali
                  </SheetTitle>
                  <SheetDescription className="text-gray-400">
                    Experience the beauty of Rwanda's capital city
                  </SheetDescription>
                </SheetHeader>

                <div className="overflow-y-auto max-h-[calc(100vh-150px)] p-4">
                  {/* Main Navigation Links */}
                  <div className="space-y-1 mb-6">
                    <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">
                      Main Navigation
                    </h3>
                    {mainLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="flex items-center space-x-3 text-white hover:text-amber-400 py-2 px-2 rounded-md hover:bg-gray-800/50 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="text-amber-400">{link.icon}</span>
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Mobile Menu Categories */}
                  <div className="space-y-1 pb-2">
                    <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">
                      Explore Categories
                    </h3>
                    {Object.entries(navItems).map(([key, items]) => (
                      <div
                        key={key}
                        className="border-b border-gray-800 pb-2 mb-2 last:border-0"
                      >
                        <button
                          onClick={() => handleDropdownToggle(key)}
                          className="flex items-center justify-between w-full text-md font-medium text-white py-2 hover:text-amber-400 transition-colors"
                          aria-expanded={openDropdown === key}
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-amber-400">
                              {categoryIcons[key] || <Globe size={18} />}
                            </span>
                            <span>{formatNavLabel(key)}</span>
                          </div>
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              openDropdown === key
                                ? "rotate-180 text-amber-400"
                                : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Dropdown Items */}
                        <div
                          className={`transition-all duration-300 overflow-hidden ${
                            openDropdown === key
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pl-8 pt-1 pb-2 space-y-1">
                            {items.map((item, index) => (
                              <Link
                                key={index}
                                href={item.link}
                                className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 py-1.5 rounded transition-colors text-sm"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <span>{item.label}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Secondary Links */}
                  <div className="mt-4 space-y-3 pb-4 border-t border-gray-800 pt-4">
                    <h3 className="text-xs uppercase text-gray-500 font-semibold mb-2">
                      Additional Resources
                    </h3>
                    {secondaryLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 py-1 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <SheetFooter className="p-4 border-t border-gray-800">
                  {/* Mobile Social Icons */}
                  <div className="flex justify-center space-x-4 mb-4">
                    {socialIcons.map(({ Icon, label }, index) => (
                      <a
                        key={index}
                        href="#"
                        className="text-white hover:text-amber-400 transition-colors"
                        aria-label={`Follow us on ${label}`}
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>

                  {/* Favorites Button */}
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-amber-400 hover:text-amber-300 hover:border-amber-600"
                    onClick={addToFavorites}
                  >
                    <Heart size={16} className="mr-2" />
                    <span>Save to Favorites</span>
                    {favorites > 0 && (
                      <span className="ml-2 bg-amber-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {favorites}
                      </span>
                    )}
                  </Button>

                  {/* Copyright */}
                  <div className="mt-4 text-center text-xs text-gray-400">
                    <p>© 2025 Kigali View</p>
                    <p className="mt-1">Experience the beauty of Rwanda</p>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Spacer to push content below fixed navigation */}
      <div className="h-28 md:h-32"></div>
    </>
  );
}
