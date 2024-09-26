"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; 

const LeadershipTeam: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section className="py-1 bg-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
      <div ref={ref} className="container mx-auto px-6 md:px-12 text-center">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <div className="items-center">
          {/* Default image for larger screens */}
          <img
            src="/about_us/shashwat.svg"
            alt="Leadership Team"
            className="hidden md:block"
          />
          {/* Image for mobile view */}
          <img
            src="/about_us/shashwat_mobile.svg"
            alt="Leadership Team Mobile"
            className="block md:hidden w-96"
          />
        </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default LeadershipTeam;
