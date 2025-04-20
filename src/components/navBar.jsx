import { useState } from "react";
import DecryptedText from "./decryptedText";
import { motion } from "framer-motion";

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  
  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <motion.nav 
      className="mt-7 neutral-100 bg-opacity-90 backdrop-filter backdrop-blur-lg"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="max-full mx-8 px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-2xl font-bold ml-4"
            whileHover={{ scale: 1.05 }}
            variants={itemVariants}
          >
            <DecryptedText
              text="Adhavan"
              animateOn="hover"
              speed={40}
              className="font-bold"
            />
          </motion.div>

          <div className="hidden md:flex space-x-6 text-gray-600">
            {["Experience", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.button
                key={item}
                className={`font-special  transition-colors hover:bg-gray-200 px-2 py-2 rounded-md ${
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
              // href={Resume}
              // target="_blank"
              className="px-6 py-2 border border-gray-800 font-special rounded-md hover:bg-black hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Resume
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;