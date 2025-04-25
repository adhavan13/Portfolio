import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import NameSection from "../components/nameSection";
import Skills from "../components/skills";
import WorkExperience from "../components/exprience";
import ProjectsList from "../components/products";
import OtherProjects from "../components/projects";
import Footer from "../components/footer";
import NavBar from "../components/navBar";

function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile on mount and when resized
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamic styles based on screen size
  const sideSpacerStyle = {
    width: isMobile ? "0%" : "5%",
    display: isMobile ? "none" : "block",
  };

  const mainContentStyle = {
    width: isMobile ? "100%" : "90%",
    padding: isMobile ? "0 16px" : "0",
  };

  return (
    <motion.div
      className="flex flex-col text-black min-h-screen w-full neutral-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="w-full">
        <NavBar onNavigate={scrollToSection} />
      </section>

      <div className="flex w-full">
        {/* Left spacer */}
        <div style={sideSpacerStyle} className="flex"></div>

        {/* Main content */}
        <div
          style={mainContentStyle}
          className="flex flex-col items-center justify-center overflow-hidden"
        >
          <section id="home">
            <NameSection />
          </section>
          <section id="experience" className={isMobile ? "mt-20" : "mt-28"}>
            <WorkExperience />
          </section>
          <section className="mt-12 w-full" id="skills">
            <Skills />
          </section>
          <section id="products" className="w-full">
            <ProjectsList />
          </section>
          <section id="projects" className="w-full">
            <OtherProjects />
          </section>
          <section id="contact" className="w-full">
            <Footer />
          </section>
        </div>

        {/* Right spacer */}
        <div style={sideSpacerStyle} className="flex"></div>
      </div>
    </motion.div>
  );
}

export default HomePage;
