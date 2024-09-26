"use client";
import React from "react";

interface Sector {
  title: string;
  description: string;
  image: string; // URL to the sector image
}

const sectors: Sector[] = [
  {
    title: "Renewable Energy",
    description:
      "Epiidosis Investments focuses on renewable energy by identifying and supporting innovative projects and companies that advance clean technologies. This includes investing in solar, wind, and other renewable energy sources, as well as related infrastructure and technologies. Our goal is to drive growth in the sector, promote sustainability, and achieve strong financial returns through strategic investments.",
    image: "/invest/image1.png", // Replace with actual image path
  },
  {
    title: "Oil And Gas",
    description:
      "As part of our approach to investing in the oil and gas sector, Epiidosis Investments targets companies and projects that offer high potential returns. This could involve direct investments in oil and gas exploration, production companies, infrastructure, or supporting technologies. To manage portfolio risk, our strategy focuses on balancing high-risk, high-reward opportunities with more stable, cash-generating assets. Due to the industry's regulatory environment, sustainability and compliance with environmental regulations will also be key considerations.",
    image: "/invest/image8.png", // Replace with actual image path
  },
  {
    title: "Healthcare",
    description:
      "Epiidosis invests in the healthcare industry by focusing on innovative companies and technologies that improve patient care and outcomes. We typically target sectors such as biotechnology, medical devices, digital health, and pharmaceuticals. We look for opportunities with strong growth potential, backing ventures that offer cutting-edge solutions to healthcare challenges. We provide capital, strategic guidance, and industry connections to help these companies scale and succeed.",
    image: "/invest/image7.png", // Replace with actual image path
  },
  {
    title: "Industrial Investments",
    description:
      "In the manufacturing industry, we identify and support companies with strong growth potential and innovative technologies. We provide capital for expansion, modernization, and operational improvements, aiming to enhance productivity and competitiveness. Our investment strategy focuses on sectors such as advanced manufacturing, automation, and sustainable production practices. Through a combination of equity investments, strategic partnerships, and advisory services, we help manufacturing companies scale efficiently and sustainably.",
    image: "/invest/image5.png", // Replace with actual image path
  },
  {
    title: "Tourism and Hospitality",
    description:
      "Epiidosis Investments targets high-potential projects in the Tourism and Hospitality industry by making equity investments in hotels, resorts, and travel-related businesses. We form strategic partnerships with established industry players, fund the development of tourism infrastructure, and support eco-friendly projects that align with ESG criteria. Additionally, we invest in technology innovations that enhance customer experience and operational efficiency.",
    image: "/invest/image2.png", // Replace with actual image path
  },
  {
    title: "Commercial",
    description:
      "Epiidosis focuses on investing in the commercial industry by identifying and supporting businesses with high growth potential. We provide capital, strategic guidance, and operational support to help these companies expand and succeed. Our approach includes thorough market analysis, risk assessment, and leveraging industry expertise to ensure profitable and sustainable investments.",
    image: "/invest/image3.png", // Replace with actual image path
  },
  {
    title: "Agriculture",
    description:
      "Our team invests in the agriculture industry by focusing on innovative and sustainable practices. We identify projects that enhance productivity, improve supply chain efficiency, and promote environmental sustainability. This includes investing in agritech startups, sustainable farming practices, precision agriculture, and renewable energy solutions in farming operations. Our approach aims to support the growth of the agriculture sector while addressing challenges related to climate change and resource management.",
    image: "/invest/image4.png", // Replace with actual image path
  },
  
  {
    title: "Education",
    description:
      "We focus on the education industry by identifying and funding innovative educational technologies, institutions, and programs. We invest in startups and established companies that offer scalable solutions for improving educational access, quality, and outcomes. This includes edtech platforms, online learning tools, and institutions that prioritize skill development and lifelong learning. Our goal is to support transformative educational initiatives that can deliver significant social and financial returns.",
    image: "/invest/image6.png", // Replace with actual image path
  },
  
  
];

const TargetSectors: React.FC = () => {
  
  return (
    <>
    <section className="py-12 bg-white"style={{
      fontFamily: "Lato, sans-serif",
    }}>
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="textgold md:text-4xl text-3xl mb-4" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
            Target Sectors
          </h2>
          <p className="text-gray-700">
            Take a look at our investment strategies across various industries
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="relative rounded-lg group"
            >
              <img
                src={sector.image}
                alt={sector.title}
                className="object-cover"
              />
              {/* Container for title and description */}
              <div className="absolute inset-0 bg-opacity-10 p-8 flex flex-col justify-end transition-all duration-700 ease-in-out group-hover:pb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-all duration-700 ease-in-out" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
                  {sector.title}
                </h3>
                <p className="text-white overflow-hidden transition-all duration-700 ease-in-out">
                  {/* Default truncated description */}
                  <div className="group">
  <span className="sm:text-sm md:text-base block md:max-h-12 overflow-hidden group-hover:max-h-56 transition-all duration-700 ease-in-out">
    {sector.description}
  </span>
</div>

                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default TargetSectors;
