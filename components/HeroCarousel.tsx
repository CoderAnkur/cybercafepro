"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    img: "/images/slide1.jpg",
    title: "Govt Form Filling",
    desc: "Accurate & fast form submission",
  },
  {
    img: "/images/slide2.jpg",
    title: "Resume Building",
    desc: "Professional resumes that get jobs",
  },
  {
    img: "/images/slide3.jpg",
    title: "PDF Editing",
    desc: "Edit, convert & optimize documents",
  },
  {
    img: "/images/slide4.jpg",
    title: "Online Services",
    desc: "All cyber services in one place",
  },
  {
    img: "/images/slide5.jpg",
    title: "Fast Delivery",
    desc: "Work completed within 24-48 hrs",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">

      <AnimatePresence mode="wait">
     <motion.div
  key={index}
  initial={{ opacity: 0, scale: 1.05 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 1.02 }}
  transition={{
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1], // smooth easing (material/ios feel)
  }}
  className="absolute w-full h-full"
>
          {/* Background Image */}
          <img
            src={slides[index].img}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">

            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              {slides[index].title}
            </h2>

            <p className="text-lg max-w-xl">
              {slides[index].desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </div>
  );
}