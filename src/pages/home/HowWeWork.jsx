import React from "react";
import { motion } from "motion/react";
import {
  Search,
  Lightbulb,
  Code2,
  CheckCircle,
  Rocket,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "We begin by understanding your business needs, challenges, and goals through in-depth consultations and thorough analysis.",
  },
  {
    id: 2,
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Our experts develop a comprehensive roadmap with clear milestones, timelines, and deliverables tailored to your requirements.",
  },
  {
    id: 3,
    icon: Code2,
    title: "Development & Implementation",
    description:
      "Using cutting-edge technologies and best practices, we build robust solutions that align with your business objectives.",
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing ensures your solution meets the highest standards of quality, security, and performance.",
  },
  {
    id: 5,
    icon: Rocket,
    title: "Deployment & Support",
    description:
      "We ensure smooth deployment and provide ongoing support to keep your systems running optimally.",
  },
];

const StepCard = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-center gap-6"
    >
      {/* Step number and icon */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative z-10 flex-shrink-0"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#02b0f0] flex items-center justify-center shadow-lg">
          <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold">
          {step.id}
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

const HowWeWork = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
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
              _Our Process_
            </span>
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our proven methodology ensures successful project delivery through a
            structured yet flexible approach.
          </p>
        </motion.div>

        {/* Steps - Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-[#02b0f0]/20 via-[#02b0f0] to-[#02b0f0]/20" />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 mx-auto mb-6"
                >
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-[#02b0f0] flex items-center justify-center shadow-lg mx-auto">
                    <step.icon className="w-9 h-9 text-[#02b0f0]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#02b0f0] text-white flex items-center justify-center text-sm font-bold shadow-md">
                    {step.id}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile/Tablet List */}
        <div className="lg:hidden space-y-8">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-10 top-0 bottom-0 w-0.5 bg-[#02b0f0]/20" />

          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
