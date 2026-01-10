import { motion } from "motion/react";
import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Flame, AlertTriangle, Droplets, Wind, Bell, Shield } from "lucide-react";

import bannerImg from "@/assets/images/home/bms-fire-min.png";
import datacenterImg from "@/assets/images/home/data-center-min-scaled.jpg";

const BMSFire = () => {
  const services = [
    {
      icon: Flame,
      title: "Fire Detection",
      description: "Advanced smoke, heat, and multi-sensor detection systems for early warning.",
    },
    {
      icon: Droplets,
      title: "Fire Suppression",
      description: "Sprinkler systems, gas suppression, and water mist solutions.",
    },
    {
      icon: Bell,
      title: "Alarm Systems",
      description: "Addressable and conventional fire alarm systems with voice evacuation.",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Lighting",
      description: "Emergency exit lighting and wayfinding systems for safe evacuation.",
    },
    {
      icon: Wind,
      title: "Smoke Control",
      description: "Smoke extraction and pressurization systems for escape routes.",
    },
    {
      icon: Shield,
      title: "Fire Safety Audits",
      description: "Comprehensive fire risk assessment and compliance consulting.",
    },
  ];

  const stats = [
    { value: "500+", label: "Systems Installed" },
    { value: "24/7", label: "Monitoring" },
    { value: "100%", label: "Code Compliant" },
    { value: "<3min", label: "Response Time" },
  ];

  const solutions = [
    {
      title: "Clean Agent Suppression",
      description: "FM-200, Novec 1230, and inert gas systems for sensitive equipment areas.",
      applications: ["Data Centers", "Server Rooms", "Archives", "Museums"],
    },
    {
      title: "Water-Based Systems",
      description: "Pre-action, deluge, and water mist systems for various applications.",
      applications: ["Warehouses", "Manufacturing", "Commercial Buildings", "Parking"],
    },
    {
      title: "Special Hazard Systems",
      description: "Specialized suppression for unique fire hazards and industrial applications.",
      applications: ["Kitchens", "Paint Booths", "Fuel Storage", "Power Plants"],
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
              Our <span className="text-[#02b0f0]">Services</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Complete fire protection solutions from detection to suppression.
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

      {/* Suppression Systems Section */}
      <SolutionSection
        id="suppression-systems"
        subtitle="_Suppression_"
        title="Fire Suppression"
        highlightedText="Systems"
        description="We design and install fire suppression systems tailored to your specific requirements. Our solutions range from water-based systems to clean agent suppression for sensitive environments."
        features={[
          "FM-200 and Novec 1230 clean agent systems",
          "Pre-action and deluge sprinkler systems",
          "Water mist and high-pressure systems",
          "Kitchen hood suppression systems",
          "Industrial and special hazard protection",
          "System integration with BMS",
        ]}
        image={datacenterImg}
        Icon={Droplets}
        reverse={true}
        bgColor="bg-white"
      />

      {/* Solutions Cards */}
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
              _Solutions_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Suppression <span className="text-[#02b0f0]">Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Specialized suppression systems for different environments and applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#02b0f0]/10 text-[#02b0f0] text-sm rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#02b0f0] font-semibold text-sm uppercase tracking-wider">
                _Compliance_
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6">
                Standards & <span className="text-[#02b0f0]">Compliance</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Our fire protection systems are designed and installed in compliance with international standards and local regulations.
              </p>
              <ul className="space-y-4">
                {[
                  "NFPA (National Fire Protection Association)",
                  "FM Global Standards",
                  "EN (European Standards)",
                  "Local fire safety regulations",
                  "Insurance requirements",
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
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Assessment", desc: "Fire risk assessment and site survey" },
                  { step: "2", title: "Design", desc: "System design per applicable codes" },
                  { step: "3", title: "Installation", desc: "Professional installation and testing" },
                  { step: "4", title: "Commissioning", desc: "System handover and training" },
                  { step: "5", title: "Maintenance", desc: "Ongoing maintenance and support" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#02b0f0] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
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

export default BMSFire;
