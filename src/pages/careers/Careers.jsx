import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Send,
  Users,
  TrendingUp,
  Heart,
  GraduationCap,
} from "lucide-react";
import SolutionBanner from "@/components/common/SolutionBanner";
import { Button } from "@/components/ui/button";

import careerBg from "@/assets/images/home/contact-center-min.png";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    experience: "5+ years",
    description:
      "We are looking for a Senior Software Engineer to join our development team. You will be responsible for designing, developing, and maintaining high-quality software solutions.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of experience in software development",
      "Proficiency in JavaScript, React, Node.js",
      "Experience with cloud platforms (AWS/Azure/GCP)",
      "Strong problem-solving and communication skills",
    ],
    responsibilities: [
      "Design and implement scalable software solutions",
      "Mentor junior developers and conduct code reviews",
      "Collaborate with cross-functional teams",
      "Participate in architecture and design discussions",
      "Ensure code quality through testing and documentation",
    ],
  },
  {
    id: 2,
    title: "Network Engineer",
    department: "Infrastructure",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    experience: "3+ years",
    description:
      "Join our infrastructure team to design, implement, and maintain network solutions for enterprise clients.",
    requirements: [
      "Bachelor's degree in IT, Computer Science, or related field",
      "3+ years of experience in network engineering",
      "CCNA/CCNP certification preferred",
      "Experience with Cisco, Juniper, or similar networking equipment",
      "Knowledge of network security best practices",
    ],
    responsibilities: [
      "Design and implement network infrastructure",
      "Monitor and troubleshoot network issues",
      "Maintain network documentation",
      "Implement security measures and policies",
      "Provide technical support to clients",
    ],
  },
  {
    id: 3,
    title: "Cybersecurity Analyst",
    department: "Security",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    experience: "2+ years",
    description:
      "We are seeking a Cybersecurity Analyst to help protect our clients' digital assets and ensure compliance with security standards.",
    requirements: [
      "Bachelor's degree in Cybersecurity, IT, or related field",
      "2+ years of experience in cybersecurity",
      "Knowledge of security frameworks (ISO 27001, NIST)",
      "Experience with SIEM tools and vulnerability assessment",
      "Security certifications (CEH, CompTIA Security+) preferred",
    ],
    responsibilities: [
      "Monitor security systems and analyze threats",
      "Conduct vulnerability assessments and penetration testing",
      "Develop security policies and procedures",
      "Respond to security incidents",
      "Provide security awareness training",
    ],
  },
  {
    id: 4,
    title: "Project Manager",
    department: "Operations",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    experience: "4+ years",
    description:
      "We are looking for an experienced Project Manager to lead technology implementation projects for our enterprise clients.",
    requirements: [
      "Bachelor's degree in Business, IT, or related field",
      "4+ years of project management experience",
      "PMP or PRINCE2 certification preferred",
      "Experience in IT/technology projects",
      "Excellent communication and leadership skills",
    ],
    responsibilities: [
      "Plan and manage project timelines and resources",
      "Coordinate with clients and internal teams",
      "Monitor project progress and mitigate risks",
      "Ensure project deliverables meet quality standards",
      "Prepare project documentation and reports",
    ],
  },
  {
    id: 5,
    title: "Business Development Executive",
    department: "Sales",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Join our sales team to identify new business opportunities and build strong relationships with potential clients.",
    requirements: [
      "Bachelor's degree in Business, Marketing, or related field",
      "2+ years of experience in B2B sales",
      "Understanding of IT solutions and services",
      "Strong presentation and negotiation skills",
      "Ability to work independently and meet targets",
    ],
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain client relationships",
      "Prepare and deliver sales presentations",
      "Negotiate contracts and close deals",
      "Achieve sales targets and KPIs",
    ],
  },
];

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Job Header */}
      <div
        className="p-5 sm:p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
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
          </div>
          <div className="flex items-center gap-3">
            <Button
              className="bg-[#02b0f0] hover:bg-[#02b0f0]/90 text-white px-4 sm:px-6 py-2 rounded-lg transition-all hover:scale-105 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = `mailto:careers@technometrics.net?subject=Application for ${job.title}`;
              }}
            >
              <span className="hidden sm:inline">Apply Now</span>
              <span className="sm:hidden">Apply</span>
              <Send className="w-4 h-4 ml-2" />
            </Button>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 sm:px-6 pb-6 border-t border-gray-100 pt-4">
          <p className="text-gray-600 mb-6">{job.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Requirements */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 bg-[#02b0f0] rounded-full mt-2 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                Responsibilities
              </h4>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 bg-[#02b0f0] rounded-full mt-2 shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
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
