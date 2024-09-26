"use client";
import React, { useState } from "react";

const ExpandableList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const items = [
    {
      title: "Tailored Investment Strategies",
      description:
        "Our customized investment solutions align with each client's specific financial goals, risk tolerance, and time horizon. In order to maximize returns and mitigate risks, our investment team crafts customized strategies for each client."
    },
    {
      title: "Expert Financial Advisory",
      description:
        "With an experienced team of financial advisors and analysts, we provide investment opportunities, portfolio management, and market trend advice. Financial markets are complex, and clients need this expertise to make informed decisions."
    },
    {
      title: "Access to Exclusive Opportunities",
      description:
        "Using Epiidosis Investments' extensive network and market insights, clients get access to exclusive investment opportunities. Opportunities include venture capital, private equity, and other high-growth investments."
    },
    {
      title: "Commitment to sustainability and ESG",
      description:
        "ESG factors are incorporated into Epiidosis' investment processes. Our commitment to sustainable and responsible investing not only helps us achieve strong financial returns, but also helps us contribute to positive social and environmental impacts, aligned with our clients' values."
    },
    {
      title: "Risk Management",
      description:
        "Through comprehensive risk assessment and management techniques, our investment management team helps clients mitigate potential losses and navigate market volatility effectively."
    }
  ];

  return (
    <>
    <section className="py-12 bg-gray-100" style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:pr-16">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4"style={{
      fontFamily: "Montserrat, sans-serif",
    }} >
              How We Add Value?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Epiidosis Investments can add value to its clients through several key strategies:
            </p>
            {items.map((item, index) => (
              <div key={index} className="mb-6 cursor-pointer">
                <div
                  className={`flex items-center text-lg font-semibold ${index === activeIndex ? "text-green-600" : "text-gray-800"}`}
                  onClick={() => toggleItem(index)}
                >
                  <span className="inline-block w-2 h-2 bg-green-600 mr-2"></span>
                  {item.title}
                </div>
                {index === activeIndex && (
                  <p className="mt-2 text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="/about_us/image2.svg" 
              alt="Value Image" 
              className="w-full max-w-lg rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ExpandableList;
