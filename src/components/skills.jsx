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
// import cImage from "../assets/c.svg";
import cppImage from "../assets/c-.svg";
import pythonImage from "../assets/python.svg";
import gitImage from "../assets/git.svg";
import nodejsImage from "../assets/nodejs.svg";
// import mongodbImage from "../assets/mongodb.svg";
import dockerImage from "../assets/docker.svg";
import SeleniumImage from "../assets/selenium.svg";
import sqlImage from "../assets/mysql.svg";
import cImage from "../assets/letter-c.svg";
import reactImage from "../assets/react.svg";

function Skills() {
  // References and animations
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
    { Icon: SiExpress, name: "Express.js", image: "/images/express.png" },
    { Icon: SiNodedotjs, name: "Node.js", image: nodejsImage },
    { Icon: SiReact, name: "React.js", image: reactImage },
    { Icon: SiMongodb, name: "MongoDB", image: "/images/mongodb.png" },
    { Icon: SiMysql, name: "MySQL", image: sqlImage },
  ];

  const servicesLibraries = [
    { Icon: SiFirebase, name: "Selenium", image: SeleniumImage },
    // { Icon: SiAws, name: "AWS", image: "/images/aws.png" },
    { Icon: SiGooglecloud, name: "Git hub", image: gitImage },
    { Icon: SiDocker, name: "Docker", image: dockerImage },
    { Icon: SiGit, name: "Git", image: "/images/git.png" },
  ];

  // Render skill item
  const renderSkillItem = (item, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{
        scale: 1.15,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center gap-2"
    >
      <motion.div
        className="flex items-center justify-center h-16"
        whileHover={{
          filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
          transition: { duration: 0.2 },
        }}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="max-h-10 max-w-10 object-contain"
          />
        ) : (
          <item.Icon className="h-10 text-gray-800" />
        )}
      </motion.div>
      <span className="text-gray-600 text-sm font-medium mt-1">
        {item.name}
      </span>
    </motion.div>
  );

  return (
    <div
      className="flex flex-col py-16 px-4 max-w-6xl mx-auto"
      ref={sectionRef}
    >
      {/* Section: Languages I speak */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-xl font-bold mb-8">
          Languages I speak
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8"
        >
          {languages.map((lang, index) => renderSkillItem(lang, index))}
        </motion.div>
      </motion.div>

      {/* Section: Frameworks & Databases */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-xl font-bold mb-8">
          Frameworks & Databases I Love
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8"
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
        className="mb-12"
      >
        <motion.h2 variants={itemVariants} className="text-xl font-bold mb-8">
          Libraries & Services I Use
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 sm:gap-8"
        >
          {servicesLibraries.map((item, index) => renderSkillItem(item, index))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
