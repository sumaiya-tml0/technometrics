export const jobOpenings = [
  {
    id: 1,
    slug: "senior-software-engineer",
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
    slug: "network-engineer",
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
    slug: "cybersecurity-analyst",
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
    slug: "project-manager",
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
    slug: "business-development-executive",
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

export const getJobBySlug = (slug) => {
  return jobOpenings.find((job) => job.slug === slug);
};

export const benefits = [
  {
    icon: "TrendingUp",
    title: "Career Growth",
    description: "Clear career paths and opportunities for advancement",
  },
  {
    icon: "GraduationCap",
    title: "Learning & Development",
    description: "Training programs and certification support",
  },
  {
    icon: "Heart",
    title: "Health Benefits",
    description: "Comprehensive health insurance for you and your family",
  },
  {
    icon: "Users",
    title: "Great Team",
    description: "Work with talented professionals in a collaborative environment",
  },
];
