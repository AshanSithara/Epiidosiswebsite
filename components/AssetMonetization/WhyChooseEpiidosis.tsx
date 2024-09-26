"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const WhyChooseEpiidosis: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });
  return (
    <>
      <section className="py-12 bg-white" style={{
        fontFamily: "Lato, sans-serif",
      }}>
        <div ref={ref} className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl mb-2 textgold" style={{
              fontFamily: "Montserrat, sans-serif",
            }}>Why Choose Epiidosis
            </h2>
            <p className="text-gray-600 mb-8 md:mx-60">
              Our track record of maximizing asset values is complemented by tailored strategies and expert financial insight.
              We optimize your assets for the best returns, making us a trusted financial partner.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Expertise in Diversified Asset Classes */}
              <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
                <h3 className="text-xl font-bold mb-4" style={{
                  fontFamily: "Montserrat, sans-serif",
                }}>Expertise in Diversified Asset Classes</h3>
                <p>
                  From real estate and equities to intellectual property and digital assets, our team has a deep understanding
                  of various asset classes. Using this expertise, assets can be monetized across a wide range.
                </p>
              </div>

              {/* Global Network */}
              <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
                <h2 className="text-xl font-bold mb-4" style={{
                  fontFamily: "Montserrat, sans-serif",
                }}>Global Network</h2>
                <p>
                  Epiidosis Investments has a large network of industry contacts and investors to connect clients with the right
                  buyers, partners, or financiers. As a result of this global reach, investors have more opportunities to monetize assets.
                </p>
              </div>

              {/* Strong Market Insights */}
              <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
                <h3 className="text-xl font-bold mb-4" style={{
                  fontFamily: "Montserrat, sans-serif",
                }}>Strong Market Insights</h3>
                <p>
                  We identify the best opportunities for asset monetization based on comprehensive market research.
                  By understanding market dynamics, our team can time asset sales or leases to maximize profits.
                </p>
              </div>

              {/* Innovative Financial Solutions */}
              <div className="bg-[#FAFAFA] p-8 rounded-lg hover:bg-[#201E1F] hover:text-white transition duration-300 text-left">
                <h3 className="text-xl font-bold mb-4" style={{
                  fontFamily: "Montserrat, sans-serif",
                }}>Innovative Financial Solutions</h3>
                <p>
                  We offer a range of innovative financial solutions, including securitization, sale-leasebacks, and asset-backed loans.
                  In addition to allowing flexibility in unlocking liquidity from assets, these solutions also offer options that do not require selling the assets outright.
                </p>
              </div>
            </div>

            {/* Get in Touch Button */}
            <div className="mt-8" style={{
              fontFamily: "Montserrat, sans-serif",
            }}>
              <button className="bg-[#CB8511] text-white py-2 px-6 font-bold rounded-sm hover:bg-[#1A9548]">
                <a href="/funding-solution/asset-monetization/contact-us">Get in touch</a>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseEpiidosis;
