import { motion } from "motion/react";
import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Server, HardDrive, Cloud, Database, Shield, RefreshCw } from "lucide-react";

import solutionImg from "@/assets/images/home/server-storage-min.png";
import datacenterImg from "@/assets/images/home/data-center-min-scaled.jpg";

const ServerStorage = () => {
  const services = [
    {
      icon: Server,
      title: "Enterprise Servers",
      description: "High-performance server solutions for mission-critical workloads and enterprise applications.",
    },
    {
      icon: HardDrive,
      title: "Storage Solutions",
      description: "Scalable SAN, NAS, and object storage for all your data management needs.",
    },
    {
      icon: Database,
      title: "Backup & Recovery",
      description: "Comprehensive backup solutions with rapid recovery capabilities.",
    },
    {
      icon: Cloud,
      title: "Virtualization",
      description: "VMware, Hyper-V, and cloud virtualization for optimal resource utilization.",
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Enterprise-grade data protection and disaster recovery solutions.",
    },
    {
      icon: RefreshCw,
      title: "Business Continuity",
      description: "Ensure uninterrupted operations with our continuity planning services.",
    },
  ];

  const stats = [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "500+", label: "Deployments" },
    { value: "24/7", label: "Support" },
    { value: "50PB+", label: "Data Managed" },
  ];

  return (
    <>
      <SolutionBanner
        title="Server, Storage, Backup & Virtualization"
        subtitle="Solutions"
        bgImage={solutionImg}
      />

      {/* Overview Section */}
      <SolutionSection
        id="server-storage"
        subtitle="_Solutions_"
        title="Server, Storage, Backup &"
        highlightedText="Virtualization"
        description="We provide comprehensive server and storage solutions designed to meet the demanding needs of modern enterprises. Our expertise spans from traditional infrastructure to cutting-edge virtualization technologies."
        features={[
          "Enterprise-grade server deployment and management",
          "Scalable storage solutions (SAN, NAS, Object Storage)",
          "Automated backup and disaster recovery",
          "VMware, Hyper-V, and cloud virtualization",
          "High availability and clustering solutions",
        ]}
        image={solutionImg}
        Icon={Server}
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
              End-to-end infrastructure solutions tailored to your business needs.
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

      {/* Virtualization Section */}
      <SolutionSection
        id="virtualization"
        subtitle="_Virtualization_"
        title="Maximize Efficiency with"
        highlightedText="Virtualization"
        description="Transform your IT infrastructure with our virtualization solutions. Reduce hardware costs, improve resource utilization, and enable flexible workload management across your organization."
        features={[
          "VMware vSphere and vSAN implementation",
          "Microsoft Hyper-V deployment and management",
          "Virtual Desktop Infrastructure (VDI)",
          "Container orchestration with Kubernetes",
          "Hybrid cloud integration",
          "Workload migration and optimization",
        ]}
        image={datacenterImg}
        Icon={Cloud}
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
              Technology <span className="text-[#02b0f0]">Partners</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              We partner with industry leaders to deliver best-in-class solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {["Dell EMC", "HPE", "VMware", "Veeam", "NetApp", "Cisco", "Microsoft", "Nutanix"].map((partner, index) => (
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

export default ServerStorage;
