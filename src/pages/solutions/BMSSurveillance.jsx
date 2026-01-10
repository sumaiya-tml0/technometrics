import { motion } from "motion/react";
import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Building2, Camera, Thermometer, Lock, Zap, Gauge } from "lucide-react";

import bannerImg from "@/assets/images/home/bms-fire-min.png";
import datacenterImg from "@/assets/images/home/data-center-min-scaled.jpg";

const BMSSurveillance = () => {
  const features = [
    {
      icon: Thermometer,
      title: "HVAC Control",
      description: "Intelligent heating, ventilation, and air conditioning management for optimal comfort and efficiency.",
    },
    {
      icon: Zap,
      title: "Energy Management",
      description: "Real-time energy monitoring and optimization to reduce operational costs.",
    },
    {
      icon: Camera,
      title: "Video Surveillance",
      description: "HD/4K CCTV systems with AI-powered analytics for enhanced security.",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Biometric and card-based access systems for secure facility management.",
    },
    {
      icon: Gauge,
      title: "Environmental Monitoring",
      description: "Continuous monitoring of temperature, humidity, and air quality.",
    },
    {
      icon: Building2,
      title: "Building Automation",
      description: "Integrated automation for lighting, elevators, and building systems.",
    },
  ];

  const benefits = [
    { value: "30%", label: "Energy Savings" },
    { value: "24/7", label: "Monitoring" },
    { value: "99.9%", label: "System Uptime" },
    { value: "50%", label: "Faster Response" },
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

      {/* Stats Section */}
      <section className="py-16 lg:py-20 px-4 sm:px-8 lg:px-16 bg-[#02b0f0]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
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
              End-to-end building management and security solutions for modern facilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Surveillance Section */}
      <SolutionSection
        id="security-surveillance"
        subtitle="_Security_"
        title="Advanced Security"
        highlightedText="Surveillance"
        description="Protect your assets with our state-of-the-art security surveillance solutions. From IP cameras to video analytics, we provide comprehensive security systems that ensure round-the-clock protection."
        features={[
          "IP-based HD/4K camera systems",
          "AI-powered video analytics and face recognition",
          "License plate recognition (LPR/ANPR)",
          "Intrusion detection and perimeter security",
          "Video management system (VMS) integration",
          "Remote monitoring and mobile access",
        ]}
        image={datacenterImg}
        Icon={Camera}
        reverse={true}
        bgColor="bg-white"
      />

      {/* Integration Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#02b0f0] font-semibold text-sm uppercase tracking-wider">
                _Integration_
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Unified <span className="text-[#02b0f0]">Platform</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Our BMS solutions integrate seamlessly with your existing infrastructure, providing a single pane of glass for all building operations.
              </p>
              <ul className="space-y-4">
                {[
                  "Open protocol support (BACnet, Modbus, LonWorks)",
                  "Cloud-based and on-premises deployment options",
                  "Mobile apps for remote management",
                  "API integration with enterprise systems",
                  "Scalable architecture for future expansion",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-[#02b0f0] rounded-full" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Supported Systems</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "HVAC Systems",
                  "Lighting Control",
                  "Fire Alarm",
                  "Access Control",
                  "CCTV/Surveillance",
                  "Energy Meters",
                  "Elevators",
                  "Water Management",
                ].map((system, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 px-4 py-3 rounded-lg text-gray-700 font-medium text-center"
                  >
                    {system}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BMSSurveillance;
