import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const SolutionCard = ({ solution, index }) => {
  const IconComponent = solution.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: (index % 2) * 0.08,
      }}
      className="group"
    >
      <Link to={solution.link}>
        <div className="relative bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#02b0f0]/30 transition-all duration-300 h-40 sm:h-45 lg:h-40 overflow-hidden">
          {/* Background Gradient on Hover */}
          <div className="absolute inset-0 bg-linear-to-br from-[#02b0f0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="w-12 h-12 mx-auto rounded-xl bg-[#02b0f0]/10 flex items-center justify-center mb-3 group-hover:bg-[#02b0f0] transition-colors duration-300">
              <IconComponent className="w-6 h-6 text-[#02b0f0] group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Content */}
            <h4 className=" font-semibold text-gray-900 mb-2 group-hover:text-[#02b0f0] transition-colors duration-300">
              {solution.title}
            </h4>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default SolutionCard;
