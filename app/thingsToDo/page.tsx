import Link from "next/link";
import React from "react";

const HeroSection = () => (
  <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
    {/* Hero Image */}
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Kigali_night_life.jpg"
      alt="Columbus Blue Jackets Game"
      className="w-full h-full object-cover"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>
    {/* Hero Title */}
    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
      Things to Do in Kigali
    </h1>
  </div>
);

const AwardsBadges = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
      {/* Badges */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
          Traveler Choice Awards 2025
        </div>
        <div className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold">
          AFAR Where to Go 2026
        </div>
      </div>
      {/* Awards Text */}
      <p className="text-gray-600 text-center sm:text-left max-w-lg">
        Condé Nast Traveler&apos;s 2024 Readers&apos; Choice Awards Names Kigali a Top 10
        Best Big City in Africa
        <br />- and -<br />
        AFAR Names Kigali a Where to Go in 2025 Destination
      </p>
    </div>
  </div>
);

const QuickNav = () => (
  <div className="bg-gray-50 py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-gray-600">
        Jump to:{" "}
        {["Top Attractions & Events", "Adventure", "Sports", "Shopping"].map(
          (item, i) => (
            <React.Fragment key={item}>
              <Link
                href="/"
                className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                {item}
              </Link>
              {i < 3 && " | "}
            </React.Fragment>
          )
        )}
      </p>
    </div>
  </div>
);

const IntroText = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <p className="text-gray-600 text-center sm:text-left">
      Say &ldquo;yes&rdquo; to new things and new places in Kigali. With local fun like new{" "}
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
      >
        rooftop bars
      </Link>{" "}
      and restaurants, miles of trails, pro sports in every season,{" "}
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
      >
        top-rated family attractions
      </Link>
      , experiential activities and more, you&apos;ll never be short of fun things to
      do in Kigali, whether you&apos;re planning a date night or a family outing.
    </p>
  </div>
);

const ActivityCard = ({ image, title }: { image: string; title: string }) => (
  <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-lg shadow-lg group">
    {/* Activity Image */}
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
    {/* Activity Title */}
    <h3 className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-bold">
      {title}
    </h3>
  </div>
);

const AttractionsGrid = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ActivityCard
        image="https://static01.nyt.com/images/2018/12/23/travel/23kigali6/23kigali6-superJumbo.jpg?quality=75&auto=webp"
        title="Nightlife"
      />
      <ActivityCard
        image="https://www.newtimes.co.rw/uploads/imported_images/files/main/articles/2022/07/08/the-park-boasts-of-walkways-and-cycling-lanes-stretching-for-over-eight-kilometres.-courtesy.jpg"
        title="Nyandungu Park Conservatory"
      />
      <ActivityCard
        image="https://rdb.rw/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-17-at-13.41.39-1-768x1024.jpeg"
        title="Events to upTo time"
      />
      <ActivityCard
        image="https://www.newtimes.co.rw/thenewtimes/uploads/images/2024/11/01/thumbs/1200x700/63291.jpg"
        title="Movies TO showcase"
      />
      <ActivityCard
        image="https://rwanda.tortoisepath.com/wp-content/uploads/2024/04/Coconut-Kigali-Kigali-Rwanda-TortoisePathcom-5-jpeg.webp"
        title="Game Zones"
      />
      <ActivityCard
        image="https://rwanda.tortoisepath.com/wp-content/uploads/2024/04/Acacus-Park-Kigali-Rwanda-TortoisePathcom-jpeg.webp"
        title="Water Park"
      />
    </div>
  </div>
);

const TopAttractions = () => (
  <div className="bg-gray-50 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6">
        Top Attractions & Events
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Use Kigali View&apos;s{" "}
        <Link
          href="/"
          className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
        >
          experience trails
        </Link>{" "}
        to explore the city&apos;s coffee, distilleries, pizza and outdoor
        adventures, or head to family favorite attractions like the{" "}
        <Link
          href="/"
          className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
        >
          Kigali Zoo & Aquarium
        </Link>{" "}
        or{" "}
        <Link
          href="/"
          className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
        >
          Franklin Park Conservatory and Botanical Gardens
        </Link>
        .
      </p>
      <AttractionsGrid />
    </div>
  </div>
);

export default function page() {
  return (
    <div>
      <HeroSection />
      <AwardsBadges />
      <QuickNav />
      <IntroText />
      <TopAttractions />
      <h1>Things to do</h1>
    </div>
  );
}
