"Use client";
import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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
    <section ref={ref} className="embla lg:p-4 flex flex-col gap-6 font-montserrat mx-auto">
    <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
      <h2 className="text-center text-3xl md:text-4xl textgold"style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
        Use Cases
      </h2>
      <p className="text-center text-gray-600 md:mx-72">
        Epiidosis Investments streamlines the investment process with a structured, transparent approach, from registration to project management.
      </p>

      <div className="relative mx-auto w-full h-[300px] md:h-[400px] lg:max-w-[1000px] lg:h-[500px]">
        <div className="flex justify-between items-center absolute inset-0 z-10 transform -translate-y-1/2 top-[50%]">
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
        
        </div>
        

        <div className="embla__viewport md:h-full w-auto" ref={emblaRef}>
          <div className="embla__container flex gap-6 h-full">
            {slides.map((item: any, index: number) => (
              <div
                className={`embla__slide flex-shrink-0 p-4 transition-transform duration-500 ease-in-out mt-6 mb-6${
                  index === selectedIndex
                    ? "scale-105 bg-white shadow-lg shadow-slate-100 rounded-lg"
                    : "scale-95 bg-white-50 text-gray-400"
                }`}
                key={index}
                style={{
                  width: '100%',
                  height: '90%',
                  transition: 'all 0.5s ease',
                  opacity: index === selectedIndex ? 1 : 0.5,
                  zIndex: index === selectedIndex ? 10 : 5,
                }}
              >
                <div className="h-full p-6 flex flex-row rounded gap-8 justify-between items-center">
                  {/* Text Content */}
                  <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <h3
                      className={`text-left text-2xl font-black ${
                        index === selectedIndex
                          ? "text-gray-800"
                          : "text-gray-400"
                      }`}
                      style={{
      fontFamily: "Montserrat, sans-serif",
    }}
                    >
                      {item?.title}
                    </h3>
                    <p
                      className={`md:text-left text-md sm:text-sm leading-6 ${
                        index === selectedIndex
                          ? "text-gray-600"
                          : "text-gray-400"
                      }`}
                      style={{
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      {item?.desc}
                    </p>
                    <div className="flex justify-start">
                      {/* <button
                        className={`px-4 py-2 text-sm rounded ${
                          index === selectedIndex
                            ? "bg-black text-white hover:bg-[#1A9548]"
                            : "bg-gray-200 text-gray-400"
                        }`}
                      >
                        Read more
                      </button> */}
                    </div>
                  </div>

                  {/* Image Content */}
                  <div className="w-full md:w-1/2 flex justify-center hidden md:block">
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="mb-4 md:w-[500px] md:h-[500px] md:object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Buttons for Mobile */}
        <div className="flex justify-center mt-4 md:hidden">
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
