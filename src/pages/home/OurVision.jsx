import React from "react";
import { motion } from "motion/react";

import visionImage from "@/assets/images/home/hero1.jpg";

const OurVision = () => {
  return (
    <section className="py-16 md:py-24 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left - Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <img
                src={visionImage}
                alt="Our Vision"
                className="w-full h-64 sm:h-80 md:h-96 object-cover shadow-lg"
                style={{ clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)" }}
              />
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#02b0f0]/20 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h3 className="border border-[#02b0f0] rounded-3xl px-3 py-1.5 w-fit text-sm sm:text-base font-semibold uppercase tracking-wider mb-2">
              <span style={{ WebkitTextStroke: "1px #02b0f0", WebkitTextFillColor: "transparent" }}>
                Our Vision_
              </span>
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quality services is at the Heart of What We Do
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our team applies its wide-ranging experience to determine the
              strategies that will best enable our clients to achieve clear,
              long-term objectives, ensuring total quality of services.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
