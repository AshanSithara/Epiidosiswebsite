"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ChallengesInInvestment: React.FC = () => {
  const items = [
    {
      title: "Tailored Investment Strategies",
      details:
        "Our customized investment solutions align with each client's specific financial goals, risk tolerance, and time horizon. In order to maximize returns and mitigate risks, Our Investment team crafts customized strategies for each client.",
    },
    {
      title: "Expert Financial Advisory",
      details:
        "With an experienced team of financial advisors and analysts, We provide investment opportunities, portfolio management, and market trend advice. Financial markets are complex, and clients need this expertise to make informed decisions.",
    },
    {
      title: "Access to Exclusive Opportunities",
      details:
        "Using Epiidosis Investments' extensive network and market insights, clients get access to exclusive investment opportunities. Opportunities include venture capital, private equity, and other high-growth investments.",
    },
    {
      title: "Commitment to sustainability and ESG",
      details:
        "ESG factors are incorporated into Epiidosis' investment processes. Our commitment to sustainable and responsible investing not only helps us achieve strong financial returns, but also helps us contribute to positive social and environmental impacts, aligned with our clients' values.",
    },
    {
      title: "Risk Management",
      details:
        "Through comprehensive risk assessment and management techniques, Our investment management team helps clients mitigate potential losses and navigate market volatility effectively.",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section className="py-12 bg-white" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
      <div ref={ref} className="container mx-auto px-6 md:px-12">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Text Content Container */}
          <div className="flex flex-col">
            <div>
              <h2 className=" textgold mb-4">
                How We Add Value?
              </h2>
              <p className="text-[#201E1F] mb-6">
                Epiidosis Investments can add value to its clients through several key strategies.
              </p>
            </div>
  
            <div>
              {items.map((item, index) => (
                <div key={index} className="mb-8 cursor-pointer group">
                  <div className="flex items-center font-medium text-gray-800 ml-8 mt-4">
                    <span
                      className="inline-block h-0.5 w-3 bg-green-600 mr-3 transition-all duration-300 ease-in-out group-hover:w-9"
                    ></span>
                    <span className="group-hover:font-bold">
                      {item.title}
                    </span>
                  </div>
                  {/* Details are shown on hover */}
                  <div className="ml-8 hidden group-hover:block transition-all duration-300 ease-in-out">
                    <p className="mt-2  text-[#56585C]">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Container */}
          <div className="flex items-start w-full mt-4">
            <img 
              src="/about_us/image2.svg" 
              alt="Value Image" 
              className="w-auto h-auto rounded-sm shadow-md"
            />
          </div>

        </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default ChallengesInInvestment;
