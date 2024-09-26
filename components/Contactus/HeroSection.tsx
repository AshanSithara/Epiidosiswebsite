"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
    <section
      className="relative bg-center bg-cover h-64 flex items-center justify-start"
      style={{ backgroundImage: "url('/contactus/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> 
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-left text-white mt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
          Contact Us
        </h1>
  
      </div>
    </section>
    </>
  );
};

export default HeroSection;
