import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BRAC University New Campus",
    client: "BRAC University",
    category: "Security Surveillance & UCM",
    image: "/assets/images/projects/brac-university.jpg", // Placeholder
    description:
      "Comprehensive security and unified communication solution for one of Bangladesh's premier universities.",
  },
  {
    id: 2,
    title: "Huawei Bangladesh HQ",
    client: "Huawei Technologies",
    category: "IT, AV, Network & Data Center",
    image: "/assets/images/projects/huawei-hq.jpg",
    description:
      "Complete technology infrastructure for Huawei's Bangladesh headquarters.",
  },
  {
    id: 3,
    title: "Unilever Bangladesh",
    client: "Unilever Bangladesh Ltd.",
    category: "AV - Audio Visual",
    image: "/assets/images/projects/unilever.jpg",
    description:
      "State-of-the-art audio-visual and video conferencing solutions for corporate excellence.",
  },
  {
    id: 4,
    title: "Military Institute of Science and Technology (MIST)",
    client: "MIST",
    category: "Fiber Networking & LMS",
    image: "/assets/images/projects/mist.jpg",
    description:
      "Advanced networking infrastructure and library management system for Bangladesh's premier military technology institute.",
  },
  {
    id: 5,
    title: "The Oasis at Ispahani Colony",
    client: "The Oasis",
    category: "Fiber Networking & Security Surveillance",
    image: "/assets/images/projects/oasis.jpg",
    description:
      "Complete smart building solution for premium residential complex with 10 buildings.",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="relative bg-white rounded-xl p-4 min-h-65 flex flex-col hover:shadow-xl transition-shadow duration-300">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-[#02b0f0]/10 text-[#02b0f0] text-xs font-semibold rounded-full">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#02b0f0] transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Decorative Icon */}
          <div className="mt-6 flex items-center justify-end">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-full bg-[#02b0f0]/10 flex items-center justify-center group-hover:bg-[#02b0f0] transition-colors"
            >
              <Sparkles className="w-5 h-5 text-[#02b0f0] group-hover:text-white transition-colors" />
            </motion.div>
          </div>
        </div>

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#02b0f0]/0 to-[#02b0f0]/0 group-hover:from-[#02b0f0]/5 group-hover:to-transparent transition-all duration-500 rounded-xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h3 className="inline-block border border-[#02b0f0] rounded-3xl px-4 py-1.5 text-sm sm:text-base font-semibold uppercase tracking-wider mb-4">
            <span
              style={{
                WebkitTextStroke: "1px #02b0f0",
                WebkitTextFillColor: "transparent",
              }}
            >
              _Our Work_
            </span>
          </h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Landmark <span className="text-[#02b0f0]">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering excellence through innovative technology solutions for
            leading organizations.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            // Show right border if not in last column (3 columns on lg, 2 on md)
            const showRightBorder = (index + 1) % 3 !== 0;

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                showRightBorder={showRightBorder}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
