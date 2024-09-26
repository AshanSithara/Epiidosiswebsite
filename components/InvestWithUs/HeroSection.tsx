"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section
      className="relative bg-cover bg-center h-96 flex items-center justify-start "
      style={{ backgroundImage: "url('/invest/hero1.svg')",fontFamily: "Lato, sans-serif" }}
    >
      <div ref={ref} className="absolute inset-0 bg-black opacity-60"></div>
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
      <div className="container mx-auto px-6 md:px-12  relative z-10 text-left text-white mt-20">
        <h1 className="text-3xl md:text-4xl leading-tight font-bold mb-6" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
          Invest With Us
        </h1>
        <p className="text-base md:text-xl md:mr-[600px]">
          Our diverse portfolio spans financial services, fintech, commercial enterprises, agriculture, energy,
          and more. We ensure capital deployment in high-demand sectors with a strong focus on corporate
          governance and ethics in risk management.
        </p>
      </div>
      </motion.div>
    </section>
    </>
  );
};

export default HeroSection;
