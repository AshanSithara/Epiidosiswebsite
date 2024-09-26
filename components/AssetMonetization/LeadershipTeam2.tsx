"use client";
import React from "react";

const teamMembers = [
  {
    name: "Shaswat Tomar",
    title: "Founder and CEO",
    image: "/profile/portrait4.png", // Replace with the actual image path
    description: `I founded Epiidosis Investments LLC with a clear vision: to create a platform that bridges the gap between innovative investment opportunities and responsible growth. In an ever-changing global economy, I recognized the need for an investment firm that not only prioritizes returns but also places a strong emphasis on sustainability and ethical practices.

    Our mission is to empower investors with the tools and knowledge to make informed decisions that align with their values and financial goals. Epiidosis Investments is built on the principles of transparency, integrity, and a commitment to long-term success. We believe in driving positive change in the world by supporting businesses that are not only profitable but also contribute to the greater good.

    At Epiidosis, we are more than just investors—we are partners in progress. We are dedicated to helping our clients navigate the complexities of the investment landscape, ensuring that their portfolios are as resilient as they are impactful. Together, we are building a future where financial success and social responsibility go hand in hand.

    Thank you for joining us on this journey.`,
  },
];

const LeadershipTeam: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center md:flex-row text-white">
        <div className="md:w-1/2 mb-8 md:mb-0 text-left">
          <p className="text-green-400 text-6xl leading-none">“</p>
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {teamMembers[0].description}
          </p>
          <div className="mt-6">
            <h3 className="text-2xl font-bold mb-2">
              {teamMembers[0].name}
            </h3>
            <p className="text-lg text-gray-400">
              {teamMembers[0].title}
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={teamMembers[0].image}
            alt={teamMembers[0].name}
            className="rounded-lg object-cover h-80 w-80 md:w-full md:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
