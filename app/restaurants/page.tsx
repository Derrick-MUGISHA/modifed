'use client'
import React, { useState } from 'react';
import { Heart, MapPin, Eye, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '../../components/ui/popover';
import Image from 'next/image';


const RestaurantListings = () => {
    const [viewType, setViewType] = useState('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const restaurantsPerPage = 6;
  
    const categories = [
      { name: 'Fast Food', count: 130 },
      { name: 'Restaurants', count: 81 },
      { name: 'Coffee/Baked Goods', count: 50 },
      { name: 'Breakfast/Brunch', count: 27 },
      { name: 'Burkely', count: 22 },
    ];
  
    const regions = [
      { name: 'Kigali Center', count: 46 },
      { name: 'Downtown', count: 37 },
      { name: 'East', count: 17 },
      { name: 'West', count: 15 },
      { name: 'City Side', count: 15 },
    ];
  
    const restaurants = [
        {
            name: 'Fusion Restaurant',
            address: 'No 5 KN 29 Kiyovu, Kigali Rwanda',
            featured: true,
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/a2/13/c9/breakfast.jpg?w=900&h=500&s=1'
          },
          {
            name: "Filini Restaurant & Bar Kigali",
            address: '2973 N High St',
            featured: true,
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/d0/9f/5a/caption.jpg?w=900&h=-1&s=1'
          },
          {
            name: "Lindey's",
            address: '169 E. Beck St.',
            rating: 4.8,
            reviews: 1206,
            image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
          },
          {
            name: 'The Flying Pig', 
            address: '2500 E. Beck St.',
            rating: 4.7,
            reviews: 1550,
            image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png'
          },
      // Add more restaurants to test pagination
      ...Array.from({ length: 12 }, (_, i) => ({
        name: `Restaurant ${i + 1}`,
        address: `Address ${i + 1}, Kigali Rwanda`,
        featured: i % 2 === 0,
        image: 'https://via.placeholder.com/400x300',
        rating: 4.5 + (i % 5 * 0.1),
        reviews: 100 + i * 10,
      })),
    ];
  
    const featuredArticles = [
      {
        title: 'Must-Try Food & Drink Items During Your Trip to Columbus',
      category: 'DINE',
      image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png',
        link: '#',
      },
      {
        title: '10 Romantic Columbus Restaurants Perfect for Any Date',
      category: 'DINE',
      image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png',
        link: '#',
      },
      {
        title: 'Top Hotel Bars and Restaurants in Columbus',
      category: 'STAY',
      image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png',
        link: '#',
      },
      {
        title: 'Best Restaurants in Columbus, Ohio',
      category: 'DINE',
      image: 'https://i.postimg.cc/vmH8rtss/kigali-view-high-resolution-logo.png',
        link: '#',
      },
    ];
  
    // Pagination Logic
    const indexOfLastRestaurant = currentPage * restaurantsPerPage;
    const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;
    const currentRestaurants = restaurants.slice(indexOfFirstRestaurant, indexOfLastRestaurant);
  
    // interface PaginationProps {
    //   pageNumber: number;
    // }
    
    const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);
  
    return (
      <div className="bg-gray-50">
        {/* Hero Section (Full Height Banner) */}
        <div className="relative h-screen overflow-hidden">
          <Image
            src="https://img.freepik.com/free-photo/side-view-mushroom-frying-with-stove-fire-human-hand-pan_176474-3150.jpg?t=st=1739021913~exp=1739025513~hmac=8fa4cfe2a8361f96209ea09f080bc005fc13e597841d73ce0b16f7a69d43e28d&w=1060"
            alt="Featured dish"
            layout="fill"

            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="text-white max-w-2xl px-4">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Discover the Best Restaurants in Kigali</h2>
              <p className="text-lg sm:text-xl">
                Explore a wide variety of cuisines, from local delicacies to international flavors, in the heart of Rwanda&apos;s capital.
              </p>
            </div>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Share Button */}
          <div className="flex justify-end mb-6">
            <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
              <Share2 className="mr-2 h-5 w-5" />
              Share
            </button>
          </div>
  
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Restaurants in Kigali</h1>
  
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <label htmlFor="search" className="sr-only">Search restaurants</label>
                <input
                  id="search"
                  type="text"
                  placeholder="Search restaurants"
                  title="Search restaurants"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">CATEGORIES</h3>
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        id={`category-${index}`}
                        aria-label={`Select ${category.name}`}
                        title={`Select ${category.name}`}
                        placeholder={`Select ${category.name}`}
                        className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`category-${index}`} className="ml-2 text-gray-700">
                      {category.name} ({category.count})
                    </label>
                  </div>
                ))}
                <button className="text-blue-500 hover:text-blue-600 mt-2">Show 19 more</button>
              </div>
  
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">REGIONS</h3>
                {regions.map((region, index) => (
                  <div key={index} className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      title={`Select ${region.name}`}
                      placeholder={`Select ${region.name}`}
                      aria-label={`Select ${region.name}`}
                      className="form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">
                      {region.name} ({region.count})
                    </span>
                  </div>
                ))}
                <button className="text-blue-500 hover:text-blue-600 mt-2">Show 24 more</button>
              </div>
  
              <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300">
                Clear Filters
              </button>
            </div>
  
            {/* Restaurant Grid */}
            <div className="w-full lg:w-3/4">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
                  <span className="text-gray-700">VIEW:</span>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      viewType === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setViewType('grid')}
                  >
                    Grid
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      viewType === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setViewType('list')}
                  >
                    List
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-700">SORT:</span>
                  <select 
                    title="Sort restaurants"
                    aria-label="Sort restaurants"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Default</option>
                    <option>Near Me</option>
                  </select>
                  <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
                    <MapPin className="mr-2 h-5 w-5" />
                    Show Map
                  </button>
                </div>
              </div>
  
              <div className={`grid ${viewType === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                {currentRestaurants.map((restaurant, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48 sm:h-56">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-full object-cover"
                      />
                      {restaurant.featured && (
                        <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                          FEATURED
                        </div>
                      )}
                      <button 
                        title="Add to favorites"
                        aria-label="Add to favorites"
                        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300"
                      >
                        <Heart className="h-5 w-5 text-gray-700" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span>{restaurant.address}</span>
                      </div>
                      {restaurant.rating && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-yellow-400">
                              {'★'.repeat(Math.floor(restaurant.rating))}
                            </div>
                            <span className="ml-2 text-gray-700">({restaurant.reviews} reviews)</span>
                          </div>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
                                <Eye className="h-5 w-5 mr-2" />
                                Quick View
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-96 p-6 bg-white rounded-lg shadow-xl">
                              <div className="space-y-4">
                                <h3 className="text-2xl font-bold">{restaurant.name}</h3>
                                <p className="text-gray-600">{restaurant.address}</p>
                                <div className="flex items-center">
                                  <div className="text-yellow-400">
                                    {'★'.repeat(Math.floor(restaurant.rating))}
                                  </div>
                                  <span className="ml-2 text-gray-700">({restaurant.reviews} reviews)</span>
                                </div>
                                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                                  View Details
                                </button>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
  
              {/* Pagination with Icons */}
              <div className="flex justify-center items-center mt-8">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  title="Previous page"
                  aria-label="Go to previous page"
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="mx-4">
                  {Array.from({ length: Math.ceil(restaurants.length / restaurantsPerPage) }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => paginate(i + 1)}
                      className={`mx-1 px-4 py-2 rounded-lg ${
                        currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === Math.ceil(restaurants.length / restaurantsPerPage)}
                  title="Next page"
                  aria-label="Go to next page"
                  className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
  
          {/* Featured Articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {featuredArticles.map((article, index) => (
              <a key={index} href={article.link} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-2">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-white">{article.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  
  
export default function zed () {
    return (
        <div>
            <RestaurantListings />
            hell0
        </div>
    )
}