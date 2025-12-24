import React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Server,
  HardDrive,
  Flame,
  ShieldCheck,
  Code,
  Network,
  Headphones,
} from "lucide-react";

import dataTransform from "@/assets/images/home/digital-transformation-min.png";
import dataCenter from "@/assets/images/home/data-center-min-scaled.jpg";
import server from "@/assets/images/home/server-storage-min.png";
import fire from "@/assets/images/home/bms-fire-min.png";
import security from "@/assets/images/home/informatin-security-min.png";
import Software from "@/assets/images/home/bespoke-min.png";
import network from "@/assets/images/home/network-infra-min.png";
import contact from "@/assets/images/home/contact-center-min.png";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Sparkles,
    title: "Digital Transformation",
    image: dataTransform,
  },
  {
    icon: Server,
    title: "Datacanter",
    image: dataCenter,
  },
  {
    icon: HardDrive,
    title: "server, storage, backup & virtualization",
    image: server,
  },
  {
    icon: Flame,
    title: "BMS, Fire, Surveillance & Automation",
    image: fire,
  },
  {
    icon: ShieldCheck,
    title: "Information Security",
    image: security,
  },
  {
    icon: Code,
    title: "Bespoke Software Development",
    image: Software,
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    image: network,
  },
  {
    icon: Headphones,
    title: "Contact Center",
    image: contact,
  },
];

const Services = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Business Shaped Solutions
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
