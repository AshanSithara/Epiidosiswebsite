"use client";
import React, { useState } from "react";

// List of challenges with details
const challenges = [
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

const ChallengesInInvesting: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActiveIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white"style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <div className="container mx-auto px-6 md:px-12 flex">
        <div className="w-1/2">
          <img
            src="/invest/image.svg" // Replace with your image path
            alt="Investment Challenges"
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="textgold mb-4">
            Challenges in Investing
          </h2>
          <p className="text-gray-700 mb-8">
            Epiidosis Investments streamlines the investment process with a structured, transparent approach, from registration to project management.
          </p>
          <ul className="list-none">
            {challenges.map((challenge, index) => (
              <li
                key={index}
                className={`mb-4 cursor-pointer ${activeIndex === index ? 'text-green-600' : 'text-gray-800'}`}
                onClick={() => toggleActiveIndex(index)}
              >
                <div className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2"></span>
                  <span className={`font-bold ${activeIndex === index ? 'text-green-600' : 'text-gray-800'}`}>
                    {challenge.title}
                  </span>
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600 pl-6">
                    {challenge.details}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChallengesInInvesting;
