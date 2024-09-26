import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Optional if you prefer using framer-motion for smooth animation

type PropType = {
  slides: any;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: true });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const snapIndex = emblaApi.selectedScrollSnap();
    const index = snapIndex % slides.length;
    setSelectedIndex(index);
  }, [emblaApi, slides.length]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger the animation when 20% of the section is in view
  });

  return (
    <>
    <section className="embla p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-6" style={{ fontFamily: "Lato, sans-serif" }} ref={ref} >
    <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.7 }} // Animation duration
          >

      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#CB8511]" style={{ fontFamily: "Montserrat, sans-serif" }}>
        Our Funding Solutions
      </h2>
      <p className="text-center text-gray-600 mb-2 md:mx-52 text-sm md:text-base">
        Discover our curated funding solutions with asset-backed securities,
        providing investors with higher yields and greater stability.
      </p>

      <div className="relative mx-auto w-full h-[400px] md:h-[500px] lg:max-w-[1300px] lg:h-[500px] mb-8 md:mb-16">
        <div className="embla__viewport h-full pt-4 md:pt-8" ref={emblaRef}>
          <div className="embla__container flex gap-4 md:gap-6 h-full">
            {slides.map((item: any, index: number) => (
              <div
                className={`embla__slide flex-shrink-0 p-4 transition-transform duration-500 ease-in-out mb-4 md:mb-6 ${
                  index === selectedIndex ? "scale-100 md:scale-105 bg-white custom-shadow rounded-lg" : "scale-90 md:scale-95 bg-white-50 text-gray-400"
                }`}
                key={index}
                style={{
                  width: '80%',
                  height: '90%',
                  transition: 'all 0.5s ease',
                  opacity: index === selectedIndex ? 1 : 0.5,
                  zIndex: index === selectedIndex ? 10 : 5,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div className="flex flex-col items-center">
                  <img src={item?.image} alt={item?.title} className="mx-auto mt-4 mb-3 w-[40px] h-[40px] md:w-[50px] md:h-[50px]" />
                  <h3 className={`text-center text-lg md:text-xl font-extrabold mb-6 ${index === selectedIndex ? "text-gray-800" : "text-gray-400"}`} style={{ fontFamily: "Montserrat, sans-serif" }}>
                    {item?.title}
                  </h3>
                  <p className={`text-center text-xs md:text-sm leading-tight  ${index === selectedIndex ? "text-black" : "text-gray-400"}`} style={{ fontFamily: "Lato, sans-serif" }}>
                    {item?.desc}
                  </p>
                </div>
                <div className=" w-full flex justify-center mb-3">
                  <a href={item?.url} rel="noopener noreferrer" className="w-full md:w-auto">
                    <button
                      className={`w-full md:w-auto px-6 py-3 text-sm  font-bold ${
                        index === selectedIndex
                          ? "bg-black text-white hover:bg-[#1A9548]"
                          : "bg-gray-200 text-gray-400"
                      }`}
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      Read more
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons for Desktop (on both sides) */}
        <button
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          className="hidden md:flex items-center justify-center absolute top-1/2 left-[-20px] transform -translate-y-1/2 bg-[#CB8511] text-white w-12 h-12 rounded-full"
        >
          <img src="/home/icons/Normal-left.svg" alt="Left" />
        </button>
        <button
          onClick={() => emblaApi && emblaApi.scrollNext()}
          className="hidden md:flex items-center justify-center absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-[#CB8511] text-white w-12 h-12 rounded-full"
        >
          <img src="/home/icons/Normal-right.svg" alt="Right" />
        </button>

        {/* Navigation Buttons for Mobile */}
        <div className="flex justify-center mt-1 md:hidden">
          <button
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            className="w-8 h-8 flex items-center justify-center mx-2"
          >
            <img src="/home/icons/Normal-left.svg" alt="Left" className="w-12 h-12" />
          </button>
          <button
            onClick={() => emblaApi && emblaApi.scrollNext()}
            className="w-8 h-8 flex items-center justify-center mx-2 "
          >
            <img src="/home/icons/Normal-right.svg" alt="Right" className="w-12 h-12" />
          </button>
        </div>
      </div>
      </motion.div>

    </section>
    </>
  );
};

export default EmblaCarousel;