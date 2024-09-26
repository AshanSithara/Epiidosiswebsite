"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CuratedInvestmentSolution: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section className="bg-gray-900 text-white py-12 relative overflow-hidden" style={{
      fontFamily: "Lato, sans-serif",
    }}>
      {/* Background Image */}
      <div
      ref={ref}
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/invest/Hero.png')" }} // Replace with the actual path to your background image
      ></div>
      
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
      {/* Overlay to darken the background image for better text contrast */}
      {/* <div className="absolute inset-0 bg-gray-900 opacity-80"></div> */}

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Heading and Description */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
            Curated Investment Solution
          </h2>
          <p className="text-lg md:text-xl ">
            A unique investment management platform with fast KYC verification and fundraising capabilities.<br/>
            Through the interactive platform, investors can tap into diverse industries, including Healthcare, Oil & Gas,<br/>
            Manufacturing, Tourism & Hospitality, Commercial, Manufacturing, Education, Agriculture, and Energy.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {/* Placeholder for the content */}
          <picture>
            <source srcSet="/invest/Dashboard.png" media="(max-width: 767px)" /> {/* Mobile image */}
            <img
              src="/invest/Dashboard.svg" // Default image
              alt="Curated Investment Dashboard"
              className="w-full"
            />
          </picture>
        </div>

        {/* Coming Soon Button */}
        <div className="text-center mt-8">
        <button
  className="bg-[#CB8511] text-white rounded-lg font-bold px-6 py-3 hover:bg-[#1A9548] cursor-not-allowed opacity-50"
  style={{ fontFamily: "Montserrat, sans-serif" }}
  disabled
>
  Coming soon
</button>

        </div>
        
      </div>
      </motion.div>
    </section>
    </>
  );
};

export default CuratedInvestmentSolution;
