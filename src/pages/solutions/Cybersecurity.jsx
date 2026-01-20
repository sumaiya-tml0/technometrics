import { motion } from "motion/react";
import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import { ShieldCheck, Lock, Eye, AlertTriangle, Search, Users } from "lucide-react";

import bannerImg from "@/assets/images/home/informatin-security-min.png";

const Cybersecurity = () => {
  const services = [
    {
      icon: Search,
      title: "Security Assessment",
      description: "Comprehensive vulnerability assessments and penetration testing.",
    },
    {
      icon: Eye,
      title: "Threat Monitoring",
      description: "24/7 security monitoring with advanced threat detection capabilities.",
    },
    {
      icon: Lock,
      title: "Identity Management",
      description: "IAM solutions including MFA, SSO, and privileged access management.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid response and remediation for security incidents.",
    },
    {
      icon: ShieldCheck,
      title: "Compliance",
      description: "Security compliance consulting for ISO 27001, PCI-DSS, and more.",
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Security awareness programs and phishing simulations.",
    },
  ];

  const frameworks = [
    { name: "ISO 27001", desc: "Information Security Management" },
    { name: "NIST", desc: "Cybersecurity Framework" },
    { name: "PCI-DSS", desc: "Payment Card Security" },
    { name: "SOC 2", desc: "Service Organization Controls" },
    { name: "GDPR", desc: "Data Protection Regulation" },
    { name: "HIPAA", desc: "Healthcare Security" },
  ];

  return (
    <>
      <SolutionBanner
        title="Comprehensive Cybersecurity"
        subtitle="Solutions"
        bgImage={bannerImg}
      />

      {/* Overview Section */}
      <SolutionSection
        id="cybersecurity-overview"
        subtitle="_Solutions_"
        title="Comprehensive"
        highlightedText="Cybersecurity"
        description="We provide end-to-end cybersecurity solutions to protect your organization from evolving threats. Our services encompass assessment, implementation, and ongoing monitoring to ensure robust security posture."
        features={[
          "Security assessment and audits",
          "Threat detection and response",
          "Network security and firewalls",
          "Identity and access management",
          "Security awareness training",
        ]}
        image={bannerImg}
        Icon={ShieldCheck}
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
              Security <span className="text-[#02b0f0]">Services</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Comprehensive cybersecurity services to protect your digital assets.
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

      {/* Frameworks Section */}
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
              _Compliance_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Security <span className="text-[#02b0f0]">Frameworks</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              We help organizations achieve compliance with industry standards and regulations.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {frameworks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-[#02b0f0] mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              "partners/check_point.png",
              "partners/fortinet.png",
              "partners/ec_council.png",
              "partners/paloalto.png",
              

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

export default Cybersecurity;
