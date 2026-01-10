import { motion } from "motion/react";
import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Network, Phone, Shield, Wifi, Headphones, Server } from "lucide-react";

import bannerImg from "@/assets/images/home/network-infra-min.png";
import contactCenterImg from "@/assets/images/home/contact-center-min.png";

const NetworkIPT = () => {
  const capabilities = [
    {
      icon: Network,
      title: "Enterprise Networking",
      description: "Design and deploy scalable network infrastructure with high availability and performance.",
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive security solutions including firewalls, IDS/IPS, and threat prevention.",
    },
    {
      icon: Phone,
      title: "IP Telephony",
      description: "Modern VoIP solutions for seamless business communication across locations.",
    },
    {
      icon: Headphones,
      title: "Contact Center",
      description: "Omnichannel contact center solutions for superior customer experience.",
    },
    {
      icon: Wifi,
      title: "Wireless Solutions",
      description: "Enterprise-grade wireless networks with seamless coverage and security.",
    },
    {
      icon: Server,
      title: "SD-WAN",
      description: "Software-defined WAN for optimized connectivity and reduced costs.",
    },
  ];

  return (
    <>
      <SolutionBanner
        title="Network, Security & IPT Contact Center"
        subtitle="Solutions"
        bgImage={bannerImg}
      />

      {/* Overview Section */}
      <SolutionSection
        id="network-overview"
        subtitle="_Solutions_"
        title="Enterprise Network &"
        highlightedText="Security Solutions"
        description="We deliver comprehensive networking and security solutions that form the backbone of your digital infrastructure. From enterprise-grade network design to advanced threat protection, we ensure your organization stays connected and secure."
        features={[
          "Enterprise LAN/WAN design and implementation",
          "Next-generation firewall and security solutions",
          "Network monitoring and management",
          "Zero-trust network architecture",
          "Network performance optimization",
        ]}
        image={bannerImg}
        Icon={Network}
        reverse={false}
      />

      {/* Capabilities Grid */}
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
              _Capabilities_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Our Core <span className="text-[#02b0f0]">Capabilities</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Comprehensive networking and communication solutions tailored for modern enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, index) => (
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

      {/* IPT & Contact Center Section */}
      <SolutionSection
        id="ipt-contact-center"
        subtitle="_Communication_"
        title="IP Telephony &"
        highlightedText="Contact Center"
        description="Transform your business communication with our advanced IP telephony and contact center solutions. We help organizations deliver exceptional customer experiences through omnichannel engagement platforms."
        features={[
          "Unified communications and collaboration",
          "Cloud-based contact center solutions",
          "Omnichannel customer engagement (voice, chat, email, social)",
          "Interactive Voice Response (IVR) systems",
          "Workforce management and analytics",
          "CRM integration and automation",
        ]}
        image={contactCenterImg}
        Icon={Headphones}
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
              _Technology Partners_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Industry-Leading <span className="text-[#02b0f0]">Partners</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              We partner with world-class technology vendors to deliver best-in-class solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {["Cisco", "Fortinet", "Palo Alto", "Avaya", "Juniper", "Aruba", "F5", "Genesys"].map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center h-24 hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-700 font-semibold text-lg">{partner}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NetworkIPT;
