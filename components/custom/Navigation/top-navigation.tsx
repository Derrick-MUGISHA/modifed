"use client";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Search,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DropdownContent = ({ items }: { items: { label: string; link: string }[] }) => (
  <div className="dropdown-content bg-black text-white p-4 min-w-[200px] shadow-lg rounded-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out absolute z-50">
    {items.map((item, index) => (
      <a
        key={index}
        href={item.link}
        className="block p-2 hover:bg-gray-700 rounded-md transition duration-200"
      >
        {item.label}
      </a>
    ))}
  </div>
);

const TopNavigation = () => {
  const [click, setClick] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleClick = () => setClick(!click);

  const dropdownItems = {
    events: [
      { label: "Cultural Festivals", link: "/upcoming" },
      { label: "KigaliUp", link: "/festivals" },
      { label: "Music Concerts", link: "/concerts" },
      { label: "Sports Events", link: "/exhibitions" },
      { label: "Food Festivals", link: "/art-shows" },
      { label: "Art Exhibitions", link: "/film-festivals" },
      { label: "Theatre & Comedy", link: "/concerts" },
      { label: "Networking Events", link: "/music-festivals" },
      { label: "Film FestivalsTheater Shows", link: "/theater-shows" },
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
      { label: "The Kandt House Museum of Natural History", link: "/transportation" },
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

  return (
    <nav className="w-full bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Top Navigation */}
        <div className="flex justify-between items-center py-2">
          <a href="/" className="flex-shrink-0">
            <img
              src="https://i.postimg.cc/RF3645kp/kigali-view-high-resolution-logo-removebg-preview.png"
              alt="Logo"
              className="h-24 ml-9"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto mr-9">
            <div className="flex space-x-4 mr-20 gap-8">
              <a href="/meeting-planners" className="hover:text-gray-300">
                Meeting Planners
              </a>
              <a href="/tour-planners" className="hover:text-gray-300">
                Tour & Reunion Planners
              </a>
              <a href="/partners" className="hover:text-gray-300">
                Partners
              </a>
              <a href="/blog" className="hover:text-gray-300">
                Blog
              </a>
            </div>

            <div className="flex items-center space-x-4">
              {/* Social Icons */}
              {[
                Facebook,
                Twitter,
                Instagram,
                Linkedin,
                Youtube,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} className="hover:text-gray-300" />
                </a>
              ))}
              <div className="flex items-center">
                <Heart size={20} />
                <span className="ml-1">(0)</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-4"
              >
                <Search size={40} />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white"
            onClick={handleClick}
          >
            {click ? <X size={32} /> : <Menu size={32} />}
          </Button>
        </div>

        {/* Main Navigation (Desktop) */}
        <div className="hidden lg:block">
          <div className="flex justify-between py-4 mr-9">
            <ul className="flex space-x-8 ml-auto">
              {Object.keys(dropdownItems).map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    href={`/${item}`}
                    className="hover:text-gray-300 px-3 py-2 text-lg font-semibold"
                  >
                    {item.toUpperCase().replace(/([a-z])([A-Z])/g, "$1 $2")}
                  </a>
                  <DropdownContent items={dropdownItems[item]} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          click ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-8">
            <img
              src="https://i.postimg.cc/RF3645kp/kigali-view-high-resolution-logo-removebg-preview.png"
              alt="Logo"
              className="h-20"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClick}
              className="text-white"
            >
              <X size={32} />
            </Button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto">
            {Object.entries(dropdownItems).map(([key, items]) => (
              <div key={key} className="mb-4">
                <a
                  href={`/${key}`}
                  className="block text-2xl text-white py-3 font-semibold"
                >
                  {key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}
                </a>
                <div className="ml-4">
                  {items.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="block text-lg text-gray-300 py-2 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Additional Mobile Links */}
            <div className="mt-8 border-t border-gray-700 pt-4">
              {[
                "Meeting Planners",
                "Tour & Reunion Planners",
                "Partners",
                "Blog",
              ].map((item, index) => (
                <a
                  key={index}
                  href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                  className="block text-xl text-white py-3"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Footer Icons */}
          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-6">
                {[
                  Facebook,
                  Twitter,
                  Instagram,
                  Linkedin,
                  Youtube,
                ].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white hover:text-gray-300"
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <Heart size={28} className="text-white" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setIsSearchOpen(true);
                    handleClick();
                  }}
                  className="text-white"
                >
                  <Search size={28} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black z-50 p-4">
          <div className="max-w-2xl mx-auto mt-20">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full text-2xl py-7 text-black bg-white/90"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-black hover:bg-black/90  hover:text-white"
                onClick={() => setIsSearchOpen(false)}
              >
                <X size={28} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNavigation;