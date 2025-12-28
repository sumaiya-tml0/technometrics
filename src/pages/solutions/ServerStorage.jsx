import SolutionSection from "@/components/common/SolutionSection";
import { Server } from "lucide-react";

import solutionImg from "@/assets/images/home/server-storage-min.png";

const ServerStorage = () => {
  return (
    <SolutionSection
      id="server-storage"
      subtitle="_Solutions_"
      title="Server, Storage, Backup &"
      highlightedText="Virtualization"
      description="We provide comprehensive server and storage solutions designed to meet the demanding needs of modern enterprises. Our expertise spans from traditional infrastructure to cutting-edge virtualization technologies."
      features={[
        "Enterprise-grade server deployment and management",
        "Scalable storage solutions (SAN, NAS, Object Storage)",
        "Automated backup and disaster recovery",
        "VMware, Hyper-V, and cloud virtualization",
        "High availability and clustering solutions",
      ]}
      image={solutionImg}
      Icon={Server}
      reverse={false}
    />
  );
};

export default ServerStorage;
