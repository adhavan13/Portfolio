import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Custom DecryptedText component (since you're using it in your code)
const DecryptedText = ({ text, animateOn, speed, className }) => {
  const [decrypted, setDecrypted] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  const decrypt = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      let iteration = 0;
      const interval = setInterval(() => {
        setDecrypted(prev => 
          prev.split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
          setIsAnimating(false);
        }
        
        iteration += 1/3;
      }, speed || 30);
    }
  };
  
  useEffect(() => {
    // Initial animation on mount
    decrypt();
  }, []);
  
  return (
    <span 
      className={className} 
      onMouseEnter={animateOn === 'hover' ? decrypt : undefined}
    >
      {decrypted}
    </span>
  );
};

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("experience");
  
  // Navigation variants for animation
  const navVariants = {
    hidden: { 
      opacity: 0,
      y: -20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  const logoVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.nav 
      className="mt-7 z-10 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-full mx-8 px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            variants={logoVariants}
          >
            <DecryptedText
              text="Adhavan"
              animateOn="hover"
              speed={40}
              className="font-bold"
            />
          </motion.div>

          <div className="hidden md:flex space-x-6">
            {["Experience", "Skills", "Projects", "Contact"].map((item) => (
              <motion.button
                key={item}
                className={`transition-colors hover:bg-gray-200 px-4 py-2 rounded-md ${
                  activeSection === item.toLowerCase() ? "text-blue-600" : ""
                }`}
                onClick={() => setActiveSection(item.toLowerCase())}
                whileTap={{ y: 0 }}
                variants={itemVariants}
              >
                <span className="text-sm">{item}</span>
              </motion.button>
            ))}

            <motion.a
              href="#contact"
              className="px-6 py-2 border border-gray-800 rounded-md hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}