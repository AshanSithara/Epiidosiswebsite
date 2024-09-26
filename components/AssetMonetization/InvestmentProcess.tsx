"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; 

const InvestmentProcess: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section className="py-8 bg-white-100 relative" style={{ fontFamily: "Lato, sans-serif" }}>
      <div  ref={ref} className="container mx-auto px-6 md:px-12 text-center">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <h2 className="text-3xl md:text-4xl textgold mb-4" style={{ fontFamily: "Montserrat, sans-serif" }}>
          How It Works?
        </h2>
        <p className="text-gray-700 mb-8 md:mx-60">
          We simplify investing with a structured, step-by-step approach. To
          maximize the success of your project, we ensure transparency, efficiency, and strategic execution
        </p>
        <div className="relative inline-block">
          <img
            src="/Assetmonetization/asset.png"
            alt="Investment Process Diagram"
            className="mx-auto md:block hidden" // Image for larger screens
          />
          <img
            src="/Assetmonetization/mobile.png" // Image for mobile screens
            alt="Investment Process Diagram"
            className="mx-auto md:hidden block" // Only visible on mobile screens
          />
          {/* Add dummy hover boxes for the 6 highlighted areas with text */}
          <div className="absolute top-[10%] left-[2%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-6 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
              Users register or log in to the Asset Monetization dashboard and undergo KYC verification. They provide comprehensive information about the asset company, including title chain, company KYC, government registrations and approvals, financials, and loan details.
            </span>
          </div>
          <div className="absolute top-[10%] left-[42%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-6 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
              Epiidosis extends a formal offer to the Asset Company to engage in its Investment Platform.
            </span>
          </div>
          <div className="absolute top-[10%] left-[80%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-6 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
              Epiidosis conducts due diligence through a reputed audit company, with expenses borne by the asset company.
            </span>
          </div>
          <div className="absolute top-[50%] left-[83%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-12 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
              If due diligence is successful, Epiidosis enters into an agreement with the asset company. An initial commitment amount is locked, and Epiidosis appoints its director, receiving an irrevocable power of attorney.
            </span>
          </div>
          <div className="absolute top-[50%] left-[42%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-12 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
              Proceeding to the procedure of bank instrument monetization with a maximum timeline of 20-30 days.
            </span>
          </div>
          <div className="absolute top-[50%] left-[2%] w-16 h-16 group hidden md:block">
            <div className="w-full h-full hover:bg-white-300 opacity-0 hover:opacity-75"></div>
            <span className="absolute mt-12 w-72 left-0 bg-[#56585C] text-[#FAFAFA] text-xs text-left px-4 py-4 rounded opacity-0 group-hover:opacity-100">
              The bank instrument is discounted to the platform within approximately 45-60 days. Epiidosis initiates fund transfers to the asset owner according to the agreed schedule.
            </span>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default InvestmentProcess;
