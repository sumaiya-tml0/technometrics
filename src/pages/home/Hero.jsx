import React from "react";
import { motion } from "motion/react";

import heroBg from "@/assets/images/home/hero.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Animated background accent */}
      <motion.div
        className="absolute top-1/4 -right-32 w-96 h-96 bg-[#02b0f0]/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-32 w-80 h-80 bg-[#02b0f0]/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center lg:items-start justify-center min-h-[80vh] pt-24 sm:pt-32 relative z-10">
        <div className="relative z-10 text-center lg:text-left text-white">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight w-full sm:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto lg:mx-0"
          >
            We specialize in Information Technology services
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/80 w-full sm:w-3/4 lg:w-2/3 xl:w-2/5 mx-auto lg:mx-0"
          >
            We provide end-to-end information technology services built on
            quality, expertise, and trust— helping organizations move forward
            with confidence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-6 sm:mt-8 flex flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <Button className="uppercase px-4 py-5 sm:p-6 text-sm sm:text-base bg-[#02b0f0] text-white hover:bg-[#02b0f0]/90 hover:scale-105 transition-transform cursor-pointer">
              learn more <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button className="uppercase p-3 sm:p-4 rounded-full bg-[#02b0f0] text-white hover:bg-[#02b0f0]/90 hover:scale-110 transition-transform cursor-pointer">
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
