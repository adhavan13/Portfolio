import { useState } from "react";
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

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="flex flex-col text-black min-h-screen neutral-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="flex-grow">
        <section>
          <NavBar onNavigate={scrollToSection} />
        </section>

        <section id="home">
          <NameSection />
        </section>
        <section id="experience" className="mt-28">
          <WorkExperience />
        </section>
        <section className="mt-12" id="skills">
          <Skills />
        </section>
        <section id="projects">
          <ProjectsList />
        </section>
        <section id="otherProjects">
          <OtherProjects />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </main>
    </motion.div>
  );
}

export default HomePage;
