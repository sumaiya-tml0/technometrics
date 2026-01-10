import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Briefcase,
  MapPin,
  Clock,
  Send,
  Users,
  TrendingUp,
  Heart,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Button } from "@/components/ui/button";
import { jobOpenings } from "@/data/jobs";

import careerBg from "@/assets/images/home/contact-center-min.png";

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear career paths and opportunities for advancement",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Training programs and certification support",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive health insurance for you and your family",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with talented professionals in a collaborative environment",
  },
];

const JobCard = ({ job }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <Link to={`/careers/${job.slug}`} className="block p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#02b0f0]/10 text-[#02b0f0] text-xs font-semibold rounded-full">
                {job.department}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                {job.type}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              {job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#02b0f0]" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#02b0f0]" />
                {job.experience}
              </span>
            </div>
            <p className="text-gray-600 text-sm mt-3 line-clamp-2">
              {job.description}
            </p>
          </div>
          <div className="flex items-center">
            <Button className="bg-[#02b0f0] hover:bg-[#02b0f0]/90 text-white px-4 sm:px-6 py-2 rounded-lg transition-all hover:scale-105 cursor-pointer">
              <span className="hidden sm:inline">View Details</span>
              <span className="sm:hidden">View</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Careers = () => {
  return (
    <>
      <SolutionBanner
        title="Join Our Team"
        subtitle="Careers"
        bgImage={careerBg}
      />

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#02b0f0] font-semibold text-sm uppercase tracking-wider">
              _Why Join Us_
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Build Your Career With{" "}
              <span className="text-[#02b0f0]">Technometrics</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Join a team of passionate professionals dedicated to delivering
              innovative technology solutions. We offer a dynamic work
              environment where your growth matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-[#02b0f0]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#02b0f0] transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-[#02b0f0] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-[#02b0f0] font-semibold text-sm uppercase tracking-wider">
              _Open Positions_
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Current Job <span className="text-[#02b0f0]">Openings</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore our current opportunities and find the perfect role that
              matches your skills and aspirations.
            </p>
          </motion.div>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* No Suitable Position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gradient-to-r from-[#02b0f0]/5 to-[#02b0f0]/10 rounded-xl p-6 sm:p-8 text-center"
          >
            <Briefcase className="w-12 h-12 text-[#02b0f0] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Don't see a suitable position?
            </h3>
            <p className="text-gray-600 mb-4 max-w-xl mx-auto">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <Button
              className="bg-[#02b0f0] hover:bg-[#02b0f0]/90 text-white px-6 py-5 rounded-lg transition-all hover:scale-105 cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "mailto:careers@technometrics.net?subject=General Application")
              }
            >
              Submit Your Resume
              <Send className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Careers;
