"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const targetSectors = [
  {
    id: 1,
    title: "Renewable Energy",
    icon: "/home/icons/renewable.svg",
  },
  {
    id: 2,
    title: "Oil and Gas",
    icon: "/home/icons/oil.svg",
  },
  {
    id: 3,
    title: "Tourism and Hospitality",
    icon: "/home/icons/tourism.svg",
  },
  {
    id: 4,
    title: "Commercial",
    icon: "/home/icons/commercial.svg",
  },
  {
    id: 5,
    title: "Agriculture",
    icon: "/home/icons/agriculture.svg",
  },
  {
    id: 6,
    title: "Industrial Investments",
    icon: "/home/icons/industrial.svg",
  },
  {
    id: 7,
    title: "Education",
    icon: "/home/icons/education.svg",
  },
  {
    id: 8,
    title: "Healthcare",
    icon: "/home/icons/healthcare.svg",
  },
];

const TargetSectorsSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section className="py-4 bg-white"style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <div ref={ref} className="mx-auto text-center max-w-[1300px] font-montserrat">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <h2 className="text-3xl md:text-3xl textgold  font-extrabold mb-4" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>Target Sectors</h2>
        <p
          className="textblack mb-12"
          style={{
            fontFamily: "Lato, sans-serif",
          }}
        >
          Get to know our target sectors and our investment strategy within them.
        </p>

        {/* Scrollable container for mobile, adjusting gap and width */}
        <div className="flex overflow-x-auto hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
          {targetSectors.map((sector) => (
            <div
              key={sector.id}
              className="min-w-[30%] min-h-[100px] flex-shrink-0 p-6 bg-[#F6F6F6] rounded-sm duration-300"
            >
              <img
                src={sector.icon}
                alt={`${sector.title} Icon`}
                className="h-10 mx-auto mb-2"
              />
              <h3 className="text-sm font-semibold textdarkgray"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
                {sector.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="/Invest-with-us"
            className="bg-black text-white font-bold px-8 py-3 rounded hover:bg-[#1A9548] transition duration-300" style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Know more
          </a>
        </div>
        </motion.div>
      </div>
      
    </section>
    </>
  );
};

export default TargetSectorsSection;
