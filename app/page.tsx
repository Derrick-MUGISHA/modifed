
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { FaMapMarkerAlt } from 'react-icons/fa';


const ImageCarousel = () => {
  const images = [
    {
      src: 'https://static.vecteezy.com/system/resources/previews/034/899/406/non_2x/rwanda-heroes-day-illustration-on-february-1-with-rwandan-flag-and-soldier-memorial-who-struggled-in-national-holiday-cartoon-background-vector.jpg',
      text: 'A Land of Heroes, Resilience, and Rich Culture.'
    },
    {
      src: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/experience-kigali-rwanda-umulinga-dbb2e0c2fe1ca0f3860d92e3ddfe41c2.jpg',
      text: 'Experience Kigali from Every Angle'
    },
    {
      src: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/0a/60/3c.jpg',
      text: 'Where Kigali Comes to Life'
    },
    {
      src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/1b/74/55/caption.jpg?w=1000&h=-1&s=1',
      text: 'Your Ultimate Kigali View'
    },
    {
      src: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/19/08/99.jpg',
      text: 'Discover Kigali s Hidden Gems'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Container */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={`Carousel ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-4xl text-white font-bold text-center max-w-4xl px-4 md:text-6xl">
                {image.text}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
const PromotionalSlider = () => {
  const slides = [
    {
      title: "EXPLORE OUR MARKETPLACE",
      subtext: "TRAILS AND ATTRACTION TICKETS",
      textColorClass: "text-cyan-400",
      hoverColorClass: "group-hover:text-cyan-500",
      image: "https://fusionestatesafrica.com/wp-content/uploads/2021/10/Kigali-Heights-for-website-1.jpeg",
      href: "#" // Replace with actual URL
    },
    {
      title: "BOOK A TWO-NIGHT STAY",
      subtext: "FREE ATTRACTIONS TICKETS",
      textColorClass: "text-green-400",
      hoverColorClass: "group-hover:text-green-500",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/1c/51/de/hotel-exterior.jpg?w=1100&h=-1&s=1",
      href: "#" // Replace with actual URL
    },
    {
      title: "LEARN ABOUT CBUS REWARDS",
      subtext: "DOWNLOAD AND SAVE!",
      textColorClass: "text-yellow-400",
      hoverColorClass: "group-hover:text-yellow-500",
      image: "https://kinyarwanda.com/wp-content/uploads/2021/12/MG_3648-Edit-1-1024x683.jpg",
      href: "#" // Replace with actual URL
    },
  ];

  return (
    <div className="w-full overflow-hidden px-4 mt-4">
      <div className="flex flex-row gap-2 flex-wrap max-md:flex-col max-md:gap-6">
        {slides.map((slide, index) => (
          <Link
            key={index}
            href={slide.href}
            className="group relative cursor-pointer transition-all duration-300 rounded-lg overflow-hidden flex-1 min-w-full md:min-w-[380px] hover:flex-[1.5]"
          >
            <div className="relative h-56 md:h-72">
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg"
              />
              
              <div className="absolute inset-0 bg-black/50 transition-all duration-300 rounded-lg group-hover:bg-black/70" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <p className={`text-sm font-medium tracking-wide mb-2 ${slide.textColorClass} ${slide.hoverColorClass}`}>
                    {slide.subtext}
                  </p>
                  <h2 className={`text-2xl font-extrabold leading-tight ${slide.textColorClass} ${slide.hoverColorClass}`}>
                    {slide.title}
                  </h2>
                </div>
                
                <div className={`opacity-0 transition-opacity duration-300 text-3xl ${slide.textColorClass} group-hover:opacity-100`}>
                  →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
const ColumbusSection = () => {
  return (
    <div className="columbus-section bg-gray-50 py-10 px-6 md:px-12 text-center hover:bg-gray-100 hover:shadow-lg">
      <h2 className="columbus-title text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Yes, KIGALI
      </h2>
      <p className="columbus-paragraph text-lg md:text-xl text-gray-600 mb-6 mx-auto max-w-2xl">
        You may have your opinions about Kigali — or maybe you don't. We understand. While the world has been busy not thinking about us, we've been quietly stacking up new accolades, accomplishments, and experiences. Year after year, list after list, people are starting to see the greatness we've always known was here. Now is the time we stop keeping it to ourselves.
      </p>
      <p className="columbus-description text-lg md:text-xl text-gray-600 mb-6 mx-auto max-w-2xl">
        A city reborn from its past, a beacon of innovation and progress in Africa, a culinary scene bursting with flavor, art and culture that tell stories of resilience and hope, and so much more.
      </p>
      <p className="columbus-cta text-lg md:text-xl font-bold text-orange-500 uppercase mt-8">
        Can all of this exist in one city? Yes, Kigali.
      </p>
    </div>
  );
};

const ColumbusAwardsSection = () => {
  return (
    <div className="columbus-awards-section py-10 px-6 bg-gray-50">
      <div className="columbus-content flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left side: Logo and Text */}
        <div className="columbus-left flex flex-col items-center md:items-start md:w-1/2 space-y-6">
          <div className="columbus-logo">
            <img
              src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png"
              alt="Columbus Logo"
              className="logo-img w-32 md:w-48"
            />
          </div>
          <div className="columbus-awards-text text-center md:text-left text-gray-700 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            <p>
              Kigali has been celebrated as one of Africa’s Cleanest Cities, a Top Destination for Innovation and Sustainability, and one of the Friendliest and Safest Cities in the World by global travel experts and organizations like Condé Nast Traveler and the World Travel Awards.
              <br />
              <br />
              With its vibrant culture, breathtaking scenery, and a culinary scene that’s gaining international acclaim, Kigali is not just a city—it’s an experience. From its lush green hills to its thriving arts and tech hubs, Kigali is a city that continues to inspire and amaze.
            </p>
          </div>
        </div>

        {/* Right side: Video */}
        <div className="columbus-video w-full md:w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/v1SIZoSfoIc?autoplay=1&mute=1&si=rllBckTDhm9Ke4aT"
            title="Columbus Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
const ColumbusNewsSection = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  const newsCards = [
    {
      "title": "Nyandungu Eco-Tourism Park",
      "description": "A serene eco-park in Kigali offering walking trails, birdwatching, and a peaceful escape into nature.",
      "imageUrl": "https://www.ktpress.rw/wp-content/uploads/2022/07/Nyandungu-16.jpg",
      "link": "./src/pages/kigaliNewsCard/NewCard.js"
    },
    {
      "title": "Kigali Genocide Memorial",
      "description": "A poignant memorial honoring the victims of the 1994 Genocide against the Tutsi, offering historical insights and reflection.",
      "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipPxaeXMZnCeFCOxf3MkrGA8IlfgZKAP5TEoMzYq=w540-h312-n-k-no",
      "link": "https://www.kgm.rw/"
    },
    {
      "title": "Volcanoes National Park",
      "description": "Home to the endangered mountain gorillas, this park offers unforgettable gorilla trekking experiences in the Virunga Mountains.",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/48/Volcanoes_National_Park_Banner_Image.gif",
      "link": "https://www.visitrwanda.com/destinations/volcanoes-national-park/"
    },
    {
      "title": "Lake Kivu",
      "description": "A stunning freshwater lake perfect for swimming, kayaking, and relaxing by the shores in towns like Gisenyi and Kibuye.",
      "imageUrl": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQrcyFCschjDRlznkFCktUOz7RyZNtcBVDBIWE5zlTBBHWj5otFsOkH1ux5nTRTJ4qfXXDOGSNPFF5dcueIW-HDY0kcvu7XVRN0RQZ5qw",
      "link": "https://www.visitrwanda.com/destinations/lake-kivu/"
    },
    {
      "title": "Akagera National Park",
      "description": "Rwanda's only savannah park, home to lions, elephants, giraffes, and a variety of wildlife, ideal for safari adventures.",
      "imageUrl": "",
      "link": "https://www.africanparks.org/the-parks/akagera"
    },
    {
      "title": "Inema Arts Center",
      "description": "A vibrant arts center in Kigali showcasing contemporary Rwandan art, workshops, and cultural performances.",
      "imageUrl": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ9O5gqi09FI3awcOu1Gemeued5d6qtSJCHkPfeLVlBnO44DGM1aNd9Xxio5g7aKR7yC_aiJ8__Fp1saKc1CscCZWmRDoa6EAt-aqBtX-c",
      "link": "https://www.inemaarts.com/"
    },
    {
      "title": "King’s Palace Museum",
      "description": "Located in Nyanza, this museum offers a glimpse into Rwanda's royal history and traditional architecture.",
      "imageUrl":"",
      "link": "https://www.museum.gov.rw/king-palace-museum"
    },
    {
      "title": "Nyungwe Forest National Park",
      "description": "A biodiversity hotspot with canopy walks, chimpanzee tracking, and over 1,000 plant species in one of Africa's oldest rainforests.",
      "imageUrl": "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSllrI7rEVRm04vYwhjsifKZ03o-DWeMS9Mg_juhkC-3GHe0syIob7_MIyL8Qoq9HE5BIMpsDa_VqnlLs5N3sDBx_miBALpXLgughKOW0Q",
      "link": "https://www.visitrwanda.com/destinations/nyungwe-national-park/"
    },
    {
      "title": "Rwanda Art Museum",
      "description": "Housed in the former presidential palace, this museum showcases Rwandan art and cultural heritage.",
      "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipMHK9yQkCYyloMyu1C4VvVEm1v7VX4w1xEubbnH=w675-h390-n-k-no",
      "link": "https://www.museum.gov.rw/rwanda-art-museum"
    },
    {
      "title": "Mount Karisimbi",
      "description": "A challenging trek to Rwanda's highest peak, offering breathtaking views and a chance to explore the Virunga Mountains.",
      "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipNOIGEirHO9T5_31uVlVB1MFF7csPln67eKA3C6=w675-h390-n-k-no",
      "link": "https://www.visitrwanda.com/destinations/volcanoes-national-park/"
    },
    {
      "title": "Gishwati-Mukura National Park",
      "description": "A newly established park with lush forests, waterfalls, and opportunities for hiking and primate tracking.",
      "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipMmpx3g9u0fAkAOsKqBTQj7L1xAhWFOkKLeaz7-=w675-h390-n-k-no",
      "link": "https://www.visitrwanda.com/destinations/gishwati-mukura-national-park/"
    },
    {
      "title": "Kigali Heights",
      "description": "A modern shopping and entertainment hub in Kigali, offering restaurants, cafes, and a cinema.",
      "imageUrl": "https://igihe.com/local/cache-vignettes/L800xH534/dsc_9449-2-94b30-fe6ee.jpg?1728928934",
      "link": "https://kigaliheights.com/"
    },
    {
      "title": "Rusumo Falls",
      "description": "A stunning waterfall on the Rwanda-Tanzania border, perfect for nature lovers and photographers.",
      "imageUrl": "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTFxSEd06JLJmwdrlMJrose81FNywM4D8-W8YGdeZShJpzA9pcblgWYOd8XEMaR-HsDQYerN-uBPyzEj2WqDekidQ2yQjWgMiU5UuZxEME",
      "link": "https://www.visitrwanda.com/destinations/rusumo-falls/"
    },
    {
      "title": "Iby’Iwacu Cultural Village",
      "description": "Experience Rwandan culture, traditions, and village life near Volcanoes National Park.",
      "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f4/48/24/come-and-enjoy-our-traditional.jpg?w=900&h=500&s=1",
      "link": "https://www.ibyiwacu.com/"
    },
    {
      "title": "Kigali convestion center",
      "description": "A bustling market in Kigali where you can shop for fresh produce, crafts, and traditional Rwandan fabrics.",
      "imageUrl": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/e8/d6/ef.jpg",
      "link": "https://www.visitkigali.rw/kimironko-market/"
    },
    {
      "title": "The Musanze Caves",
      "description": "Explore these fascinating lava tubes formed by volcanic activity, located near Volcanoes National Park.",
      "imageUrl": "https://lp-cms-production.imgix.net/2020-11/shutterstockRF_34434805.jpg?w=1440&h=810&fit=crop&auto=format&q=75",
      "link": "https://www.visitrwanda.com/destinations/musanze-caves/"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="text-lg font-semibold text-red-600 uppercase tracking-wider">
          KIGALI IN THE NEWS
        </h3>
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Yes, Kigali is Making Headlines
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newsCards.slice(0, showMore ? newsCards.length : 4).map((card, index) => (
          <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <a 
              href={card.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block h-full"
            >
              {/* Image Container */}
              <div className="h-48 bg-gray-200 relative">
                {card.imageUrl && (
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                )}
                {/* Fallback for missing images */}
                <div className={`absolute inset-0 bg-gray-100 ${card.imageUrl ? 'hidden' : 'flex'} items-center justify-center`}>
                  <span className="text-gray-400">Image not available</span>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-200 line-clamp-3">{card.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-8 text-center">
        <button
          onClick={toggleShowMore}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
        >
          {showMore ? 'Show Less' : 'See More'}
        </button>
      </div>
    </div>
  );
};
const App = () => {
  return (
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
              {/* Text Content */}
              <div className="md:w-1/2 space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                      Explore. Earn. Redeem.
                      <span className="block text-red-600 mt-2">in Kigali!</span>
                  </h2>

                  <div className="space-y-4">
                      <p className="text-lg text-gray-600 leading-relaxed">
                          Discover the best of Kigali with the KIGALI VIEW Rewards app! 
                          Find exciting events, top attractions, and exclusive local deals. 
                          Earn rewards like merchandise, gift cards, and more—all in one 
                          convenient place.
                      </p>
                      <p className="text-lg font-medium text-gray-900">
                          Download the KIGALI VIEW Rewards app now and start exploring 
                          the magic of Kigali!
                      </p>
                  </div>

                  {/* App Download Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a href="#" className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.687-1.454 3.68-2.919 1.156-1.689 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.687 3.56-1.702z"/>
                          </svg>
                          <div className="text-left">
                              <span className="text-xs">Download on the</span>
                              <div className="text-xl font-semibold">App Store</div>
                          </div>
                      </a>

                      <a href="#" className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M1.77 1.24A.76.76 0 0 1 2.48 1h18.95c.34 0 .6.23.7.55l3.08 9.64c.04.13.06.27.06.4 0 1.06-2.04 1.87-4.55 1.87-.1 0-.2 0-.3-.02l-2.5 4.33c126.17-2.27 10.38-9.6 11.96-10.98.04-.04.04-.1.02-.15L20.1 2.52H4.57L9.7 14.08 6.47 20.6c-.07.13-.2.2-.34.2-.1 0-.2-.03-.27-.1L1.8 16.5c-.2-.2-.2-.5 0-.7l5.6-5.6-5.6-5.6c-.2-.2-.2-.5 0-.7l5.63-5.64z"/>
                          </svg>
                          <div className="text-left">
                              <span className="text-xs">Get it on</span>
                              <div className="text-xl font-semibold">Google Play</div>
                          </div>
                      </a>
                  </div>
              </div>

              {/* Image/Video Container */}
              <div className="md:w-1/2 flex justify-center">
                  <div className="relative max-w-md w-full aspect-square rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                      <img 
                          src="https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png" 
                          alt="Kigali View App Preview" 
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
              </div>
          </div>
      </section>
  );
  }
  const blogPosts = [
    {
      title: 'Top Cultural Festivals in Rwanda',
      description: 'Experience the vibrant culture of Rwanda through its festivals, from Umuganura to Kwita Izina...',
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQHddXSv2IOUUQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1662536049497?e=1743638400&v=beta&t=ciAOsnCpa4QZ98yFFLNsPLFssMNMmoK4QAP97ftOsBg',
      link: '#',
    },
    {
      title: 'Must-Visit National Parks in Rwanda',
      description: 'Explore Rwanda’s stunning national parks, including Volcanoes, Akagera, and Nyungwe...',
      image: 'data:image/jpeg;base64,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',
      link: '#',
    },
    {
      title: 'Rwandan Cuisine: A Food Lover’s Guide',
      description: 'Discover the flavors of Rwanda, from hearty dishes like Ugali and Isombe to local coffee...',
      image: 'https://paanvuusafaris.com/wp-content/uploads/2024/03/Discovering-the-Culinary-Delights-of-Rwanda-Paanvuu-Safaris.jpeg.webp',
      link: '#',
    },
    {
      title: 'Indoor Activities in Kigali for Rainy Days',
      description: 'Don’t let the rain stop you—visit Kigali’s museums, art galleries, and cozy cafes...',
      image: 'https://www.carolinesyrup.com/content/images/size/w1000/2022/12/PXL_20220629_132753005.jpg',
      link: '#',
    },
    {
      title: 'Gorilla Trekking: A Once-in-a-Lifetime Experience',
      description: 'Everything you need to know about trekking to see Rwanda’s majestic mountain gorillas...',
      image: 'https://www.onthegotours.com/cdn-cgi/image/f=auto,q=80,w=506/repository/Male-gorilla-walking-through-forest-660831537271099.jpg',
      link: '#',
    },
    {
      title: 'Exploring Kigali’s Art and Music Scene',
      description: 'Dive into Kigali’s creative side with visits to Inema Arts Center and local music events...',
      image: 'https://africantravelinc.com/sites/default/files/Kigali%20Art%20x850.png',
      link: '#',
    },
    {
      title: 'Sustainable Tourism in Rwanda',
      description: 'Learn how Rwanda is leading the way in eco-friendly and sustainable tourism...',
      image: 'https://visitrwanda.com/wp-content/uploads/2020/03/IMG-20200310-WA0003-768x480.jpg',
      link: '#',
    },
    {
      title: 'Hidden Gems in Rwanda: Off-the-Beaten-Path',
      description: 'Discover lesser-known destinations like Lake Kivu, Musanze Caves, and more...',
      image: 'https://m.mightytravels.com/caches/79aa6a81147c9d542251b5f0837e6def---991.jpg',
      link: '#',
    },
    {
      title: 'Rwanda’s Wildlife: A Safari Adventure',
      description: 'Embark on a wildlife safari in the country’s renowned national parks and reserves...',
      image: 'https://m.mightytravels.com/caches/79aa6a81147c9d542251b5f0837e6def---991.jpg',
      link: '#',
    }
  ];
  
  function BlogPosts() {
    return (
      <div className="px-4 py-12 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 md:text-4xl">
            Discover Rwanda
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <div 
                key={index}
                className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="object-cover w-full h-48 md:h-56"
                />
                
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-800">
                    {post.title}
                  </h3>
                  <p className="flex-1 mb-4 text-gray-600 line-clamp-3">
                    {post.description}
                  </p>
                  <a 
                    href={post.link} 
                    className="inline-flex items-center mt-auto text-green-600 transition-colors duration-200 hover:text-green-800"
                  >
                    <span>Read More</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
  
          <div className="flex justify-center mt-8">
            <button 
              className="px-8 py-3 text-white transition-colors duration-200 bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              View More Blogs
            </button>
          </div>
        </div>
      </div>
    );
  };
  const HotelSearch = () => {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [adults, setAdults] = useState(1); // Track the number of adults
    const [children, setChildren] = useState(0); // Track the number of children
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            alert(`Searching for ${adults} adult(s) and ${children} child(ren) from ${checkIn} to ${checkOut}`);
        }, 1500);
    };
  
    return (
      <div className="relative min-h-[400px] bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 py-16 px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-500/10 rounded-full animate-float-delayed"></div>
        </div>
  
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300 mb-4 animate-fade-in">
              Discover Your Perfect Stay
            </h2>
            <p className="text-lg md:text-xl text-blue-100 font-light mb-6">
              Exclusive Member Rates & Luxury Amenities Await
            </p>
          </div>
  
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
              <div className="md:col-span-4 space-y-2">
                <label className="block text-sm font-semibold text-blue-100">Check-in</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
  
              <div className="md:col-span-4 space-y-2">
                <label className="block text-sm font-semibold text-blue-100">Check-out</label>
                <div className="relative">
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    min={checkIn || new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
  
              <div className="md:col-span-4 space-y-2">
                <label className="block text-sm font-semibold text-blue-100">Adults</label>
                <div className="relative">
                  <input
                    type="number"
                    value={adults}
                    onChange={(e) => setAdults(Math.max(1, e.target.value))}
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    min="1"
                    max="10"
                  />
                </div>
              </div>
  
              <div className="md:col-span-4 space-y-2">
                <label className="block text-sm font-semibold text-blue-100">Children</label>
                <div className="relative">
                  <input
                    type="number"
                    value={children}
                    onChange={(e) => setChildren(Math.max(0, e.target.value))}
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    min="0"
                    max="10"
                  />
                </div>
              </div>
            </div>
  
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 px-8 bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-bold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:transform-none"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Searching...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>FIND MY PERFECT HOTEL</span>
                </div>
              )}
            </button>
          </form>
  
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-blue-200 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
              <span>SSL Secure Booking</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12z"/>
              </svg>
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </div>
  
        {/* Add custom animations in your CSS or Tailwind config */}
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float 8s ease-in-out infinite 2s;
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  };
  const HotelCheck = () => {
    const festivals = [
      {
        name: "Get up & Groove",
        date: "Jan 20th",
        location: "Kigali City Center",
        link: "http://www.getupandgroove.com",
      },
      {
        name: "WNW Wednesday",
        date: "Jan 29th",
        location: "Pili Pili",
        link: "http://www.wnwwednesday.com",
      },
      {
        name: "12 Hours in His Presence",
        date: "Feb 2nd",
        location: "BK Arena",
        link: "http://www.12hoursinhispresence.com",
      },
      {
        name: "Diva Hangout Party",
        date: "Jan 31st",
        location: "Silverback Mall",
        link: "http://www.divahangoutparty.com",
      },
      {
        name: "Rwanda International Film Festival",
        date: "Feb 1st",
        location: "Kigali Convention Center",
      },
      {
        name: "Kigali International Jazz Festival",
        date: "Feb 1st",
        location: "Kigali Convention Center",
      }

    ];
  
    const sportingEvents = [
      {
        name: "Run Through Rwanda’s Beauty – Nyungwe Marathon 2025!",
        date: "Mar 7th",
        location: "Nyungwe Forest National Park",
        link: "https://www.pantheradventures.com/",
      },
      {
        name: "Nyungwe Marathon",
        date: "Mar 8th",
        location: "Nyungwe Forest National Park",
        link: "https://www.pantheradventures.com/",
      },
      {
        name: "OSU Men's Volleyball vs USC",
        date: "Jan 31",
        location: "Covelli Center",
        link: "#", // Add a link if available
      },
      {
        name: "Penn State vs. UCLA Men's Volleyball",
        date: "Jan 31",
        location: "Covelli Center",
        link: "#", // Add a link if available
      },
      {
        name: "UCLA vs. Michigan State",
        date: "Feb 1st",
        location: "Covelli Center",
        link: "#", // Add a link if available
      },
      {
        name: "UCLA vs. Penn State",
        date: "Feb 2nd",
        location: "Covelli Center",
        link: "#", // Add a link if available
      }
    ];
  
    return (
      <div className="container mx-auto px-4 py-8">
        {/* Festivals Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Festivals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivals.map((event, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  {event.date}
                </a>
                <div className="text-xl font-semibold mt-2">{event.name}</div>
                <div className="text-gray-600 mt-2 flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> {event.location}
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            View Annual Festivals
          </button>
        </section>
  
        {/* Sporting Events Section */}
        <section>
          <h3 className="text-2xl font-bold mb-6">Sporting Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportingEvents.map((event, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 text-sm"
                >
                  {event.date}
                </a>
                <div className="text-xl font-semibold mt-2">{event.name}</div>
                <div className="text-gray-600 mt-2 flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> {event.location}
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 align">
            View All Events
          </button>
        </section>
      </div>
    );
  };
  const Marketplace = () => {
    const cards = [
      {
        title: "1-Day Kigali City Tour Pass",
        description:
          "Explore the vibrant city of Kigali with a 24-hour pass to visit its top attractions, including the Kigali Genocide Memorial, local markets, and cultural landmarks.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b0/fa/2a/gisozi-genocide-memorial.jpg?w=1000&h=-1&s=1",
      },
      {
        title: "Kigali Coffee Experience Trail",
        description:
          "Discover Rwanda's world-renowned coffee culture. Visit local coffee shops and plantations to learn about the process from bean to cup.",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/22/20/01.jpg",
      },
      {
        title: "Kigali Art and Craft Trail",
        description:
          "Immerse yourself in Kigali's thriving art scene. Visit galleries, craft markets, and workshops to see and purchase unique handmade items.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/41/34/12/ivuka-arts-centre.jpg?w=900&h=500&s=1",
      },
      {
        title: "Kigali Foodie Trail",
        description:
          "Taste your way through Kigali's culinary delights. Enjoy traditional Rwandan dishes and modern fusion cuisine at the city's best restaurants.",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0f/e3/94/25.jpg",
      },
      {
        title: "Kigali Nature and Wildlife Trail",
        description:
          "Experience Kigali's natural beauty. Visit nearby parks, lakes, and wildlife reserves to see Rwanda's stunning landscapes and animals.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/31/88/df/caption.jpg?w=1000&h=-1&s=1",
      },
      {
        title: "Kigali Nature and Wildlife Trail",
        description:
          "Experience Kigali's natural beauty. Visit nearby parks, lakes, and wildlife reserves to see Rwanda's stunning landscapes and animals.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/31/88/df/caption.jpg?w=1000&h=-1&s=1",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">EXPLORE OUR MARKETPLACE</h1>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover Kigali with our free experiential trails or save on admission tickets to some of the city's most popular attractions.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            View All Passes
          </a>
        </div>
  
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const imageCards = [
    { id: 1, src: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/13/43/41/9e.jpg', alt: 'Image 1', text: 'Explore Kigali city culture' },
    { id: 2, src: 'https://www.ugandarwanda-safaris.com/wp-content/uploads/2024/10/Umutsima.jpg', alt: 'Image 2', text: 'Test the food of Kigali' },
    { id: 3, src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/56/69/f1/entrance.jpg?w=900&h=500&s=1', alt: 'Image 3', text: 'Discover Hidden Gems in Kigali' },
    { id: 4, src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b0/fa/7d/gisozi-genocide-memorial.jpg?w=900&h=500&s=1', alt: 'Image 4', text: 'Visit Museums to know more about Rwanda' },
    { id: 5, src: 'https://www.nkuringosafaris.com/wp-content/uploads/2023/08/kinigi-kwita-izina-__.jpg', alt: 'Image 5', text: 'Explore Parks In Rwanda' },
    { id: 6, src: 'https://rdb.rw/wp-content/uploads/2023/12/DC_8157_Lv9fDXRT-1024x682.jpeg', alt: 'Image 6', text: 'Attend Local Events like Move Africa' },
    { id: 7, src: 'https://rwandaclothing.com/wp-content/uploads/2016/01/RWANDA-CLOTHING-STORE-Kigali_-36-570x380.jpg', alt: 'Image 7', text: 'Shop Unique Stores' },
    { id: 8, src: 'https://cdn.getyourguide.com/img/tour/8dfc8c93e0e94a71.jpeg/98.jpg', alt: 'Image 8', text: 'Experience Outdoor Activities' },
    { id: 9, src: 'https://en.igihe.com/local/cache-vignettes/L1000xH667/ruger-2-779fa-1843f.jpg?1733238640', alt: 'Image 9', text: 'Attend Live Performances with the African stars' },
    { id: 10, src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/56/7f/c8/exterior.jpg?w=900&h=-1&s=1', alt: 'Image 10', text: 'Explore Regional Historical Sites' },
    { id: 11, src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/58/6a/5a/this-is-me-ken-an-artist.jpg?w=900&h=500&s=1', alt: 'Image 11', text: 'Attend Art Galleries' },
    { id: 12, src: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/e3/85/0e.jpg', alt: 'Image 12', text: 'Experience Local Culture' },
    { id: 13, src: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/3d/5d/3f.jpg', alt: 'Image 13', text: 'Attend Music Festivals' },
    { id: 14, src: 'https://www.rwandaclothing.com/wp-content/uploads/2016/01/RWANDA-CLOTHING-STORE-Kigali_-36-570x380.jpg', alt: 'Image 14', text: 'Shop Unique Stores' },
    { id: 15, src: 'https://www.nkuringosafaris.com/wp-content/uploads/2023/08/kinigi-kwita-izina-__.jpg', alt: 'Image 15', text: 'Explore Parks In Rwanda' },
  ];
  
  const ColumbusSnapshots = () => {
    const [showAll, setShowAll] = useState(false);
  
    const handleToggle = () => {
      setShowAll((prevState) => !prevState);
    };
  
    const displayedCards = showAll ? imageCards : imageCards.slice(0, 5); // Display 5 cards initially
  
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Yes, KIGALI</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Share your experiences in Kigali with us on social by using{' '}
            <strong>#Kigali</strong>. We’d love to see your favorite moments,
            whether you’re exploring the city’s hidden gems, enjoying the local food
            scene, or simply soaking in the atmosphere. Tag us and be part of the
            Kigali community!
          </p>
        </div>
  
        {/* Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {displayedCards.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center text-lg font-semibold p-4">
                  {image.text}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Read More Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleToggle}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            {showAll ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    );
  };
  const TravelSection = () => {
    return (
      <div className="flex flex-wrap w-full">
        {/* Delta SkyMiles Section */}
        <a
          href="#join"
          className="relative flex-1 p-8 flex flex-col justify-center bg-black transition-all duration-300 hover:opacity-90"
        >
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Join the RWANDA AIR® Travel Agencies
            </h2>
            <p className="text-lg mb-6 text-cyan-400">
              Earn miles toward travel, upgrades, and more. Rules apply.
            </p>
            <div className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
              Join today
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://www.airlinepros.com/wp-content/uploads/2024/01/Rwandair_press-release-jan-24.jpg"
              alt="Airplane background"
              className="w-full h-full object-cover"
            />
          </div>
        </a>
  
        {/* Columbus Tourism Section */}
        <a
          href="#guide"
          className="relative flex-1 p-8 flex flex-col justify-center bg-gradient-to-r from-green-900 to-green-800 transition-all duration-300 hover:opacity-90"
        >
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Insights on What to See and Do in Kigali
            </h2>
            <p className="text-lg mb-6 text-green-400">
              Plus a Seasonal Calendar of Events
            </p>
            <div className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors">
              Get a Free Visitors Guide
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://cdn.businesstraveller.com/wp-content/uploads/fly-images/818210/Exterior-1-916x515.jpg"
              alt="Columbus cityscape"
              className="w-full h-full object-cover"
            />
          </div>
        </a>
      </div>
    );
  };

export default function HomeRouter() {
  return (
    <div className="relative">
      <ImageCarousel />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Kigali View</h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
          Discover the vibrant city of Kigali through our comprehensive guide. 
          Explore attractions, events, restaurants, and hidden gems that make 
          Kigali one of Africa's most captivating destinations.
        </p>
        <PromotionalSlider />
        <ColumbusSection />
        <ColumbusAwardsSection />
        <ColumbusNewsSection />
        <App />
        <BlogPosts />
        <HotelSearch />
        <HotelCheck />
        <Marketplace />
        <ColumbusSnapshots />
        <TravelSection />
      </div>
    </div>
  );
}

