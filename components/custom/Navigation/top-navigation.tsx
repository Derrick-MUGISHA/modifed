"use client";

import React, { useState, useEffect, useRef } from "react";
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
  LucideIcon,
} from "lucide-react";
import Link from "next/link";

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
const formatNavLabel = (key: string): string => {
  if (key === "thingsToDo") return "Things To Do";
  if (key === "exploreKigali") return "Explore Kigali";
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
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [favorites, setFavorites] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [screenSize, setScreenSize] = useState('desktop');

  // Function to get icon size based on screen size
  const getIconSize = (defaultSize = 16, smallSize = 16, mediumSize = 20, largeSize = 24) => {
    if (screenSize === 'mobile') return smallSize;
    if (screenSize === 'tablet') return mediumSize;
    return largeSize;
  };

  // Function to update category icons based on screen size
  const getResponsiveCategoryIcon = (key) => {
    const iconSize = screenSize === 'mobile' ? 14 : screenSize === 'tablet' ? 16 : 18;
    const IconComponent = categoryIcons[key] || <Globe size={iconSize} />;
    
    // Clone the element with the new size
    return React.cloneElement(IconComponent, { size: iconSize });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node) &&
        isSearching
      ) {
        setIsSearching(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isSearching]);

  const handleDropdownToggle = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  useEffect(() => {
    if (isSearching && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearching]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const allItems = Object.entries(navItems).flatMap(([category, items]) =>
      items.map((item) => ({
        ...item,
        category,
        formattedCategory: formatNavLabel(category),
      }))
    );

    const results = allItems.filter((item) =>
      item.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
  };

  const addToFavorites = () => {
    setFavorites((prev) => prev + 1);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Get responsive icon sizes
  const smallIconSize = getIconSize(16, 14, 16, 18);
  const mediumIconSize = getIconSize(20, 16, 20, 24);
  const largeIconSize = getIconSize(24, 20, 24, 28);

  return (
    <>
      {/* Top bar */}
      <div
        className={`w-full ${
          isScrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-gray-900"
        } text-white fixed top-0 z-50 transition-all duration-300 pb-1 sm:pb-2`}
      >
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex justify-between items-center h-10 sm:h-12 md:h-12 text-xs sm:text-sm">
            {/* Social icons - hide some on mobile */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {socialIcons.slice(0, screenSize === 'mobile' ? 3 : 5).map(({ Icon, label }, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon size={smallIconSize} className="md:w-4 md:h-4" />
                </a>
              ))}
            </div>

            {/* Main links - only show on tablet and desktop */}
            <div className="hidden md:flex items-center space-x-4 text-xs font-bold">
              {mainLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="hover:text-amber-400 transition-colors whitespace-nowrap text-gray-300 flex items-center gap-1"
                >
                  <span className="text-amber-400">
                    {React.cloneElement(link.icon, { size: smallIconSize })}
                  </span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Favorites button */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                aria-label={`Favorites (${favorites})`}
                onClick={addToFavorites}
                className="relative hover:text-amber-400 text-gray-200 h-8 px-2"
              >
                <Heart size={smallIconSize} className="md:w-4 md:h-4" />
                {favorites > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-black text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    {favorites}
                  </span>
                )}
                <span className="ml-1.5 hidden sm:inline text-xs">
                  Favorites
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`w-full ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-r from-gray-900 via-gray-800 to-black"
        } text-white fixed top-10 sm:top-12 md:top-12 z-40 transition-all duration-300 border-b border-gray-800 pb-2 md:pb-3`}
      >
        <div className="container mx-auto px-2 sm:px-4 flex justify-between items-center h-16 sm:h-20 md:h-24 relative">
          {/* Logo - resize based on screen and scroll */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <img
              src="https://i.postimg.cc/RF3645kp/kigali-view-high-resolution-logo-removebg-preview.png"
              alt="Kigali View"
              className={`transition-all duration-300 ${
                isScrolled 
                  ? screenSize === 'mobile' 
                    ? "h-10" 
                    : screenSize === 'tablet' 
                      ? "h-14" 
                      : "h-16" 
                  : screenSize === 'mobile' 
                    ? "h-12" 
                    : screenSize === 'tablet' 
                      ? "h-16" 
                      : "h-20"
              }`}
            />
          </Link>

          {/* Desktop navigation - only show on large screens */}
          <div className="hidden lg:flex items-center flex-1 justify-center max-w-5xl">
            <div className="flex items-center justify-center space-x-6 xl:space-x-8">
              {Object.keys(navItems).map((key) => (
                <div key={key} className="relative group">
                  <button
                    className="flex items-center space-x-1 text-white group-hover:text-amber-400 text-sm xl:text-base font-medium transition-colors duration-200"
                    onMouseEnter={() => setOpenDropdown(key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    aria-expanded={openDropdown === key}
                  >
                    <span>{formatNavLabel(key)}</span>
                    <ChevronDown
                      size={smallIconSize}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </button>

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
                            {getResponsiveCategoryIcon(key)}
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

          {/* Search and mobile menu buttons */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Search button and dropdown */}
            <div className="relative" ref={searchContainerRef}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearching(!isSearching)}
                aria-label="Search"
                className="hover:text-amber-400 text-gray-200"
              >
                <Search size={mediumIconSize} />
              </Button>

              {isSearching && (
                <div className="absolute right-0 mt-2 w-64 sm:w-72 md:w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden z-50">
                  <form onSubmit={handleSearch} className="p-2">
                    <div className="flex border border-gray-700 rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-amber-400">
                      <Input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search Kigali View..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 border-0 bg-gray-900 text-white focus-visible:ring-0 focus-visible:ring-offset-0 h-9 sm:h-10"
                      />
                      {searchQuery && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-9 sm:h-10 w-9 sm:w-10 text-gray-400 hover:text-white"
                          onClick={() => setSearchQuery("")}
                        >
                          <X size={smallIconSize} />
                        </Button>
                      )}
                      <Button
                        type="submit"
                        variant="default"
                        className="h-9 sm:h-10 rounded-none bg-amber-500 hover:bg-amber-600 text-black"
                      >
                        <Search size={smallIconSize} />
                      </Button>
                    </div>
                  </form>

                  {searchResults.length > 0 && (
                    <div className="max-h-60 sm:max-h-64 overflow-y-auto border-t border-gray-700">
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
                            {getResponsiveCategoryIcon(result.category)}
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

                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-4 text-center text-gray-400 text-sm">
                      <p>No results found. Try a different search term.</p>
                    </div>
                  )}

                  {!searchQuery && (
                    <div className="p-3 text-xs text-gray-400">
                      <p>Popular searches: museums, restaurants, hiking</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button and drawer */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden text-white"
                  aria-label="Open Menu"
                >
                  <Menu size={largeIconSize} />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-gradient-to-b from-gray-900 to-black text-white border-l border-gray-800 p-0 overflow-hidden"
              >
                <div className="flex flex-col h-full">
                  <SheetHeader className="p-3 sm:p-4 border-b border-gray-800 flex-shrink-0">
                    <div className="flex justify-between items-center">
                      <img
                        src="https://i.postimg.cc/RF3645kp/kigali-view-high-resolution-logo-removebg-preview.png"
                        alt="Kigali View"
                        className="h-12 sm:h-16 md:h-20"
                      />
                      <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                        <span className="sr-only">Close</span>
                      </SheetClose>
                    </div>
                    <SheetTitle className="text-amber-400 mt-2 text-lg sm:text-xl">
                      Discover Kigali
                    </SheetTitle>
                    <SheetDescription className="text-gray-400 text-sm sm:text-base">
                      Experience the beauty of Rwanda's capital city
                    </SheetDescription>
                  </SheetHeader>

                  <div className="overflow-y-auto flex-grow p-3 sm:p-4">
                    <div className="space-y-1 mb-4 sm:mb-6">
                      <h3 className="text-xs uppercase text-gray-500 font-semibold mb-1 sm:mb-2">
                        Main Navigation
                      </h3>
                      {mainLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          className="flex items-center space-x-2 sm:space-x-3 text-white hover:text-amber-400 py-1.5 sm:py-2 px-2 rounded-md hover:bg-gray-800/50 transition-colors text-base sm:text-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-amber-400">
                            {React.cloneElement(link.icon, { size: smallIconSize })}
                          </span>
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="space-y-1 pb-2">
                      <h3 className="text-xs uppercase text-gray-500 font-semibold mb-1 sm:mb-2">
                        Explore Categories
                      </h3>
                      {Object.entries(navItems).map(([key, items]) => (
                        <div
                          key={key}
                          className="border-b border-gray-800 pb-1 sm:pb-2 mb-1 sm:mb-2 last:border-0"
                        >
                          <button
                            onClick={() => handleDropdownToggle(key)}
                            className="flex items-center justify-between w-full text-base sm:text-lg font-medium text-white py-1.5 sm:py-2 hover:text-amber-400 transition-colors"
                            aria-expanded={openDropdown === key}
                          >
                            <div className="flex items-center space-x-2">
                              <span className="text-amber-400">
                                {getResponsiveCategoryIcon(key)}
                              </span>
                              <span>{formatNavLabel(key)}</span>
                            </div>
                            <ChevronDown
                              size={smallIconSize}
                              className={`transition-transform duration-300 ${
                                openDropdown === key
                                  ? "rotate-180 text-amber-400"
                                  : ""
                              }`}
                            />
                          </button>

                          <div
                            className={`transition-all duration-300 overflow-hidden ${
                              openDropdown === key
                                ? "max-h-80 sm:max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="pl-6 sm:pl-8 pt-1 pb-1 sm:pb-2 space-y-0.5 sm:space-y-1">
                              {items.map((item, index) => (
                                <Link
                                  key={index}
                                  href={item.link}
                                  className="flex items-center space-x-2 text-gray-300 hover:text-amber-400 py-1 sm:py-1.5 rounded transition-colors text-sm sm:text-base"
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
                  </div>

                  <SheetFooter className="p-3 sm:p-4 border-t border-gray-800 flex-shrink-0">
                    <div className="flex justify-center space-x-4 sm:space-x-6 mb-3 sm:mb-4">
                      {socialIcons.map(({ Icon, label }, index) => (
                        <a
                          key={index}
                          href="#"
                          className="text-white hover:text-amber-400 transition-colors"
                          aria-label={`Follow us on ${label}`}
                        >
                          <Icon size={screenSize === 'mobile' ? 18 : screenSize === 'tablet' ? 20 : 24} />
                        </a>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-gray-700 text-amber-400 hover:text-amber-300 hover:border-amber-600 text-sm sm:text-base md:text-lg py-2 sm:py-3 md:py-4"
                      onClick={addToFavorites}
                    >
                      <Heart size={smallIconSize} className="mr-2" />
                      <span className="text-xs sm:text-sm md:text-base">Save to Favorites</span>
                      {favorites > 0 && (
                        <span className="ml-2 bg-amber-500 text-black text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                          {favorites}
                        </span>
                      )}
                    </Button>

                    <div className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-400">
                      <p>© 2025 Kigali View</p>
                      <p className="mt-1 text-xs sm:text-sm">Experience the beauty of Rwanda</p>
                    </div>
                  </SheetFooter>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-28 sm:h-32 md:h-36 lg:h-40"></div>
    </>
  );
}