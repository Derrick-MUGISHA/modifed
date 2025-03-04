"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Updated import for Next.js 13+

interface SportData {
  name: string;
  participants: string;
  popularity: string;
  details: string;
}

const SportPage = () => {
  const searchParams = useSearchParams();
  const [sportData, setSportData] = useState<SportData | null>(null);

  // Get the "sport" query parameter
  const sport = searchParams.get("sport");

  useEffect(() => {
    if (sport) {
      // Mock data for demonstration
      const mockSportData = {
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

      // Set data for the current sport
      setSportData(mockSportData[sport as keyof typeof mockSportData]);
    }
  }, [sport]);

  if (!sport) {
    return <div>Loading...</div>;
  }

  if (!sportData) {
    return <div>Sport not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">{sportData.name}</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-2">
            <strong>Participants:</strong> {sportData.participants}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Popularity:</strong> {sportData.popularity}
          </p>
          <p className="text-gray-700">{sportData.details}</p>
        </div>
      </div>
    </div>
  );
};

export default SportPage;
