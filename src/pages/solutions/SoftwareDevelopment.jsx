import { motion } from "motion/react";
import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Code, Brain, Smartphone, Globe, Database, Cpu } from "lucide-react";

import bannerImg from "@/assets/images/home/bespoke-min.png";
import digitalImg from "@/assets/images/home/digital-transformation-min.png";

const SoftwareDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom web applications using modern frameworks and technologies.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    {
      icon: Brain,
      title: "AI/ML Solutions",
      description: "Machine learning models, NLP, and intelligent automation.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Data pipelines, warehousing, and analytics platforms.",
    },
    {
      icon: Cpu,
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless integration.",
    },
    {
      icon: Code,
      title: "Enterprise Software",
      description: "Scalable enterprise solutions tailored to your business.",
    },
  ];

  const technologies = {
    frontend: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"],
    backend: ["Node.js", "Python", "Java", ".NET", "Go"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    AI: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Scikit-learn"],
    cloud: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  };

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your requirements, goals, and challenges.",
    },
    {
      step: "02",
      title: "Design",
      description: "UI/UX design and technical architecture planning.",
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular demos and feedback.",
    },
    {
      step: "04",
      title: "Testing",
      description: "Comprehensive testing and quality assurance.",
    },
    {
      step: "05",
      title: "Deployment",
      description: "Smooth deployment and go-live support.",
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing maintenance and continuous improvement.",
    },
  ];

  return (
    <>
      <SolutionBanner
        title="AI/ML & Bespoke Software Development"
        subtitle="Solutions"
        bgImage={bannerImg}
      />

      {/* Overview Section */}
      <SolutionSection
        id="software-overview"
        subtitle="_Solutions_"
        title="Bespoke Software"
        highlightedText="Development"
        description="Our expert development team creates custom software solutions tailored to your unique business requirements, from web and mobile applications to enterprise systems and AI-powered solutions."
        features={[
          "Custom web application development",
          "Mobile app development (iOS & Android)",
          "Enterprise software solutions",
          "API development and integration",
          "UI/UX design and prototyping",
        ]}
        image={bannerImg}
        Icon={Code}
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
              Development <span className="text-[#02b0f0]">Services</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              End-to-end software development services for modern businesses.
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI/ML Section */}
      <SolutionSection
        id="ai-ml"
        subtitle="_AI/ML_"
        title="Artificial Intelligence &"
        highlightedText="Machine Learning"
        description="Leverage the power of AI and machine learning to transform your business. We build intelligent solutions that automate processes, extract insights, and create competitive advantages."
        features={[
          "Natural Language Processing (NLP)",
          "Computer Vision and image recognition",
          "Predictive analytics and forecasting",
          "Recommendation systems",
          "Chatbots and virtual assistants",
          "Custom ML model development",
        ]}
        image={digitalImg}
        Icon={Brain}
        reverse={true}
        bgColor="bg-white"
      />

      {/* Technology Stack */}
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
              _Technologies_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Technology <span className="text-[#02b0f0]">Stack</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust and scalable solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4 capitalize">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
              _Our Process_
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Development <span className="text-[#02b0f0]">Process</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Our agile development methodology ensures transparency and quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl"
              >
                <div className="text-5xl font-bold text-[#02b0f0]/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareDevelopment;
