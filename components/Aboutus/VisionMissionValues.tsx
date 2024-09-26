"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const VisionMissionValues: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section className="py-12 bg-white-100" style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <div ref={ref} className="container mx-auto px-6 md:px-12">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6">
          
          {/* Vision Card */}
          <div className="bg-[#F6F6F6] p-8 rounded-lg text-center w-full md:w-1/3 h-80 flex flex-col justify-between">
            <img 
              src="/about_us/icons/Vision.png" 
              alt="Our Vision Icon" 
              className="mx-auto mb-6 h-20"
            />
            <h3 className="text-xl font-bold mb-4" style={{
            fontFamily: "Montserrat, sans-serif",
          }}>Our Vision</h3>
            <p className="text-gray-600 text-justify" style={{ fontFamily: "Lato, sans-serif" }}>
              We aim to be recognized as a global leader in investment management, 
              creating value for investors, partners, and stakeholders through innovation, 
              integrity, and impact.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="bg-[#F6F6F6] p-8 rounded-lg text-center w-full md:w-1/3 h-80 flex flex-col justify-between">
            <img 
              src="/about_us/icons/Mission.png" 
              alt="Our Mission Icon" 
              className="mx-auto mb-6 h-20"
            />
            <h3 className="text-xl font-bold mb-4" style={{
            fontFamily: "Montserrat, sans-serif",
          }}>Our Mission</h3>
            <p className="text-gray-600 text-justify" style={{ fontFamily: "Lato, sans-serif" }}>
              Provide innovative investment solutions and strategic guidance, delivering 
              superior returns to investors while fostering economic growth in the communities 
              we serve.
            </p>
          </div>
          
          {/* Core Values Card */}
          <div className="bg-[#F6F6F6] p-8 rounded-lg text-center w-full md:w-1/3 h-80 flex flex-col justify-between">
            <img 
              src="/about_us/icons/Values.png" 
              alt="Core Values Icon" 
              className="mx-auto mb-6 h-20"
            />
            <h3 className="text-xl font-bold mb-4" style={{
            fontFamily: "Montserrat, sans-serif",
          }}>Core Values</h3>
            <p className="text-gray-600 text-justify" style={{ fontFamily: "Lato, sans-serif" }}>
              We uphold honesty, transparency, and ethical integrity, maintaining the highest 
              standards of professionalism and fairness in all our business dealings.
            </p>
          </div>

        </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default VisionMissionValues;
