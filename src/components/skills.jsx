import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiGnubash,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGooglecloud,
  SiDocker,
  SiGit,
} from "react-icons/si";
import jsImage from "../assets/java-script.svg";
import cppImage from "../assets/c-.svg";
import pythonImage from "../assets/python.svg";
import gitImage from "../assets/git.svg";
import nodejsImage from "../assets/nodejs.svg";
import mongodbImage from "../assets/mongoDb.svg";
import dockerImage from "../assets/docker.svg";
import SeleniumImage from "../assets/selenium.svg";
import sqlImage from "../assets/mysql.svg";
import cImage from "../assets/letter-c.svg";
import reactImage from "../assets/react.svg";
import expressImage from "../assets/express.svg";
import gcpImage from "../assets/gcc.svg";
import sciketImage from "../assets/sciket-learn.svg";
import bigqueryImage from "../assets/bigquery.svg";

function Skills() {
  // References and animations
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Start animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
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
        ease: "easeOut",
      },
    },
  };

  // Languages data with icons and images
  const languages = [
    { Icon: SiC, name: "C", image: cImage },
    { Icon: SiCplusplus, name: "C++", image: cppImage },
    { Icon: SiPython, name: "Python", image: pythonImage },
    { Icon: SiJavascript, name: "JavaScript", image: jsImage },
  ];

  const frameworksDatabase = [
    { Icon: SiExpress, name: "Express.js", image: expressImage },
    { Icon: SiNodedotjs, name: "Node.js", image: nodejsImage },
    { Icon: SiReact, name: "React.js", image: reactImage },
    { Icon: SiMongodb, name: "MongoDB", image: mongodbImage },
    { Icon: SiMysql, name: "MySQL", image: sqlImage },
    { Icon: SiMysql, name: "BigQuery", image: bigqueryImage },
  ];

  const servicesLibraries = [
    { Icon: SiFirebase, name: "Selenium", image: SeleniumImage },
    { Icon: SiGit, name: "Sciket-learn", image: sciketImage },
    { Icon: SiDocker, name: "GCP", image: gcpImage },
    { Icon: SiDocker, name: "Docker", image: dockerImage },
    { Icon: SiGooglecloud, name: "Git hub", image: gitImage },
  ];

  // Render skill item
  const renderSkillItem = (item, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-1 sm:gap-2"
    >
      <motion.div
        className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16"
        whileHover={{
          filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
          transition: { duration: 0.2 },
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          className="max-h-8 sm:max-h-12 w-16 sm:w-24 object-contain"
        />
      </motion.div>
      <span className="text-gray-600 text-xs sm:text-sm font-bold mt-1">
        {item.name}
      </span>
    </motion.div>
  );

  return (
    <div
      className="flex flex-col max-w-6xl mx-auto px-4 sm:px-6"
      ref={sectionRef}
    >
      {/* Section: Languages I speak */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mb-8 sm:mb-12"
      >
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-3xl md:text-3xl font-heading font-bold mb-4 sm:mb-8 sm:text-left"
        >
          Languages I speak
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap  sm:justify-start gap-4 sm:gap-6 md:gap-16 pl-0 sm:pl-4 md:pl-12"
        >
          {languages.map((lang, index) => renderSkillItem(lang, index))}
        </motion.div>
      </motion.div>

      {/* Section: Frameworks & Databases */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mb-8 sm:mb-12"
      >
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-3xl md:text-3xl font-heading font-bold mb-4 sm:mb-8  sm:text-left"
        >
          Frameworks & Databases I Love
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap  sm:justify-start gap-4 sm:gap-6 md:gap-16 pl-0 sm:pl-4 md:pl-12"
        >
          {frameworksDatabase.map((item, index) =>
            renderSkillItem(item, index)
          )}
        </motion.div>
      </motion.div>

      {/* Section: Libraries & Services */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mb-8 sm:mb-12"
      >
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-3xl md:text-3xl font-heading font-bold mb-4 sm:mb-8  sm:text-left"
        >
          Libraries & Services I Use
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap  sm:justify-start gap-4 sm:gap-6 md:gap-16 pl-0 sm:pl-4 md:pl-12"
        >
          {servicesLibraries.map((item, index) => renderSkillItem(item, index))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
