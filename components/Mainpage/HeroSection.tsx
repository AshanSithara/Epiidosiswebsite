"use client";
import React from "react";
import CallToActionButton from "../Common/CallToActionButton"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Optional if you prefer using framer-motion for smooth animation

interface ButtonProps {
  text: string;
}


const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });

  return (
    <>
      <section
        className="relative bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/home/image.png')",
          height: "727px",
          fontFamily: "Lato, sans-serif",

        }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}
        <div
          ref={ref}
          className="container mx-auto px-8 md:px-16 lg:px-40 xl:px-56 relative z-10 text-center text-white">
          {/* Apply the motion.div to animate the text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >

            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight drop-shadow-lg" style={{
              fontFamily: "Montserrat, sans-serif",
            }}>
              Your Reliable Guide in Financial Navigation
            </h1>
            <p className="text-base md:text-lg mb-8 leading-relaxed drop-shadow-lg">
              Epiidosis Investments LLC offers innovative investment solutions,
              strategic guidance, and unparalleled service to help individuals and
              organizations achieve their financial goals. With integrity,
              transparency, and professionalism, we strive to deliver superior
              returns and foster economic growth.
            </p>
            <CallToActionButton text="Get in touch" />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
