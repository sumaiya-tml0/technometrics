import SolutionSection from "@/components/common/SolutionSection";
import { ShieldCheck } from "lucide-react";

// Update with actual image
import solutionImg from "@/assets/images/about/aboutBanner.png";

const Cybersecurity = () => {
  return (
    <SolutionSection
      id="cybersecurity"
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
      image={solutionImg}
      Icon={ShieldCheck}
      reverse={true}
      bgColor="bg-gray-50"
    />
  );
};

export default Cybersecurity;
