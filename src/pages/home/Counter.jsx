import React, { useEffect, useState, useRef } from "react";
import { motion, animate, useInView } from "motion/react";
import { Users, Briefcase, Award, Clock, Globe, Handshake, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 4,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: ShieldCheck,
    value: 63,
    suffix: "+",
    label: "trusted clients",
  },
  {
    icon: Handshake,
    value: 39,
    suffix: "+",
    label: "global partners",
  },
  {
    icon: Award,
    value: 3,
    suffix: "+",
    label: "iso certification",
  },
];

const AnimatedCounter = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

const CounterCard = ({ stat, index }) => {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.2,
            type: "spring",
          }}
          className="p-4 bg-white/20 rounded-full mb-4"
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </h3>

        <p className="text-white/80 font-medium text-sm sm:text-base uppercase">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
};

const Counter = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-linear-to-r from-[#02b0f0] to-[#0080b3] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Counter Grid - 4 Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <CounterCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
