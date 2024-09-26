"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ChallengesInInvestment: React.FC = () => {
  const items = [
    {
      title: "Market Volatility",
      details:
        "A variety of factors can influence markets, including economic shifts, geopolitical events, and market sentiment. Volatility can lead to significant losses. Using advanced risk management strategies like diversification and algorithmic trading, our team mitigates market volatility. In response to market trends, Epiidosis adjusts portfolios based on predictive modeling.",
    },
    {
      title: "Information Overload",
      details:
        "In a sea of information, investors find it difficult to distinguish useful insights from noise. This can lead to poor decisions. By filtering and curating relevant data, our team provides investors with clear, actionable insights. By using the firm's proprietary tools and analysts, clients can focus on critical information.",
    },
    {
      title: "Complexity of Financial Products",
      details:
        "A variety of investment products are available on the financial markets. These products can be difficult to understand. Clients benefit from Epiidosis as we simplify complex products to make them easy to understand. With personalized guidance and education, clients are able to understand their options and choose the best products for their needs.",
    },
    {
      title: "Risk Management",
      details:
        "Investing involves balancing risk and reward. Many investors struggle to assess and manage investment risks. At Epiidosis Investments, each investment is evaluated using a sophisticated risk assessment framework. The company's portfolio managers constantly monitor and adjust clients' risk tolerance and objectives.",
    },
    {
      title: "Ethical and Sustainable Investing",
      details:
        "Investing responsibly is becoming increasingly important. Epiidosis Investments prioritizes ethical and sustainable investing, ensuring that our clients’ portfolios align with their values while generating positive returns.",
    },
    {
      title: "High Costs and Fees",
      details:
        "The long-term impact of investment management fees can be significant. Epiidosis offers a transparent and competitive fee structure. Through technology and automation, it can pass savings on to clients without compromising quality.",
    },
    {
      title: "Behavioral Biases",
      details:
        "Due to behavioral biases, investors can make irrational decisions. A behavioral coach and algorithmic trading strategies are used by Epiidosis in order to counter emotional decisions. Using data-driven insights and removing emotional bias, the firm assists clients with long-term investment plans.",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section className="py-12 bg-white mt-1" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
      <div ref={ref} className="container mx-auto px-6 md:px-12">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Image Container */}
          <div className="flex items-start w-full mt-4">
            <img 
              src="/invest/challenges.png" 
              alt="Value Image" 
              className="w-auto h-auto rounded-sm shadow-md"
            />
          </div>
          
          {/* Text Content Container */}
          <div className="flex flex-col">
            <div>
              <h2 className="md:text-4xl text-3xl textgold mb-4">
                Challenges in Investing
              </h2>
              <p className="text-[#201E1F] mb-8"style={{
      fontFamily: "Lato, sans-serif",
    }}>
                Epiidosis Investments streamlines the investment process with a structured, transparent approach, from registration to project management.
              </p>
            </div>
  
            <div>
              {items.map((item, index) => (
                <div key={index} className="mb-8 cursor-pointer group">
                  <div className="flex items-center font-medium text-lg text-gray-800 ml-1">
                    <span
                      className="inline-block h-0.5 w-3 bg-green-600 mr-3 transition-all duration-300 ease-in-out group-hover:w-9"
                    ></span>
                    <span className="group-hover:font-bold">
                      {item.title}
                    </span>
                  </div>

                  {/* Details are shown on hover */}
                  <div className="ml-8 hidden group-hover:block transition-all duration-300 ease-in-out">
                    <p className="mt-2 text-[#56585C]">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default ChallengesInInvestment;
