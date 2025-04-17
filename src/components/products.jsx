import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectsList() {
  const [selectedProject, setSelectedProject] = useState(0);
  
  const projects = [
    {
      title: "Minerva - CSED NITC",
      role: "Lead Developer",
      image: "/api/placeholder/700/400",
      description: "Led a team of 11 developers to successfully rebuild the official website of the Computer Science and Engineering Department at NIT Calicut. This comprehensive overhaul introduced a cutting-edge design and functionality, featuring a headless CMS backend integrated with an intuitive admin panel for seamless content management. The revamped website reflects a modern, professional identity for the department, prioritizing user experience, accessibility, and maintainability while ensuring dynamic and secure content updates.",
      technologies: ["JavaScript", "React.js", "Strapi", "Gsap"],
      previewLink: "#"
    },
    {
      title: "Tathva 2024",
      role: "Lead Developer",
      image: "/api/placeholder/700/400",
      description: "As the lead backend developer for Tathva 2024 (South India's largest techno-management fest), I built the backend architecture using Node.js and Express, implemented secure authentication flows, and designed a scalable database schema that handled over 5,000 concurrent users during peak registration periods. The system successfully processed 15,000+ registrations and managed 50+ events with real-time updates and notifications.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io"],
      previewLink: "#"
    },
    {
      title: "PortfolioPro",
      role: "Full Stack Developer",
      image: "/api/placeholder/700/400",
      description: "Developed a customizable portfolio builder application that allows users to create professional portfolios with minimal effort. Features include custom themes, responsive layouts, and integration with GitHub to showcase projects automatically. The application uses React for the frontend and Firebase for authentication and data storage.",
      technologies: ["React", "Firebase", "Tailwind CSS", "GitHub API"],
      previewLink: "#"
    }
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <motion.h1 
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Some Things I've Built
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-24"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="flex flex-col lg:flex-row border-r border-gray-200 rounded-lg overflow-hidden shadow-lg"
          >
            <div className="lg:w-1/2 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                variants={imageVariants}
                initial="initial"
                animate="animate"
              />
            </div>
            
            <div className="lg:w-1/2 p-8">
              <div className="mb-2">
                <p className="text-gray-600">{project.role}</p>
                <h2 className="text-2xl font-bold">{project.title}</h2>
              </div>
              
              <p className="mb-6 text-gray-800">
                {project.description}
              </p>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={project.previewLink} 
                className="inline-block px-6 py-2 border-2 border-black font-medium rounded-md hover:bg-black hover:text-white transition-colors"
              >
                Preview
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}