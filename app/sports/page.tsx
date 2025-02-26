"use client";

import React from "react";
import { useSearchParams } from "next/navigation"; // Updated import for Next.js 13+

const SportPage = () => {
  const searchParams = useSearchParams();
  const sport = searchParams.get("sport"); // Get the "sport" query parameter

  console.log("Sport query parameter:", sport); // Debugging line

  if (!sport) {
    return <div>Loading...</div>;
  }

  // Mock data for demonstration
  const sportData = {
    football: {
      name: "Football",
      participants: "50,000+",
      popularity: "Highly Popular",
      details: "Football is the most popular sport in Rwanda, with a strong fan base and active leagues.",
    },
    basketball: {
      name: "Basketball",
      participants: "10,000+",
      popularity: "Growing Rapidly",
      details: "Basketball is gaining traction in Rwanda, with increasing participation and support.",
    },
    // Add more sports here...
  };

  // Get the data for the current sport
  const data = sportData[sport as keyof typeof sportData];

  console.log("Sport data:", data); // Debugging line

  if (!data) {
    return <div>Sport not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">{data.name}</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-2">
            <strong>Participants:</strong> {data.participants}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Popularity:</strong> {data.popularity}
          </p>
          <p className="text-gray-700">{data.details}</p>
        </div>
      </div>
    </div>
  );
};

export default SportPage;