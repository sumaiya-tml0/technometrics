import { motion } from "motion/react";
import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Building2, Zap, Cable, Wind, Gauge, Thermometer } from "lucide-react";

import bannerImg from "@/assets/images/home/data-center-min-scaled.jpg";
import networkImg from "@/assets/images/home/network-infra-min.png";

const Datacenter = () => {
  const services = [
    {
      icon: Building2,
      title: "Developing the Concept of Pre-SAC",
      description: "Comprehensive pre-sales activity coordination and conceptual design development.",
    },
    {
      icon: Zap,
      title: "Energy Conservation",
      description: "Energy-efficient datacenter solutions minimizing operational costs.",
    },
    {
      icon: Building2,
      title: "Designing and Engineering",
      description: "Complete datacenter design and engineering services meeting international standards.",
    },
    {
      icon: Wind,
      title: "Identifying and Organizing Cooling Server Rooms",
      description: "Precision cooling design and implementation for optimal server room environments.",
    },
    {
      icon: Gauge,
      title: "Mathematical Modeling",
      description: "Verification of design decisions through advanced mathematical modeling and simulation.",
    },
    {
      icon: Cable,
      title: "Local Area Networking",
      description: "Structured cabling and LAN infrastructure within datacenter facilities.",
    },
    {
      icon: Zap,
      title: "Power Supply",
      description: "UPS systems, generators, lightning protection, and comprehensive power distribution.",
    },
    {
      icon: Thermometer,
      title: "Fire-detection & Extinguishing System",
      description: "Advanced fire protection systems ensuring datacenter safety.",
    },
    {
      icon: Thermometer,
      title: "Environment Monitoring Systems",
      description: "Real-time monitoring of temperature, humidity, and environmental conditions.",
    },
  ];

  return (
    <>
      <SolutionBanner
        title="Datacenter, Power & Passive Infrastructure"
        subtitle="Solutions"
        bgImage={bannerImg}
      />

      {/* Overview Section */}
      <SolutionSection
        id="datacenter-overview"
        subtitle="_Solutions_"
        title="Datacenter Infrastructure"
        highlightedText="Solutions"
        description="We design, build, and manage world-class datacenter infrastructure that ensures maximum uptime and efficiency. From power systems to cooling solutions, we deliver comprehensive datacenter services."
        features={[
          "Datacenter design and consulting (Tier I-IV)",
          "Power infrastructure (UPS, generators, PDUs)",
          "Precision cooling and containment solutions",
          "Structured cabling and connectivity",
          "Environmental monitoring and DCIM",
        ]}
        image={bannerImg}
        Icon={Building2}
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
              Infrastructure <span className="text-[#02b0f0]">Services</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Complete datacenter infrastructure solutions from design to operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Passive Infrastructure Section */}
      <SolutionSection
        id="passive-infrastructure"
        subtitle="_Infrastructure_"
        title="Passive Infrastructure &"
        highlightedText="Cabling"
        description="Our passive infrastructure solutions ensure reliable connectivity and optimal performance. We design and implement structured cabling systems that meet the highest industry standards."
        features={[
          "Fiber optic cabling (single-mode and multi-mode)",
          "Cat6A and Cat7 copper infrastructure",
          "Rack and cabinet solutions",
          "Cable management and pathway systems",
          "Testing and certification services",
          "Future-proof scalable designs",
        ]}
        image={networkImg}
        Icon={Cable}
        reverse={true}
        bgColor="bg-white"
      />

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
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              "partners/vivanco.png",
              "partners/consul_neowatt.png",
              "partners/Legrand.png",
              "partners/Schneider.png",
              "partners/nti.png",
              "partners/armacell.png",
              "partners/huawei.png",
              "partners/ztfloor.png",
          
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

export default Datacenter;
