import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://i.ibb.co/WjfdGsN/Beige-and-Green-Modern-Illustrated-Hobby-Desktop-Wallpaper.png",
  "https://i.ibb.co/BVDKqVsL/Beige-and-Brown-Modern-Illustrated-Coffee-Lover-Desktop-Wallpaper.png",
  "https://i.ibb.co/q3yw0J1Y/Green-and-Yellow-Simple-Nature-Lake-Desktop-Wallpaper.png",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
};

const wrapIndex = (idx, length) => (idx + length) % length;

const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const timeoutRef = useRef(null);

  // Auto-slide effect
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setPage(([prevPage]) => [
        wrapIndex(prevPage + 1, images.length),
        1,
      ]);
    }, 1000); // 1 second

    return () => clearTimeout(timeoutRef.current);
  }, [page]);

  // Manual navigation resets timer
  const paginate = (newDirection) => {
    clearTimeout(timeoutRef.current);
    setPage(([prevPage]) => [
      wrapIndex(prevPage + newDirection, images.length),
      newDirection,
    ]);
  };

  const goToSlide = (idx) => {
    clearTimeout(timeoutRef.current);
    setPage(([prevPage]) => [
      idx,
      idx > page ? 1 : -1,
    ]);
  };

  return (
    <div className="py-12">
      <div className="relative w-full h-[550px] rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#232B3A]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[page]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 40 },
              opacity: { duration: 0.3 },
            }}
            className="w-full h-[550px] object-cover"
            alt={`slide-${page + 1}`}
          />
        </AnimatePresence>
        {/* Left Arrow */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#4F2FFB] text-white rounded-full p-2 shadow hover:bg-[#3a23b3] transition"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        {/* Right Arrow */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#4F2FFB] text-white rounded-full p-2 shadow hover:bg-[#3a23b3] transition"
          aria-label="Next Slide"
        >
          &#8594;
        </button>
      </div>
      {/* Indicators */}
      <div className="flex w-full justify-center gap-2 py-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`btn btn-xs transition-all duration-200 ${
              page === idx ? "btn-primary scale-110" : ""
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;