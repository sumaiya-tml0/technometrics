import { motion } from "motion/react";
import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import {
  Flame,
  AlertTriangle,
  Droplets,
  Wind,
  Bell,
  Shield,
} from "lucide-react";

import bannerImg from "@/assets/images/home/bms-fire-min.png";

const BMSFire = () => {
  const services = [
    {
      icon: Flame,
      title: "Fire Detection",
    },
    {
      icon: Shield,
      title: "Fire Protection",
    },
    {
      icon: Droplets,
      title: "Fire Gas Suppression",
    },
    {
      icon: Bell,
      title: "Fire Pumps",
    },
    {
      icon: AlertTriangle,
      title: "Passive FP",
    },
  ];

  return (
    <>
      <SolutionBanner
        title="Fire Protection & Detection"
        subtitle="Solutions"
        bgImage={bannerImg}
      />

      {/* Overview Section */}
      <SolutionSection
        id="fire-overview"
        subtitle="_Solutions_"
        title="Fire Protection &"
        highlightedText="Detection Systems"
        description="Protect your people, property, and assets with our comprehensive fire protection solutions. From detection to suppression, we design and implement fire safety systems that meet the highest standards and regulatory requirements."
        features={[
          "Advanced fire detection and alarm systems",
          "Automatic fire suppression systems",
          "Emergency evacuation and notification",
          "Fire risk assessment and consulting",
          "System maintenance and monitoring",
        ]}
        image={bannerImg}
        Icon={Flame}
        reverse={false}
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#02b0f0] font-semibold text-sm uppercase tracking-wider">
              _Services_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Our <span className="text-[#02b0f0]">Services</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Complete fire protection solutions from detection to suppression.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#02b0f0]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#02b0f0] transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-[#02b0f0] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          {/* Technology Partners */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#02b0f0] font-semibold text-sm uppercase tracking-wider">
              _Partners_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Industry-Leading <span className="text-[#02b0f0]">Partners</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              We partner with world-class technology vendors to deliver
              best-in-class solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {[
              "partners/lichfield.png",
              "partners/firesafe.png",
              "partners/simplex.jpg",
              "partners/tyco.png",
              "partners/fm.png",
              "partners/bristol.png",
              "partners/asico.png",
              "partners/naffco.png",
              "partners/novec.png",
              "partners/wilo.png",

            ].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-24 "
              >
                <img src={partner} className="md:w-40 md:mx-auto" alt="" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BMSFire;
