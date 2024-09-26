"use client";
import React from "react";

const clientsAndPartners = [
  { id: 1, name: "Buffer", logo: "/logos/logo1.png" },
  { id: 2, name: "Stripe", logo: "/logos/logo2.png" },
  { id: 3, name: "Netflix", logo: "/logos/logo3.png" },
  { id: 4, name: "Framer", logo: "/logos/logo4.png" },
  { id: 5, name: "HubSpot", logo: "/logos/logo5.png" },
  { id: 6, name: "HubSpot", logo: "/logos/logo9.svg" },
  { id: 7, name: "Dropbox", logo: "/logos/logo6.png" },
  { id: 8, name: "Buffer", logo: "/logos/logo7.png" },
  { id: 9, name: "Stripe", logo: "/logos/logo8.png" },
  { id: 10, name: "Buffer", logo: "/logos/logo1.png" },
  { id: 11, name: "Stripe", logo: "/logos/logo2.png" },
  { id: 12, name: "Netflix", logo: "/logos/logo3.png" },
  { id: 13, name: "Framer", logo: "/logos/logo4.png" },
  { id: 14, name: "HubSpot", logo: "/logos/logo5.png" },
  { id: 15, name: "HubSpot", logo: "/logos/logo9.svg" },
  { id: 16, name: "Dropbox", logo: "/logos/logo6.png" },
  { id: 17, name: "Buffer", logo: "/logos/logo7.png" },
  { id: 18, name: "Stripe", logo: "/logos/logo8.png" },
  { id: 19, name: "Buffer", logo: "/logos/logo1.png" },
  { id: 10, name: "Stripe", logo: "/logos/logo2.png" },
  { id: 21, name: "Netflix", logo: "/logos/logo3.png" },
  { id: 22, name: "Framer", logo: "/logos/logo4.png" },
  { id: 23, name: "HubSpot", logo: "/logos/logo5.png" },
  { id: 24, name: "HubSpot", logo: "/logos/logo9.svg" },
  { id: 25, name: "Dropbox", logo: "/logos/logo6.png" },
  { id: 26, name: "Buffer", logo: "/logos/logo7.png" },
  { id: 27, name: "Stripe", logo: "/logos/logo8.png" },
];

const FooterCarousel: React.FC = () => {
  return (
    <>
    <section className="py-12 my-12 bg-white relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-3xl textgold mb-8"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
          Our Clients and Partners
        </h2>
        <div className="overflow-hidden relative marquee-container">
          <div className="animate-marquee gap-px">
            {clientsAndPartners.concat(clientsAndPartners).map((client, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-18 mx-8 logo-image opacity-100"
                />
              </div>
            ))}
          </div>

          {/* Left Gradient */}
          <div className="absolute left-0 top-0 h-full w-72 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          {/* Right Gradient */}
          <div className="absolute right-0 top-0 h-full w-72 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 200s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-1000%);
          }
        }

        /* Default logo size */
        .logo-image {
          height: 72px; /* Default logo height for larger screens */
          transition: opacity 0.3s; /* Hover effect on desktop */
        }

        /* Hover effect on desktop */
        .logo-image:hover {
          opacity: 0.7;
        }

        /* Media query for mobile view */
        @media (max-width: 768px) {
          .logo-image {
            height: 32px; /* Reduced size for mobile view */
            margin: 0 4px; /* Reduced margin for better fitting */
            transition: none; /* Disable transitions on mobile */
          }

          /* Remove hover effects on mobile */
          .logo-image:hover {
            opacity: 1; /* No opacity change on hover in mobile view */
          }
        }
      `}</style>
    </section>
    </>
  );
};

export default FooterCarousel;
