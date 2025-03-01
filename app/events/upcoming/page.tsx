"use client";

import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import styles from './page.module.css';
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, MapPin, Info, X } from "lucide-react";

const festivals = [
  {
    title: "Kwita Izina",
    description: "Gorilla Naming Ceremony in Volcanoes National Park",
    date: "September",
    location: "Volcanoes National Park",
    image: "/api/placeholder/600/400",
    fullDescription: "Kwita Izina is Rwanda's most internationally recognized cultural event, where newborn mountain gorillas are given names in a ceremony that celebrates conservation success. Started in 2005, this event has named over 350 baby gorillas, attracting global celebrities and conservation advocates. The week-long festivities include community projects, conservation exhibitions, and culminate in the naming ceremony featuring traditional Rwandan music and dance performances."
  },
  {
    title: "Hobe Rwanda Festival",
    description: "Showcasing local musicians, artists, and dancers",
    date: "December",
    location: "Kigali",
    image: "/api/placeholder/600/400",
    fullDescription: "Hobe Rwanda celebrates the rich artistic talent of Rwanda through music, art, and dance. This vibrant festival brings together Rwanda's most talented performers in a colorful showcase of contemporary and traditional arts. Visitors can enjoy live performances, art installations, craft markets, and workshops that highlight Rwanda's cultural renaissance and creative industries. The festival creates a platform for cultural exchange and artistic collaboration."
  },
  {
    title: "Kigali UP Music Festival",
    description: "Premier music festival with traditional and African genres",
    date: "February",
    location: "Kigali",
    image: "/api/placeholder/600/400",
    fullDescription: "Kigali UP has become Rwanda's most anticipated annual music event, bringing together musical traditions from across Africa. The two-day festival features performances from local and international artists across multiple stages. Beyond music, the festival includes food stalls serving traditional Rwandan cuisine, craft markets, and cultural workshops. Kigali UP celebrates the unifying power of music while showcasing Rwanda's growing importance in the African music scene."
  },
  {
    title: "Umuganura Festival",
    description: "Harvest Festival celebrating agricultural heritage",
    date: "August",
    location: "Nationwide",
    image: "/api/placeholder/600/400",
    fullDescription: "Umuganura, meaning 'First-Fruits Festival,' is one of Rwanda's most ancient cultural traditions, recently revived to celebrate the country's agricultural heritage. Historically, it was a royal ceremony to celebrate the first harvest of sorghum and millet. Today, it's a national holiday that honors agricultural achievements and Rwanda's cultural identity. The festival features traditional dance performances, agricultural exhibitions, and communal sharing of harvested foods. It emphasizes Rwanda's connection to the land and sustainable agricultural practices."
  },
  {
    title: "Rwanda Film Festival",
    description: "Showcasing Rwandan and international films (Hillywood)",
    date: "July",
    location: "Nationwide",
    image: "/api/placeholder/600/400",
    fullDescription: "Known as 'Hillywood' (a play on Hollywood, referring to Rwanda's hilly landscape), the Rwanda Film Festival has become East Africa's premier film event. The week-long festival screens local and international films across various venues including open-air community screenings in rural areas. It provides a platform for Rwandan filmmakers to showcase stories of reconciliation, hope, and cultural identity while fostering the development of Rwanda's emerging film industry. The festival includes workshops, masterclasses, and networking events for aspiring filmmakers."
  },
  {
    title: "Fespad",
    description: "Pan-African Dance Festival",
    date: "Biennial (August)",
    location: "Kigali",
    image: "/api/placeholder/600/400",
    fullDescription: "The Pan-African Dance Festival (FESPAD) is a biennial celebration that brings together dancers from across the African continent. Established in 1998, this week-long festival transforms Kigali into a vibrant display of Africa's diverse dance traditions. Performances range from traditional cultural dances to contemporary African choreography. The festival includes competitions, workshops, and collaborative performances that highlight the rich cultural heritage of African dance forms while promoting cultural exchange and unity among African nations."
  },
  {
    title: "Assumption Day",
    description: "Religious celebration featuring traditional feasts and dancing",
    date: "August 15",
    location: "Nationwide (especially Kibeho)",
    image: "/api/placeholder/600/400",
    fullDescription: "Assumption Day is a significant religious festival in Rwanda, particularly celebrated in Kibeho, where the Virgin Mary reportedly appeared in 1981. Thousands of pilgrims gather for special masses, processions, and vigils. The celebration blends Catholic traditions with Rwandan cultural elements, featuring traditional music, dance, and festive meals. The Kibeho shrine has become an important religious site, attracting visitors from across Rwanda and neighboring countries who participate in prayers and commemorative events."
  },
  {
    title: "Umuganda Festival",
    description: "Community service celebration with cultural performances",
    date: "Last Saturday of each month",
    location: "Nationwide",
    image: "/api/placeholder/600/400",
    fullDescription: "While Umuganda is a monthly community service initiative where Rwandans work together on public projects, several times a year it's followed by cultural festivities. These special Umuganda events combine community service with celebrations featuring traditional Intore dancers, drummers, and community feasts. The festival aspect of Umuganda highlights Rwanda's community spirit and cultural values of unity and cooperation. Visitors can participate in both the service projects and the cultural celebrations that follow."
  },
  {
    title: "Kigali International Film Festival (KIFF)",
    description: "International film festival showcasing diverse cinema",
    date: "October",
    location: "Kigali",
    image: "/api/placeholder/600/400",
    fullDescription: "The Kigali International Film Festival (KIFF) is an annual event that brings together filmmakers, film enthusiasts, and film aficionados from around the world. The festival showcases diverse cinema, including films from various genres, countries, and cultures. KIFF encourages viewers to experience the beauty and innovation of Rwandan cinema while also fostering cultural exchange and collaboration among filmmakers from around the globe."
  },
];

const CulturalFestivals = () => {
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Trigger card animation after component mounts
    setTimeout(() => setAnimateCards(true), 300);
  }, []);

  interface Festival {
    title: string;
    description: string;
    date: string;
    location: string;
    image: string;
    fullDescription: string;
  }

  const openModal = (festival: Festival): void => {
    setSelectedFestival(festival);
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setSelectedFestival(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4 text-slate-800 opacity-0 animate-fade-in-down">
            Rwandan Cultural Festivals
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto opacity-0 animate-fade-in-up">
            Discover the vibrant cultural celebrations that showcase Rwanda&apos;s rich heritage, 
            traditional arts, and community spirit throughout the year
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {festivals.map((festival, index) => (
            <Card
              key={index}
              className={`${styles.card} ${
                animateCards ? styles.cardVisible : styles.cardOpacity
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className={styles.imageContainer}>
                <div 
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${festival.image})`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-2xl font-bold p-4 text-white">
                      {festival.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-600 mb-4">{festival.description}</p>
                <div className="flex justify-between items-center text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{festival.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{festival.location}</span>
                  </div>
                </div>
                <Button 
                  className="w-full mt-2 bg-[#00A651] hover:bg-[#008F45] text-white group transition-all"
                  onClick={() => openModal(festival)}
                >
                  <span>Learn More</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Tourism Impact Section */}
        <div className="mt-20 p-8 bg-white rounded-xl shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Cultural Tourism in Rwanda</h2>
          <p className="text-lg text-slate-600 mb-4">
            Rwanda&apos;s cultural festivals play a vital role in the country&apos;s tourism strategy, attracting visitors 
            from around the world while preserving and celebrating Rwandan heritage. These festivals offer authentic 
            experiences that showcase Rwanda&apos;s remarkable cultural resilience and creative expression.
          </p>
          <p className="text-lg text-slate-600">
            Beyond the wildlife and natural attractions, these cultural celebrations provide deeper insights into 
            Rwanda&apos;s identity, bringing economic benefits to local communities and fostering cultural exchange between 
            visitors and residents. Each festival represents an opportunity to experience the warmth, creativity, and 
            hospitality that define Rwanda today.
          </p>
        </div>
      </div>

      {/* Festival Detail Modal */}
      {selectedFestival && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
          <div className="absolute inset-0 bg-black/70" onClick={closeModal}></div>
          <div className={`relative bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto transform ${isVisible ? 'scale-100' : 'scale-95'} transition-transform duration-300`}>
            <div className={styles.modalImage}>
              <div 
                className={styles.modalImageBackground}
                style={{ backgroundImage: `url(${selectedFestival.image})` }}
              ></div>
              <div className={styles.modalGradient}>
                <h2 className="text-3xl font-bold text-white">{selectedFestival.title}</h2>
                <div className="flex gap-4 mt-2">
                  <div className="flex items-center gap-1 text-white/90">
                    <Calendar size={16} />
                    <span>{selectedFestival.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/90">
                    <MapPin size={16} />
                    <span>{selectedFestival.location}</span>
                  </div>
                </div>
              </div>
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                onClick={closeModal}
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                {selectedFestival.fullDescription}
              </p>
              <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
                <div className="flex items-start gap-3">
                  <Info className="text-emerald-600 mt-1 flex-shrink-0" />
                  <p className="text-emerald-800">
                    Visitors interested in attending this festival should book accommodations in advance and check the official 
                    Rwanda Tourism website for the most current dates and program details.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <Button 
                  className="bg-[#00A651] hover:bg-[#008F45] text-white"
                  onClick={closeModal}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 1s ease forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default CulturalFestivals;