import React, { useRef } from "react";
import { motion } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Gias Uddin Ahmed",
    role: "Managing Director, Teletalk Bangladesh LTD",
    content:
      "Technometrics' hands on approach has enabled us to mitigate many challenges swiftly before they could turn into serious supply chain disasters. In today's dynamic business climate, speed, reliability and efficiency is the key to a successful client vendor relationship.",
  },
  {
    id: 2,
    name: "BRAC University",
    role: "Premier Educational Institution",
    content:
      "The comprehensive security surveillance and unified communication solution delivered by Technometrics has transformed our campus operations. The integration of 1600+ CCTV cameras with intelligent parking management demonstrates their technical excellence.",
  },
  {
    id: 3,
    name: "Huawei Technologies",
    role: "Global Technology Leader",
    content:
      "Technometrics successfully implemented our complete Bangladesh HQ infrastructure including network, data center, and AV systems across 47 meeting rooms. Their turnkey approach from design to delivery exceeded our expectations.",
  },
];

const TestimonialCard = ({ testimonial, index }) => {
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
      className="bg-white rounded-2xl p-6 shadow-lg transition-shadow duration-300 flex flex-col justify-between relative overflow-hidden group h-full min-h-[280px] sm:min-h-[300px]"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-[#02b0f0]/10 to-transparent rounded-bl-full" />

      {/* Quote icon */}
      <Quote className="w-8 h-8 text-[#02b0f0]/30 mb-3 group-hover:text-[#02b0f0]/50 transition-colors duration-300" />

      {/* Content */}
      <p className="text-gray-600 text-sm md:text-xl leading-relaxed grow text-center">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-[#02b0f0]">{testimonial.role}</p>
      </div>

      {/* Animated accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-[#02b0f0] to-[#02b0f0]/50"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
      />
    </motion.div>
  );
};

const Testimonials = () => {
  const swiperRef = useRef(null);

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

        <div className="max-w-4xl mx-auto relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {testimonials?.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <TestimonialCard testimonial={testimonial} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Handlers - Bottom Right */}
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#02b0f0] flex items-center justify-center text-[#02b0f0] hover:bg-[#02b0f0] hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#02b0f0] flex items-center justify-center text-white hover:bg-[#02b0f0]/80 transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
