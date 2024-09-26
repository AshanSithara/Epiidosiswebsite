"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
    <section
      className="relative bg-cover bg-center h-80 flex items-center justify-start "
      style={{ backgroundImage: "url('/Legal/hero.svg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-left text-white mt-20">
        <h1 className="text-3xl md:text-4xl font-bold"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
          Legal
        </h1>
        
      </div>
    </section>
    </>
  );
};

export default HeroSection;
