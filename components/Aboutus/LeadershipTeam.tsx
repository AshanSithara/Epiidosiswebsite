"use client";
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; 

const teamMembers = [
  {
    name: "Narender Chauhan",
    title: "Director Operations (India)",
    image: "/profile/portrait2.png",
    description: "With 15+ years of experience in Business Development and Administration, Narender Kumar Chauhan is based in Epiidosis India and brings extensive experience and strategic insights to our leadership team."
  },
  {
    name: "Ujjwal Singh",
    title: "Director Administration (India)",
    image: "/profile/portrait3.png",
    description: "With 10+ years of experience, Ujjwal Singh is based in our India office and ensures seamless operations and efficient administration, contributing to our company's success."
  },
  {
    name: "Nalini Jeswani",
    title: "Director - Strategy Finance",
    image: "/profile/portrait6.png",
    description: "Chartered Financial Analyst with 20 years of experience in investment banking, portfolio management, and M&A. Proactive strategist, skilled in identifying trends and driving profitability to achieve organizational goals."
  },
  {
    name: "Aayush Gupta",
    title: "Head of Marketing",
    image: "/profile/portrait7.png",
    description: "Aayush leads our strategic marketing, driving brand growth and sustainable business expansion. His marketing strategy involves translating opportunities and propositions into business development and communication strategies."
  },
];

const LeadershipTeam: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Setting mobile size to screen width <= 768px
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log("Swiped left");
    },
    onSwipedRight: () => {
      console.log("Swiped right");
    },
    trackMouse: true,
  });

  const teamMemberStyle: React.CSSProperties = {
    flex: "0 0 auto",
    width: isMobile ? "200px" : "310px", // Smaller width on mobile
    backgroundColor: "black",
    color: "white",
    padding: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s",
    overflow: "hidden",
    margin: "0 0.5rem",
    textAlign: "center",
    position: "relative",
  };
  
  const imageContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: isMobile ? "9rem" : "19rem", // Adjust height for mobile
    marginTop: "0.5rem",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  
  const imageStyle: React.CSSProperties = {
    width: isMobile ? "78%" : "90%", // Reduce image size further for mobile
    height: isMobile ? "89%" : "90%", // Reduce height further
    objectFit: "cover",
    transition: "opacity 0.5s ease-in-out",
    zIndex: 2,
  };
  
  const descriptionStyle: React.CSSProperties = {
    position: "absolute",
    inset: "0",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    opacity: 0.3,
    transition: "opacity 0.5s ease-in-out",
    color: "white",
    textAlign: "justify",
    fontSize: isMobile ? "0.45rem" : "0.75rem", // Reduce font size on mobile
    lineHeight: isMobile ? "0.5rem" : "1.25rem", // Adjust line height
    width: "100%",
    height: "100%",
  };
  
  const containerStyle: React.CSSProperties = {
    display: "flex",
    overflowX: "auto",
    scrollBehavior: "smooth",
    padding: "0 1rem",
  };
  
  const nameStyle: React.CSSProperties = {
    fontSize: isMobile ? "0.85rem" : "1.25rem", // Smaller name size on mobile
    fontWeight: "bold",
    marginBottom: "0.25rem",
    fontFamily: "Montserrat, sans-serif",
  };
  
  const titleStyle: React.CSSProperties = {
    fontSize: isMobile ? "0.65rem" : "1rem", // Smaller title size on mobile
    color: "#ccc",
  };
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });

  return (
    <>
    <section className="py-8 bg-white" style={{ fontFamily: "Lato, sans-serif" }}>
      <div ref={ref} className="container mx-auto px-6 text-center">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <h2 className="text-3xl md:text-4xl textgold mb-8">
          Leadership & Management Team
        </h2>
        <div style={containerStyle} {...handlers}>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={teamMemberStyle}
              onMouseEnter={(e) => {
                const element = e.currentTarget as HTMLElement;
                const description = element.querySelector('.description') as HTMLElement;
                const image = element.querySelector('.image') as HTMLElement;
  
                if (description && image) {
                  description.style.opacity = '1';
                  image.style.opacity = '0';
                  element.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
                }
              }}
              onMouseLeave={(e) => {
                const element = e.currentTarget as HTMLElement;
                const description = element.querySelector('.description') as HTMLElement;
                const image = element.querySelector('.image') as HTMLElement;
  
                if (description && image) {
                  description.style.opacity = '0.3';
                  image.style.opacity = '1';
                  element.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
                }
              }}
            >
              <div style={imageContainerStyle}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="image"
                  style={imageStyle}
                />
                <div className="description" style={descriptionStyle}>
                  <p>{member.description}</p>
                </div>
              </div>
              <h3 style={nameStyle}>{member.name}</h3>
              <p style={titleStyle}>{member.title}</p>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
    </>
  );
  
};

export default LeadershipTeam;
