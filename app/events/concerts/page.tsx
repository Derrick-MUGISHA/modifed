// app/events/page.tsx
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
// Import the CheckIcon from react-icons
import { FiCheck as CheckIcon } from "react-icons/fi"; 

export default function KigaliEvents() {
    // ... previous events array ...
  
    const featuredArtists = [
      {
        name: "John Legend",
        role: "Headline Artist",
        bio: "12-time Grammy Award winner known for hits like 'All of Me' and 'Ordinary People'. His Move Afrika tour aims to promote cultural exchange across the continent.",
        image: "/images/john-legend-bio.jpg"
      },
      {
        name: "Inyamibwa Cultural Troupe",
        role: "Traditional Performers",
        bio: "Rwanda's premier cultural ensemble preserving Intore warrior dance and traditional musical forms through contemporary interpretations.",
        image: "/images/inyamibwa-troupe.jpg"
      }
    ];
  
    const ticketTypes = [
      {
        name: "VIP Experience",
        price: "250,000 RWF",
        includes: ["Front row seats", "Meet & greet", "Exclusive merchandise", "VIP lounge access"]
      },
      {
        name: "General Admission",
        price: "120,000 RWF",
        includes: ["Standard seating", "Event program", "Food & drink vendors access"]
      }
    ];
  
    const sponsors = [
      "/logos/rwanda-air.png",
      "/logos/mtn-rwanda.png",
      "/logos/inzozi-nziza.png",
      "/logos/kigali-city.png"
    ];
  
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Previous Hero Section */}
  
        {/* Featured Artists */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Featured Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArtists.map((artist, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{artist.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{artist.role}</p>
                    <p className="text-gray-600">{artist.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
  
        {/* Event Schedule Tabs */}
        <section className="container mx-auto px-4 py-16">
          <Tabs defaultValue="february">
            <TabsList className="grid grid-cols-3 w-full max-w-2xl mb-8">
              <TabsTrigger value="february">February 2025</TabsTrigger>
              <TabsTrigger value="march">March 2025</TabsTrigger>
              <TabsTrigger value="upcoming">All Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="february">
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg shadow">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">21</div>
                      <div className="text-sm">FEB</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Move Afrika Tour</h3>
                      <p className="text-gray-600">BK Arena | 7PM - 11PM</p>
                    </div>
                    <Button className="ml-auto">Remind Me</Button>
                  </div>
                </div>
                {/* Add other February events */}
              </div>
            </TabsContent>
          </Tabs>
        </section>
  
        {/* Ticket Pricing */}
        <section className="bg-green-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Ticket Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ticketTypes.map((ticket, index) => (
                <Card key={index} className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{ticket.name}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4">
                    {ticket.price}
                  </div>
                  <Separator className="mb-4" />
                  <ul className="space-y-2 text-left">
                    {ticket.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckIcon className="text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Purchase Now</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
  
        {/* Sponsors Carousel */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Official Partners</h2>
          <Carousel>
            <CarouselContent>
              {sponsors.map((logo, index) => (
                <CarouselItem key={index} className="basis-1/3 md:basis-1/4">
                  <div className="relative h-32">
                    <Image
                      src={logo}
                      alt="Sponsor"
                      fill
                      className="object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
  
        {/* Travel Information */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Plan Your Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">🏨 Accommodation</h3>
              <p className="mb-4">Recommended hotels near BK Arena:</p>
              <ul className="space-y-2">
                <li>Kigali Marriott Hotel - 1.2km</li>
                <li>Radisson Blu Hotel - 0.8km</li>
                <li>Ubumwe Grande Hotel - 2.1km</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">🚌 Transportation</h3>
              <p>Venue access options:</p>
              <ul className="space-y-2 mt-2">
                <li>Free shuttle buses from city center</li>
                <li>Secure parking available</li>
                <li>Taxi pick-up zones</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">ℹ️ Visitor Info</h3>
              <Accordion type="single" collapsible>
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
              </Accordion>
            </Card>
          </div>
        </section>
  
        {/* News Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="relative h-48 mb-4">
                  <Image
                    src="/images/tour-rehearsal.jpg"
                    alt="Tour Preparation"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Tour Preparation Underway</h3>
                <p className="text-gray-600">
                  John Legend arrives in Kigali early for cultural immersion and 
                  tour preparations. Includes collaboration with local artists.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="relative h-48 mb-4">
                  <Image
                    src="/images/fintech-forum.jpg"
                    alt="FinTech Forum"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">FinTech Innovation Awards</h3>
                <p className="text-gray-600">
                  New startup competition announced with $1M prize pool for 
                  African financial inclusion solutions.
                </p>
              </Card>
            </div>
          </div>
        </section>
  
        {/* Newsletter */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe for event announcements, ticket releases, and exclusive offers
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-lg border"
              />
              <Button className="bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }