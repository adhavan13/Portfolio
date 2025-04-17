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


function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <motion.div
      className="flex flex-col text-black min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <main className="flex-grow">
        <div className="fixed top-0 left-0 w-12 h-full bg-white z-10">
          <div
            className="flex flex-col gap-4"
            style={{
              letterSpacing: "2px",
              color: "white",
              marginTop: "650px",
              marginLeft: "10px",
            }}
          >
            <img src={GithubIcon} alt="LinkedIn" className="w-6 h-6" />
            <img src={GithubIcon} alt="LinkedIn" className="w-6 h-6" />
            <img src={GithubIcon} alt="LinkedIn" className="w-6 h-6" />
          </div>
        </div>
        <NavBar />

        <section id="home">
          <NameSection />
        </section>
        <section>
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
        <div className="fixed top-0 right-0 w-12 h-full bg-black z-10 flex flex-col justify-center items-center">
          <div
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(360deg)",
              letterSpacing: "2px",
              color: "white",
              marginTop: "500px",
            }}
          >
            adhavankannan@gmail.com----
          </div>
        </div>
        {/* Add other sections as needed */}
      </main>
    </motion.div>
  );
}

export default HomePage;
