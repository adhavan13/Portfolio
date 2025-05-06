import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectDetailPage({ project, onBackClick }) {
  const Navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample project data structure if no project is provided as prop
  const defaultProject = {
    title: "E-Commerce Platform",
    description:
      "A fully responsive e-commerce platform built with React.js and Node.js. The application features user authentication, product catalog, shopping cart functionality, and integrated payment processing.",
    longDescription:
      "This e-commerce platform was developed to provide a seamless shopping experience across all devices. The front-end was built using React.js, with Redux for state management, and styled using Tailwind CSS. The back-end was developed using Node.js and Express, with MongoDB as the database. The application includes a robust user authentication system, product search functionality, filter options, and a fully integrated payment processing system using Stripe API. The platform also features an admin dashboard for managing products, orders, and customer data.",
    challenges:
      "One of the main challenges was implementing a real-time inventory tracking system that would update across all active user sessions. This was solved by implementing Socket.io for real-time communication between the client and server. Another challenge was optimizing the performance of the application when dealing with large product catalogs. This was addressed by implementing pagination, lazy loading, and image optimization techniques.",
    timeline: "3 months (June 2024 - August 2024)",
    role: "Full Stack Developer",
    screenshots: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "Stripe API",
      "Socket.io",
      "JWT Authentication",
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filter capabilities",
      "Shopping cart functionality",
      "Secure payment processing",
      "User profile management",
      "Order tracking",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
    ],
    github: "https://github.com/username/project",
    liveDemo: "", // Empty string indicates no live demo is available
  };

  // Use provided project or fallback to default
  const projectData = project || defaultProject;

  // Function to navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projectData.screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projectData.screenshots.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll through images
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle back button click
  const handleBackClick = () => {
    if (onBackClick && typeof onBackClick === "function") {
      onBackClick();
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-neutral-50 text-neutral-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header section with back button */}
      <div className="bg-neutral-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to projects</span>
          </button>
          <motion.h1
            className="text-4xl font-bold mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {projectData.title}
          </motion.h1>
          <div className="flex gap-4 mt-4">
            {projectData.github && (
              <motion.a
                href={projectData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Github size={18} />
                <span>GitHub</span>
              </motion.a>
            )}
            {projectData.liveDemo && (
              <motion.a
                href={projectData.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 px-4 py-2 rounded transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <ExternalLink size={18} />
                <span>Visit Site</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Screenshot carousel */}
        <motion.div
          className="relative overflow-hidden rounded-lg shadow-lg mb-12 bg-neutral-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="relative aspect-video">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={projectData.screenshots[currentImageIndex]}
                alt={`${projectData.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-neutral-800/70 hover:bg-neutral-900/70 text-white rounded-full p-2 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-neutral-800/70 hover:bg-neutral-900/70 text-white rounded-full p-2 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Pagination dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {projectData.screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex
                      ? "bg-white"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Project Information */}
          <div className="lg:col-span-2">
            <motion.section
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4 border-b border-neutral-300 pb-2">
                Project Overview
              </h2>
              <p className="text-lg mb-4">{projectData.description}</p>
              <p className="text-neutral-700">{projectData.longDescription}</p>
            </motion.section>

            <motion.section
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 border-b border-neutral-300 pb-2">
                Challenges & Solutions
              </h2>
              <p className="text-neutral-700">{projectData.challenges}</p>
            </motion.section>

            <motion.section
              className="mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4 border-b border-neutral-300 pb-2">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {projectData.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-2 text-neutral-700"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="mt-1 min-w-4 h-4 rounded-full bg-neutral-800" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Right column - Tech Stack and Details */}
          <div>
            <motion.section
              className="mb-8 bg-neutral-100 p-6 rounded-lg shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-xl font-bold mb-4 border-b border-neutral-300 pb-2">
                Project Details
              </h2>

              <div className="mb-4">
                <h3 className="font-semibold text-neutral-600">Timeline</h3>
                <p>{projectData.timeline}</p>
              </div>

              <div className="mb-4">
                <h3 className="font-semibold text-neutral-600">Role</h3>
                <p>{projectData.role}</p>
              </div>
            </motion.section>

            <motion.section
              className="bg-neutral-100 p-6 rounded-lg shadow-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-xl font-bold mb-4 border-b border-neutral-300 pb-2">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {projectData.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="bg-neutral-200 px-3 py-1 rounded-full text-sm text-neutral-800"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: "#e5e5e5" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
