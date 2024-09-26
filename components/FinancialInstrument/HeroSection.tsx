"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
    <section
      className="relative bg-cover bg-center h-96 flex items-center justify-start"
      style={{ backgroundImage: "url('/Assetmonetization/hero.png')", fontFamily: "Lato, sans-serif" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-left text-white mt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
        Financial Instrument Investment
        </h1>
        <p className="text-base md:text-xl  md:mr-[600px]">
        Unlock liquidity with your Financial Instruments <br /> At Epiidosis, 
        we offer a smart way to access the value of your investments. 
        Secure quick and flexible loans by leveraging your listed stocks, 
        debentures, bonds or any other financial asset as collateral, 
        all while retaining ownership of your portfolio.
        </p>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
