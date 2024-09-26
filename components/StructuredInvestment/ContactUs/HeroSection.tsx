"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
    <section
      className="relative bg-cover bg-center h-96 flex items-center justify-start"
      // style={{ backgroundImage: "url('/Assetmonetization/image.svg')" }}
    >
      <div className="absolute inset-0 bg-black"></div> {/* Dark overlay */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-left text-white mt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
        Structured Financing
        </h1>
        <p className="text-lg md:text-xl md:mr-[600px] ">
        Join Epiidosis Investments to bring your projects to life with our streamlined, transparent funding and investment process. We ensure efficiency and support at every stage, making your vision a reality.

        </p>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
