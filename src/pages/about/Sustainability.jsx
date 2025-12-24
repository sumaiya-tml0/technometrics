import TwoColumnSection from "@/components/common/TwoColumnSection";

// Update these with actual sustainability images
import sustainImg1 from "@/assets/images/about/robot.png";
import sustainImg2 from "@/assets/images/about/our-vision.png";

const Sustainability = () => {
  return (
    <TwoColumnSection
      id="sustainability"
      subtitle="_Sustainability_"
      title="We Shape the Perfect Solution"
      highlightedText="for Companies"
      description="We seamlessly merge two key components – economics and information technology. This is the main factor that sets us apart from our competition and allows us to deliver a specialist technology services & consultancy."
      images={[sustainImg1, sustainImg2]}
      reverse={true}
    />
  );
};

export default Sustainability;
