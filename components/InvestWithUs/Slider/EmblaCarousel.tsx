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
    <section className="embla p-6 lg:p-8 flex flex-col gap-6 font-montserrat">
      <h2 className="text-center md:text-4xl text-3xl textgold" style={{
      fontFamily: "Montserrat, sans-serif",
    }}>
      Monetary Benefits to Clients
      </h2>

      <div ref={ref} className="relative mx-auto w-full h-[300px] md:h-[500px] lg:max-w-[1300px] lg:h-[500px] mb-16">
      <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with content below and hidden
            animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to visible and at the right position
            transition={{ duration: 0.8 }} // Animation duration
          >
        <div className="flex justify-between items-center absolute inset-0 z-10 transform -translate-y-1/2 top-[35%]">
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

        <div className="embla__viewport md:h-full pt-8" ref={emblaRef}>
          <div className="embla__container flex gap-6 h-full">
            {slides.map((item: any, index: number) => (
              <div
                className={`embla__slide md:flex-shrink-0 md:p-4 transition-transform duration-500 ease-in-out mb-6${
                  index === selectedIndex
                    ? "scale-105 bg-white custom-shadow rounded-lg"
                    : "scale-95 bg-white-50 text-gray-400"
                }`}
                key={index}
                style={{
                  width: '60%',
                  height: '70%',
                  transition: 'all 0.5s ease',
                  opacity: index === selectedIndex ? 1 : 0.5,
                  zIndex: index === selectedIndex ? 10 : 5,
                }}
              >
                <div className="h-full p-6 flex flex-col rounded gap-1 justify-between mt-4">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="mx-auto w-[50px] h-[50px]"
                  />
                  <h3
                    className={`text-center text-xl font-extrabold  ${
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
                    className={`text-justify text-sm mb-10 leading-tight mt-4  ${
                      index === selectedIndex
                        ? "textblack-sm"
                        : "text-gray-400"
                    }`}
                    style={{
                      fontFamily: "Lato, sans-serif",
                    }}
                  >
                    {item?.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Buttons for Mobile */}
        <div className="flex justify-center md:hidden">
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
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default EmblaCarousel;
