import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import eqrevImage from "../assets/eqrev.jpg"; // Import your image here

const ProjectsList = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Eq_Rev - Sai Sakthi Enterprises",
      role: "Lead Developer",
      description:
        "A data-driven platform I built to help brands on Zepto, Blinkit, and Instamart gain deep visibility into their product performance. It offers store-level and pincode-level analytics on stock availability, listing health, and ad performance across 1000+ stores in India. I automated the entire data pipeline using Selenium and Google Cloud (Cloud Run, BigQuery, Scheduler), enabling daily insights with zero manual effort. Currently trusted by 5+ D2C brands, including Mokobara and Lifelong, to optimize revenue and campaign strategies.",
      image: eqrevImage, // Replace with your image path
      technologies: [
        "React",
        "Node.js",
        "Selenium",
        "BigQuery",
        "Google Cloud Run",
        "Cloud Scheduler",
        "Cloud Storage",
      ],
      previewLink: "https://app.eqrev.com",
    },
    {
      id: 1,
      title: "Eq_Rev - Sai Sakthi Enterprises",
      role: "Lead Developer",
      description:
        "A data-driven platform I built to help brands on Zepto, Blinkit, and Instamart gain deep visibility into their product performance. It offers store-level and pincode-level analytics on stock availability, listing health, and ad performance across 1000+ stores in India. I automated the entire data pipeline using Selenium and Google Cloud (Cloud Run, BigQuery, Scheduler), enabling daily insights with zero manual effort. Currently trusted by 5+ D2C brands, including Mokobara and Lifelong, to optimize revenue and campaign strategies.",
      image: eqrevImage, // Replace with your image path
      technologies: [
        "React",
        "Node.js",
        "Selenium",
        "BigQuery",
        "Google Cloud Run",
        "Cloud Scheduler",
        "Cloud Storage",
      ],
      previewLink: "https://app.eqrev.com",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.h1
        className="text-3xl font-heading font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Some Things I've Built
      </motion.h1>

      <div className="space-y-20 ">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const imageVariants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  return (
    <motion.div
      className="flex flex-row md:flex-row gap-8 relative border-r-4 border-zinc-200 pr-2"
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Project image */}
      <motion.div
        className="flex flex-row  items-center justify-center w-full md:w-1/2 "
        variants={imageVariants}
        style={{ width: "50%" }}
      >
        {/* Replace with actual image */}
        <img src={project.image} alt={project.title} className="w-full h-64 border-l-4 zinc-200" />
      </motion.div>

      {/* Project content */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center"
        variants={contentVariants}
        style={{ width: "50%" }}
      >
        <div className="text-gray-500 mb-1 font-mono">{project.role}</div>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

        <p className="text-gray-700 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6 font-mono text-sm text-gray-600">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 bg-gray-100 rounded">
              {tech}
            </span>
          ))}
        </div>

        <motion.a
          href={project.previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition-colors w-max"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Preview
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsList;
