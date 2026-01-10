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
      title: "DC Design & Build",
      description: "End-to-end datacenter design, construction, and commissioning services.",
    },
    {
      icon: Zap,
      title: "Power Infrastructure",
      description: "UPS systems, generators, PDUs, and power distribution solutions.",
    },
    {
      icon: Wind,
      title: "Cooling Systems",
      description: "Precision cooling, CRAC/CRAH units, and hot/cold aisle containment.",
    },
    {
      icon: Cable,
      title: "Structured Cabling",
      description: "Fiber optic and copper cabling infrastructure design and installation.",
    },
    {
      icon: Gauge,
      title: "DCIM Solutions",
      description: "Datacenter Infrastructure Management for real-time monitoring.",
    },
    {
      icon: Thermometer,
      title: "Environmental Monitoring",
      description: "Temperature, humidity, and leak detection systems.",
    },
  ];

  const stats = [
    { value: "Tier III+", label: "Certification Ready" },
    { value: "99.99%", label: "Availability" },
    { value: "40%", label: "Energy Savings" },
    { value: "100+", label: "Projects Delivered" },
  ];

  const tiers = [
    {
      tier: "Tier I",
      title: "Basic Capacity",
      uptime: "99.671%",
      features: ["Single path for power and cooling", "No redundancy", "Basic datacenter requirements"],
    },
    {
      tier: "Tier II",
      title: "Redundant Capacity",
      uptime: "99.741%",
      features: ["Redundant capacity components", "Single distribution path", "Partial redundancy"],
    },
    {
      tier: "Tier III",
      title: "Concurrently Maintainable",
      uptime: "99.982%",
      features: ["Multiple distribution paths", "N+1 redundancy", "Maintainable without downtime"],
    },
    {
      tier: "Tier IV",
      title: "Fault Tolerant",
      uptime: "99.995%",
      features: ["2N+1 fully redundant", "Fault tolerant design", "Highest availability"],
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

      {/* Stats Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-8 lg:px-16 bg-[#02b0f0]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-white/80 text-lg">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
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

      {/* Tier Classification */}
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
              _Standards_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Datacenter <span className="text-[#02b0f0]">Tier Standards</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              We design and build datacenters to meet Uptime Institute tier standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[#02b0f0] font-bold text-sm mb-2">{item.tier}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <div className="text-2xl font-bold text-[#02b0f0] mb-4">{item.uptime}</div>
                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-[#02b0f0] rounded-full mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Datacenter;
