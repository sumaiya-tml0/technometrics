import React from "react";
import { motion } from "motion/react";

import heroImage1 from "@/assets/images/home/hero1.jpg";
import heroImage2 from "@/assets/images/home/hero2.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-5rem)]  lg:px-16 py-8 md:py-12 gap-8 md:gap-4">
      <div className="flex-1 max-w-xl text-center md:text-left">
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

      <div className="relative w-full h-87.5 sm:h-100 md:w-96 md:h-125 shrink-0">
        {/* First Image - slides in from right */}
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 right-0 w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-tl-3xl rounded-br-3xl shadow-xl"
          src={heroImage1}
          alt="Hero"
        />

        {/* Second Image - slides in from left with delay */}
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="absolute bottom-0 left-0 w-44 h-52 sm:w-56 sm:h-64 md:w-72 md:h-80 object-cover rounded-tr-3xl rounded-bl-3xl shadow-xl"
          src={heroImage2}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
