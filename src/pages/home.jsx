import { useState } from "react";
import { motion } from "framer-motion";
import NameSection from "../components/nameSection";
import DecryptedText from "../components/decryptedText";

function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <motion.div
      className="flex flex-col text-black min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="sticky top-2 mt-7 z-10 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <div className="max-full mx-8 px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
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
                >
                 <span className="text-sm">{item}</span> 
                </motion.button>
              ))}

              <motion.a
                href="#resume"
                className="px-6 py-2 border border-gray-800 rounded-md hover:bg-black hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <section id="home">
          <NameSection />
        </section>

        {/* Add other sections as needed */}
      </main>
    </motion.div>
  );
}

export default HomePage;
