"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Optional if you prefer using framer-motion for smooth animation

const InvestmentOpportunitiesSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section className="py-16  md:mt-28" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
      <div 
      ref={ref} className="mx-auto w-full lg:max-w-[1300px] h-auto">
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <div className="bg-[#FFF7EB]  px-6 md:px-12 py-8 rounded-lg 
         flex flex-col md:flex-row items-center h-full">
          <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h3 className="text-2xl md:text-2xl font-extrabold text-[#CB8511] mb-8">
              Explore Investment Opportunities with Us
            </h3>
            <p className="textblack text-lg mb-12 text-justify font-normal">
              Discover our comprehensive investment solutions tailored to your needs. With strategic portfolio management and innovative financial products, we focus on performance, risk management, and client satisfaction to exceed expectations. Trust us to navigate financial complexities and achieve your investment objectives confidently.
            </p>
            <a
              href="/Invest-with-us"
              className="bg-black text-white px-6 py-3 rounded font-bold  transition duration-300 hover:bg-[#1A9548]" style={{
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Start now
            </a>
          </div>
          <div className="w-full md:w-1/2 h-auto">
            <img
              src="/home/image1.png"
              alt="Investment Opportunities"
              className="rounded-sm 
               object-cover w-full h-full"
            />
          </div>
        </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default InvestmentOpportunitiesSection;
