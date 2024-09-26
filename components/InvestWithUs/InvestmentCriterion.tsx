"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Investment criteria data
const criteria = [
  {
    value: "24-30%",
    description: "Guaranteed ROI Per Annum",
  },
  {
    value: "$25,000 USD",
    description: "Min Investment Requirements",
  },
  {
    value: "$60million+",
    description: "AUM",
  },
  {
    value: "$5.35million",
    description: "Our Revenue Estimate for 2025",
  },
  {
    value: "Asset-Backed",
    description: "100% Asset Backed Security",
  },
];

const InvestmentCriterion: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section className="py-8 bg-white"style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <div  ref={ref} className="container mx-auto px-6 md:px-12 text-center">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        {/* Title and Subtitle */}
        <h2 className="textgold md:text-4xl text-3xl mb-2" style={{
          fontFamily: "Montserrat, sans-serif",
        }}>
          Investment Criterion
        </h2>
        <p className="text-gray-700 mb-8">
          Epiidosis Investments streamlines the investment process with a structured, transparent approach, from registration to project management.
        </p>

        {/* Criteria Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6"style={{
          fontFamily: "Montserrat, sans-serif",
        }}>
          {criteria.map((item, index) => (
            <div
              key={index}
              className="criteria_bg rounded-lg p-6 h-60 flex flex-col justify-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-left" >{item.value}</h3>
              <p className="text-gray-600 text-left">{item.description}</p>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default InvestmentCriterion;
