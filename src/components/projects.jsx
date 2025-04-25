import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Github } from "lucide-react";

export default function OtherProjects() {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const projects = [
    {
      title: "Growth Guardian",
      subtitle: "HackIt’25 Winner",
      description:
        "Led the development of a full-stack financial management platform with live market integration. Integrated 5+ tools, including a 95% accurate scam detector, smart chatbot, ML-powered stock simulator, and gamified learning modules to help users learn, practice, and make informed financial decisions confidently.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Python",
        "Flask",
        "Express.js",
      ],
      githubLink: "https://github.com/adhavan13/hackItFinTech",
      appLink: "https://growth-guardian.vercel.app/",
    },
    {
      title: "India Post AI Platform",
      subtitle: "Smart India Hackathon 2024 Finalist",
      description:
        "Built with Next.js, LightGBM, and RAG chatbot, this platform personalizes India Post’s outreach across 600K+ villages. It recommends top-3 schemes per user, automates demographic and trend analysis via ETL and Selenium, cutting manual work by 80% and boosting efficiency by 40%.",
      technologies: [
        "Next.js",
        "Python",
        "React.js",
        "Rag",
        "MongoDB",
        "PostgreSQL",
        "LightGBM",
        "Selenium",
      ],
      githubLink: "https://github.com/girish-gaikwad/PostalService",
      appLink: "https://github.com/girish-gaikwad/PostalService",
    },

    {
      title: "Coding Helper Telegram Bot",
      subtitle: " ",
      description:
        "Created an AI-powered Telegram bot to assist with coding doubts in real-time. Users can ask questions on programming concepts, syntax, or logic, and get clear, instant explanations. Designed to support learners and developers with 24/7 accessible, conversational coding help—like having a tutor in your pocket.",
      technologies: ["Python", "Telegram", "gemini-1.5-pro", "Long polling"],
      githubLink: "https://github.com/adhavan13/telegramBotMessagePython",
      appLink: "https://t.me/geekCoder_bot",
    },
  ];

  // Setup intersection observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById("projects-section");
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [controls]);

  // Calculate how many projects to show
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  // Toggle function to handle both show more and show less
  const toggleShowProjects = () => {
    setShowAll(!showAll);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      id="projects-section"
      className="w-full py-12 px-4 md:px-8 lg:px-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-bold mb-12 px-6"
        variants={titleVariants}
      >
        Other Projects
      </motion.h1>

      <div className="px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
                variants={childVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-gray-500 mt-1 font-spacegrotesk font-bold">
                        {project.subtitle || "Project subtitle"}
                      </p>
                    </div>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition-colors"
                      aria-label="Visit GitHub repository"
                    >
                      <Github size={20} />
                    </a>
                  </div>

                  <p className="text-gray-600 mb-4 h-48 overflow-y-auto mt-2">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md "
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 p-4">
                  <a
                    href={project.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center block text-gray-700 hover:text-black font-medium"
                  >
                    Visit
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* <AnimatePresence mode="wait">
          <motion.div
            key={showAll ? "show-less" : "show-more"}
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            variants={childVariants}
          >
            <button
              onClick={toggleShowProjects}
              className="px-6 py-3 bg-white border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </motion.div>
        </AnimatePresence> */}
      </div>
    </motion.div>
  );
}
