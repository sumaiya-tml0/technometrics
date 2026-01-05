import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import imageList from "../../../public/client.json";

const Clients = () => {
  return (
    <section
      id="clients"
      className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-gray-900"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#02b0f0] font-semibold text-sm uppercase tracking-wider">
            _Our Clients_
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Companies That <span className="text-[#02b0f0]">Trust Us</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We are proud to serve leading organizations across various
            industries.
          </p>
        </motion.div>

        {/* Swiper Carousel - Reverse Direction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 60,
              },
            }}
            className="clients-swiper"
          >
            {imageList?.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-20 sm:h-24 lg:h-28 p-4 border border-gray-700 rounded-xl bg-gray-800/50 hover:bg-gray-800 hover:border-[#02b0f0]/50 transition-all duration-300">
                  <img
                    src={client}
                    alt={`Client ${index + 1}`}
                    className="max-h-full max-w-full object-contain inverttransition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
