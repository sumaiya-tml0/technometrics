import React from "react";
import { motion } from "motion/react";

import heroImage1 from "@/assets/images/home/hero1.jpg";
import heroImage2 from "@/assets/images/home/hero2.jpg";
import heroBg from "@/assets/images/home/heroBg.jpg";

const Hero = () => {
  return (
    <div
      className="relative  min-h-[calc(100vh-5rem)] py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80 sm:bg-white/70 md:bg-white/60" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-12 gap-8">
        <div className="relative z-10 flex-1 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          <span style={{ WebkitTextStroke: "2px black", color: "transparent" }}>
            Thinkers, Leaders,
          </span>
          <br />
          <span className="text-[#02b0f0]">Champions</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          We specialize in information technology solutions for businesses and
          organizations.
        </p>
      </div>

      <div className="relative z-10 w-full h-87.5 sm:h-100 md:w-112.5 md:h-137.5 lg:w-137.5 lg:h-162.5 xl:w-150 xl:h-175 shrink-0">
        {/* First Image - slides in from right */}
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 right-0 w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-105 xl:h-105 object-cover rounded-tl-3xl rounded-br-3xl shadow-xl"
          src={heroImage1}
          alt="Hero"
        />

        {/* Second Image - slides in from left with delay */}
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-0 left-0 w-44 h-52 sm:w-56 sm:h-64 md:w-64 md:h-72 lg:w-80 lg:h-88 xl:w-96 xl:h-100 object-cover rounded-tr-3xl rounded-bl-3xl shadow-xl"
          src={heroImage2}
          alt="Hero"
        />
      </div>
      </div>
    </div>
  );
};

export default Hero;
