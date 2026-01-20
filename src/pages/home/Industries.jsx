import React from "react";
import { motion } from "motion/react";
import {
  Landmark,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Factory,
  Plane,
  Wifi,
} from "lucide-react";

const industries = [
  {
    id: 1,
    icon: Landmark,
    title: "Government & Public Sector",
    description:
      "Digital transformation solutions for government agencies and public institutions.",
  },
  {
    id: 2,
    icon: Building2,
    title: "Banking & Finance",
    description:
      "Secure financial technology solutions for banks, insurance, and fintech companies.",
  },
  {
    id: 3,
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Innovative healthcare IT solutions for hospitals, clinics, and medical institutions.",
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Education",
    description:
      "E-learning platforms and educational technology for schools and universities.",
  },
  {
    id: 5,
    icon: ShoppingCart,
    title: "Retail & E-Commerce",
    description:
      "End-to-end retail solutions including POS systems, inventory, and online stores.",
  },
  {
    id: 6,
    icon: Factory,
    title: "Manufacturing",
    description:
      "Industrial automation and smart manufacturing solutions for operational excellence.",
  },
  {
    id: 7,
    icon: Plane,
    title: "Travel & Hospitality",
    description:
      "Booking systems, property management, and customer experience solutions.",
  },
  {
    id: 8,
    icon: Wifi,
    title: "Telecommunications",
    description:
      "Network infrastructure, OSS/BSS solutions, and telecom software development.",
  },
];

const IndustryCard = ({ industry, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02b0f0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="relative z-10 w-14 h-14 rounded-xl bg-[#02b0f0]/10 flex items-center justify-center mb-4 group-hover:bg-[#02b0f0] transition-colors duration-300">
        <industry.icon className="w-7 h-7 text-[#02b0f0] group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="relative z-10 text-lg font-bold text-gray-900 mb-2 group-hover:text-[#02b0f0] transition-colors duration-300">
        {industry.title}
      </h3>
      <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
        {industry.description}
      </p>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#02b0f0]/5 rounded-tl-full transform translate-x-4 translate-y-4 group-hover:bg-[#02b0f0]/10 transition-colors duration-300" />
    </motion.div>
  );
};

const Industries = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h3 className="inline-block border border-[#02b0f0] rounded-3xl px-4 py-1.5 text-sm sm:text-base font-semibold uppercase tracking-wider mb-4">
            <span
              style={{
                WebkitTextStroke: "1px #02b0f0",
                WebkitTextFillColor: "transparent",
              }}
            >
              _Industries_
            </span>
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sectors We Serve
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver tailored technology solutions across diverse industries,
            helping organizations achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
