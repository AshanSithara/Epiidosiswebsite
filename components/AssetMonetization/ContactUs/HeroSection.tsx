"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
    <section
      className="relative bg-cover bg-center h-96 flex items-center justify-start"style={{
        fontFamily: "Lato, sans-serif",
      }}
      // style={{ backgroundImage: "url('/Assetmonetization/image.svg')" }}
    >
      <div className="absolute inset-0 bg-black"></div> {/* Dark overlay */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-left text-white mt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6"style={{fontFamily: "Montserrat, sans-serif",}}>
        Asset Monetization
        </h1>
        <p className="text-lg md:text-xl md:mr-[600px]">
        Unlock the Value of Your Assets. <br /> Epiidosis Investments enables you to transform your assets into capital for growth, expansion, or
        debt consolidation. Our global reach and tailored solutions provide substantial growth potential in
        high-demand sectors.
        </p>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
