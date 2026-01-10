import React, { useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import {
  MapPin,
  Clock,
  Briefcase,
  Upload,
  FileText,
  X,
  CheckCircle,
  ArrowLeft,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SolutionBanner from "@/components/common/SolutionBanner";
import { getJobBySlug } from "@/data/jobs";
import { ROUTES } from "@/constants/routes";

import careerBg from "@/assets/images/home/contact-center-min.png";

const JobDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const job = getJobBySlug(slug);

  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  // Handle case where job is not found
  if (!job) {
    return (
      <>
        <SolutionBanner
          title="Job Not Found"
          subtitle="Careers"
          bgImage={careerBg}
        />
        <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Position Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              The job position you're looking for doesn't exist or has been removed.
            </p>
            <Link to={ROUTES.CAREERS}>
              <Button className="bg-[#02b0f0] hover:bg-[#02b0f0]/90 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Careers
              </Button>
            </Link>
          </div>
        </section>
      </>
    );
  }

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (selectedFile) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Please upload a PDF or Word document (.pdf, .doc, .docx)");
      return;
    }

    if (selectedFile.size > maxSize) {
      alert("File size must be less than 5MB");
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - replace with actual backend integration
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // TODO: Implement actual file upload to backend
    console.log("Submitting application for:", job.title);
    console.log("File:", file);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  if (isSubmitted) {
    return (
      <>
        <SolutionBanner
          title={job.title}
          subtitle="Application Submitted"
          bgImage={careerBg}
        />
        <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Application Submitted Successfully!
            </h2>
            <p className="text-gray-600 mb-8">
              Thank you for applying for the <strong>{job.title}</strong> position.
              Our HR team will review your application and get back to you soon.
            </p>
            <Link to={ROUTES.CAREERS}>
              <Button className="bg-[#02b0f0] hover:bg-[#02b0f0]/90 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Careers
              </Button>
            </Link>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <SolutionBanner
        title={job.title}
        subtitle="Career Opportunity"
        bgImage={careerBg}
      />

      <section className="py-16 md:py-24 px-4 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to={ROUTES.CAREERS}
              className="inline-flex items-center text-[#02b0f0] hover:text-[#02b0f0]/80 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all positions
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#02b0f0]/10 text-[#02b0f0] text-xs font-semibold rounded-full">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {job.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#02b0f0]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-[#02b0f0]" />
                      {job.experience}
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#02b0f0]" />
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    About the Role
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </div>

                {/* Requirements */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Requirements
                  </h2>
                  <ul className="space-y-2">
                    {job.requirements.map((req, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span className="w-2 h-2 bg-[#02b0f0] rounded-full mt-2 shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Responsibilities */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-3">
                    Responsibilities
                  </h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <span className="w-2 h-2 bg-[#02b0f0] rounded-full mt-2 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Apply for this position
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Upload your resume to apply
                </p>

                <form onSubmit={handleSubmit}>
                  {/* File Upload Area */}
                  <div
                    className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${
                      dragActive
                        ? "border-[#02b0f0] bg-[#02b0f0]/5"
                        : file
                        ? "border-green-400 bg-green-50"
                        : "border-gray-300 hover:border-[#02b0f0] hover:bg-gray-50"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />

                    {file ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#02b0f0]/10 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-[#02b0f0]" />
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium text-gray-900 truncate max-w-[140px]">
                              {file.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatFileSize(file.size)}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile();
                          }}
                          className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                        <p className="text-sm font-medium text-gray-700 mb-1">
                          Drag & drop your resume
                        </p>
                        <p className="text-xs text-gray-500 mb-2">or click to browse</p>
                        <p className="text-xs text-gray-400">
                          PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={!file || isSubmitting}
                    className="w-full mt-6 bg-[#02b0f0] hover:bg-[#02b0f0]/90 text-white py-5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  By submitting, you agree to our privacy policy
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetail;
