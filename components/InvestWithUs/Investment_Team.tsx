"use client";
import React from "react";

const teamMembers = [
  {
    name: "Mohit Rana",
    title: "Head of Business Development",
    image: "/profile/portrait1.png", // Replace with the actual image path
    description: "With 17+ years of sales and business development experience in the finance industry, Mohit drives our business development strategies to ensure our growth."
  },
  {
    name: "Nalini Singh",
    title: "Chief Investment Officer",
    image: "/profile/portrait2.png", // Replace with the actual image path
    description: "With 17+ years of sales and business development experience in the finance industry, Nalini leads our investment strategies to optimize our growth."
  },
  {
    name: "Aayush Gupta",
    title: "Head of Marketing",
    image: "/profile/portrait3.png", // Replace with the actual image path
    description: "With 17+ years of sales and business development experience in the finance industry, Aayush steers our marketing strategies for effective client engagement."
  },
];

const LeadershipTeam: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold textgold mb-8">
            Investment Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-black text-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-t-lg flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Description in Background */}
              <div className="absolute inset-0 bg-black bg-opacity-50 text-gray-300 p-4 rounded-t-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm leading-tight">{member.description}</p>
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-sm text-gray-300 mb-4">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
