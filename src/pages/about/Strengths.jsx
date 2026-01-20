import React from "react";
import { motion } from "motion/react";
import { Users, Award, Lightbulb } from "lucide-react";

const strengths = [
  {
    id: 1,
    icon: Award,
    title: "Experienced Leaders",
    description: "Seasoned technology enthusiasts and entrepreneurs",
    points: [
      "Proven track records of success stories spanning two decades",
      "Deep industry knowledge across multiple sectors",
      "Strategic vision driving innovation and growth",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: Users,
    title: "Talented Team",
    description: "Best in class technology professionals",
    points: [
      "Domain specialists and subject-matter experts",
      "Certified professionals in cutting-edge technologies",
      "Dedicated to continuous learning and improvement",
    ],
    color: "from-[#02b0f0] to-blue-600",
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "Unique Approach",
    description: "Client-centric methodology for success",
    points: [
      "Ability to offer and execute turnkey solutions from design to delivery",
      "Persistent after-sales service and support",
      "Proactive problem-solving and innovation",
    ],
    color: "from-cyan-500 to-teal-500",
  },
];

const StrengthCard = ({ strength, index }) => {
  const Icon = strength.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      {/* Card Container */}
      <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
        {/* Gradient Background on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${strength.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.2,
            type: "spring",
          }}
          className={`relative z-10 w-16 h-16 rounded-xl bg-gradient-to-br ${strength.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#02b0f0] transition-colors duration-300">
            {strength.title}
          </h3>
          <p className="text-gray-600 mb-6 font-medium">{strength.description}</p>

          {/* Points */}
          <ul className="space-y-3">
            {strength.points.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 + idx * 0.1 }}
                className="flex items-start gap-3 text-gray-700"
              >
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#02b0f0] flex-shrink-0" />
                <span className="text-sm leading-relaxed">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#02b0f0]/5 to-transparent rounded-tl-full transform translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-500" />
      </div>
    </motion.div>
  );
};

const Strengths = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="inline-block border border-[#02b0f0] rounded-3xl px-4 py-1.5 text-sm sm:text-base font-semibold uppercase tracking-wider mb-4">
            <span
              style={{
                WebkitTextStroke: "1px #02b0f0",
                WebkitTextFillColor: "transparent",
              }}
            >
              _Our Strengths_
            </span>
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Sets Us <span className="text-[#02b0f0]">Apart</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our success is built on three fundamental pillars that drive excellence
            in everything we do.
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <StrengthCard key={strength.id} strength={strength} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
