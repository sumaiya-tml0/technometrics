import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Sparkles } from "lucide-react";

import solutionImg from "@/assets/images/home/digital-transformation-min.png";

const DigitalTransformation = () => {
  return (
    <>
      <SolutionBanner
        title="Digital Transformation"
        subtitle="Solutions"
        bgImage={solutionImg}
      />
      <SolutionSection
      id="digital-transformation"
      subtitle="_Solutions_"
      title="Digital"
      highlightedText="Transformation"
      description="We help organizations embrace digital transformation by modernizing legacy systems, implementing cloud solutions, and leveraging emerging technologies to drive innovation and competitive advantage."
      features={[
        "Cloud migration and adoption strategies",
        "Legacy system modernization",
        "Process automation and optimization",
        "Data analytics and business intelligence",
        "IoT implementation and integration",
      ]}
      image={solutionImg}
      Icon={Sparkles}
      reverse={true}
      bgColor="bg-gray-50"
    />
    </>
  );
};

export default DigitalTransformation;
