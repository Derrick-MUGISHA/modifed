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
export default TravelSection;