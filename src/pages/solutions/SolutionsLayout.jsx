import Banner from "@/components/common/Banner";
import { useScrollToSection } from "@/hooks/useScrollToSection";

import ServerStorage from "./ServerStorage";
import Datacenter from "./Datacenter";
import BMSFire from "./BMSFire";
import SoftwareDevelopment from "./SoftwareDevelopment";
import Cybersecurity from "./Cybersecurity";

// Update with actual banner image
import bannerImg from "@/assets/images/about/aboutBanner.png";

const SolutionsLayout = () => {
  useScrollToSection();

  return (
    <div>
      <Banner title="Our Solutions" bannerImg={bannerImg} />
      <ServerStorage />
      <Datacenter />
      <BMSFire />
      <DigitalTransformation />
      <SoftwareDevelopment />
      <Cybersecurity />
    </div>
  );
};

export default SolutionsLayout;
