import { ROUTES } from "@/constants/routes";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
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
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const [currentRow, setCurrentRow] = useState(0);

  const solutions = [
    {
      icon: HardDrive,
      title: "Server, Storage, Backup & Virtualization",
      link: ROUTES.SERVER_STORAGE,
    },
    {
      icon: Network,
      title: "Network, Security & IPT Contact center",
      link: ROUTES.SOLUTIONS,
    },
    {
      icon: Server,
      title: "Datacenter, Power and Passive Infrastructure",
      link: ROUTES.DATACENTER,
    },
    {
      icon: Sparkles,
      title: "Building Management System and security surveillance",
      link: ROUTES.DIGITAL_TRANSFORMATION,
    },

    {
      icon: Flame,
      title: "Fire Protection, Detection",
      link: ROUTES.BMS_FIRE,
    },
    {
      icon: Bot,
      title: "Robotic Process Automation",
      link: ROUTES.SOLUTIONS,
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      link: ROUTES.CYBERSECURITY,
    },
    {
      icon: BrainCircuit,
      title: "AI/ML and Bespoke Software",
      link: ROUTES.SOLUTIONS,
    },
  ];

  const totalRows = Math.ceil(solutions.length / 2);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: `+=${totalRows * 250}`,
        pin: containerRef.current,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const row = Math.floor(progress * totalRows);
          setCurrentRow(row);
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: triggerRef }
  );

  // Get cards for current visible rows (show 2 rows at a time)
  const getVisibleCards = () => {
    // Clamp currentRow so we don't go past the last valid starting row
    const maxStartRow = Math.max(0, totalRows - 2); // Leave room for 2 rows
    const startRow = Math.min(currentRow, maxStartRow);
    const startIndex = startRow * 2;
    const endIndex = Math.min(startIndex + 4, solutions.length); // Show 2 rows = 4 cards
    return solutions.slice(startIndex, endIndex).map((solution, i) => ({
      ...solution,
      originalIndex: startIndex + i,
    }));
  };

  const visibleCards = getVisibleCards();

  return (
    <section ref={triggerRef} className="relative bg-gray-50">
      <div ref={containerRef} className="h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="lg:w-5/12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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
                <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Business Shaped{" "}
                  <span className="text-[#02b0f0]">Solutions</span>
                </h2>
              </motion.div>
            </div>

            {/* Right Side - Cards Grid */}
            <div className="lg:w-7/12">
              <div className="grid grid-cols-2 gap-4">
                {visibleCards.map((solution, index) => (
                  <SolutionCard
                    key={solution.originalIndex}
                    solution={solution}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
