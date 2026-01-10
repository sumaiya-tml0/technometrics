import { motion } from "motion/react";
import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Bot, Workflow, Clock, TrendingUp, FileCheck, Repeat } from "lucide-react";

import bannerImg from "@/assets/images/about/robot.png";
import digitalImg from "@/assets/images/home/digital-transformation-min.png";

const RPA = () => {
  const useCases = [
    {
      icon: FileCheck,
      title: "Invoice Processing",
      description: "Automate invoice extraction, validation, and processing with 99% accuracy.",
    },
    {
      icon: Repeat,
      title: "Data Entry & Migration",
      description: "Eliminate manual data entry errors and accelerate data migration projects.",
    },
    {
      icon: Clock,
      title: "Report Generation",
      description: "Automated report creation and distribution on schedule.",
    },
    {
      icon: Workflow,
      title: "Customer Onboarding",
      description: "Streamline customer onboarding with automated verification and account setup.",
    },
    {
      icon: TrendingUp,
      title: "Financial Reconciliation",
      description: "Automate bank reconciliation and financial closing processes.",
    },
    {
      icon: Bot,
      title: "HR Operations",
      description: "Automate employee onboarding, leave management, and payroll processing.",
    },
  ];

  const benefits = [
    { value: "80%", label: "Cost Reduction" },
    { value: "10x", label: "Faster Processing" },
    { value: "0%", label: "Error Rate" },
    { value: "24/7", label: "Operations" },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Identify processes suitable for automation through detailed analysis.",
    },
    {
      step: "02",
      title: "Design",
      description: "Design optimized workflows and automation architecture.",
    },
    {
      step: "03",
      title: "Development",
      description: "Build and test RPA bots using industry-leading platforms.",
    },
    {
      step: "04",
      title: "Deployment",
      description: "Deploy bots to production with monitoring and support.",
    },
  ];

  return (
    <>
      <SolutionBanner
        title="Robotic Process Automation"
        subtitle="Solutions"
        bgImage={bannerImg}
      />

      {/* Overview Section */}
      <SolutionSection
        id="rpa-overview"
        subtitle="_Solutions_"
        title="Intelligent Process"
        highlightedText="Automation"
        description="Transform your business operations with Robotic Process Automation (RPA). Our RPA solutions automate repetitive, rule-based tasks, freeing your workforce to focus on high-value activities while reducing errors and operational costs."
        features={[
          "End-to-end process automation",
          "Attended and unattended bot deployment",
          "AI-enhanced intelligent automation",
          "Integration with existing enterprise systems",
          "Scalable bot infrastructure management",
        ]}
        image={bannerImg}
        Icon={Bot}
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

      {/* Use Cases Grid */}
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
              _Use Cases_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Automation <span className="text-[#02b0f0]">Opportunities</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Discover how RPA can transform various business processes across your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((item, index) => (
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

      {/* Intelligent Automation Section */}
      <SolutionSection
        id="intelligent-automation"
        subtitle="_AI-Powered_"
        title="Intelligent"
        highlightedText="Automation"
        description="Go beyond simple task automation with AI-enhanced RPA. Our intelligent automation solutions combine RPA with machine learning, natural language processing, and computer vision to handle complex, unstructured processes."
        features={[
          "Document understanding and data extraction",
          "Natural language processing for text analysis",
          "Computer vision for image and screen recognition",
          "Machine learning for decision making",
          "Cognitive automation for complex workflows",
          "Chatbot and virtual assistant integration",
        ]}
        image={digitalImg}
        Icon={Workflow}
        reverse={true}
        bgColor="bg-white"
      />

      {/* Process Section */}
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
              _Our Approach_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Implementation <span className="text-[#02b0f0]">Process</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Our proven methodology ensures successful RPA implementation and sustainable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg h-full">
                  <div className="text-5xl font-bold text-[#02b0f0]/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#02b0f0]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#02b0f0] font-semibold text-sm uppercase tracking-wider">
              _Platforms_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              RPA <span className="text-[#02b0f0]">Platforms</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              We work with industry-leading RPA platforms to deliver best-fit solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {["UiPath", "Automation Anywhere", "Blue Prism", "Microsoft Power Automate"].map((partner, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md flex items-center justify-center h-24 hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-700 font-semibold text-lg text-center">{partner}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RPA;
