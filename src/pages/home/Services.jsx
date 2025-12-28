import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Sparkles,
  Server,
  HardDrive,
  Flame,
  ShieldCheck,
  Code,
  Network,
  Headphones,
} from "lucide-react";

import dataTransform from "@/assets/images/home/digital-transformation-min.png";
import dataCenter from "@/assets/images/home/data-center-min-scaled.jpg";
import server from "@/assets/images/home/server-storage-min.png";
import fire from "@/assets/images/home/bms-fire-min.png";
import security from "@/assets/images/home/informatin-security-min.png";
import Software from "@/assets/images/home/bespoke-min.png";
import network from "@/assets/images/home/network-infra-min.png";
import contact from "@/assets/images/home/contact-center-min.png";

const services = [
  {
    icon: Sparkles,
    title: "Digital Transformation",
    image: dataTransform,
  },
  {
    icon: Server,
    title: "Datacanter",
    image: dataCenter,
  },
  {
    icon: HardDrive,
    title: "server, storage, backup & virtualization",
    image: server,
  },
  {
    icon: Flame,
    title: "BMS, Fire, Surveillance & Automation",
    image: fire,
  },
  {
    icon: ShieldCheck,
    title: "Information Security",
    image: security,
  },
  {
    icon: Code,
    title: "Bespoke Software Development",
    image: Software,
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    image: network,
  },
  {
    icon: Headphones,
    title: "Contact Center",
    image: contact,
  },
];

// Get responsive spread positions based on screen width
const getSpreadPositions = (screenWidth) => {
  // Mobile (< 640px) - 2 columns
  if (screenWidth < 640) {
    return [
      { x: -80, y: -280 },
      { x: 80, y: -280 },
      { x: -80, y: -70 },
      { x: 80, y: -70 },
      { x: -80, y: 140 },
      { x: 80, y: 140 },
      { x: -80, y: 350 },
      { x: 80, y: 350 },
    ];
  }
  // Tablet (640px - 1024px) - 3 columns layout
  if (screenWidth < 1024) {
    return [
      // Left (3)
      { x: -200, y: -180 },
      { x: -200, y: 40 },
      { x: -200, y: 260 },
      // Middle (2)
      { x: 0, y: -70 },
      { x: 0, y: 150 },
      // Right (3)
      { x: 200, y: -180 },
      { x: 200, y: 40 },
      { x: 200, y: 260 },
    ];
  }
  // Large tablet / small desktop (1024px - 1280px)
  if (screenWidth < 1280) {
    return [
      // Left (3)
      { x: -320, y: -150 },
      { x: -340, y: 70 },
      { x: -320, y: 290 },
      // Middle (2)
      { x: -100, y: -40 },
      { x: 100, y: 170 },
      // Right (3)
      { x: 320, y: -150 },
      { x: 340, y: 70 },
      { x: 320, y: 290 },
    ];
  }
  // Desktop (>= 1280px)
  return [
    // Left (3)
    { x: -420, y: -150 },
    { x: -450, y: 70 },
    { x: -420, y: 290 },
    // Middle (2)
    { x: -130, y: -40 },
    { x: 130, y: 170 },
    // Right (3)
    { x: 420, y: -150 },
    { x: 450, y: 70 },
    { x: 420, y: 290 },
  ];
};

const ServiceCard = ({ service, index, progress, totalCards, spreadPositions }) => {
  const Icon = service.icon;

  const spread = spreadPositions[index] || { x: 0, y: 0 };

  // Stacked deck effect - slight offset for each card to show depth
  const stackOffset = index * 5;

  // Transform from stacked (center) to spread positions
  const x = useTransform(progress, [0, 0.5], [0, spread.x]);
  const y = useTransform(progress, [0, 0.5], [stackOffset, spread.y]);
  const scale = useTransform(progress, [0, 0.5], [0.9, 1]);

  return (
    <motion.div
      style={{ x, y, scale, zIndex: totalCards - index }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[220px] md:w-[250px] lg:w-[280px] group overflow-hidden rounded-2xl cursor-pointer bg-gray-900 shadow-2xl"
    >
      {/* Background Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-300 group-hover:from-[#02b0f0]/90 group-hover:via-[#02b0f0]/60 group-hover:to-[#02b0f0]/30" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-white">
        {/* Icon Container */}
        <div className="mb-3 sm:mb-4 p-3 sm:p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 group-hover:bg-white group-hover:scale-110">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white transition-colors duration-300 group-hover:text-[#02b0f0]" />
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-center transition-transform duration-300 group-hover:-translate-y-1">
          {service.title}
        </h3>

        {/* Arrow indicator */}
        <div className="mt-3 sm:mt-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-xs sm:text-sm font-medium border-b border-white/50 pb-1">
            Learn More
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spreadPositions = getSpreadPositions(screenWidth);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h3 className="inline-block border border-[#02b0f0] rounded-3xl px-4 py-1.5 text-sm sm:text-base font-semibold uppercase tracking-wider mb-4">
            <span
              style={{
                WebkitTextStroke: "1px #02b0f0",
                WebkitTextFillColor: "transparent",
              }}
            >
              _what we offer_
            </span>
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Business Shaped Solutions
          </h2>
        </motion.div>

        {/* Services Cards Container */}
        <div className="relative h-[850px] sm:h-[600px] md:h-[650px] lg:h-[700px] flex items-center justify-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              progress={scrollYProgress}
              totalCards={services.length}
              spreadPositions={spreadPositions}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
