import React from "react";
import { motion } from "motion/react";

import heroBg from "@/assets/images/home/heroBg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:gap-12 gap-8 pt-32 sm:pt-48 md:pt-56 lg:pt-72 relative z-10">
        <div className="relative z-10 flex-1 text-center lg:text-left">
          <p className="text-white text-sm sm:text-base md:text-lg w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto lg:mx-0">
            We deliver innovative information technology solutions that empower
            businesses and organizations to grow with confidence.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-row justify-center lg:justify-start gap-3 sm:gap-4">
            <Button className="uppercase px-4 py-5 sm:p-6 text-sm sm:text-base bg-[#02b0f0] text-white hover:bg-[#02b0f0]/90 cursor-pointer">
              learn more <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button className="uppercase p-3 sm:p-4 rounded-full bg-[#02b0f0] text-white hover:bg-[#02b0f0]/90 cursor-pointer">
              <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

         
        </div>
      </div>
      {/* Marquee Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...Array(2)].map((_, i) => (
            <h2
              key={i}
              className="text-3xl sm:text-4xl lg:text-8xl font-bold uppercase text-white mx-4"
              style={{ WebkitTextStroke: "2px white", color: "transparent" }}
            >
              Thinkers ✴ Leaders ✴ Champions ✴
            </h2>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
