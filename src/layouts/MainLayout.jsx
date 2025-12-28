import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import Header from "@/components/common/Header";
import Footer from "../components/common/Footer";
import GetTouch from "@/pages/home/GetTouch";

import logo from "@/assets/logo.png";
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Background animated circles */}
            <motion.div
              className="absolute w-[500px] h-[500px] rounded-full border border-[#02b0f0]/20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 2], opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
            />
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full border border-[#02b0f0]/30"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 2], opacity: [0, 0.5, 0] }}
              transition={{
                duration: 2,
                ease: "easeOut",
                repeat: Infinity,
                delay: 0.5,
              }}
            />

            {/* Logo container */}
            <motion.div
              className="relative z-10 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Logo */}
              <motion.img
                src={logo}
                className="w-48 sm:w-64"
                alt="Technometrics"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />

              {/* Loading bar */}
              <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#02b0f0] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Header />
        <Outlet />
        <GetTouch />
        <Footer />
      </motion.div>
    </>
  );
};

export default MainLayout;
