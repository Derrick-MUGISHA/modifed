"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Motion, MapPin, Calendar, Clock, ExternalLink, Star, Heart, Info, Compass } from "lucide-react";

const attractions = [
  {
    id: 1,
    title: "Kigali Genocide Memorial",
    description: "A poignant memorial honoring the victims of the 1994 Rwandan Genocide.",
    longDescription: "The Kigali Genocide Memorial commemorates the 1994 Rwandan genocide against the Tutsi. Through education and peace-building, the memorial serves as a place of remembrance and learning. Visitors can explore three permanent exhibitions, including a children's memorial, and pay respects at the Gardens of Reflection. Audio guides are available in multiple languages to provide context for this powerful and moving experience.",
    category: "History",
    image: "https://lh5.googleusercontent.com/p/AF1QipOazh2U3IsXWx2KCh_yfkEg3ZtN3LCPz5n7yh_R=w540-h312-n-k-no",
    visitDuration: "2-3 hours",
    location: "KG 14 Ave, Kigali",
    openingHours: "8:00 AM - 5:00 PM, Daily",
    entranceFee: "Free (donations appreciated)",
    tips: "Guided tours available, photography restrictions in some areas",
    rating: 4.8,
    popular: true
  },
  {
    id: 2,
    title: "Inema Arts Centre",
    description: "Vibrant hub for contemporary African art showcasing local talent.",
    longDescription: "Founded by brothers Emmanuel and Innocent Nkuranga, Inema Arts Centre has become one of Rwanda's most prominent creative spaces. The gallery showcases works from emerging and established Rwandan artists, with a focus on contemporary paintings and mixed media. Regular workshops, cultural performances, and artist talks make this a dynamic cultural hub. The centre also runs community outreach programs to support underprivileged youth through art education.",
    category: "Art",
    image: "https://lh5.googleusercontent.com/p/AF1QipN5Yc0-56AzLy1huT8rm-cRDjifQiNBAfOF9EBB=w675-h390-n-k-no",
    visitDuration: "1-2 hours",
    location: "KG 563 St, Kacyiru",
    openingHours: "9:00 AM - 5:00 PM, Closed Sundays",
    entranceFee: "Free",
    tips: "Artists often present to discuss their work, Thursday evenings feature live music",
    rating: 4.6,
    popular: true
  },
  {
    id: 3,
    title: "Akagera National Park",
    description: "Wildlife-rich savannah park with safari opportunities just hours from Kigali.",
    longDescription: "Akagera National Park offers a classic African safari experience within driving distance of Kigali. The park features a diverse ecosystem of lakes, marshlands, and savannah that supports wildlife including elephants, hippos, crocodiles, and recently reintroduced lions and rhinos. Conservation efforts have revitalized the park after near devastation during Rwanda's civil war. Game drives, boat safaris on Lake Ihema, and bird watching are popular activities in this scenic protected area.",
    category: "Nature",
    image: "https://www.bwindiforestgorillatrekking.com/wp-content/uploads/2023/11/Rwanda-Game-Tours.jpg",
    visitDuration: "Full day or overnight",
    location: "Eastern Province (2.5 hour drive from Kigali)",
    openingHours: "6:00 AM - 6:00 PM, Daily",
    entranceFee: "$100 for international visitors",
    tips: "Book guided safari tours in advance, best visited during dry season (June-September)",
    rating: 4.9,
    popular: true
  },
  {
    id: 4,
    title: "Volcanoes National Park",
    description: "Famous for mountain gorilla trekking experiences in the Virunga Mountains.",
    longDescription: "Volcanoes National Park, part of the greater Virunga Conservation Area, is home to the endangered mountain gorilla and golden monkeys. Made famous by the work of Dian Fossey, the park offers the unforgettable experience of trekking to observe gorilla families in their natural habitat. Beyond gorilla trekking, visitors can climb volcanoes, visit Fossey's research camp, or trek to see golden monkeys. The park's misty forests and dramatic mountain landscapes create a mystical atmosphere for these once-in-a-lifetime wildlife encounters.",
    category: "Adventure",
    image: "https://www.theultimatetravelcompany.co.uk/wp-content/uploads/2023/12/AdobeStock_578407019-2000x1333.jpeg",
    visitDuration: "Full day (gorilla permits must be booked months in advance)",
    location: "Northern Province (2 hour drive from Kigali)",
    openingHours: "Treks begin at 7:00 AM",
    entranceFee: "$1,500 for gorilla trekking permit",
    tips: "Moderate fitness required for trekking, bring rain gear regardless of season",
    rating: 5.0,
    popular: true
  },
  {
    id: 5,
    title: "Niyo Art Gallery",
    description: "Promoting peace through art and supporting underprivileged children.",
    longDescription: "Niyo Art Gallery combines artistic expression with social mission. Founded by artist Niyonsenga Pacifique, who was once a street child himself, the gallery showcases vibrant paintings and sculptures while supporting the Niyo Cultural Center, which provides arts education to orphaned and vulnerable children. Visitors can purchase unique artworks directly from artists, with proceeds supporting both the artists and the center's educational programs. Regular traditional dance performances add to the cultural experience.",
    category: "Art",
    image: "https://www.theultimatetravelcompany.co.uk/wp-content/uploads/2023/12/AdobeStock_578407019-2000x1333.jpeg",
    visitDuration: "1-2 hours",
    location: "41 KK 31 Ave, Kigali",
    openingHours: "9:00 AM - 6:00 PM, Monday-Saturday",
    entranceFee: "Free",
    tips: "Traditional dance performances on weekends, call ahead to arrange",
    rating: 4.7,
    popular: false
  },
  {
    id: 6,
    title: "Kimironko Market",
    description: "Vibrant local market offering an authentic shopping experience.",
    longDescription: "Kimironko Market is Kigali's largest and most colorful market, offering an immersive experience of everyday Rwandan life. The market features a vast array of fresh produce, traditional fabrics, handcrafted items, and household goods. Particularly known for its textile section, visitors can find beautiful kitenge fabrics which local tailors can transform into custom clothing within hours. The bustling atmosphere and friendly vendors make this an excellent place to practice bargaining skills and engage with local culture.",
    category: "Culture",
    image: "https://www.theultimatetravelcompany.co.uk/wp-content/uploads/2023/12/AdobeStock_578407019-2000x1333.jpeg",
    visitDuration: "1-2 hours",
    location: "KG 28 Ave, Kimironko",
    openingHours: "7:00 AM - 7:00 PM, Daily",
    entranceFee: "Free",
    tips: "Bring small bills for purchases, mornings are less crowded",
    rating: 4.5,
    popular: false
  },
  {
    id: 7,
    title: "Kigali Convention Centre",
    description: "Iconic dome-shaped building illuminated with vibrant colors at night.",
    longDescription: "The Kigali Convention Centre is an architectural landmark that has become a symbol of modern Rwanda. Its distinctive dome design is inspired by traditional Rwandan royal palaces. At night, the dome lights up with changing colors, creating a spectacular display visible across the city. The complex includes the five-star Radisson Blu Hotel, multiple restaurants, and state-of-the-art conference facilities. While primarily a venue for international events, the exterior and public areas are worth visiting for photography and to experience Rwanda's contemporary architectural achievements.",
    category: "Architecture",
    image: "https://www.theultimatetravelcompany.co.uk/wp-content/uploads/2023/12/AdobeStock_578407019-2000x1333.jpeg",
    visitDuration: "30 minutes (exterior viewing)",
    location: "KG 2 Roundabout, Kimihurura",
    openingHours: "Exterior viewable anytime, best at night",
    entranceFee: "Free",
    tips: "Most impressive after dark when illuminated, restaurant reservation required to dine inside",
    rating: 4.6,
    popular: false
  },
  {
    id: 8,
    title: "Nyamirambo Women's Center",
    description: "Community initiative offering cultural tours and handcrafted products.",
    longDescription: "The Nyamirambo Women's Center is a community-based organization empowering local women through economic opportunities and education. Visitors can join the popular 'Nyamirambo Walking Tour' to experience daily life in one of Kigali's most vibrant neighborhoods, including visits to local homes, businesses, and mosques. The center's shop sells beautiful handmade products including clothing, bags, and home decor items made by the women's cooperative. Shopping here directly supports the center's educational programs and provides sustainable income for local women.",
    category: "Culture",
    image: "https://www.theultimatetravelcompany.co.uk/wp-content/uploads/2023/12/AdobeStock_578407019-2000x1333.jpeg",
    visitDuration: "2-3 hours for walking tour, 30 minutes for shop",
    location: "KN 7 Ave, Nyamirambo",
    openingHours: "9:00 AM - 5:00 PM, Monday-Saturday",
    entranceFee: "$20 for guided walking tour",
    tips: "Book walking tours in advance, cooking classes also available",
    rating: 4.9,
    popular: false
  }
];

export default function KigaliTourism() {
  const [activeTab, setActiveTab] = useState("all");
  const [favorites, setFavorites] = useState([]);
  interface Attraction {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    category: string;
    image: string;
    visitDuration: string;
    location: string;
    openingHours: string;
    entranceFee: string;
    tips: string;
    rating: number;
    popular: boolean;
  }
  
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Categories for filtering
  const categories = ["All", "History", "Art", "Nature", "Adventure", "Culture", "Architecture"];

  useEffect(() => {
    // Animation delay
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  interface FavoriteId {
    id: number;
  }

  const handleFavoriteToggle = (id: number): void => {
      if (favorites.includes(id)) {
        setFavorites(favorites.filter((favId: number) => favId !== id));
      } else {
        setFavorites([...favorites, id]);
      }
  };

  const openModal = (attraction) => {
    setSelectedAttraction(attraction);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  const filteredAttractions = activeTab === "all" 
    ? attractions 
    : attractions.filter(attraction => 
        attraction.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-emerald-700 to-emerald-900 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/api/placeholder/1920/1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <h1 className={`text-5xl font-bold text-white mb-4 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Explore Kigali, Rwanda
          </h1>
          <p className={`text-xl text-white max-w-2xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Discover the vibrant culture, rich history, and natural wonders of Rwanda's thriving capital city and its surrounding attractions
          </p>
          <div className={`mt-8 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <Button className="bg-white hover:bg-gray-100 text-emerald-800 font-semibold px-6 py-3">
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation/Filter Bar */}
      <div className="sticky top-0 bg-white shadow-md z-10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Kigali Attractions</h2>
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
              <TabsList className="bg-gray-100 p-1 overflow-x-auto flex flex-nowrap max-w-full">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.toLowerCase()} 
                    value={category.toLowerCase()}
                    className="px-4 py-2 whitespace-nowrap"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAttractions.map((attraction, index) => (
            <Card 
              key={attraction.id} 
              className={`overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              <div className="relative">
                <div className="relative h-56 w-full overflow-hidden">
                  <div
                    className="h-full w-full transition-transform duration-700 hover:scale-110"
                    style={{
                      backgroundImage: `url(${attraction.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                </div>
                <div className="absolute top-3 right-3 flex space-x-2">
                  <Badge 
                    variant="secondary" 
                    className="bg-white text-gray-800 border border-gray-200 shadow-sm font-medium"
                  >
                    {attraction.category}
                  </Badge>
                  {attraction.popular && (
                    <Badge className="bg-amber-500 text-white font-medium">
                      Popular
                    </Badge>
                  )}
                </div>
                <button 
                  className={`absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                    favorites.includes(attraction.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/80 text-gray-700 hover:bg-white'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFavoriteToggle(attraction.id);
                  }}
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(attraction.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-amber-500 fill-current mr-1" />
                    <span className="font-medium">{attraction.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{attraction.visitDuration}</span>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{attraction.title}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {attraction.description}
                </CardDescription>
                <div className="flex items-start text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{attraction.location}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button 
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => openModal(attraction)}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Travel Tips Section */}
        <div className={`mt-16 bg-white rounded-lg shadow-md p-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-start space-x-4">
            <Info className="w-12 h-12 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Kigali Travel Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Getting Around</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <Compass className="w-4 h-4 mr-2 mt-1 text-emerald-600" />
                      <span>Kigali is known as one of Africa&apos;s cleanest and safest cities</span>
                    </li>
                    <li className="flex items-start">
                      <Compass className="w-4 h-4 mr-2 mt-1 text-emerald-600" />
                      <span>Motorcycle taxis (moto) are affordable and quick for short distances</span>
                    </li>
                    <li className="flex items-start">
                      <Compass className="w-4 h-4 mr-2 mt-1 text-emerald-600" />
                      <span>For longer trips, consider hiring a driver or using ride-hailing apps</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Best Time to Visit</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <Calendar className="w-4 h-4 mr-2 mt-1 text-emerald-600" />
                      <span>June to September (dry season) is ideal for gorilla trekking</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="w-4 h-4 mr-2 mt-1 text-emerald-600" />
                      <span>December to February offers sunny days with occasional showers</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="w-4 h-4 mr-2 mt-1 text-emerald-600" />
                      <span>Cultural festivals occur year-round - check local calendars</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attraction Detail Modal */}
      {isModalOpen && selectedAttraction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          <div 
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={closeModal}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div 
              className="h-64 lg:h-80 w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${selectedAttraction.image})`,
              }}
            >
              <div className="h-full w-full bg-gradient-to-t from-black/80 via-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white">
                      {selectedAttraction.category}
                    </Badge>
                    <Badge className="bg-amber-500/90 backdrop-blur-sm text-white flex items-center">
                      <Star className="w-3.5 h-3.5 mr-1 fill-current" />
                      {selectedAttraction.rating}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold">{selectedAttraction.title}</h2>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                <div className="flex items-center text-gray-700">
                  <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                  <span>{selectedAttraction.visitDuration}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                  <span>{selectedAttraction.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-2 text-emerald-600" />
                  <span>{selectedAttraction.openingHours}</span>
                </div>
              </div>
              
              <div className="prose max-w-none mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">{selectedAttraction.longDescription}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Visitor Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <span className="font-medium text-gray-700 mr-2">Entrance Fee:</span>
                    <span className="text-gray-600">{selectedAttraction.entranceFee}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-medium text-gray-700 mr-2">Visitor Tips:</span>
                    <span className="text-gray-600">{selectedAttraction.tips}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  onClick={closeModal}
                >
                  Close
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <section className="bg-green-100 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Discover the Heart of Rwanda
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Explore the Land of a Thousand Hills - where vibrant culture meets breathtaking landscapes 
        and remarkable wildlife conservation efforts
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {/* National Highlights */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-green-800">Natural Wonders</h3>
        <div className="space-y-2 text-gray-600">
          <p className="flex items-center">
            <span className="mr-2">🌋</span>Volcanoes National Park
          </p>
          <p className="flex items-center">
            <span className="mr-2">🌿</span>Nyungwe Forest National Park
          </p>
          <p className="flex items-center">
            <span className="mr-2">🦁</span>Akagera National Park
          </p>
        </div>
      </div>

      {/* Cultural Insights */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-green-800">Cultural Heritage</h3>
        <div className="space-y-2 text-gray-600">
          <p>🎭 Traditional Intore Dance</p>
          <p>🏺 Inzozi Nziza Pottery</p>
          <p>☕ Coffee Cultural Experience</p>
        </div>
      </div>

      {/* National Achievements */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-green-800">Rwanda Today</h3>
        <div className="space-y-2 text-gray-600">
          <p>🌍 Greenest Country in Africa</p>
          <p>🚀 Tech Innovation Hub</p>
          <p>🤝 Unity & Reconciliation</p>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <Button className="bg-green-600 hover:bg-green-700 text-white">
        Explore Rwanda&apos;s Wonders
      </Button>
    </div>

    <div className="border-t border-green-200 mt-12 pt-8 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
        <div>🇷🇼 Visit Rwanda</div>
        <div>📅 Festivals & Events</div>
        <div>📜 History & Culture</div>
        <div>📷 Photo Gallery</div>
      </div>
      <p className="mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Discover Rwanda - Land of a Thousand Hills
      </p>
    </div>
  </div>
</section>
    </div>
  );
}