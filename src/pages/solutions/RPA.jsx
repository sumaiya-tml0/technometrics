import { motion } from "motion/react";
import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import {
  Bot,
  Workflow,
  Clock,
  TrendingUp,
  FileCheck,
  Repeat,
} from "lucide-react";

import bannerImg from "@/assets/images/about/robot.png";

const RPA = () => {
  const process = [
    {
      step: "01",
      title: "Make calculations",
    },
    {
      step: "02",
      title: "Log in to any application",
    },
    {
      step: "03",
      title: "Move files and folders",
    },
    {
      step: "04",
      title: "Open emails and attachments",
    },
    {
      step: "05",
      title: "Scrape data from the web",
    },
    {
      step: "06",
      title: "Read and write to databases",
    },
    {
      step: "07",
      title: "Extract content from documents, PDFs, emails & forms",
    },
    {
      step: "08",
      title: "Connect to system APIs",
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

      {/* Features Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[#02b0f0] font-semibold text-xl lg:text-2xl uppercase tracking-wider">
              _Features_
            </h2>

          
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                </div>
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
              We work with industry-leading RPA platforms to deliver best-fit
              solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              "partners/uipath.png",
              "partners/automation_anywhere.png",
              "partners/selenium.png",
              "partners/blue_prism.png",
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

export default RPA;
