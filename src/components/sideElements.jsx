import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LinkedInIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";
import { SiLeetcode } from "react-icons/si";

const SideElements = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.7;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <>
      {/* Left side - Social Icons */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
            className="hidden md:flex fixed left-6 bottom-0 z-10 flex-col items-center"
          >
            <div className="flex flex-col gap-5 mb-2 ">
              <motion.a
                href="https://github.com/adhavan13"
                target="_blank"
                className="text-white rounded-md hover:transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={GithubIcon} alt="LinkedIn" className="w-7 h-7" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/adhavan10/"
                target="_blank"
                className="text-white rounded-md hover:transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={LinkedInIcon} alt="LinkedIn" className="w-7 h-7" />
              </motion.a>
              <motion.a
                href="https://leetcode.com/u/adhavankannan10/"
                target="_blank"
                className="text-black rounded-md hover:transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiLeetcode className="w-7 h-7" />
              </motion.a>
            </div>
            <motion.div className="w-0.5 h-24 bg-black opacity-70" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right side - Email */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
            className="hidden md:block fixed right-8 bottom-0"
          >
            <a href="mailto:adhavankannan@gmail.com">
              <div className="flex flex-col items-center gap-4">
                {/* Rotated Email */}
                <div
                  className="text-black text-lg Space Grotesk"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    letterSpacing: "2px",
                  }}
                >
                  adhavankannan@gmail.com
                </div>

                {/* Vertical Line */}
                <motion.div className="w-0.5 h-17 bg-black opacity-70" />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideElements;
