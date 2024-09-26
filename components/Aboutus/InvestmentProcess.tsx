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
    <section className="py-12 bg-white-100" style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <div ref={ref} className="container mx-auto px-6 md:px-12 text-center">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <h2 className="text-3xl md:text-4xl textgold mb-4" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
          Our Investment Process
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 md:mx-52">
          Epiidosis Investments simplifies the investment process with a structured approach. 
          From initial registration and documentation through fund deployment and project management, 
          we ensure transparency and efficiency at every stage.
        </p>
        <img 
          src="/about_us/image1.svg" 
          alt="Investment Process Diagram" 
          className="mx-auto md:block hidden" // Image for larger screens
          />
          <img
            src="/about_us/mobile.png" // Image for mobile screens
            alt="Investment Process Diagram"
            className="mx-auto md:hidden block" // Only visible on mobile screens
          />
           </motion.div>
      </div>
    </section>
    </>
  );
};

export default InvestmentProcess;
