import TwoColumnSection from "@/components/common/TwoColumnSection";

import aboutImg1 from "@/assets/images/about/robot.png";
import aboutImg2 from "@/assets/images/about/our-vision.png";

const AboutCompany = () => {
  return (
    <TwoColumnSection
      id="our-company"
      subtitle="_Our Company_"
      title="Technology matrix made"
      highlightedText="simple"
      description="Technometrics Limited offers individualized business solutions in technology, through specifically tailored processes. Recognizing the importance of security and control, Technometrics specializes in ensuring that customer needs are fully understood by suppliers, resulting in increased efficiency and effectiveness for all. The company also offers its expertise to government agencies requiring digital solutions."
      images={[aboutImg1, aboutImg2]}
      reverse={false}
    />
  );
};

export default AboutCompany;
