import { motion } from "motion/react";
import { Check } from "lucide-react";

const SolutionSection = ({
  id,
  subtitle,
  title,
  highlightedText,
  description,
  features = [],
  image,
  reverse = false,
  bgColor = "",
  Icon,
}) => {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 px-4 sm:px-8 lg:px-16 ${bgColor}`}
    >
      <div className="container mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative ${reverse ? "lg:order-2" : "lg:order-1"}`}
          >
            <div
              className="overflow-hidden rounded-2xl shadow-2xl"
              style={{
                clipPath: reverse
                  ? "polygon(0 0, 100% 5%, 100% 100%, 0 95%)"
                  : "polygon(0 5%, 100% 0, 100% 95%, 0 100%)",
              }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover"
              />
            </div>

            {/* Icon Badge */}
            {Icon && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={`absolute -bottom-6 ${
                  reverse ? "right-8" : "left-8"
                } w-20 h-20 bg-[#02b0f0] rounded-2xl flex items-center justify-center shadow-xl`}
              >
                <Icon className="w-10 h-10 text-white" />
              </motion.div>
            )}
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`space-y-6 ${reverse ? "lg:order-1" : "lg:order-2"}`}
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-[#02b0f0] font-semibold text-sm uppercase tracking-wider"
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
                <span className="text-[#02b0f0]">{highlightedText}</span>
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

            {/* Features List */}
            {features.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-3 pt-2"
              >
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-[#02b0f0]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-[#02b0f0]" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
