import React from "react";
import { motion } from "motion/react";
import { useRouteError, Link } from "react-router";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  const error = useRouteError();
  const is404 = error?.status === 404;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-8 relative overflow-hidden">
      {/* Animated background accents */}
      <motion.div
        className="absolute top-1/4 -right-32 w-96 h-96 bg-[#02b0f0]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -left-32 w-80 h-80 bg-[#02b0f0]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center">
        {/* Error Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mb-8 inline-block"
        >
          {is404 ? (
            <div className="relative">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[150px] sm:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#02b0f0] to-[#02b0f0]/20"
              >
                404
              </motion.span>
            </div>
          ) : (
            <div className="p-6 bg-red-500/10 rounded-full">
              <AlertTriangle className="w-20 h-20 sm:w-28 sm:h-28 text-red-500" />
            </div>
          )}
        </motion.div>

        {/* Error Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
        >
          {is404 ? "Page Not Found" : "Oops! Something Went Wrong"}
        </motion.h1>

        {/* Error Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mb-8"
        >
          {is404
            ? "The page you're looking for doesn't exist or has been moved."
            : "We encountered an unexpected error. Please try again later."}
        </motion.p>

        {/* Error Details (for non-404 errors) */}
        {!is404 && error?.message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 p-4 bg-gray-800/50 rounded-lg max-w-md mx-auto"
          >
            <p className="text-sm text-gray-500 font-mono">{error.message}</p>
          </motion.div>
        )}

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="px-6 py-5 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          <Link to="/">
            <Button className="px-6 py-5 bg-[#02b0f0] hover:bg-[#02b0f0]/90 text-white transition-all hover:scale-105 cursor-pointer">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-[#02b0f0]/50" />
          <div className="w-2 h-2 rounded-full bg-[#02b0f0]/30" />
          <div className="w-2 h-2 rounded-full bg-[#02b0f0]/20" />
        </motion.div>
      </div>
    </div>
  );
};

export default ErrorPage;
