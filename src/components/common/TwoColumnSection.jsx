import { motion } from "motion/react";

const TwoColumnSection = ({
  id,
  subtitle,
  title,
  highlightedText,
  description,
  images,
  reverse = false,
}) => {
  return (
    <section id={id} className={`py-16 lg:py-24 px-4 sm:px-8 lg:px-16`}>
      <div className="container mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Images Section */}
          <div
            className={`relative flex justify-center items-center min-h-[400px] lg:min-h-[500px] ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Image 1 - Top */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className={`absolute top-0 w-[70%] sm:w-[60%] lg:w-[280px] xl:w-[320px] z-10 ${
                reverse ? "left-0 lg:left-10" : "right-0 lg:right-10"
              }`}
            >
              <div
                className="overflow-hidden shadow-2xl"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
                }}
              >
                <img
                  src={images[0]}
                  alt="Section image 1"
                  className="w-full h-[200px] sm:h-[220px] lg:h-[250px] object-cover"
                />
              </div>
            </motion.div>

            {/* Image 2 - Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className={`absolute bottom-0 w-[70%] sm:w-[60%] lg:w-[280px] xl:w-[320px] ${
                reverse ? "right-0 lg:right-10" : "left-0 lg:left-10"
              }`}
            >
              <div
                className="overflow-hidden shadow-2xl"
                style={{
                  clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
                }}
              >
                <img
                  src={images[1]}
                  alt="Section image 2"
                  className="w-full h-[200px] sm:h-[220px] lg:h-[250px] object-cover"
                />
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full -z-10"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`space-y-6 ${reverse ? "lg:order-2" : "lg:order-1"}`}
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-semibold text-sm uppercase tracking-wider"
                style={{ color: "#02b0f0" }}
              >
                {subtitle}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3"
              >
                {title}{" "}
                <span style={{ color: "#02b0f0" }}>{highlightedText}</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              {description}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;
