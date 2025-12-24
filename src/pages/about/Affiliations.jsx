import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import cisco from "@/assets/images/about/cisco.png";
import commvault from "@/assets/images/about/commvault.png";
import dell from "@/assets/images/about/dell_Technologies.png";
import fuji from "@/assets/images/about/Fuji_Electric.png";
import hpe from "@/assets/images/about/HPE.png";
import ibm from "@/assets/images/about/IBM.png";
import logrythm from "@/assets/images/about/logrythm.png";
import micro from "@/assets/images/about/microfocus.png";
import nutanix from "@/assets/images/about/nutanix.png";
import redhat from "@/assets/images/about/redhat.png";
import seceon from "@/assets/images/about/seceon.png";
import siren from "@/assets/images/about/siren.png";
import trend from "@/assets/images/about/trend-micro.png";
import vmware from "@/assets/images/about/vmware.png";
import juniper from "@/assets/images/about/juniper.png";
import dsc from "@/assets/images/about/dsc.jpg";
import comscope from "@/assets/images/about/Commscope.jpg";
import rosenberger from "@/assets/images/about/Rosenberger.png";
import legrand from "@/assets/images/about/Legrand.png";
import irem from "@/assets/images/about/Irem.png";
import schneider from "@/assets/images/about/Schneider.png";

const Affiliations = () => {
  const affiliations = [
    cisco,
    commvault,
    dell,
    fuji,
    hpe,
    ibm,
    logrythm,
    micro,
    nutanix,
    redhat,
    seceon,
    siren,
    trend,
    vmware,
    juniper,
    dsc,
    comscope,
    rosenberger,
    legrand,
    irem,
    schneider,
  ];

  return (
    <section id="affiliations" className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16">
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
            _Our OEM Affiliations_
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
            Trusted <span className="text-[#02b0f0]">Partners</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We collaborate with industry-leading technology providers to deliver
            world-class solutions.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 50,
              },
            }}
            className="affiliations-swiper"
          >
            {affiliations?.map((affiliation, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-24 sm:h-28 lg:h-32 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={affiliation}
                    alt={`Partner ${index + 1}`}
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
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

export default Affiliations;
