import { motion } from "motion/react";

const technologies = [
  // Cloud & Infrastructure
  { name: "AWS", color: "#FF9900" },
  { name: "Azure", color: "#0089D6" },
  { name: "Google Cloud", color: "#4285F4" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },

  // Programming & Frameworks
  { name: "Python", color: "#3776AB" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: ".NET", color: "#512BD4" },

  // Database & Storage
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Redis", color: "#DC382D" },
  { name: "Oracle", color: "#F80000" },

  // Security & Networking
  { name: "Cisco", color: "#1BA0D7" },
  { name: "Fortinet", color: "#EE3124" },
  { name: "Palo Alto", color: "#FA582D" },
  { name: "VMware", color: "#607078" },

  // AI & Automation
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "OpenAI", color: "#412991" },
  { name: "UiPath", color: "#FA4616" },
  { name: "Power BI", color: "#F2C811" },
];

const TechStack = () => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="inline-block border border-[#02b0f0] rounded-3xl px-4 py-1.5 text-sm sm:text-base font-semibold uppercase tracking-wider mb-4">
            <span
              style={{
                WebkitTextStroke: "1px #02b0f0",
                WebkitTextFillColor: "transparent",
              }}
            >
              _technologies_
            </span>
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Tech <span className="text-[#02b0f0]">Stack</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We leverage industry-leading technologies to deliver robust and scalable solutions
          </p>
        </motion.div>

        {/* Scrolling Tech Logos - Row 1 */}
        <div className="relative mb-6">
          <div className="flex animate-scroll">
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                className="flex-shrink-0 mx-3"
              >
                <div
                  className="px-6 py-3 rounded-full border-2 font-medium text-sm whitespace-nowrap transition-all duration-300 hover:scale-110 cursor-default"
                  style={{
                    borderColor: tech.color,
                    color: tech.color,
                    backgroundColor: `${tech.color}10`,
                  }}
                >
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scrolling Tech Logos - Row 2 (Reverse) */}
        <div className="relative">
          <div className="flex animate-scroll-reverse">
            {[...technologies.slice().reverse(), ...technologies.slice().reverse()].map(
              (tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                  className="flex-shrink-0 mx-3"
                >
                  <div
                    className="px-6 py-3 rounded-full border-2 font-medium text-sm whitespace-nowrap transition-all duration-300 hover:scale-110 cursor-default"
                    style={{
                      borderColor: tech.color,
                      color: tech.color,
                      backgroundColor: `${tech.color}10`,
                    }}
                  >
                    {tech.name}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>

      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
