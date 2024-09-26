"use client";
import React from "react";

const KeyFeatures: React.FC = () => {
  return (
    <>
      <section className="py-12 bg-white" style={{
        fontFamily: "Lato, sans-serif",
      }}>
        <div className="container mx-auto px-6 md:px-12 text-center">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl mb-2 textgold" style={{
            fontFamily: "Montserrat, sans-serif",
          }}>Key Features of Our Structured Investment Process</h2>
          <p className="text-gray-600 mb-8 md:mx-60">
            At Epiidosis Investments, our structured investment solution provides tailored solutions to complex financial needs, especially where traditional financing is not an option. Here are the key features of our solution</p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Expertise in Diversified Asset Classes */}
            <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
              <h3 className="text-xl font-bold mb-4" style={{
                fontFamily: "Montserrat, sans-serif",
              }}>Comprehensive Funding Process</h3>
              <p>
                From onboarding to fund deployment, we guide you with clarity and transparency.</p>
            </div>

            {/* Global Network */}
            <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
              <h2 className="text-xl font-bold mb-4" style={{
                fontFamily: "Montserrat, sans-serif",
              }}>Rigorous Verification</h2>
              <p>
                Our thorough KYC and document checks enhance investor confidence and ensure authenticity.</p>
            </div>

            {/* Strong Market Insights */}
            <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
              <h3 className="text-xl font-bold mb-4" style={{
                fontFamily: "Montserrat, sans-serif",
              }}>Transparent Fee Structure</h3>
              <p>
                Clear cost outlines foster trust and accountability.</p>
            </div>

            {/* Innovative Financial Solutions */}
            <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
              <h3 className="text-xl font-bold mb-4" style={{
                fontFamily: "Montserrat, sans-serif",
              }}>Strategic Support and Guidance</h3>
              <p>
                Leverage industry expertise and partnerships to overcome challenges and optimize success.</p>
            </div>
          </div>

          {/* Get in Touch Button */}
          <div className="mt-8">
            <button className="bg-[#CB8511] text-white py-2 px-6 font-bold rounded-sm hover:bg-[#1A9548]" style={{
              fontFamily: "Montserrat, sans-serif",
            }}>
              <a href="/funding-solution/structured-investment/contact-us"> Get in touch</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
