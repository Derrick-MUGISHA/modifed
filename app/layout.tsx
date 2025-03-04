import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavigation from "../components/custom/Navigation/top-navigation";
import Adds from "../components/custom/adds/adds";  // Correct the component import
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kigali View",
  description: "We give you the experience of the land of a thousand Hills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Corrected usage of the TopNavigation component */}
        <TopNavigation />
        {children}
        <Adds />
        <Footer />
      </body>
    </html>
  );
}
