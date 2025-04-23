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
      className="flex flex-col text-black min-h-screen w-full neutral-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* <div className="flex-grow w-full"> */}
      <section className="w-full ">
        <NavBar onNavigate={scrollToSection} />
      </section>

      <div className="flex w-full">
        <div style={{ width: "5%" }} className="flex"></div>
        <div
          style={{ width: "90%" }}
          className="flex flex-col w-[10%]  flex items-center justify-center overflow-hidden"
        >
          <section id="home">
            <NameSection />
          </section>
          <section id="experience" className="mt-28">
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
        <div style={{ width: "5%" }} className="flex"></div>
        {/* </div>   */}
      </div>
    </motion.div>
  );
}

export default HomePage;
