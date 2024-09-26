"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; 

const teamMembers = [
  {
    name: "Tinu Ragul",
    title: "Investment Manager",
    image: "/profile/portrait5.png",
    description: "Seasoned investment manager with global expertise in private wealth & family offices, managing $200 million in AUM across London, Singapore & Dubai, delivering tailored investment strategies focused on strategic growth & risk management."
  },
  {
    name: "Muhammad Husain",
    title: "Senior Investment Manager",
    image: "/profile/portrait8.png",
    description: "A seasoned professional with 10 years of wealth management, private banking, and relationship management experience. Professional in managing and structuring investment portfolios with 10 million to 250 million USD."
  },
];

const LeadershipTeam: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section className="py-4 bg-white" style={{ fontFamily: "Lato, sans-serif" }}>
      <div ref={ref} className="container mx-auto px-4 sm:px-6 md:px-12 text-center">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <h2 className="text-3xl md:text-4xl textgold mb-8">
          Investment Team
        </h2>

        <div className="grid grid-cols-2 gap-4 md:mx-56 sm:gap-6 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-black text-white p-2 sm:p-4 shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Description */}
              <div className="absolute inset-0 px-2 flex items-center justify-center z-10 transition-all duration-300">
                <p className="text-[0.45rem] px-8 md:px-2 sm:text-xs md:text-base leading-tight tracking-tighter w-full sm:w-48 md:w-56 text-justify text-[#4D4B4C] group-hover:text-white transition-colors duration-300 mb-16">
                  {member.description}
                </p>
              </div>

              {/* Image */}
              <div className="relative z-10">
                <div className="relative w-full h-36 sm:h-48 md:h-64 mb-1 overflow-hidden rounded-t-lg flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Name and Title */}
                <h3 className="text-sm sm:text-lg md:text-2xl font-bold mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  {member.name}
                </h3>
                <p className="text-xs sm:text-base text-gray-300 mb-4">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default LeadershipTeam;
