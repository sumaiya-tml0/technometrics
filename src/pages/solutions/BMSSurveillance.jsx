import { motion } from "motion/react";
import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Building2, Lock, Zap, Gauge } from "lucide-react";

import bannerImg from "@/assets/images/home/bms-fire-min.png";

const BMSSurveillance = () => {
  const features = [
    {
      icon: Building2,
      title: "Building Automation System",
      SubItem: [
        "Lighting Control",
        "HVAC Control",
        "Audio Distribution",
        "Video Distribution",
        "Integrated BMS",
      ],
    },
    {
      icon: Lock,
      title: "Security Surveillance",
      SubItem: [
        "IP CCTV",
        "Intrusion Security",
        "Access Control",
        "Military Grade Security Solution",
        "VMS integration",
      ],
    },
    {
      icon: Zap,
      title: "Fire",
      SubItem: [
        "Fire Detection",
        "Protection system",
        "Gas Suppression",
        "VESDA",
      ],
    },

    {
      icon: Gauge,
      title: "AV System Integration",
      SubItem: [
        "Hybrid Video Conferencing",
        "Integrated AV System ",
        "Training Room AV Solution",
        "Board Room AV Solution",
        "Video-Wall Solution",
        "Control Room Solution",
      ],
    },
  ];

  return (
    <>
      <SolutionBanner
        title="Building Management & Security Surveillance"
        subtitle="Solutions"
        bgImage={bannerImg}
      />

      {/* Overview Section */}
      <SolutionSection
        id="bms-overview"
        subtitle="_Solutions_"
        title="Intelligent Building"
        highlightedText="Management Systems"
        description="Transform your buildings into smart, efficient, and secure environments with our comprehensive Building Management Systems. We integrate all building services into a unified platform for centralized monitoring and control."
        features={[
          "Centralized building automation and control",
          "Real-time monitoring and analytics dashboard",
          "Predictive maintenance and fault detection",
          "Energy optimization and sustainability reporting",
          "Integration with existing building infrastructure",
        ]}
        image={bannerImg}
        Icon={Building2}
        reverse={false}
      />

      {/* Features Grid */}
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
              _Features_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Comprehensive <span className="text-[#02b0f0]">Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              End-to-end building management and security solutions for modern
              facilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
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
                <ul>
                  {item.SubItem?.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
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
            className="grid grid-cols-2 lg:grid-cols-6 gap-6"
          >
            {[
              "partners/crestron.png",
              "partners/sennheiser.png",
              "partners/biamp.png",
              "partners/xilica.png",
              "partners/johnson.png",
              "partners/tyco.png",
              "partners/hikvision.png",
              "partners/dahua.png",
              "partners/zkteco.png",
              "partners/unilumin.png",
              "partners/huawei.png",
              "partners/siemens.png",
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

export default BMSSurveillance;
