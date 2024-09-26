"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
    <section
      className="relative bg-cover bg-center md:bg-contain md:bg-no-repeat bg-bottom h-96 flex items-center justify-start"
      style={{ backgroundImage: "url('/MediaAnnouncement/hero.svg')", fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-left text-white mt-20">
        <h1 className="text-3xl md:text-4xl font-bold">
          Media and Announcements
        </h1>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
