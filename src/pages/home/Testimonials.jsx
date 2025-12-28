import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Gias Uddin Ahmed",
    role: "Managing Director, Teletalk Bangladesh LTD",
    content:
      "Technometrics' hands on approach has enabled us to mitigate many challenges swiftly before they could turn into serious supply chain disasters. In today's dynamic business climate, speed, reliability and efficiency is the key to a successful client vendor relationship.",
    size: "large",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, DataFlow Systems",
    content:
      "Outstanding cloud solutions and support. Highly recommended for any enterprise.",
    size: "small",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Director, SecureNet",
    content:
      "Their cybersecurity team identified vulnerabilities we didn't know existed. Professional and thorough.",
    size: "medium",
  },
  {
    id: 4,
    name: "David Park",
    role: "Manager, Global Logistics",
    content:
      "The network infrastructure they built for us handles millions of transactions seamlessly. Exceptional work!",
    size: "medium",
  },
  {
    id: 5,
    name: "Amanda Foster",
    role: "VP Operations, FinCore",
    content:
      "From consultation to implementation, the team exceeded our expectations at every step.",
    size: "small",
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-1 row-span-1",
    large: "col-span-1 md:col-span-2 row-span-1",
  };

  const cardHeights = {
    small: "min-h-[200px]",
    medium: "min-h-[220px]",
    large: "min-h-[200px]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`${sizeClasses[testimonial.size]} ${
        cardHeights[testimonial.size]
      } bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden group`}
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#02b0f0]/10 to-transparent rounded-bl-full" />

      {/* Quote icon */}
      <Quote className="w-8 h-8 text-[#02b0f0]/30 mb-3 group-hover:text-[#02b0f0]/50 transition-colors duration-300" />

      {/* Content */}
      <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-grow">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-[#02b0f0]">{testimonial.role}</p>
      </div>

      {/* Animated accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#02b0f0] to-[#02b0f0]/50"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
      />
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50 overflow-hidden">
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
              _Testimonials_
            </span>
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            What People Say
          </h2>
        </motion.div>

        {/* Testimonials Grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20">
          {/* Row 1 */}
          <TestimonialCard testimonial={testimonials[0]} index={0} />
          <TestimonialCard testimonial={testimonials[1]} index={1} />

          {/* Row 2 */}
          <TestimonialCard testimonial={testimonials[2]} index={2} />
          <TestimonialCard testimonial={testimonials[3]} index={3} />
          <TestimonialCard testimonial={testimonials[4]} index={4} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
