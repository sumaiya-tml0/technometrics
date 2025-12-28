import SolutionSection from "@/components/common/SolutionSection";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Building2 } from "lucide-react";

import solutionImg from "@/assets/images/home/data-center-min-scaled.jpg";

const Datacenter = () => {
  return (
    <>
      <SolutionBanner
        title="Datacenter, Power & Passive Infrastructure"
        subtitle="Solutions"
        bgImage={solutionImg}
      />
      <SolutionSection
      id="datacenter"
      subtitle="_Solutions_"
      title="Datacenter, Power &"
      highlightedText="Passive Infrastructure"
      description="We design and implement state-of-the-art datacenter solutions with robust power infrastructure and passive components that ensure maximum uptime and efficiency for your critical operations."
      features={[
        "Datacenter design and consultation",
        "UPS systems and power distribution",
        "Precision cooling solutions",
        "Structured cabling and rack systems",
        "Environmental monitoring systems",
      ]}
      image={solutionImg}
      Icon={Building2}
      reverse={true}
      bgColor="bg-gray-50"
    />
    </>
  );
};

export default Datacenter;
