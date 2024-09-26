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
      className="relative bg-cover bg-center mt-20 md:mt-12 lg:bg-contain lg:bg-no-repeat h-96 flex items-center md:justify-end"
      style={{ backgroundImage: "url('/about_us/hero1.svg')",fontFamily: "Lato, sans-serif" }}
    >
      {/* <div className="absolute inset-0 bg-black opacity-60"></div> Dark overlay */}
      <div ref={ref} className="container mx-auto px-6 md:px-12 relative z-10 text-left text-white mt-20">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <h1 className="text-3xl md:text-4xl font-bold mb-6"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
          About Us
        </h1>
        <p className="text-lg md:text-xl mb-20 md:mr-[600px] ">
          Epiidosis Investments LLC, founded in 2020 with offices in Dubai and India,
          specializes in high-potential opportunities across diverse asset classes and key sectors. 
          Our mission is to deliver superior returns and community growth through innovative 
          investment solutions while upholding the highest standards of integrity and professionalism.
        </p>
        </motion.div>
      </div>
      
    </section>
    </>
  );
};

export default HeroSection;
