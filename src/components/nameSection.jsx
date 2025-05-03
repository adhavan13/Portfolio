import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DecryptedText from "./decryptedText";
import LinkedInIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";
import { SiLeetcode } from "react-icons/si";
import Resume from "/resume.pdf";
import avatarImage from "../assets/avatar.svg";

function NameSection() {
  const roles = ["developer", "creator", "strategist", "Analyst"];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const typingSpeed = 150; // ms per character
    const deletingSpeed = 75; // faster deletion
    const pauseBetweenRoles = 1500; // pause when a word is fully typed

    let timeout;

    if (!isDeleting && displayText === roles[roleIndex]) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBetweenRoles);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          if (isDeleting) {
            setDisplayText(
              roles[roleIndex].substring(0, displayText.length - 1)
            );
          } else {
            setDisplayText(
              roles[roleIndex].substring(0, displayText.length + 1)
            );
          }
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <motion.div
      className="flex flex-col font-heading md:flex-row items-center justify-between w-full max-w-6xl  py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-full md:max-w-6xl space-y-12">
        <div className="flex flex-col gap-1">
          <motion.div
            className="text-lg font-semibold md:text-lg text-gray-500 font-medium"
            variants={itemVariants}
          >
            <div style={{ marginTop: "4rem" }}>
              <DecryptedText
                text="  Hi, my name is"
                animateOn="view"
                revealDirection="center"
                speed={150}
                maxIterations={10}
                className="text-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            className="text-6xl md:text-8xl font-bold text-black"
            variants={itemVariants}
          >
            <h1>
              <DecryptedText
                text="Adhavan Se V"
                animateOn="view"
                speed={150}
                maxIterations={15}
                className="font-bold"
                encryptedClassName="text-gray-400"
              />
            </h1>
          </motion.div>

          <motion.div
            className="text-4xl md:text-6xl font-semibold text-gray-500"
            variants={itemVariants}
          >
            <p className="flex items-center">
              I'm a{" "}
              <span className="text-blue-600 w-28 md:w-32 inline-block ml-2">
                {displayText}
                <span className="animate-pulse ml-1">|</span>
              </span>
            </p>
          </motion.div>

          <div>
            <motion.div
              className="text-xl font-roboto md:text-xl text-black max-w-6xl mt-2"
              variants={itemVariants}
            >
              <p>
                I’m someone who genuinely enjoys solving problems — the tougher,
                the better. I work mostly on backend systems and data pipelines,
                making sure everything runs smooth under the hood. I care about
                writing clean, solid code that actually makes a difference.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="flex flex-wrap gap-6 mt-6"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.linkedin.com/in/adhavan10/"
            className="text-white rounded-md hover:transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12" />
          </motion.a>
          <motion.a
            href="https://github.com/adhavan13"
            className="text-white rounded-md hover: transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={GithubIcon} alt="LinkedIn" className="w-12 h-12" />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/adhavankannan10/"
            className="text-black rounded-md hover:transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SiLeetcode className="w-12 h-12" />
          </motion.a>
          <motion.a
            href={Resume}
            target="_blank"
            className="p-3 font-special text-sm border border-gray-500 text-gray-800 rounded-md hover:bg-black hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RESUME
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="w-full md:w-2/5 flex justify-center mt-10 md:mt-0"
        variants={itemVariants}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* <svg viewBox="0 0 300 300" className="w-64 h-64 md:w-80 md:h-80">
          {avatarImage}
          {/* You can replace this with your own avatar SVG or an image */}
        <path
          d="M150,30 C70,30 20,100 20,200 C20,290 80,280 150,280 C220,280 280,290 280,200 C280,100 230,30 150,30 Z"
          fill="#222"
        />
        <circle cx="120" cy="150" r="15" fill="white" />
        <circle cx="180" cy="150" r="15" fill="white" />
        <path
          d="M120,200 Q150,230 180,200"
          stroke="white"
          strokeWidth="5"
          fill="none"
        />
        <path
          d="M100,100 Q150,130 200,100"
          stroke="white"
          strokeWidth="5"
          fill="none"
        />
        {/* </svg> */}
        <img
          className="w-64 h-64 md:w-80 md:h-80"
          src={avatarImage}
          alt="Avatar"
        />
      </motion.div>
    </motion.div>
  );
}

export default NameSection;
