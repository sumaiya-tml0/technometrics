import { ROUTES } from "@/constants/routes";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  Server,
  HardDrive,
  Flame,
  ShieldCheck,
  Network,
  Bot,
  BrainCircuit,
} from "lucide-react";
import SolutionCard from "./SolutionCard";

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {

  const solutions = [
    {
      icon: HardDrive,
      title: "Server, Storage, Backup & Virtualization",
      link: ROUTES.SERVER_STORAGE,
    },
    {
      icon: Network,
      title: "Network, Security & IPT Contact Center",
      link: ROUTES.NETWORK_IPT,
    },
    {
      icon: Server,
      title: "Datacenter, Power & Passive Infrastructure",
      link: ROUTES.DATACENTER,
    },
    {
      icon: Sparkles,
      title: "Building Management & Security Surveillance",
      link: ROUTES.BMS_SURVEILLANCE,
    },
    {
      icon: Flame,
      title: "Fire Protection & Detection",
      link: ROUTES.BMS_FIRE,
    },
    {
      icon: Bot,
      title: "Robotic Process Automation",
      link: ROUTES.RPA,
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      link: ROUTES.CYBERSECURITY,
    },
    {
      icon: BrainCircuit,
      title: "AI/ML & Bespoke Software",
      link: ROUTES.SOFTWARE_DEVELOPMENT,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="flex items-center py-16 lg:py-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 lg:mb-10"
          >
            <h3 className="inline-block border border-[#02b0f0] rounded-3xl px-4 py-1.5 text-sm sm:text-base font-semibold uppercase tracking-wider mb-4">
              <span
                style={{
                  WebkitTextStroke: "1px #02b0f0",
                  WebkitTextFillColor: "transparent",
                }}
              >
                _what we offer_
              </span>
            </h3>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Business Shaped <span className="text-[#02b0f0]">Solutions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                solution={solution}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
