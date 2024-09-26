"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const UseCasesCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-2 text-#CB8511">Use Cases</h2>
        <p className="text-gray-600 mb-8">
          Epiidosis Investments streamlines the investment process with a structured, transparent approach, from registration to project management.
        </p>

        {/* Carousel */}
        <div className="relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              <div className="embla__slide flex-none w-full">
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <div className="bg-white p-8 rounded-lg shadow-md max-w-xl">
                    <h3 className="text-2xl font-bold mb-4">Real Estate Asset Monetization</h3>
                    <p className="text-gray-600 mb-4">
                      An investor has a commercial property portfolio but needs liquidity to fund a new venture. Selling the properties directly would take time and reduce their value.
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold text-#CB8511">As a solution,</span> Epiidosis Investments creates an SPV to hold the properties and issue bonds backed by the assets. Investing in these instruments provides the developer with immediate liquidity. Revenue generated from the properties (e.g., rent) pays off the debt.
                    </p>
                  </div>
                  <div className="ml-4">
                    <img src="/path/to/image1.png" alt="Real Estate Asset Monetization" className="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>

              {/* Repeat similar structure for other slides */}
              <div className="embla__slide flex-none w-full">
                <div className="flex flex-col md:flex-row items-center justify-center">
                  <div className="bg-white p-8 rounded-lg shadow-md max-w-xl">
                    <h3 className="text-2xl font-bold mb-4">Intellectual Property (IP) Monetization</h3>
                    <p className="text-gray-600 mb-4">
                      Technology companies own valuable patents and trademarks but need capital to scale. The company does not want to sell its IP outright since it expects future growth.
                    </p>
                    <p className="text-gray-600">
                      <span className="font-bold text-#CB8511">A SPV is created</span> by Epiidosis Investments to hold IP assets, with securities or licenses backed by future revenues. While maintaining ownership of the company's intellectual property, investors provide the company with access to funds.
                    </p>
                  </div>
                  <div className="ml-4">
                    <img src="/path/to/image2.png" alt="Intellectual Property Monetization" className="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>

              {/* Add more slides as needed */}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-100 p-3 rounded-full"
            onClick={scrollPrev}
          >
            <span className="text-#CB8511">❮</span>
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-100 p-3 rounded-full"
            onClick={scrollNext}
          >
            <span className="text-#CB8511">❯</span>
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default UseCasesCarousel;
