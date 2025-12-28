import { motion } from "motion/react";

const SolutionBanner = ({ title, subtitle, bgImage }) => {
  return (
    <div
      className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center text-white pt-20">
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block border border-[#02b0f0] rounded-3xl px-4 py-1.5 text-sm sm:text-base font-semibold uppercase tracking-wider mb-4"
          >
            <span
              style={{
                WebkitTextStroke: "1px #02b0f0",
                WebkitTextFillColor: "transparent",
              }}
            >
              {subtitle}
            </span>
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
};

export default SolutionBanner;
