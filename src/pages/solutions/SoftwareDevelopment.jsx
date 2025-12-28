import SolutionSection from "@/components/common/SolutionSection";
import { Code } from "lucide-react";

import solutionImg from "@/assets/images/home/bespoke-min.png";

const SoftwareDevelopment = () => {
  return (
    <SolutionSection
      id="software-development"
      subtitle="_Solutions_"
      title="Bespoke Software"
      highlightedText="Development"
      description="Our expert development team creates custom software solutions tailored to your unique business requirements, from web and mobile applications to enterprise systems and integrations."
      features={[
        "Custom web application development",
        "Mobile app development (iOS & Android)",
        "Enterprise software solutions",
        "API development and integration",
        "UI/UX design and prototyping",
      ]}
      image={solutionImg}
      Icon={Code}
      reverse={false}
    />
  );
};

export default SoftwareDevelopment;
