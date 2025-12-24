import React from "react";
import { motion } from "motion/react";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      {/* Background Image */}
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 group-hover:from-[#02b0f0]/90 group-hover:via-[#02b0f0]/60 group-hover:to-[#02b0f0]/30" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
        {/* Icon Container */}
        <div className="mb-4 p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 group-hover:bg-white group-hover:scale-110">
          <Icon className="w-8 h-8 text-white transition-colors duration-300 group-hover:text-[#02b0f0]" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-center transition-transform duration-300 group-hover:-translate-y-1">
          {service.title}
        </h3>

        {/* Hidden description that appears on hover */}

        {/* Arrow indicator */}
        <div className="mt-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-sm font-medium border-b border-white/50 pb-1">
            Learn More
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
