import React from "react";
import { motion } from "motion/react";

import visionImage1 from "@/assets/images/home/our_vision1.jpg";
import visionImage2 from "@/assets/images/home/our_vision2.jpg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const OurVision = () => {
  useGSAP(() => {
    // split the text into words, then chars (prevents word breaking)
    const text = document.querySelectorAll(".hero-text");
    text.forEach((element) => {
      const split = new SplitText(element, { type: "words,chars" });
      gsap.from(split.chars, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
        },
        opacity: 0.2,
        stagger: 0.02,
      });
    });
  }, []);
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <div>
            <img src={visionImage1} className="rounded-2xl" alt="" />
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 hero-text">
            We are committed to delivering excellence by combining deep
            technical expertise, industry best practices, and a client-centric
            approach in every solution we provide.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          {/* Left - Content */}

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full h-full flex flex-col justify-evenly text-center md:text-left"
          >
            <h3 className="border border-[#02b0f0] rounded-3xl px-3 py-1.5 w-fit text-sm sm:text-base font-semibold uppercase tracking-wider mb-2">
              <span
                style={{
                  WebkitTextStroke: "1px #02b0f0",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Vision_
              </span>
            </h3>
            <p>
              Our team applies its wide-ranging experience to determine the
              strategies that will best enable our clients to achieve clear,
              long-term objectives, ensuring total quality of services.
            </p>
          </motion.div>

          {/* middle - Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full"
          >
            <div className="relative">
              <img
                src={visionImage2}
                alt="Our Vision"
                className="w-full h-full sm:h-80 md:h-96 object-cover shadow-lg"
                style={{
                  clipPath:
                    "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
                }}
              />
              {/* Decorative element */}
              <motion.div
                //move the decorative element up and down slowly indefinitely
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#02b0f0]/20 rounded-2xl -z-10"
              />
            </div>
          </motion.div>

          {/* right - image + content  */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full h-full flex flex-col justify-evenly text-center md:text-left"
          >
            <div>
              <p>
                Through continuous improvement, innovation, and strict quality
                standards, we aim to empower organizations with dependable
                services that support sustainable growth, operational
                efficiency, and long-term success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
