import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export default function OtherProjects() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  
  const projects = [
    {
      title: "NITC-RISC24",
      description: "NITC-RISC24 is a 16-bit reduced instruction set processor built as a part of NIT Calicut's 'Computer Architecture' course. Written in Verilog, the processor can perform various simple functions, with a streamlined multicycle pipeline for executing arithmetic and logic instructions efficiently.",
      technologies: ["Verilog", "Icarus"],
      githubLink: "#"
    },
    {
      title: "FLIX",
      description: "Flix is a movie recommender app using the MovieLens database to provide personalized recommendations based on user preferences. It employs collaborative filtering and a correlation matrix from user ratings. Features include a recommendation engine and data visualization for insights into movie ratings, genres etc.",
      technologies: ["JavaScript", "Python", "React.js", "Node.js", "FastAPI", "SciKit", "Seaborn", "MathPlotLib"],
      githubLink: "#"
    },
    {
      title: "Movie Match",
      description: "Movie Match, winners of GDSC Bit'N'Build Kerala Hackathon, offers a vast, daily-updated movie database from 1940 to mid-2023. Powered by GPT-4-turbo, it provides personalized recommendations and detailed info pages with reviews, IMDB links, and streaming service details for a seamless experience.",
      technologies: ["JavaScript", "Python", "Node.js", "GPT-4"],
      githubLink: "#"
    },
    {
      title: "Portfolio CMS",
      description: "A content management system specifically designed for developers to create and manage their portfolios easily. Features drag-and-drop components, live preview, and GitHub integration for project showcasing.",
      technologies: ["React", "Firebase", "TypeScript", "Tailwind"],
      githubLink: "#"
    },
    {
      title: "AI Study Assistant",
      description: "An AI-powered study assistant that helps students organize notes, create flashcards, and generate practice questions based on their learning materials. Uses natural language processing to understand and respond to educational content.",
      technologies: ["Python", "TensorFlow", "Flask", "MongoDB"],
      githubLink: "#"
    }
  ];

  // Advanced scrolling behavior
  useEffect(() => {
    const container = containerRef.current;
    
    const handleWheel = (e) => {
      if (!container) return;
      
      // Calculate if we're at the start or end of horizontal scrolling
      const isAtStart = container.scrollLeft <= 0;
      const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
      
      // If we're in the middle of horizontal content, capture vertical scroll
      if (!isAtStart && !isAtEnd) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      } else if ((isAtStart && e.deltaY < 0) || (isAtEnd && e.deltaY > 0)) {
        // Allow vertical scrolling when we're at the edges
        return;
      } else {
        // Otherwise continue horizontal scrolling
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };
    
    if (scrollRef.current) {
      scrollRef.current.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className="w-full py-12" ref={scrollRef}>
      <motion.h1 
        className="text-4xl font-bold mb-12 px-6 ml-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Other Projects
      </motion.h1>
      
      <div 
        ref={containerRef}
        className="flex overflow-x-auto pb-8 px-6 hide-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex space-x-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <a 
                    href={project.githubLink} 
                    className="inline-flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition-colors"
                    aria-label="Visit GitHub repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
                
                <p className="text-gray-600 mb-4 h-48 overflow-y-auto">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span 
                        key={i} 
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + (i * 0.05) }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 p-4">
                <a 
                  href={project.githubLink} 
                  className="text-center block text-gray-700 hover:text-black font-medium"
                >
                  Visit
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}