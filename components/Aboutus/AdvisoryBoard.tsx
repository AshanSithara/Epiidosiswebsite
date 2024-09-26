"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Updated teamMembers array with necessary changes
const teamMembers = [
  {
    name: "Geoffery Gangla",
    title: "With 22 years in Sub-Saharan Africa, Geoffrey has led $9bn in M&A and corporate finance transactions. Having worked in over 30 African countries, including South Africa, Nigeria, and Kenya, he excels in business strategy, development, and negotiation.",
    image: "/linkedin-icon/advisory1.png", // Replace with the actual image path
    linkedin: "https://www.linkedin.com/in/jeff-gangla-1a536a10/" // Replace with the actual LinkedIn URL
  },
  {
    name: "K.N Suvarna",
    title: "K. N. Suvarna boasts over 50 years in banking and finance. With a 40-year tenure at Bank of Baroda, he advanced from stenographer to General Manager and contributed to international operations. He also served on multiple boards, enhancing financial strategies.",
    image: "/linkedin-icon/advisory4.png", // Replace with the actual image path
    linkedin: "https://www.brickworkratings.com/BoardDirectorsKNSuvarna.aspx" // Replace with the actual LinkedIn URL
  },
  {
    name: "Mohit Rana",
    title: 'Mohit is a seasoned professional from IIM Lucknow and had worked in a variety of industries for over 17 years. He is a specialist in the ratings and ESG business in India and South East Asia markets .  He has been instrumental for markets such as Bonds, Mutual Funds, CPs, NCDs, ARC and Securitization businesses, Due Diligence,. Mohit is recognized as a thought leader and moderator in industry forums, recently receiving the "Digital Transformation & Innovation" Award 2023.',
    image: "/profile/portrait1.png", // Replace with the actual image path
    linkedin: "http://linkedin.com/in/mohit-rana-48590668" // Replace with the actual LinkedIn URL
  },
  {
    name: "Anil Mittal",
    title: "Anil Mittal has over 40 years of experience in corporate finance, industrial credit, retail banking, IT implementation, risk management, and compliance. Across various sectors, he has extensive experience in credit functions, financial analysis, and project finance. As a leader in retail banking, IT implementation, and compliance, he has made significant contributions to systemic improvement",
    image: "/linkedin-icon/advisory3.png", // Replace with the actual image path
    linkedin: "https://www.linkedin.com/in/anilmittal02101958/" // Replace with the actual LinkedIn URL
  },
  
  {
    name: "Jithendra Antonio",
    title: "His experience spans FMCG, Telecommunications, Media, Investment Banking, Real Estate, and Financial Services with 18+ years in senior management. He excels at strategic planning, brand management, stakeholder relations, and sales growth. In addition to mergers and acquisitions, he has specialized in strategic advisory, decentralized finance, blockchain and ICT technologies.",
    image: "/linkedin-icon/image.png", // Replace with the actual image path
    linkedin: "https://www.linkedin.com/in/jithendraantonio/" // Replace with the actual LinkedIn URL
  },
  
];


const InvestmentTeam: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
    <section className="py-16 bg-white" style={{
      fontFamily: "Lato, sans-serif",
    }} >
      <div ref={ref} className="container mx-auto px-6 md:px-12">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        {/* Adjusted Heading */}
        <h2 className="text-3xl md:text-4xl textgold text-center mb-16"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
          Advisory Board
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Increased gap for more space between cards */}
        {teamMembers.map((member, index) => (
  <div key={index} className="group bg-[#FAFAFA] text-gray-600 hover:bg-[#201E1F] hover:text-white transition duration-300 rounded-lg p-6 flex relative">
    <img
      src={member.image}
      alt={member.name}
      className="w-20 h-20 rounded-full object-cover absolute -top-6 bg-[#B4B9C9]"
    />
    <div className="ml-2 mt-14">
      <div className="flex items-center mb-2">
        <h3 className="text-lg font-bold "style={{
      fontFamily: "Montserrat, sans-serif",
    }}>{member.name}</h3>
        <div className="ml-2">
          <a href={member.linkedin}><img src="/linkedin-icon/linkedin-black.png" alt="LinkedIn" className="w-4 h-4 group-hover:hidden"/></a>
          <a href={member.linkedin}><img src="/linkedin-icon/linkedin-white.png" alt="LinkedIn Hover" className="w-4 h-4 hidden group-hover:block"/></a>
        </div>
      </div>
      <p className="text-sm">{member.title}</p>
    </div>
  </div>
))}

        </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default InvestmentTeam;
