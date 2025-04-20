import { useState } from "react";
import { motion } from "framer-motion";
import NameSection from "../components/nameSection";
import DecryptedText from "../components/decryptedText";
import Resume from "/resume.pdf";
import Skills from "../components/skills";
import GithubIcon from "../assets/github.svg";
import WorkExperience from "../components/exprience";
import ProjectsList from "../components/products";
import OtherProjects from "../components/projects";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import SideElements from "../components/sideElements"; // Import the new component

function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <motion.div
      className="flex flex-col text-black min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="flex-grow">
        <NavBar />

        <section id="home">
          <NameSection />
        </section>
        <section id="experience" className="mt">
          <WorkExperience />
        </section>
        <section className="mt-12">
          <Skills />
        </section>
        <section>
          <ProjectsList />
        </section>
        <section>
          <OtherProjects />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </motion.div>
  );
}

export default HomePage;
