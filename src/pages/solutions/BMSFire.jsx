import SolutionSection from "@/components/common/SolutionSection";
import { Flame } from "lucide-react";

// Update with actual image
import solutionImg from "@/assets/images/about/aboutBanner.png";

const BMSFire = () => {
  return (
    <SolutionSection
      id="bms-fire"
      subtitle="_Solutions_"
      title="BMS, Fire, Surveillance &"
      highlightedText="Automation"
      description="Our integrated building management systems combine fire safety, surveillance, and automation technologies to create smart, secure, and efficient environments for your facilities."
      features={[
        "Building Management Systems (BMS)",
        "Fire detection and suppression systems",
        "CCTV and video surveillance",
        "Access control and security systems",
        "Smart building automation",
      ]}
      image={solutionImg}
      Icon={Flame}
      reverse={false}
    />
  );
};

export default BMSFire;
